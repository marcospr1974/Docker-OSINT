docker run --rm -ti -v "${PWD}/intpu":/input -v "${PWD}/output":/output nmap-xml-parser:latest $@
