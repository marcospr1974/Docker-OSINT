FROM python:2.7.17-alpine3.10

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

RUN apk update \
    && apk add git \
    && git clone https://github.com/radioactivetobi/geo-recon.git \
    && cd  /geo-recon \
    && pip install -r  requirements.txt \
    && chmod +x geo-recon.py

WORKDIR /geo-recon


ENTRYPOINT ["python", "geo-recon.py"]
