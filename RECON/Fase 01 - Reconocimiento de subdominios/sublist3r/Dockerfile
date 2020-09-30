FROM python:3

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

RUN apt-get update -y \
 && apt-get install python3-pip git -y \
 && git clone https://github.com/aboul3la/Sublist3r.git \
 && cd /Sublist3r \
 && pip3 install -r requirements.txt \
 && python3 setup.py install \
 && mkdir /output


VOLUME /output

ENTRYPOINT ["sublist3r"]
CMD ["-h"]
