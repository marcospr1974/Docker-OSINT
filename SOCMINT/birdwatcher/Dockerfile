FROM ubuntu:18.04

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

ENV TZ=America/Argentina/Buenos_Aires
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
    && apt-get install ruby-full git graphviz libmagickwand-dev imagemagick build-essential libpq-dev \
    libffi-dev -y \
    && git clone https://github.com/michenriksen/birdwatcher.git \
    && cd /birdwatcher \
    && gem update \
    && gem install birdwatcher \
    && mkdir /output

# Run the application.
ENTRYPOINT ["birdwatcher"]
