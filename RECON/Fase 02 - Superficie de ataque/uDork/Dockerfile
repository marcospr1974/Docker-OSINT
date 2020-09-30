FROM bash

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

RUN apk update \
 && apk add --no-cache curl git ncurses perl perl-utils make \
 && ln -s /usr/local/bin/bash /bin/bash \
 && git clone https://github.com/m3n0sd0n4ld/uDork \
 && cd /uDork \
 && yes | perl -MCPAN -e 'install URI::Escape' \
 && sed -i 's/c_user=HEREYOUCOOKIE/c_user=$c_user/g' uDork.sh \
 && sed -i 's/xs=HEREYOUCOOKIE/xs=$xs/g' uDork.sh \
 && chmod +x uDork.sh \
 && mkdir /output

WORKDIR /uDork
VOLUME /output

ENTRYPOINT ["./uDork.sh"]
CMD ["-h"]
