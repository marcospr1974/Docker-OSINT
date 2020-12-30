docker run -ti --rm \
    -v $PWD/output:/Prowl/Output \
    prowl:latest "${@}"
