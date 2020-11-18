openssl req -x509 -nodes -days 7300 -newkey rsa:2048 -sha256 -keyout config/lighttpd/ssl/localhost.pem -out config/lighttpd/ssl/localhost.pem
chmod 600 config/lighttpd/ssl/localhost.pem
