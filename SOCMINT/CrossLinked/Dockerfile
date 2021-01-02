FROM python:3.7-alpine

RUN apk update \
    && apk add git curl libxml2-dev libxslt-dev  build-base \
    && git clone https://github.com/m8r0wn/CrossLinked.git \
    && cd  /CrossLinked \
    && pip3 install -r requirements.txt \
    && pip3 install requests bs4 \
    && mkdir Output

WORKDIR /CrossLinked

VOLUME [ "/output" ]

ENTRYPOINT ["python3", "crosslinked.py"]
CMD ["-h"]
