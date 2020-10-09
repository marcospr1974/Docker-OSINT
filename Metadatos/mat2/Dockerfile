FROM ubuntu:latest

ENV TZ=America/Argentina/Buenos_Aires
ENV DEBIAN_FRONTEND=noninteractive

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

RUN apt-get update \
    && apt-get install mat2 -y \
    && mkdir /input

VOLUME /input

ENTRYPOINT ["mat2"]
CMD ["-h"]
