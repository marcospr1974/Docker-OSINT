FROM python:3.7-alpine

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

RUN apk add --no-cache --virtual .build-deps gcc libc-dev libxslt-dev \
        git libxslt openssl-dev swig python3-dev  \
    && git clone https://github.com/lanmaster53/recon-ng.git \
    && cd /recon-ng \
    && pip3 install --no-cache-dir -r REQUIREMENTS  \
    && pip3 install bs4 censys shodan PyPDF3 pyaes olefile M2Crypto \
    && mkdir /root/.recon-ng

WORKDIR /recon-ng
VOLUME /root/.recon-ng
