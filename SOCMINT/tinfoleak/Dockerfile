FROM ubuntu:16.04

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

RUN apt-get update && apt-get install git curl build-essential \
    python-pip python-pil python-pyexiv2 python-openssl python-qt4 -y \
    && git clone https://github.com/vaguileradiaz/tinfoleak.git \
    && pip install tweepy exifread jinja2 oauth2 

WORKDIR /tinfoleak

ENTRYPOINT ["./tinfoleak.py"]
