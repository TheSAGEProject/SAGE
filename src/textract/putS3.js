
const { S3Client, PutObjectCommand} = require("@aws-sdk/client-s3");
const {FetchHttpHandler} = require("@smithy/fetch-http-handler");
const REGION = "us-west-2";
// const {fromEnv} = require("@aws-sdk/credential-providers"); // Import the thing

// Established pre-made bucket
var bucketName = "transcript-bucket-4-2-2024";

var creds =
{
    accessKeyId: KEYID,
    secretAccessKey: KEY,
};

// Make a name for an object to be uploaded

// var keyname = ".pdf";


async function putS3(f)
{
    const s3client = new S3Client(
    {
        region: REGION,
        credentials: creds,
        requestHandler: new FetchHttpHandler({keepAlive: false}),
    });
    var putParams = 
    {
        Bucket: bucketName,
        Key: f.name,
        File: f,
        Body: f,
        contentType: "application/pdf",
    };
    const data = s3client.send(new PutObjectCommand(putParams));
    return data;
};

export default putS3;
