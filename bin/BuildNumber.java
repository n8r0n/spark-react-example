import java.io.*;

/**
 * A build tool to automatically parse the project's layout.vm file and update a build number, which
 * prevents browser clients from caching main.js file. This main class is run by the prebuild.sh script,
 * added as a custom Eclipse Builder for the project.
 * @author nscan
 */
class BuildNumber {

   /**
    * @param args 1st argument should contain full path to project directory
    */
   public static void main(String[] args) {
      try {
         String buildNumberFile = args[0] + "/src/main/resources/velocity/layout.vm";
         System.out.println("\nUpdating build number in " + buildNumberFile);
         File file = new File(buildNumberFile);
         FileReader fileReader = new FileReader(file);
         BufferedReader bufferedReader = new BufferedReader(fileReader);
         StringBuffer stringBuffer = new StringBuffer();
         String line;
         // read the whole layout.vm template file into a string buffer
         while ((line = bufferedReader.readLine()) != null) {
            stringBuffer.append(line);
            stringBuffer.append("\n");
         }
         fileReader.close();

         // search for the version number used to defeat browser caching of main.js
         String token = "main.js?ver=";
         int start = stringBuffer.indexOf(token);
         if (start > 0) {
            int end = stringBuffer.indexOf("\"", start + 1);
            if (end > start) {
               int numberStart = stringBuffer.indexOf("_", start + 1);
               long buildNumber = 1;
               if (numberStart > 0) {
                  // read the current build number, and add 1
                  buildNumber = Long.parseLong(stringBuffer.substring(numberStart + 1, end));
                  buildNumber = Math.max(1, buildNumber + 1);
               }
               // write out the new build number
               stringBuffer.replace(start + token.length(), end, "build_" + buildNumber);
            }
         }
         // save the modified file contents, with new build number
         try ( PrintWriter out = new PrintWriter(buildNumberFile) ) {
            out.println(stringBuffer.toString());
         }
      } catch (IOException e) {
         e.printStackTrace();
      }
   }
}

