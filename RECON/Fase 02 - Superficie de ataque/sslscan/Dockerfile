FROM       python:3-alpine
MAINTAINER Marcos Pablo Russo  <marcospr1974@gmail.com>

# Update repositories.
RUN apk update \
 && apk add git openssl-dev build-base perl zlib-dev linux-headers \
 && git clone http://github.com/rbsec/sslscan.git \
 && cd /sslscan \
 && make static \
 && make install \
 && mkdir /output

volume /output

ENTRYPOINT ["sslscan"]
CMD ["--help"]
