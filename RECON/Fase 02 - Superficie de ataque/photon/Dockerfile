FROM ubuntu:latest

RUN apt-get update \
 && apt-get install git python3 python3-pip -y \
 && git clone https://github.com/s0md3v/Photon.git \
 && cd /Photon \
 && pip3 install -r requirements.txt \
 && mkdir /output

WORKDIR Photon

VOLUME /output

ENTRYPOINT [ "python3", "photon.py" ]
CMD ["--help"]
