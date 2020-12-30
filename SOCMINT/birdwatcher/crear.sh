docker volume create pgdata
docker-compose up -d 
docker build . -t birdwatcher:latest
