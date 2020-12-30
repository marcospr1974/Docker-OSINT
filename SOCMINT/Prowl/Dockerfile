FROM python:2.7.17-alpine3.10

RUN apk update \
    && apk add git curl libxml2-dev libxslt-dev  build-base \
    && git clone https://github.com/nettitude/Prowl.git \
    && cd  /Prowl \
    && pip install --upgrade pip \
    && pip install -r requirements.txt \
    && pip install requests bs4 \
    && mkdir Output

WORKDIR /Prowl

VOLUME [ "/Prowl/Output" ]

ENTRYPOINT ["python", "prowl.py"]
CMD ["-h"]
