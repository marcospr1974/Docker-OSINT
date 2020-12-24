export CLIENTNAME=usuario
docker-compose run --rm openvpn ovpn_revokeclient $CLIENTNAME
