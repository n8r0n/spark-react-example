#!/bin/bash

# set path to find the 'node' command line executable
PATH=/usr/local/bin:$PATH
#env

# run the webpack builder
rm -f ../src/main/resources/public/js/main.js        
/usr/local/bin/npm run build

exit 0
