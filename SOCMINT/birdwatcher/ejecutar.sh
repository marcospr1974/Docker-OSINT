docker run -ti --rm \
    -v $PWD/config/birdwatcherrc:/root/.birdwatcherrc \
    -v $PWD/output:/output \
    birdwatcher:latest
