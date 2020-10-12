FROM       python:3-alpine
MAINTAINER Marcos Pablo Russo  <marcospr1974@gmail.com>

# Update repositories.
RUN apk update && apk add git \
 && git clone https://github.com/staticeffect/SSLScan-to-CSV.git \
 && mkdir /input \
 && mkdir /output

WORKDIR /SSLScan-to-CSV

VOLUME ["/input", "/output"]

ENTRYPOINT ["python", "sslscan_csv.py"]
CMD ["-h"]
