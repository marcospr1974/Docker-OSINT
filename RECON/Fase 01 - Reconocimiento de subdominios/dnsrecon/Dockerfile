FROM python:alpine3.11

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

RUN apk add --update build-base libffi-dev libxml2-dev libxslt-dev git \
  && git clone https://github.com/darkoperator/dnsrecon.git \
  && cd /dnsrecon \
  && pip3 install -r requirements.txt \
  && chmod +x dnsrecon.py \
  && mkdir /output \
  && mkdir /input \

WORKDIR /dnsrecon

VOLUME ["/output","/input"]

ENTRYPOINT ["./dnsrecon.py"]
CMD ["-h"]
