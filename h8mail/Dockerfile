FROM python:3-alpine

RUN apk add --update --no-cache git bash

RUN pip3 install requests \
   && git clone https://github.com/khast3x/h8mail.git \
   && cd /h8mail \
   && python setup.py install \
   && mkdir /output

VOLUME /output

ENTRYPOINT ["h8mail"]
CMD ["-h"]
