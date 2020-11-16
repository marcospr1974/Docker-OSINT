FROM python:3.7-alpine

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

RUN apk update \
    && apk add git \
    && git clone https://github.com/davidtavarez/pwndb.git \
    && cd /pwndb \
    && pip3 install -r requirements.txt \
    && mkdir -p /output

WORKDIR /pwndb
VOLUME /output

ENTRYPOINT ["python3","./pwndb.py"]
CMD ["--help"]
