docker run --rm -ti -v "${PWD}/intput":/input -v "${PWD}/output":/output sslscan-to-csv:latest $@
