FROM python:3.7-alpine

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

RUN apk update \
    && apk add git \
    && git clone https://github.com/s0md3v/Orbit.git \
    && cd /Orbit \
    && pip3 install requests \
    && mkdir /output

WORKDIR /Orbit
VOLUME /output

ENTRYPOINT ["python3","orbit.py"]
CMD ["-h"]
