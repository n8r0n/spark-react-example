# spark-react-example
This is an example of one possible way of structuring a Spark application

The application has filters, controllers, views, authentication, localization, error handling, and more. 
It contains the source code for the tutorial found at https://sparktutorials.github.io/2016/06/10/spark-react-example.html

## Build Environment Setup
Before building the project, make sure your development machine has the following installed:

* Eclipse
* [lombok.jar](https://projectlombok.org/download)
* [npm package manager](https://www.npmjs.com/package/npm)
* [node.js 64 bit windows installer](https://nodejs.org/en/download/)

### Suggested

* [React Dev Tools for Chrome browser from Chrome Web Store](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related)
* Eclipse plugins **Eclipse Web Development Tools, Eclipse Java Web Developer Tools, JavaScript Development Tools, JavaScript Development Tools Chromium**
  * Eclipse -> **Help -> Install New Software ... -> Work with:** http://download.eclipse.org/releases/[oxygen]

After installing the required tools and cloning this project, you will need to manually build the React JS web resources every time you change the client JavaScript.

    cd spark-react-example
    cd weboack
    setup.ps1
    
The setup powershell script will use `npm` to initialize a package and then fetch other packages that this project will depend on.

After making changes to the `webpack/src/` contents (such as .js files), build the webpack package at the command line with:

    npm run build
    
And then copy the results into the static resource folder of your webapp project:

    cp .\dist\js\main.js ..\src\main\resources\public\js\
    
Then, build normally in Eclipse and run.  Eclipse will take the large generated main.js file and put it in the directory the webapp uses for static resources. It will then be available to the project.

## Screenshot
[![Application Screenshot](https://imgur.com/BLGL34E)](https://imgur.com/BLGL34E)
