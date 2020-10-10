docker run -it -p 8118:8118 -p 9050:9050 -v $PWD/config/etc/torirc:/etc/tor/torrc:ro -v $PWD/config/tor:/var/lib/tor -d torproxy:latest
#docker run -it -p 8118:8118 -p 9050:9050  -v $PWD/config/tor:/var/lib/tor -d torproxy:latest
