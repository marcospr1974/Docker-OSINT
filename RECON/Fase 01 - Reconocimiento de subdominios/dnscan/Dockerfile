FROM       python:3-alpine
MAINTAINER Marcos Pablo Russo  <marcospr1974@gmail.com>

# Update repositories.
RUN apk update && apk add git

# Setup basic deps.
RUN git clone https://github.com/rbsec/dnscan

WORKDIR /dnscan

RUN pip3 install -r requirements.txt

ENTRYPOINT ["./dnscan.py"]
CMD ["-h"]
