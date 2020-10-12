docker run -ti --rm -v "${PWD}/shodan":/root/.shodan/ -v "${PWD}/output":/root/output shodan:latest $@
