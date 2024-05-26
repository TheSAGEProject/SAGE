
const {S3Client, PutObjectCommand, DeleteObjectCommand} = require("@aws-sdk/client-s3");
const {TextractClient, StartDocumentTextDetectionCommand, GetDocumentTextDetectionCommand} = require("@aws-sdk/client-textract");
const {SNSClient} = require("@aws-sdk/client-sns");
const {SQSClient, GetQueueAttributesCommand, GetQueueUrlCommand, ReceiveMessageCommand, DeleteMessageCommand} = require("@aws-sdk/client-sqs");
const {DynamoDBClient} = require("@aws-sdk/client-dynamodb");
const {PutCommand, DynamoDBDocumentClient} = require("@aws-sdk/lib-dynamodb");


const REGION = "us-west-2"; // Oregon
var creds =
{
    accessKeyId: KEYID,
    secretAccessKey: KEY,
};
const inputBucket = "transcript-bucket-4-2-2024"; // Bucket that Textract is getting transcript from


const documentName = "transcript.4-7-24.pdf";
// const inputDocument = "Syed_Mohammad_Abis_Naqvi_Transcript.pdf";
// const inputDocument = "adrian_transcript2023.pdf";

// const iamRoleArn = "arn:aws:iam::590183698710:role/textract_sns_permission"; // ARN of Role with permissions
// const snsArn = "arn:aws:sns:us-west-2:590183698710:AmazonTextractTopic"; // ARN of topic to send messages to
// const sqsQueueUrl = "https://sqs.us-west-2.amazonaws.com/590183698710/AmazonTextractQueue";

const iamRoleArn = "arn:aws:iam::637423479411:role/textract_sns_permission"; 
const snsArn = "arn:aws:sns:us-west-2:637423479411:AmazonTextractTopic";
const sqsQueueUrl = "https://sqs.us-west-2.amazonaws.com/637423479411/AmazonTextractQueue";


const textractClient = new TextractClient({region: REGION, credentials: creds});
const sqsClient = new SQSClient({region: REGION, credentials: creds});



/**
 * Two options currently:
 * Can split startDetection and makeJSON/putDynamo into separate functions (where startDetection 
 * doesn't call the latter, in which case startDetection will return some kind of "success" value,
 * probably just a boolean. Call the makeJSON/putDynamo if startDetection yields "success". Doing
 * it this way means that you have to pass the unique ID into either JSON call or Dynamo call)
 * 
 * Otherwise, you pass the unique ID into startDetection
 */

/**
 * 
 * @param {string} inputDocument - The name of the document being read (this document must be inside
 * of the s3 bucket)
 * @param {string} uuid - This is the unique ID that will be used to identify the student within the
 * database. This should be the ID assigned by Auth0.
 */
async function startDetection(inputDocument, uuid)
{
    const detectionStartInput = 
    {
        DocumentLocation:{ S3Object:
        {
            Bucket: inputBucket, Name: inputDocument, 
        }},
        NotificationChannel:
        {
            RoleArn: iamRoleArn, SNSTopicArn: snsArn,
        }
    }
    var jobFound = false;
    var response = await textractClient.send(new StartDocumentTextDetectionCommand(detectionStartInput));

    console.log("Start Job Id: " + response.JobId + "\n");
    while (jobFound == false)
    {
        var sqsReceivedResponse = await sqsClient.send(new ReceiveMessageCommand({QueueUrl:sqsQueueUrl, 
            MaxNumberOfMessages:'ALL', MaxNumberOfMessages:10}));
        if (sqsReceivedResponse)
        {
            var responseString = JSON.stringify(sqsReceivedResponse);
            if (!responseString.includes('Body'))
            {
                await new Promise(resolve => setTimeout(resolve, 5000));
                continue
            }
        }
        // var message = sqsReceivedResponse.Messages[0];
        for (var message of sqsReceivedResponse.Messages)
        {
            console.log("Received Job ID:");
            var notification = JSON.parse(message.Body);
            var rekMessage = JSON.parse(notification.Message);
            console.log(rekMessage.JobId + "\n");
            if (String(rekMessage.JobId).includes(String(response.JobId)))
            {
                console.log("Matching Job Found");
                jobFound = true;
            
                // You only want to run the data processing code if the job processing is succesful
                if (String(rekMessage.Status).includes(String("SUCCEEDED")))
                {
                    var succeeded = true;
                    console.log("Job processing succeeded.");
                    var sqsDeleteMessage = await sqsClient.send(new DeleteMessageCommand({QueueUrl: sqsQueueUrl, ReceiptHandle:message.ReceiptHandle}));
                    
                    var textArray = await getResults(rekMessage.JobId); // = wordArray 
                    var tAsJ = makeJSON(textArray);
                    putDynamo(tAsJ, uuid);
                }
                // else code for this is needed next. What happens when the status isn't SUCCEEDED?
            }
            else
            {
                console.log("Did not find matching Job ID");
                var sqsDeleteMessage = await sqsClient.send(new DeleteMessageCommand({QueueUrl: sqsQueueUrl, ReceiptHandle:message.ReceiptHandle}));
            }
        } 
    }
};


/**
 * @param {int} JobID - The JobID returned from StartDocumentTextDetection, lets GetDocumentTextDetection get the results from the correct job
 * @returns An array of strings, each of which are a word in the document (the text element of each "WORD" block)
 */
const getResults = async (JobID) =>
{
    var paginationToken = null;
    var finished = false;
    var wordArray = [];

    while (finished == false)
    {
        var response = null;
        if (paginationToken == null)
        {
            response = textractClient.send(new GetDocumentTextDetectionCommand({JobId: JobID}));
        }
        else
        {
            response = textractClient.send(new GetDocumentTextDetectionCommand({JobId:JobID, NextToken:paginationToken}))
        }
        
        await new Promise(resolve => setTimeout(resolve, 5000));
        // console.log(response); -- Prints out the json with all the info about the document
        var blockArray = (await response).Blocks;
        for (let i = 0; i < blockArray.length; i++)
        {
            if (blockArray[i].BlockType == "WORD") // Could replace WORD with LINE to get lines instead
            {
                wordArray.push(blockArray[i].Text);
            }
        }

        if ((await response).NextToken != null)
        {
            paginationToken = (await response).NextToken;
        }
        else
        {
            console.log("Reached Ending");
            finished = true;
        }
    }
    // All document data has been read, and stored in "wordArray"
    return (wordArray);
}

/**
 * 4/16/24 - Current uses console.logs for all outputs, so no return as of yet. (Information is succesfully put into Dynamo though)
 * @param {JSON} transcriptAsJson - A JSON representation of a transcript, with id, name, cumGPA, and semesters fields
 * @param {List} transcriptAsJson.semesters - A list of semesters, each of which contain a year, season, and string list of courses
 */
const putDynamo = async (transcriptAsJson, UniqueID) =>
{
    var tj = transcriptAsJson;

    console.log("Data being uploaded: ");
    const dbPutParams = {
        TableName: "Students",
        Item: {
            Auth_ID: UniqueID,
            UtdID: tj.id,
            Name: tj.name,
            GPA: tj.cumGPA,
            Semesters: tj.semesters,
            Major: "Computer Science",
        },
    }
    console.log(dbPutParams);

    const dynamoClient = new DynamoDBClient({region: REGION, credentials: creds});
    const docClient = DynamoDBDocumentClient.from(dynamoClient);


    console.log("Table Upload Status: ");
    const command = await docClient.send(new PutCommand(dbPutParams));
    console.log(command);
}

/**
 * 4/16/24 - This function will ONLY WORK when passed a valid UTD Transcript. ANY OTHER DOCUMENT will crash.
 * @param {Array} words - An array of strings representing each word in a UTD transcript.
 * @return A JSON representation of the transcript, with elements representing the name, id, cumGPA, 
 * and a list of semesters which in turn has elements representing the year, season, and a list of
 * courses.
 */
function makeJSON(words) // Returns TJ
{
    var TJ =
    {
        name: null,
        id: null,
        cumGPA: 0,
        semesters: [],
    }

    // Format for each "semester" in "transcriptAsJson"
    // var sem = 
    // {
    //     year: "",
    //     season: "",
    //     course: [],
    // }

    var store = "";
    var keywords = ["Fall", "Spring", "Summer", "Winter"]; // Seasons that semesters can be taken
    var courseCodes = ["ACCT", "ACTS", "AHST", 'AHTC', 'AMS', 'ANGM', 'ARAB', 'ARHM', 'ARTS', 'ATCM', 'BA', 'BBSU', 'BCOM', 'BIOL', 'BIS', 'BLAW', 'BMEN', 'BPS', 'CE', 'CGS', 'CHEM', 'CHIN', 'CLDP', 'COMM', 'CRIM', 'CRWT', 'CS', 'DANC', 'ECON', 'ECS', 'ECSC', 'ED', 'EE', 'ENGR', 'ENGY', 'ENTP' ,'ENVR' ,'EPCS', 'EPPS', 'FILM', 'FIN', 'FREN' ,'GEOG', 'GEOS', 'GERM' ,'GISC', 'GOVT', 'GST' ,'HIND', 'HIST', 'HLTH', 'HMGT', 'HONS', 'HUMA', 'IMS', 'IPEC', 'ISAE', 'ISAH', 'ISEC', 'ISIS', 'ISNS', 'ITSS', 'JAPN', 'KORE', 'LANG', 'LATS', 'LIT', 'MATH', 'MECH', 'MECO', 'MKT', 'MSEN', 'MUSI', 'NATS', 'NSC', 'OBHR', 'OPRE', 'PA', 'PHIL', 'PHIN', 'PHYS', 'PORT', 'PPOL', 'PSCI', 'PSY', 'REAL', 'RELS', 'RHET', 'RMIS', 'SE', 'SGNL', 'SOC', 'SPAN', 'SPAU', 'STAT', 'THEA', 'UNIV','URDU', 'VIET', 'VPAS'];
    var noTransfer = true, noTest = true;
    for (let i = 0; i < words.length; i++)
    {        
        // Getting Name and ID
        if (TJ.name == null && words[i] == "Name:")
        {
            i++;
            while (words[i] != "Student")
            {
                store += words[i] + " ";
                i++;
            }
            TJ.name = store.substring(0, store.length - 1); // - 1 to cut out the last space
            // Now, word == Student

            i += 2; // This is the index of the Student Id
            TJ.id = words[i];
            store = "";
            continue;
        }
        if (noTransfer && words[i] == "Transfer") // Getting transfer credits
        {
            noTransfer = false; // Marks transfer credits as having been reached

            var sem = // Initialize sem JSON (this will store the data found for a semester)
            {
                year: "",
                season: "",
                courses: [],
            }
            i++;    // Might as well
            while (words[i] != "Test" && words[i] != "History")
            {
                /** All of the semester processing has to be handled within the if
                 * Mainly because the outside while loop exists so that you can safely
                 * look for semesters before reaching next type of credits */   
                if (keywords.includes(words[i])) // Season found (semester found)
                {
                    // Get the season and year of the semester (Ex: 2023 Fall)
                    sem.season = words[i];
                    sem.year = words[i - 1];

                    // Get all the courses from that semester
                    while (words[i] != "Points")
                    {
                        i++;
                    }
                    /** i is now the index of Points, which is the last consistent word before 
                     * the courses begin */
                    var courseName = ""; // Initialize courseName to store/concatenate name of courses
                    i++; // Now points at first coursename
                    
                    // When you write the while loop, you basically just have to make sure that
                    // each time it ends on the index that SHOULD be the next course name (as in CS)
                    // When that course name is "Course" instead (Course Trans GPA) you're done.
                    while (words[i] != "Course")
                    {
                        courseName = words[i] + " " + words[++i]; // CS + 1436
                        i++;
                        while (isNaN(words[i])) // While word isn't a number
                        {
                            i++;
                        }
                        // Now words[i] is a number, the attempted number.
                        if (parseFloat(words[i]) == parseFloat(words[++i])) // Second term is earned credits
                        {
                            sem.courses.push(courseName);
                        }
                        i += 3;
                    }
                    TJ.semesters.push(sem);
                    
                    sem = // Clear out sem
                    {
                        year: "",
                        season: "",
                        courses: [],
                    }
                }
                i++;
            }
        }
        if (noTest && words[i] == "Test") // Getting test credits
        {
            noTransfer = false; // If transfer exists, it always comes before test credits
            noTest = false; // Marks test credits as having been reached 
            var sem = // Initialize sem JSON (this will store the data found for a semester)
            {
                year: "",
                season: "",
                courses: [],
            }
            i++;
            while (words[i] != "History")
            {
                if (keywords.includes(words[i]))    // Season / Semester found
                {
                    sem.season = words[i];
                    sem.year = words[i-1];
                    while (words[i] != "Points")
                    {
                        i++;
                    }
                    // Words[i] == "Points"
                    courseName = "";
                    i++;
                    while (words[i] != "Test")
                    {
                        courseName = words[i] + " " + words[++i]; // CS + 1436
                        i++;
                        while (isNaN(words[i]))
                        {
                            i++;
                        }
                        // Now words[i] is a number, the attempted number.
                        if (parseFloat(words[i]) == parseFloat(words[++i])) // Second term is earned credits
                        {
                            sem.courses.push(courseName);
                        }
                        i += 3; // Now words[i] should either equal the start of the next course name, or "Test"
                    }
                    TJ.semesters.push(sem);
                    sem =
                    {
                        year: "",
                        season: "",
                        courses: [],
                    }
                }
                i++;
            }
        }
        if (words[i] == "History")
        {
            i++; 
            /**
             * The area between "Academic Program History" and "Beginning of Undergraduate Record"
             * is the area that contains the major, so this section is where you parse 
             * for the major.
             */
        }
        if (words[i] == "Beginning") // Indicates reaching "Beginning of Undergraduate Record"
        {
            noTransfer = false; // If transfer exists, it always comes before undergrad record
            noTest = false; // If test exists, it always comes before undergrad record
            i += 4;
            while (words[i] != "Undergraduate")
            {
                var courseName = "";
                var sem = // Initialize sem JSON (this will store the data found for a semester)
                {
                    year: "",
                    season: "",
                    courses: [],
                }
                if (keywords.includes(words[i])) // Semester Found
                {
                    sem.season = words[i];
                    sem.year = words[i - 1];
                    i++;
                    while (words[i] != "Points")
                    {
                        i++;
                    }
                    // words[i] == "Points"
                    while (words[i] != "Term") // Looking until the end of the course list in the semester
                    {
                        if (words[i].length <= 4) // Only checking words that could be the course code
                        {
                            /**
                             * Just keep looking for course keywords
                             * Stop when you hit term (end of semester)
                             * ^ This should also be the end of the outer if statement
                             */
                            if (courseCodes.includes(words[i])) // Keep looking for course codes
                            {
                                courseName = words[i] + " " + words[++i];
                                i++;
                                while (isNaN(words[i]))
                                {
                                    i++;
                                }
                                // Now words[i] is a number, the attempted number.
                                if (parseFloat(words[i]) == parseFloat(words[++i])) // Second term is earned credits
                                {
                                    sem.courses.push(courseName);
                                }
                                else if (isNaN(words[i+2]))
                                /**
                                 * This should typically point at the "Points" field, but if it is the last semester, it will 
                                 * actually point one after the Points field (because there is no "Grades" field entry for the
                                 * last/current semester)
                                 */
                                {
                                    sem.courses.push(courseName);
                                }
                            }
                        }
                        i++;
                    }
                    TJ.semesters.push(sem);
                }
                i++;
            }
            while (words[i] != "Cum")
            {
                i++;
            }
            // Words[i] == "Cum"
            TJ.cumGPA = parseFloat(words[i + 2]);
        }
    }
    return TJ;
}

export default startDetection;