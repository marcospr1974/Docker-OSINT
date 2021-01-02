FROM ubuntu:latest

ENV TZ=America/Argentina/Buenos_Aires
ENV DEBIAN_FRONTEND="noninteractive" 

RUN apt-get update \
    && apt-get install git wget unzip npm build-essential libnss3 libcups2-dev libxss-dev \
       libasound-dev libpangocairo-1.0-0 libatk1.0-dev libatk-bridge2.0-dev libgtk3.0-cil-dev -y \
    && git clone https://github.com/linkedtales/scrapedin-linkedin-crawler.git \
    && cd scrapedin-linkedin-crawler \
    && npm install \
    && mkdir /output

WORKDIR /scrapedin-linkedin-crawler

VOLUME [ "/output" ]

ENTRYPOINT ["npm", "start"]
