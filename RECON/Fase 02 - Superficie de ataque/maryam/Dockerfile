FROM python:3.7-alpine

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

RUN apk update \
    && apk add git \
    && git clone https://github.com/saeeddhqan/Maryam.git \ 
    && cd  /Maryam \
    && pip3 install -r requirements \
    && mkdir /root/.maryam

WORKDIR /Maryam

VOLUME /root/.recon-ng

ENTRYPOINT ["./maryam"]
