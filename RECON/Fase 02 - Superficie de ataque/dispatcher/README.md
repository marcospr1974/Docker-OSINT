
# Dispatcher

Dispatcher tries to find vulnerabilities not covered by regular scanners (Nessus, acunetix). This is a work in progress so any feedback is appreciated.  

Available modules are listed under Options. Oputput will be under output folder.

## Usage

`py dispatcher.py -m <Mode> -i <input>`

## Requirements

- `python 3.x`
- `pip`

## Installation

- `git clone https://github.com/badBounty/Dispatcher.git`
- `pip install -r requirements.txt`

If `s3bucket` module is going to be used, it is recommended to have a `awscli` account configured. This is because, generally, vulnerable s3 buckets are configured to be accessed by `authenticated-users`, which means ANY aws user.

This can be done by following these steps.

- `pip install awscli`
- `aws configure`
- Follow prompts

### For MSTeams notifications

- Create new team
- Manage team
- Apps -> More apps -> Search "Webhook" -> Install
- In a channel, go to *Connectors*
- Configure Incoming Webhook
- Create new webhook and copy the url
- When running Dispatcher, add `-mst <URL>`

## Options

| Command  | Description  |   |
|---|---|---|
| -m  |  MODE  | - `s3bucket`: Scans code in search of s3 buckets, then tries to execute ls and cp commands.|
|||- `token`: Searches hidden tokens in html and javascript files|
|||- `header`: Generates a csv file with the security headers present on each url|
|||- `css`: Checks for possible css injections|
|||- `openred`: Checks if the url has a open redirect vulnerability (Currently only scanning login endpoints)|
|||- `endpoint`: Checks common endpoints that could lead to vulnerabilities, endpoints can be found in extra/EndpointFinder_endpoints. Custom endpoints can be added as long as the existing format is mantained|
|||- `firebase`: Searches for firebases and check whether /.json is available for unauthenticated access|
|||- `full`: All modules at the same time|
| -i | INPUT  | Input file that contains urls to be scanned (with http/https)  |
| -u | Single url input  | Single url input, must contain http or https|
| -o | Output folder  | Output folder ex: `C:\Users\Name\Desktop\Folder`  |
| -s | SCOPE  | Adds a simple scope check to the urls found while scraping. Ex: -s `google` will prevent the scanning of any url that does not contain the keyword `google`  |
| -mst | ALERT  | Microsoft teams webhook for channel notifications (Notifies buckets, css and openRedirects). Work in progress  |
| -mm | MONITOR  | Monitor mode, input is in hours. Ex: `-mm 6` means that, once the scan finishes, 6 hours will pass until the scan starts again automatically  |
| -v | VERBOSE  | Creates a txt file with more information on what was (or not) found. This will help trace possible errors  |