![1_iGdFJTHMIG79N2HChWaooQ](https://github.com/acm-projects/Advisabot/assets/98787282/4cf90921-a07d-4933-b549-ec732a79b249)
# <h1 align="center">Advisabot</h1>

<p align="center">
Have you ever asked your advisor a question only to wait weeks for a response? Many times, advisors get flooded with questions that have simple answers or problems that are easy to resolve. Advisabot is an advisor chatbot that can answer your questions quickly and efficiently, so you don’t have to worry about it. On top of this, Advisabot can view your profile to help you make decisions about future classes and even generate personalized degree plans. Take the stress out of the logistics and just ask Advisabot for help with your inquiries and classes!
</p>

## MVP (Minimum Viable Product)

* Create and train a chatbot that can answer FAQs listed on the ECS Advising Website using Amazon Lex and Amazon Kendra
* Create an algorithm that can generate a degree plan based on major, credit hours, classes taken
* Import Transcript in and use OCR/Parser to get classes, major, GPA, credit hours automatically
* Implement User Authentication and adapt for a multitude of majors
* Advisor Side Interface(includes appointments and priority based assistance)

## Stretch Goals

* Make the bot multilingual to remove language barriers
* Expand the scope from just advising to everything UTD-related
* Add the ability to connect to other students that would be able to help when the bot does not have an answer to a question
* Utilize Nebula API and or look at things like UTD Grades Data and RMP Data(Could take a look at sk.edge architecture)
* Let users manually add completed credits to the degree plan (so that it will generate future classes assuming that credit is already successfully taken)
* v1.0 at Presentation Night

## Milestones

1. Assign roles - Who will work on frontend & backend?
2. Set up development environments
   - IDE & Necessary Plugins
   - Frameworks
   - Git
3. Learn about the stack
   - Youtube tutorials
   - Create demo applications
   - Guides and articles about the languages & technologies
4. Frontend
   - Brainstorm and create wireframes for the UI/UX
   - Create a prototype for the final website design or app pages
   - Develop the pages and continuously work with the backend to ensure each component is integrated:
     - Chatbot UI
     - Degree Plan Generation page
5. Backend
   - Design the backend workflow
     - Determine which APIs will be used
     - Outline the cloud infrastructure (databases, storage, etc.)
   - Build each backend component
     - Create a database to store important information
     - User authentication API
     - Chatbot
     - Degree Plan API
     - UTD Grades/RMP for Teachers
6. Final integration of all features to connect and test
7. Prepare for the presentation

## Tech Stack
* Wireframing: Figma
* IDE: VSC
* Frontend: React Or React Native with Expo
  * React is an industry applicable library utilized for frontend with web applications.
  * React Native is a cross compatible framework that paired with expo allows you to bring your apps to life while in development phases
* Backend: Amazon Kendra and Lex, DynamoDB/S3 Or Firebase/Firestore, Amazon Textract or Microsoft Azure Computer Vision OR Google Cloud Vision API.
  * Kendra and Lex are for training and natural language processing
  * DynamoDB and S3 continue with the fully AWS approach however Firebase/Firestore work great as needed
  * Amazon Textract/Azure CV/Google Cloud Vision for OCR of Transcripts

## Software to Install
  - [Visual Studio Code](https://code.visualstudio.com/)
  - [Figma](https://www.figma.com/downloads/)
  - [React](https://react.dev/)
  - [React Native](https://reactnative.dev/docs/environment-setup)
  - [Expo](https://docs.expo.dev/get-started/installation/)
  - [Firebase](https://firebase.google.com/docs/web/setup)
  - [DynamoDB](https://aws.amazon.com/dynamodb/)
  - [Amazon Kendra](https://aws.amazon.com/kendra/)
  - [Amazon Lex](https://aws.amazon.com/lex/)
  - [Amazon Textract](https://aws.amazon.com/textract/)
  - [Node](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)
  - [Git](https://git-scm.com/downloads)

## Tutorials and Resources  
  **General**
  - [Success in ACM Projects](https://docs.google.com/document/d/18Zi3DrKG5e6g5Bojr8iqxIu6VIGl86YBSFlsnJnlM88/edit#heading=h.ky82xv3vtbpi)
  - [API Crash Course w/ timestamps](https://www.youtube.com/watch?v=GZvSYJDk-us)
  - [GitHub Cheat Sheet #1](https://education.github.com/git-cheat-sheet-education.pdf)
  - [GitHub Cheat Sheet #2](https://drive.google.com/file/d/1OddwoSvNJ3dQuEBw3RERieMXmOicif9_/view)
  
  **Front-end**
  - [Introduction to Wireframing in Figma](https://www.youtube.com/watch?v=6t_dYhXyYjI)
  - [React Crash Course (playlist!)](https://www.youtube.com/watch?v=w7ejDZ8SWv8)
  - [27 Best UI/UX Practices](https://729solutions.com/ux-ui-best-practices/)
  
  **Back-end**
  - [Node.js Crash Course](https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU)
  - [Kendra and React](https://docs.aws.amazon.com/kendra/latest/dg/deploying.html)
  - [Lex and Kendra](https://aws.amazon.com/blogs/machine-learning/integrate-amazon-kendra-and-amazon-lex-using-a-search-intent/)
  - [DynamoDB and React](https://yentln.medium.com/connect-your-app-to-amazon-dynamodb-d062a0cec468)
  - [Textract and React](https://mkayfour.medium.com/using-aws-textract-with-reactjs-6ca1e1bb478a)
  - [Expo & Firebase](https://docs.expo.dev/guides/using-firebase/)
  - [Kendra and Lex](https://www.youtube.com/watch?v=PFauv-8lG5E)

## Git Commands

| Command                       | What it does                        |
| ----------------------------- | ----------------------------------- |
| git branch                    | lists all the branches              |
| git branch "branch name"      | makes a new branch                  |
| git checkout "branch name"    | switches to speicified branch       |
| git checkout -b "branch name" | combines the previous 2 commands    |
| git add .                     | finds all changed files             |
| git commit -m "Testing123"    | commit with a message               |
| git push origin "branch"      | push to branch                      |
| git pull origin "branch"      | pull updates from a specific branch |
  
  ## Meet the Team

 * Frontend
   * Shraddha Subash
   * Maruthi Eranki

* Backend
  * Ethan Varghese
  * Ram Gudur
      
* Project Manager: Abis Naqvi
  
* Industry Mentor: Suraj Khosla
