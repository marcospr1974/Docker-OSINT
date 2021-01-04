docker run -p 5002:8000 \
      -d \
      -v $PWD/config/arf.json:/OSINT-Framework/public/arf.json:ro \
      -v $PWD/config/bandera.png:/OSINT-Framework/public/static/bandera.png:ro \
      -v $PWD/config/index.html:/OSINT-Framework/public/index.html:ro \
      osintframework:latest

