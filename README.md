# spark-react-example
This is an example of one possible way of structuring a Spark application, with React JS on the client side.

The application has filters, controllers, views, authentication, localization, error handling, and more. 
It contains the source code for the tutorial found at https://sparktutorials.github.io/2016/06/10/spark-react-example.html

Other documentation/tutorials used:

* https://www.valentinog.com/blog/react-webpack-babel/
* https://webpack.academy/p/the-core-concepts
* [Recharts API docs](http://recharts.org/#/en-US/api/ScatterChart)

## Build Environment Setup
Before building the project, make sure your development machine has the following installed:

* Eclipse
* [lombok.jar](https://projectlombok.org/download)
* [npm package manager](https://www.npmjs.com/package/npm)
* [node.js 64 bit windows installer](https://nodejs.org/en/download/) (includes npm)
* In Eclipse, open the project, right-click on the project in the Package Explorer, select **Properties**, then **Builders**, select the **Prebuild** builder, **Edit**, and under **Location**, click the **Variables...** button.
  * **Edit Variables...** to add a new variable named `platform_script_extension`, with the value `bat` for Windows, or `sh` for Mac and Linux
  * **Apply and Close**
* make sure `java` and `javac` are in your PATH, and can be executed at the command line

### Suggested

* [React Dev Tools for Chrome browser from Chrome Web Store](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related)
* Eclipse plugins **Eclipse Web Development Tools, Eclipse Java Web Developer Tools, JavaScript Development Tools, JavaScript Development Tools Chromium**
  * Eclipse -> **Help -> Install New Software ... -> Work with:** http://download.eclipse.org/releases/[oxygen]

After installing the required tools and cloning this project, you will need to manually build the React JS web resources every time you change the client JavaScript. First, run this setup once:

    cd spark-react-example
    cd webpack
    setup.ps1
    
The `setup.ps1` powershell script will use `npm` to initialize a new package and then fetch other packages that this project will depend on. (use setup.sh script on Mac/Linux instead of setup.ps1)


## Screenshot
[![Application Screenshot](https://i.imgur.com/hFEpQMS.png)](https://i.imgur.com/hFEpQMS.png)
