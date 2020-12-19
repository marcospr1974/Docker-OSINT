FROM ubuntu:latest

RUN  apt-get update \
    && apt-get install software-properties-common -y \
    && add-apt-repository ppa:micahflee/ppa \
    && apt-get update \
    && apt-get install pdf-redact-tools -y \
    && apt-get clean \
    && mkdir /output

VOLUME [ "/output" ]

ENTRYPOINT ["pdf-redact-tools"]
CMD ["-h"]
