FROM ubuntu:16.04

RUN cat /etc/issue

RUN bash -c 'echo "deb http://repo.xplico.org/ xenial main" >> /etc/apt/sources.list'
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 791C25CE
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -yf xplico

EXPOSE 9876

CMD ["/bin/bash", "-c", "/etc/init.d/apache2 start && sleep 3 && /etc/init.d/xplico start && tail -F /var/log/apache2/*"]
