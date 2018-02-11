rem copy files
copy dist\js\main.js ..\src\main\resources\public\js\main.js

rem update the build number for the project with the external java tool (BuildNumber.java)
cd ..\bin
if exist BuildNumber.class (
   cd ..
) else (
   javac BuildNumber.java
   cd ..
)
java -classpath bin/ BuildNumber %cd%
