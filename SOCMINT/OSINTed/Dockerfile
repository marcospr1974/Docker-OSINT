FROM ubuntu:latest

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

RUN apt-get update -y \
    && apt-get install python3 python3-pip git whois exiftool build-essential libncurses-dev -y \
    && apt-get clean \
    && git clone https://github.com/SpookySec/OSINTed.git \
    && python3 -m pip install requests \
    && python3 -m pip install mac-vendor-lookup \
    && python3 -m pip install readline \
    && python3 -m pip install phonenumbers \
    && python3 -m pip install whois \
    && python3 -m pip install pyhibp \
    && python3 -m pip install pyexifinfo \
    && python3 -m pip install requests_futures \
    && mkdir /input \
    && mkdir /output

VOLUME ["/input", "/output"]

WORKDIR /OSINTed

ENTRYPOINT ["./osinted.py"]
