docker run -p 5002:8000 \
      -v $PWD/config/arf.json:/OSINT-Framework/public/arf.json:ro \
      -v $PWD/config/index.html:/OSINT-Framework/public/index.html:ro -d osintframework:latest 
