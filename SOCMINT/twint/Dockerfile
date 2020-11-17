FROM ubuntu:latest

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

COPY docker-entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENV LANGUAGE=es_AR:es 
ENV LANG=es_AR.UTF-8

RUN apt-get update \
 && apt-get install -y git python3-pip \
 && apt-get clean autoclean \
 && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
 && git clone https://github.com/twintproject/twint.git --branch v2.1.21 \
 && cd  /twint \
 && pip3 install -r requirements.txt \
 && python3 setup.py install 

ENTRYPOINT ["/entrypoint.sh"]
