FROM ubuntu:latest

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

RUN apt-get update -y \
    && apt-get install tor -y \
    && apt-get clean 

COPY config/etc/torrc /etc/tor

EXPOSE 9050

#ENTRYPOINT ["./osinted.py"]
