FROM ubuntu:latest

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

RUN apt-get update \
 && apt-get install git python3 python3-pip -y \
 && git clone https://github.com/badBounty/Dispatcher.git \
 && cd /Dispatcher \
 && pip3 install -r requirements.txt \
 && mkdir /output

WORKDIR /Dispatcher
VOLUME /output

ENTRYPOINT ["python3", "dispatcher.py"]
CMD ["-h"]
