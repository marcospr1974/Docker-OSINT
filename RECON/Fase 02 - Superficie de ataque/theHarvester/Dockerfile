FROM python:alpine3.11

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

RUN apk add --update build-base libffi-dev libxml2-dev libxslt-dev git \
    && git clone https://github.com/laramies/theHarvester.git \
    && cd theHarvester \
    && pip3 install --upgrade pip \
    && pip3 install -r requirements.txt \
    && chmod +x *.py

COPY api-keys.yaml /theHarvester 

WORKDIR /theHarvester

ENTRYPOINT ["./theHarvester.py"]

CMD ["-h"]
