FROM python:2.7.17-alpine3.10

RUN apk update \
    && apk add git \
    && git clone https://github.com/laramies/metagoofil.git \
    && cd  /metagoofil \
    && mkdir output

WORKDIR metagoofil

VOLUME [ "/metagoofil/output" ]

ENTRYPOINT ["python", "metagoofil.py"]
CMD ["-h"]
