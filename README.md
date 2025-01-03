![logo](https://user-images.githubusercontent.com/46502423/165007987-49309cf3-4954-4717-8229-2822424df824.png)


<h1 align="center">Hi 👋, I'm Tyler Wiggins</h1>
<h3 align="center">I have a passion for full stack development and I am always thriving to learn more programming languages and frameworks.</h3>

![iphone-with-profile](https://user-images.githubusercontent.com/46502423/165001009-952096f0-281e-4fa0-951f-e666bc0f735a.jpg)

<h3 align="left">Project Description:</h3><br>
Developing Famazone Social had many challenges. Integrating Expo with hardware/software components caused compatibility issues with older devices. Extensive troubleshooting and research were needed to fix these.
<br>
<br>
Implementing Redux for performance optimization was complex and led to unexpected bugs. I researched best practices and refactored the code for efficiency.
<br>
<br>
Ensuring user data security with Firebase required fine-tuning Firestore rules and authentication mechanisms. I also added two-factor authentication and encryption for sensitive data.
<br>
<br>
Performance optimization involved profiling the app, using React's memoization, and code-splitting to improve load times. User feedback highlighted navigation and multimedia upload issues, which I fixed with better UI design and error handling.
<br>
<br>
Scalability was ensured by optimizing the database schema, creating indexes, and implementing caching to handle increased traffic.
<br>
<br>
Despite these challenges, Famazone Social became a responsive and reliable platform. Through persistent problem-solving and the strategic use of React Native, Expo, Redux, and Firebase, I turned obstacles into opportunities for learning and improvement.



<h3 align="left">Project Setup:</h3>

Start by cloning the Famazone repository into Visual Studio Code

How to install the packages and frameworks to run the Famazone Website:
1. Install pacman/nodejs for root user: ```sudo pacman -Sy nodejs npm```
2. Install Expo: ```install expo-cli --global```
3. Create expo project: ```expo init FamazoneSocial```
4. Clone the Famazone GitHub repository into Visual Studio Code, then use the ```cd <file directory>``` command to go into the folder.
5. Install this list of dependencies and libraries:
```npm i redux
npm i react-redux
npm i redux-thunk
npm install --save-dev style-loader css-loader
npm install react-native-reanimated
expo install firebase
npm i react-native-screens
npm i @react-native-community/masked-view
npm i react-native-gesture-handler
npm install react-native-web@~0.18.7
npm install react-dom@18.0.0  
npm install -g sharp-cli@^1.10.0
npm install @react-navigation/native
npm install @react-navigation/stack
npm install @react-navigation/bottom-tabs
npm i @react-navigation/material-bottom-tabs
npm i react-native-vector-icons   
npm i react-native-paper
expo install expo-camera
expo install expo-image-picker
expo install expo-video-thumbnails
expo install expo-media-library
expo install expo-av
expo install firebase
npm i react-native-screens
npm i @react-native-community/masked-view
npm i react-native-gesture-handler
npm install react-native-web@~0.18.7
npm install react-dom@18.0.0  
npm install -g sharp-cli@^1.10.0
npm install react-native-parsed-text
npm install react-native-mentions
npm install react-native-expo-cached-image
npm install react-native-bottomsheet-reanimated
npm install expo-video-player
npm install expo-updates
npm install @react-navigation/native
npm install expo-notifications
npm install react-native-safe-area-context
npm install @react-native-community/slider
npm install @expo/sharp-cli
npm install react-native-animateable-text
npm install eslint-plugin-reanimated
npm install animated
npm install sharp-cli
npm install @react-navigation/stack
npm i @react-navigation/material-bottom-tabs
npm i react-native-vector-icons   
npm i react-native-paper
expo install expo-camera
expo install expo-image-picker
expo install expo-video-thumbnails
expo install expo-media-library
expo install expo-av
npm i redux
npm i react-redux
npm i redux-thunk
```



<h3 align="left">Setting up the Firebase Database and W3 buckets:</h3>
<p>Go to https://firebase.google.com/ and log into your account and click the "Go to Console" hyperlink.</p>

![image](https://user-images.githubusercontent.com/46502423/165002002-5e5b5d4b-14bf-42ab-b1b7-17f7da91c5d0.png)


  <p>Click "+ add new project" and name the project FamazoneWebApp and use all the default options. </p>
  
  ![image](https://user-images.githubusercontent.com/46502423/165002073-f639915d-3133-4a1e-a90a-3ad3e7c03861.png)
  
 
<p>Next go to the "Authentication" tab and add an Admin user, then click the "Sign-in method" tab and add google & email to the provider list.</p>

  
  ![image](https://user-images.githubusercontent.com/46502423/165002264-207d7cf5-bdab-4cfe-8dcd-9fbad650e163.png)
  
  
![image](https://user-images.githubusercontent.com/46502423/165002286-b4984a53-21f1-4e80-b474-f2701efb583b.png)


<p>We now need to define the Firebase connection string. In firebase go to project settings and scroll doen until you see the firebaseConfig string, then copy the strin and paste it in the firebaseConfig method in the App.js file.


![FFBBEE](https://user-images.githubusercontent.com/46502423/194836368-e6294fc3-5466-4df2-a402-1719bf54906f.png)

  
You will then have to create a Friestore Database and make collections to store the applications data.

![image](https://user-images.githubusercontent.com/46502423/194838623-34f5aa79-b02d-426b-b360-ed3c37098c97.png)

  Name the collection "users".
  
![image](https://user-images.githubusercontent.com/46502423/194837846-f9079003-6df1-48b9-8031-02c5a2774e69.png)

  choose the Auto-ID option and click save.
  
![image](https://user-images.githubusercontent.com/46502423/194838033-18200857-446d-4356-9c67-524bcbdc179c.png)

<br>
Create a collection for every collection listed in the picture below⬇️.

  ![image](https://user-images.githubusercontent.com/46502423/194839144-47f946d4-e0fe-4cc4-bdf3-999b159b995c.png)

  <h1>Running the Famazone Web Application</h1>
  <br>
  
  ![image](https://user-images.githubusercontent.com/46502423/200214029-3d7e82cc-fbb9-493b-ace0-4b2cec7186d6.png)
  
<br>

![image](https://user-images.githubusercontent.com/46502423/200214108-1cc0461a-d6ea-488c-83a2-ebbc9c41fc48.png)

<br>

  ![image](https://user-images.githubusercontent.com/46502423/200214136-83026f8a-1182-4d5c-bf93-33346410bfd3.png)

  
<br>
<h1>My personal Portfolio</h1>
<h3>Summary: </h3>
<p>I am looking forward to using my knowledge of software development, attention to detail, and customer service skills to
grow with a company as a I graduate from Grand Canyon University. I am an analytical thinker who has a burning
passion for full stack software development who is currently involved with the Information Technology Club at Grand
Canyon University.</p>
<br>
<br>

  | Technology Experience | Structures and Frameworks |
| --- | --- |
| `High-Level Languages:` | Java, C#, C++ |
| `Web 1.0:` | PHP, HTML 5, JavaScript, CSS |
| `Front-End Framework:` | Angular, React JS, Spring, Bootstrap, React Native |
| `Database:` | MySQL, msSQL, PostgreSQL, MongoDB, Firebase |
| `Server Side Framework:` | ASP.NET, Node JS, npm, .NET Core |
| `Rest API's:` | Postman |
| `Software Design Pattern:` | Model-View-Controller, N-Layer Architecture, N-Tier |
| `Delivery Methodologies:` | Scrum, Waterfall |
| `Project Management Software:` | Jira, Monday.com, Trello, Burndown |
| `Development Tools:` | Microsoft Visual Studio, Eclipse, VSCode, Android Studios, Bootstrap Studios, SpringBoot Studio |
| `Cloud Platforms:` | AWS, Google Cloud, Heroku, Azure |
| `DevOps:` |  GitHub Desktop, Bash shell, Docker Desktop |
| `Logging Frameworks:` | Loggly, UptimeRobot, Redux, Firbase Preformance |
| `Architecture Tools:` | Visio, UML, ER, Wireframes, draw.io, Security Diagrams, Lucidchart |
| `Application Servers:` |  Tomcat, JBoss, Oracle, Apachie |

 <br>
 <br>

<h3 align="left">Connect with me on LinkedIn:</h3>
<p align="left">
<a href="https://www.linkedin.com/in/tyler-developer/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="https://www.linkedin.com/in/tyler-developer/" height="30" width="40" /></a>
</p>

<h3 align="left">Click the icon below to download my resume:</h3>
⬇️⬇️⬇️
<p align="left"> <a href="https://github.com/FLAME270/Senior_Project_2022/files/9743932/Tyler_W_Resume_2022_.pdf" target="_blank" rel="noreferrer"> <img src="https://cdn-01.cms-ap-v2i.applyflow.com/hudson-au/wp-content/uploads/2020/11/resume-template.png" alt="resume" width="65" height="65"/> </a>

<h3 align="left">Want to learn more about me? The programming Languages and Tools listed below are the programming langueges that I specialize in:</h3>
<p align="left"> <a href="https://developer.android.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg" alt="android" width="40" height="40"/> </a> <a href="https://angular.io" target="_blank" rel="noreferrer"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40"/> </a> <a href="https://angular.io" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg" alt="angularjs" width="40" height="40"/> </a> <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino" width="40" height="40"/> </a> <a href="https://aws.amazon.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40"/> </a> <a href="https://azure.microsoft.com/en-in/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" alt="azure" width="40" height="40"/> </a> <a href="https://babeljs.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/> </a> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/> </a> <a href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> <a href="https://dotnet.microsoft.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" alt="dotnet" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a> <a href="https://cloud.google.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" alt="gcp" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.java.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://kotlinlang.org" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" alt="kotlin" width="40" height="40"/> </a> <a href="https://kubernetes.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" alt="kubernetes" width="40" height="40"/> </a> <a href="https://laravel.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg" alt="laravel" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://www.microsoft.com/en-us/sql-server" target="_blank" rel="noreferrer"> <img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="mssql" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://nativescript.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/nativescript.svg" alt="nativescript" width="40" height="40"/> </a> <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.oracle.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg" alt="oracle" width="40" height="40"/> </a> <a href="https://www.php.net" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://reactnative.dev/" target="_blank" rel="noreferrer"> <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40"/> </a> <a href="https://spring.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> <a href="https://unity.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg" alt="unity" width="40" height="40"/> </a> </p>
<br><br>
<h3> If you like this project, check out my Minesweeper Application Programmed in C# .NET Core<h3>
• This project implements the use of Ajax, Razer Pages, Rest Services, and partial views. The minesweeper game has
completed functionality and stores user information, game information and high score information in a MySQL
database.
• Minesweeper GitHub Repository Link: https://github.com/FLAME270/Minesweeper-Game.git
