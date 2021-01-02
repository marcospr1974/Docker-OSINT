docker run -ti --rm \
    -v $PWD/output:/output \
    -v $PWD/config/config.json:/scrapedin-linkedin-crawler/config.json \
    scrapedin-linkedin-crawler:latest 
