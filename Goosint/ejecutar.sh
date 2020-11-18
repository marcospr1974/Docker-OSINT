docker run \
     -d \
     --name goosint \
     --mount type=bind,source=/etc/localtime,destination=/etc/localtime,readonly=true \
     --mount type=bind,source=$PWD/htdocs,destination=/var/www/localhost/htdocs \
     --mount type=bind,source=$PWD/config/lighttpd,destination=/etc/lighttpd,readonly=true \
     -p 8080:80 \
     -p 8443:443 \
     m4rcu5/lighttpd:latest
