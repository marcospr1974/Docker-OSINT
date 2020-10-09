FROM ubuntu:16.04

RUN apt-get update \
    && apt-get install git build-essential python python-pip python-libxmp -y \
    && git clone https://github.com/hartek/metadatos.git \
    && cd /metadatos \
    && pip install --upgrade pip \
    && pip install -U setuptools \ 
    && pip install -r requirements.txt \
    && mkdir /output

WORKDIR metadatos

VOLUME [ "/output" ]

ENTRYPOINT ["python", "metadatos.py"]
CMD ["-h"]
