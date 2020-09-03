#docker run -ti --rm -v $PWD/output:/root/.recon-ng h8mail:2.5.4 ./recon-ng
docker run -ti --rm -v $PWD/config.ini:/config.ini:ro -v $PWD/output:/output h8mail:2.5.4 $@
