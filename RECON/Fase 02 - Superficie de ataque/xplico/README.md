# docker-xplico
Docker version of Xplico - Open Source Network Forensic Analysis Tool (NFAT)
https://www.xplico.org/


Build with:

	docker build -t xplico .

Run with:

	docker run --rm -d -p 9876:9876 --name xplico xplico

Connect with:

	http://localhost:9876
	User / password: xplico / xplico

Ubuntu install steps taken from: http://wiki.xplico.org/doku.php?id=ubuntu
