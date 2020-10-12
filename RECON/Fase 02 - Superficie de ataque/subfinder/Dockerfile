# Build Container
FROM golang:1.13.4-alpine3.10 AS build-env

MAINTAINER Ice3man (nizamul@projectdiscovery.io)

RUN apk add --no-cache --upgrade git openssh-client ca-certificates \
 && go get -u github.com/golang/dep/cmd/dep \
 && go get -u github.com/projectdiscovery/subfinder/v2/cmd/subfinder \
 && mkdir /output \
 && mkdir /input

WORKDIR /go/src/app

VOLUME ["/root/.config/subfinder/", "/input", "/output"]

ENTRYPOINT ["subfinder"]
