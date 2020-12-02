FROM ubuntu:16.04

LABEL MAINTAINER="Marcos Pablo Russo <marcospr1974@gmail.com>"

ENV DEBIAN_FRONTEND=noninteractive
ENV TIMEZONE=America/Argentina/Buenos_Aires
ENV GHIRO_USER=ghiro
ENV GHIRO_PASSWORD=ghiromanager

RUN apt-get update && apt-get install locales \
    python-pip build-essential python-dev python-gi \
    libgexiv2-2 gir1.2-gexiv2-0.10 libtiff5-dev libjpeg8-dev \
    zlib1g-dev libfreetype6-dev liblcms2-dev libwebp-dev \
    tcl8.5-dev tk8.5-dev python-tk wkhtmltopdf xvfb dnsutils \
    python-setuptools libpq-dev vim iputils-ping wget libmysqlclient-dev -y \
    && apt-get clean \
    && cd /opt \
    && wget https://www.getghiro.org/downloads/0.2.1/ghiro-0.2.1.tar.gz \
    && tar xvf ghiro-0.2.1.tar.gz \
    && mv ghiro-0.2.1 ghiro \
    && cd /opt/ghiro \
    && pip install --upgrade pip \
    && pip install psycopg2-binary  MYSQL-python \
    #&& pip install psycopg2 MYSQL-python \
    && pip install -r requirements.txt 

# Configure timezone and locale
RUN echo ${TIMEZONE} > /root/timezone \
    && dpkg-reconfigure -f noninteractive tzdata \
    && export LANGUAGE=en_US.UTF-8 \
    && export LANG=en_US.UTF-8 \
    && export LC_ALL=en_US.UTF-8 \
    && locale-gen en_US.UTF-8 \
    && DEBIAN_FRONTEND=noninteractive dpkg-reconfigure locales

# Configure wkhtmltopdf
RUN printf '#!/bin/bash\nxvfb-run --server-args="-screen 0, 1024x768x24" /usr/bin/wkhtmltopdf $*' > /usr/bin/wkhtmltopdf.sh \
  && chmod a+x /usr/bin/wkhtmltopdf.sh \
  && ln -s /usr/bin/wkhtmltopdf.sh /usr/local/bin/wkhtmltopdf

# Configure ghiro.
ADD config/local_settings.py /opt/ghiro/ghiro/local_settings.py

# Create super user.
RUN cd /opt/ghiro && python manage.py syncdb --noinput 
    
#RUN echo "from users.models import Profile; Profile.objects.create_superuser('$GHIRO_USER', 'yourmail@example.com', '$GHIRO_PASSWORD')" > /root/salida \
#  && cat /root/salida  | python manage.py shell

RUN cd /opt/ghiro && echo "from users.models import Profile; Profile.objects.create_superuser('$GHIRO_USER', 'yourmail@example.com', '$GHIRO_PASSWORD')"  | python manage.py shell

# Clean-up
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

EXPOSE 80
WORKDIR /opt/ghiro
CMD ["python","manage.py","runserver","0.0.0.0:80"]
