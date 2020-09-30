FROM ubuntu:latest

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

RUN apt-get update -y \
 && apt-get install build-essential git python3 python3-pip tor -y \
 && git clone https://github.com/sherlock-project/sherlock.git \
 && cd /sherlock \
 && pip3 install -r requirements.txt \
 && mkdir /output

WORKDIR /sherlock/sherlock

VOLUME /output

ENTRYPOINT ["python3", "sherlock.py"]

CMD ["-h"]
