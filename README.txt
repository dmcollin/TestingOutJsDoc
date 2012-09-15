Documentation
-------------

To run from the command line on Mac: 
java -jar jsrun.jar app/run.js -a -t=templates/jsdoc project/script

-a to include all functions, even undocumented ones
-t to use a template (required), followed by the path
-r to descend into source directories
-d to change the output directory (otherwise, defaults to out)