FROM  python:3.7-alpine

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

RUN apk update \
    && apk add git \
    && git clone https://github.com/radioactivetobi/geo-recon.git \
    && cd  /geo-recon \
    && pip3 install -r  requirements.txt \
    && chmod +x geo-recon.py

WORKDIR /geo-recon


ENTRYPOINT ["python", "geo-recon.py"]
