FROM ubuntu:latest

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

RUN apt-get update && apt-get install python3-pip git -y \
    && git clone https://github.com/Datalux/Osintgram.git \
    && cd Osintgram \
    && pip3 install -r requirements.txt \
    && chmod +x *.py \ 
    && mkdir config

VOLUME /Osintgram/config
WORKDIR /Osintgram

ENTRYPOINT ["python3", "main.py"]
CMD ["-h"]
