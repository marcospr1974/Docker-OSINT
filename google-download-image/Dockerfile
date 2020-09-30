FROM python:3.7-alpine

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

RUN apk update \
    && apk add git \
    && git clone https://github.com/Joeclinton1/google-images-download.git \
    && cd  /google-images-download \
    && pip3 install -r requirements.txt \
    && python setup.py install \
    && mkdir /downloads

VOLUME /downloads

ENTRYPOINT ["googleimagesdownload"]
