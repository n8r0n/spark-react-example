#!/bin/bash

cp dist/js/main.js ../src/main/resources/public/js/main.js

# update the build number for the project with the external java tool (BuildNumber.java)
cd ..
if [ ! -f ./bin/BuildNumber.class ]; then
   cd bin/
   javac BuildNumber.java
   cd ..
fi
java -classpath bin/ BuildNumber $PWD

exit 0
