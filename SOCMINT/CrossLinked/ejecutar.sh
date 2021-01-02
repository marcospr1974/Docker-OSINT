docker run -ti --rm \
    -v $PWD/output:/output \
    crosslinked:latest "${@}"
