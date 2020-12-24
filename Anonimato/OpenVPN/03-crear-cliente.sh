export CLIENTNAME=usuario
docker-compose run --rm openvpn easyrsa build-client-full $CLIENTNAME nopass
