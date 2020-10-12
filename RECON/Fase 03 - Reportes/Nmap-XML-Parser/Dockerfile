FROM       python:3-alpine
MAINTAINER Marcos Pablo Russo  <marcospr1974@gmail.com>

# Update repositories.
RUN apk update && apk add git \
 && git clone https://github.com/laconicwolf/Nmap-Scan-to-CSV.git \
 && mkdir /input \
 && mkdir /output

WORKDIR /Nmap-Scan-to-CSV

VOLUME ["/input", "/output"]

ENTRYPOINT ["python", "nmap_xml_parser.py"]
CMD ["-h"]
