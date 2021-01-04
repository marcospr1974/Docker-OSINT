FROM python:2.7.17-alpine3.10

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

RUN apk update \
    && apk add git npm \
    && git clone https://github.com/lockfale/OSINT-Framework.git \
    && cd /OSINT-Framework/public \
    && mkdir static

EXPOSE 8000
WORKDIR /OSINT-Framework/public 

# Run the application.
ENTRYPOINT ["/usr/bin/npm"]
CMD ["start"]
