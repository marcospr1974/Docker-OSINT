FROM ubuntu:latest

MAINTAINER Marcos Pablo Russo <marcospr1974@gmail.com>

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install python3-pip unzip build-essential wget curl git git-core apt-utils aptitude -y \
    && apt-get clean \
    && cd /opt \
    && wget https://kennbroorg.gitlab.io/ikyweb/file/iKy.zip \
    && unzip iKy.zip \
    && rm iKy.zip \
    && mv iKy-pack iKy \
    && cd iKy \
    && pip3 install -r requirements.txt 

# Install Redis
RUN cd /tmp \
    && wget http://download.redis.io/redis-stable.tar.gz \
    && tar xvzf redis-stable.tar.gz \
    && cd redis-stable \
    && make \
    && make install

# Supervisor installation &&
# Create directory for child images to store configuration in
RUN aptitude install -yq supervisor \
    && mkdir -p /var/log/supervisor \
    && mkdir -p /etc/supervisor/conf.d

# Supervisor base configuration
ADD supervisor.conf /etc/supervisor.conf
RUN mkdir /opt/log

EXPOSE 5000
EXPOSE 4200

#ENTRYPOINT ["python3", "app.py", "-e", "prod"]
CMD ["supervisord", "-c", "/etc/supervisor.conf"]
