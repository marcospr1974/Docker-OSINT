docker run -ti --rm \
    -v $PWD/output:/usr/app/files \
    tiktok-scraper:latest "${@}"
