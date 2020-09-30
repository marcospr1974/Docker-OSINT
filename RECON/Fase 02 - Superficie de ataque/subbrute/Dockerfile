FROM       python:3-alpine
MAINTAINER Marcos Pablo Russo  <marcospr1974@gmail.com>

# Update repositories.
RUN apk update && apk add git

# Setup basic deps.
RUN git clone https://github.com/TheRook/subbrute.git

WORKDIR /subbrute

ENTRYPOINT ["./subbrute.py"]
CMD ["-h"]
