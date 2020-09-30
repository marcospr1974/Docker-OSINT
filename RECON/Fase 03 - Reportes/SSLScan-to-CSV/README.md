# SSLScan-to-CSV
Python Script to import file to scan with SSLScan and export a CSV
We first import the necessary modules and assign the filename supplied
in the argument
to a variable:
import subprocess
import sys
ipfile = sys.argv[1]
The filename supplied should point to a file containing a list of IP
addresses. We open this file
as read-only:
IPs = open(ipfile, “r”)
We then open up a file for reading and writing output by using w+
instead of r:
output = open(“sslscan.csv”, “w+”)
Now that we have our input and somewhere to write our output, we’re
ready to rock and roll.
We start by iterating through the IP addresses:
for IP in IPs:
For each IP, we run Sslscan:
try:
command = “sslscan “+IP
We then split up the output from the command into chunks:
ciphers = subprocess.check_output(command.split())
We then go through the output, line by line. If the line contains the
word Accepted, then we
arrange the elements of the line for CSV output:
for line in ciphers.splitlines():
if “Accepted” in line:
output.write(IP+”,”+line.split()[1]+”,”+
line.split()[4]+”,”+line.split()[2]+”\r”)
Finally, if for any reason the attempt to run the SSL scan on the IP
fails, we simply move on to
the next IP address:
except:
pass
