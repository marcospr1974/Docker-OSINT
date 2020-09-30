#docker run --rm -ti -v $PWD/reports:/dirsearch/reports --network host dirsearch:0.3.9 $@

docker run --rm -ti -v $PWD/output:/output -v $PWD/config:/root/.config/subfinder subfinder:2.4.5
