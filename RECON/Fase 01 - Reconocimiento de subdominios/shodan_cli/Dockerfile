FROM ubuntu:latest

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

RUN apt-get update -y \
    && apt-get install python3-shodan -y \
    && apt-get clean \
    && mkdir /root/.shodan \
    && mkdir /root/output

VOLUME ["/root/.shodan", "/root/output"]

WORKDIR /root/output

ENTRYPOINT ["shodan"]
CMD ["-h"]
