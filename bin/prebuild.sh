#!/bin/bash

# set path to find the 'node' command line executable
PATH=/usr/local/bin:$PATH
#env

rm -f ../src/main/resources/public/js/main.js        
/usr/local/bin/npm run build
cp dist/js/main.js ../src/main/resources/public/js/main.js

exit 0