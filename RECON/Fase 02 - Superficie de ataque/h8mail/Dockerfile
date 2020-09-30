FROM python:3-alpine

RUN apk add --update --no-cache git bash \
 && git clone https://github.com/khast3x/h8mail.git \
 && cd /h8mail \
 && pip3 install requests \
 && python3 setup.py install \
 && mkdir /output

VOLUME /output

ENTRYPOINT ["h8mail"]
CMD ["-h"]
