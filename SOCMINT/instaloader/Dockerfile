FROM python:3.7-alpine

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

RUN apk update \
    && apk add git \
    && git clone https://github.com/instaloader/instaloader.git \
    && cd /instaloader \
    && python3 setup.py install \
    && mkdir -p /root/.config/instaloader

WORKDIR /root/.config/instaloader/
VOLUME /root/.config/instaloader 

ENTRYPOINT ["instaloader"]
CMD ["--help"]
