mkdir -p openvpn-data/conf
IP=192.168.1.1
docker-compose run --rm openvpn ovpn_genconfig -u udp://${IP}
