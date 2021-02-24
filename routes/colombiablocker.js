const blockedips = [
  //If you wanna test it, you can add your IP here such as >> "127.0.0.1", 
  "4.33.232.0",
  "5.62.56.61",
  "5.62.56.62",
  "5.62.58.57",
  "5.62.58.58",
  "5.182.120.0",
  "8.242.208.0",
  "8.243.64.0",
  "8.243.160.0",
  "17.45.148.0",
  "17.45.170.111",
  "23.7.0.0",
  "23.7.64.0",
  "23.7.144.0",
  "23.9.48.0",
  "23.14.16.0",
  "23.14.32.0",
  "23.14.48.0",
  "23.14.80.0",
  "23.32.192.0",
  "23.32.208.0",
  "23.36.184.0",
  "23.46.2.0",
  "23.46.192.0",
  "23.52.112.0",
  "23.56.64.0",
  "23.61.2.0",
  "23.61.245.0",
  "23.61.247.0",
  "23.67.16.0",
  "23.213.192.0",
  "23.213.202.0",
  "23.219.48.0",
  "23.220.64.0",
  "23.232.253.0",
  "23.235.44.0",
  "23.250.9.24",
  "24.152.56.0",
  "24.152.58.0",
  "32.59.128.0",
  "34.99.93.87",
  "34.99.93.88",
  "34.99.116.228",
  "34.100.24.0",
  "34.100.56.0",
  "45.5.160.0",
  "45.5.172.0",
  "45.5.180.0",
  "45.5.184.0",
  "45.7.132.0",
  "45.12.70.49",
  "45.12.71.49",
  "45.65.136.0",
  "45.65.200.0",
  "45.65.232.0",
  "45.70.168.0",
  "45.71.7.0",
  "45.71.180.0",
  "45.87.11.0",
  "45.131.162.0",
  "45.162.0.0",
  "45.162.76.0",
  "45.162.82.0",
  "45.162.84.0",
  "45.162.126.0",
  "45.163.28.0",
  "45.163.30.0",
  "45.167.124.0",
  "45.167.126.0",
  "45.167.248.0",
  "45.168.104.0",
  "45.169.98.0",
  "45.169.253.0",
  "45.170.124.0",
  "45.170.132.0",
  "45.170.132.128",
  "45.170.132.192",
  "45.170.133.0",
  "45.170.133.32",
  "45.170.133.34",
  "45.170.133.37",
  "45.170.133.38",
  "45.170.133.40",
  "45.170.133.48",
  "45.170.133.64",
  "45.170.133.128",
  "45.170.135.128",
  "45.170.135.192",
  "45.170.135.224",
  "45.170.240.0",
  "45.171.118.0",
  "45.171.180.0",
  "45.172.178.0",
  "45.172.184.0",
  "45.172.218.0",
  "45.172.222.0",
  "45.173.4.0",
  "45.173.8.0",
  "45.173.12.0",
  "45.173.14.0",
  "45.173.44.0",
  "45.173.68.0",
  "45.174.196.0",
  "45.174.224.0",
  "45.174.227.0",
  "45.175.20.0",
  "45.175.139.0",
  "45.176.70.0",
  "45.176.193.0",
  "45.176.232.0",
  "45.177.52.0",
  "45.177.54.0",
  "45.177.108.0",
  "45.178.4.0",
  "45.178.12.0",
  "45.178.64.0",
  "45.179.160.0",
  "45.179.200.0",
  "45.179.244.0",
  "45.180.22.0",
  "45.180.44.0",
  "45.180.82.0",
  "45.180.112.0",
  "45.181.156.0",
  "45.181.188.0",
  "45.181.204.0",
  "45.182.41.0",
  "45.182.190.0",
  "45.183.40.0",
  "45.183.196.0",
  "45.183.247.0",
  "45.185.31.0",
  "45.187.48.0",
  "45.189.119.0",
  "45.189.235.0",
  "45.190.86.0",
  "45.191.2.0",
  "45.191.44.0",
  "45.191.74.0",
  "45.191.232.0",
  "45.224.186.0",
  "45.225.224.0",
  "45.226.112.0",
  "45.226.186.0",
  "45.227.5.0",
  "45.227.88.0",
  "45.229.72.0",
  "45.229.192.0",
  "45.230.33.0",
  "45.231.184.0",
  "45.233.4.0",
  "45.233.72.0",
  "45.233.168.0",
  "45.235.40.0",
  "45.236.91.248",
  "45.238.144.0",
  "45.238.180.0",
  "45.238.196.0",
  "45.239.88.0",
  "45.239.115.0",
  "57.74.192.0",
  "63.222.128.0",
  "64.76.32.0",
  "64.76.188.0",
  "64.140.143.128",
  "66.231.68.0",
  "67.73.144.0",
  "67.73.160.0",
  "67.73.184.0",
  "67.73.224.0",
  "67.73.240.0",
  "67.73.244.0",
  "67.73.245.160",
  "67.73.245.192",
  "67.73.246.0",
  "67.73.248.0",
  "67.73.252.0",
  "69.174.45.32",
  "72.246.48.0",
  "72.246.208.0",
  "81.173.106.120",
  "81.199.115.0",
  "82.195.173.245",
  "83.171.202.0",
  "91.195.110.0",
  "92.122.210.0",
  "92.123.240.0",
  "95.100.87.0",
  "96.7.0.0",
  "96.45.93.0",
  "104.75.170.0",
  "104.77.198.0",
  "104.77.200.0",
  "104.91.128.0",
  "104.91.160.0",
  "104.91.164.0",
  "104.92.154.0",
  "104.92.156.0",
  "104.92.192.0",
  "104.107.220.0",
  "104.118.24.0",
  "104.119.32.0",
  "104.119.192.0",
  "104.132.160.0",
  "104.166.117.0",
  "104.224.35.0",
  "116.206.49.0",
  "128.90.108.0",
  "128.90.115.0",
  "131.0.136.0",
  "131.0.168.0",
  "131.0.169.0",
  "131.0.169.24",
  "131.0.169.32",
  "131.0.169.64",
  "131.0.169.128",
  "131.0.170.0",
  "131.100.1.0",
  "131.100.48.0",
  "131.108.168.0",
  "131.196.208.0",
  "131.221.40.0",
  "131.228.197.24",
  "132.255.20.0",
  "136.228.226.0",
  "138.0.40.0",
  "138.0.42.0",
  "138.0.42.128",
  "138.0.42.160",
  "138.0.42.176",
  "138.0.42.184",
  "138.0.42.192",
  "138.0.43.0",
  "138.0.88.0",
  "138.0.116.0",
  "138.36.64.0",
  "138.94.0.0",
  "138.97.56.0",
  "138.97.80.0",
  "138.117.40.0",
  "138.117.84.0",
  "138.117.108.0",
  "138.117.136.0",
  "138.117.168.0",
  "138.117.171.0",
  "138.121.4.0",
  "138.121.12.0",
  "138.121.156.0",
  "138.121.200.0",
  "138.121.202.32",
  "138.121.202.64",
  "138.121.202.128",
  "138.121.203.0",
  "138.121.203.64",
  "138.121.203.88",
  "138.121.203.96",
  "138.121.203.128",
  "138.122.200.0",
  "138.186.20.0",
  "138.186.141.0",
  "138.186.188.0",
  "138.204.238.0",
  "138.204.239.0",
  "138.204.239.128",
  "138.204.239.132",
  "138.204.239.135",
  "138.204.239.136",
  "138.204.239.144",
  "138.204.239.160",
  "138.204.239.192",
  "138.255.96.0",
  "139.81.76.0",
  "141.101.108.0",
  "143.0.92.0",
  "143.0.102.0",
  "143.0.108.0",
  "143.137.96.0",
  "143.208.64.0",
  "144.178.28.204",
  "147.75.112.0",
  "152.195.23.0",
  "152.195.166.0",
  "152.200.0.0",
  "152.204.0.0",
  "152.231.24.0",
  "156.154.123.0",
  "157.185.166.0",
  "157.191.44.198",
  "157.191.45.198",
  "157.191.81.198",
  "157.191.175.30",
  "157.191.175.94",
  "157.191.175.158",
  "157.191.198.136",
  "157.253.0.0",
  "159.138.190.0",
  "160.181.173.0",
  "161.10.0.0",
  "161.18.0.0",
  "161.69.121.20",
  "161.69.121.36",
  "161.69.123.20",
  "161.69.123.36",
  "163.114.214.0",
  "163.116.226.0",
  "165.1.173.0",
  "165.1.221.128",
  "165.1.223.128",
  "165.1.224.0",
  "165.1.225.128",
  "166.210.32.0",
  "166.210.225.0",
  "167.0.0.0",
  "167.249.40.0",
  "167.250.120.0",
  "168.0.244.0",
  "168.90.12.0",
  "168.165.202.0",
  "168.176.0.0",
  "168.195.56.12",
  "168.195.56.20",
  "168.195.56.28",
  "168.195.56.36",
  "168.195.56.44",
  "168.195.56.52",
  "168.197.68.0",
  "168.227.0.0",
  "168.227.104.0",
  "168.227.244.0",
  "168.228.108.0",
  "168.228.124.0",
  "170.0.8.0",
  "170.78.40.0",
  "170.78.56.0",
  "170.78.185.0",
  "170.79.88.0",
  "170.80.8.0",
  "170.80.96.0",
  "170.81.24.0",
  "170.81.252.0",
  "170.82.40.0",
  "170.83.59.0",
  "170.238.64.0",
  "170.238.168.0",
  "170.238.226.0",
  "170.238.236.0",
  "170.239.154.0",
  "170.245.158.0",
  "170.246.112.0",
  "170.247.0.0",
  "170.254.0.0",
  "170.254.228.0",
  "172.69.204.0",
  "172.111.132.0",
  "173.205.107.48",
  "174.35.94.0",
  "177.73.152.0",
  "177.74.100.0",
  "177.74.204.0",
  "177.93.32.0",
  "177.126.32.0",
  "177.252.0.0",
  "178.49.128.0",
  "178.49.130.0",
  "179.0.9.0",
  "179.0.10.0",
  "179.0.15.0",
  "179.0.27.0",
  "179.0.29.0",
  "179.0.146.0",
  "179.0.154.1",
  "179.0.205.0",
  "179.1.0.0",
  "179.12.0.0",
  "179.18.0.0",
  "179.32.0.0",
  "179.42.78.0",
  "179.42.94.0",
  "179.42.172.0",
  "179.43.0.0",
  "179.43.104.0",
  "179.49.160.0",
  "179.49.224.0",
  "179.50.0.0",
  "179.51.96.0",
  "179.60.32.0",
  "179.60.240.0",
  "179.61.15.0",
  "179.61.112.0",
  "179.191.191.0",
  "181.32.0.0",
  "181.48.0.0",
  "181.68.0.0",
  "181.78.0.0",
  "181.78.16.0",
  "181.78.24.0",
  "181.78.28.0",
  "181.79.0.0",
  "181.79.64.0",
  "181.79.72.0",
  "181.118.144.0",
  "181.119.30.0",
  "181.128.0.0",
  "181.174.0.0",
  "181.192.128.0",
  "181.204.0.0",
  "181.215.135.16",
  "181.224.160.0",
  "181.225.64.0",
  "181.225.96.0",
  "181.225.188.0",
  "181.232.0.0",
  "181.234.0.0",
  "181.236.0.0",
  "181.240.0.0",
  "184.29.43.0",
  "185.39.8.0",
  "185.74.16.0",
  "185.125.225.21",
  "185.125.225.35",
  "185.166.253.0",
  "186.0.0.0",
  "186.1.128.0",
  "186.1.132.0",
  "186.1.139.0",
  "186.1.141.0",
  "186.1.143.0",
  "186.1.160.0",
  "186.1.249.0",
  "186.1.251.0",
  "186.1.252.0",
  "186.27.128.0",
  "186.28.0.0",
  "186.43.0.0",
  "186.80.0.0",
  "186.96.96.0",
  "186.97.0.0",
  "186.98.0.0",
  "186.102.0.0",
  "186.103.0.0",
  "186.112.0.0",
  "186.121.0.0",
  "186.144.0.0",
  "186.148.160.0",
  "186.154.0.0",
  "186.159.0.0",
  "186.159.64.0",
  "186.159.112.0",
  "186.168.0.0",
  "186.179.96.0",
  "186.180.0.0",
  "186.183.128.0",
  "186.190.224.0",
  "186.190.254.0",
  "186.194.160.0",
  "186.250.152.16",
  "186.250.152.40",
  "186.250.152.48",
  "187.73.176.0",
  "187.251.16.0",
  "189.50.208.0",
  "189.50.210.0",
  "189.85.40.0",
  "190.0.0.0",
  "190.0.240.0",
  "190.1.64.0",
  "190.1.128.0",
  "190.2.208.0",
  "190.3.192.0",
  "190.5.192.0",
  "190.6.160.0",
  "190.7.64.0",
  "190.7.66.0",
  "190.7.68.0",
  "190.7.72.0",
  "190.7.73.0",
  "190.7.73.12",
  "190.7.73.16",
  "190.7.73.32",
  "190.7.73.64",
  "190.7.73.128",
  "190.7.74.0",
  "190.7.76.0",
  "190.7.76.64",
  "190.7.76.80",
  "190.7.76.92",
  "190.7.76.96",
  "190.7.76.128",
  "190.7.77.0",
  "190.7.78.0",
  "190.7.80.0",
  "190.7.84.0",
  "190.7.86.0",
  "190.7.86.68",
  "190.7.86.72",
  "190.7.86.80",
  "190.7.86.96",
  "190.7.86.128",
  "190.7.87.0",
  "190.7.88.0",
  "190.7.96.0",
  "190.7.128.0",
  "190.8.176.0",
  "190.8.192.0",
  "190.9.33.188",
  "190.9.64.0",
  "190.9.192.0",
  "190.13.0.0",
  "190.13.80.0",
  "190.13.96.0",
  "190.13.192.0",
  "190.14.4.0",
  "190.14.224.0",
  "190.15.0.0",
  "190.24.0.0",
  "190.28.0.0",
  "190.52.0.0",
  "190.52.104.0",
  "190.52.108.0",
  "190.52.110.0",
  "190.52.117.96",
  "190.60.0.0",
  "190.60.10.0",
  "190.60.20.0",
  "190.60.24.0",
  "190.60.26.0",
  "190.60.28.0",
  "190.60.31.0",
  "190.60.32.0",
  "190.60.64.0",
  "190.60.65.0",
  "190.60.65.96",
  "190.60.65.128",
  "190.60.66.0",
  "190.60.68.0",
  "190.60.72.0",
  "190.60.80.0",
  "190.60.96.0",
  "190.60.192.0",
  "190.61.0.0",
  "190.61.4.0",
  "190.61.4.32",
  "190.61.4.48",
  "190.61.4.64",
  "190.61.4.128",
  "190.61.6.0",
  "190.61.8.0",
  "190.61.16.0",
  "190.61.17.0",
  "190.61.17.128",
  "190.61.17.192",
  "190.61.17.195",
  "190.61.17.196",
  "190.61.17.200",
  "190.61.17.208",
  "190.61.17.224",
  "190.61.18.0",
  "190.61.20.0",
  "190.61.25.0",
  "190.61.26.0",
  "190.61.28.0",
  "190.61.40.0",
  "190.61.55.0",
  "190.61.57.0",
  "190.61.59.0",
  "190.61.61.0",
  "190.61.62.0",
  "190.61.64.0",
  "190.61.87.0",
  "190.61.92.0",
  "190.61.128.0",
  "190.61.161.0",
  "190.61.162.0",
  "190.61.164.0",
  "190.61.168.0",
  "190.61.176.0",
  "190.61.181.0",
  "190.61.182.0",
  "190.61.184.0",
  "190.61.192.0",
  "190.61.200.0",
  "190.61.206.0",
  "190.61.210.0",
  "190.61.212.0",
  "190.61.216.0",
  "190.61.218.0",
  "190.61.221.0",
  "190.61.222.0",
  "190.61.224.0",
  "190.65.0.0",
  "190.66.0.0",
  "190.68.0.0",
  "190.83.76.0",
  "190.84.0.0",
  "190.90.0.0",
  "190.90.16.0",
  "190.90.20.0",
  "190.90.22.0",
  "190.90.23.0",
  "190.90.23.128",
  "190.90.23.160",
  "190.90.23.192",
  "190.90.24.0",
  "190.90.28.0",
  "190.90.30.0",
  "190.90.30.128",
  "190.90.30.192",
  "190.90.30.200",
  "190.90.30.204",
  "190.90.30.208",
  "190.90.30.213",
  "190.90.30.216",
  "190.90.30.222",
  "190.90.30.224",
  "190.90.31.0",
  "190.90.32.0",
  "190.90.64.0",
  "190.90.128.0",
  "190.90.192.128",
  "190.90.193.0",
  "190.90.194.128",
  "190.90.195.0",
  "190.90.196.0",
  "190.90.200.0",
  "190.90.202.0",
  "190.90.204.0",
  "190.90.208.0",
  "190.90.216.0",
  "190.90.220.0",
  "190.90.222.0",
  "190.90.224.0",
  "190.93.128.0",
  "190.96.128.0",
  "190.97.64.0",
  "190.97.128.0",
  "190.97.192.0",
  "190.98.142.167",
  "190.98.142.172",
  "190.98.142.180",
  "190.98.142.188",
  "190.98.142.196",
  "190.98.142.200",
  "190.98.142.208",
  "190.98.142.210",
  "190.99.128.0",
  "190.102.120.0",
  "190.102.160.0",
  "190.102.192.0",
  "190.103.96.0",
  "190.103.104.0",
  "190.103.108.0",
  "190.103.108.128",
  "190.103.108.152",
  "190.103.108.160",
  "190.103.108.192",
  "190.103.109.0",
  "190.103.110.0",
  "190.103.111.0",
  "190.103.111.128",
  "190.103.111.192",
  "190.103.111.212",
  "190.103.111.216",
  "190.103.111.224",
  "190.103.112.0",
  "190.103.113.0",
  "190.103.113.64",
  "190.103.113.80",
  "190.103.113.96",
  "190.103.113.128",
  "190.103.114.0",
  "190.103.114.128",
  "190.103.114.192",
  "190.103.114.232",
  "190.103.114.240",
  "190.103.115.0",
  "190.103.116.0",
  "190.103.120.0",
  "190.103.124.0",
  "190.103.125.0",
  "190.103.125.72",
  "190.103.125.80",
  "190.103.125.96",
  "190.103.125.128",
  "190.103.126.0",
  "190.105.207.128",
  "190.105.229.0",
  "190.107.16.0",
  "190.108.76.0",
  "190.109.0.0",
  "190.109.128.0",
  "190.110.64.0",
  "190.115.224.0",
  "190.120.128.0",
  "190.120.228.0",
  "190.120.230.0",
  "190.121.128.0",
  "190.124.96.0",
  "190.125.0.0",
  "190.126.0.0",
  "190.128.0.0",
  "190.130.64.0",
  "190.131.192.0",
  "190.131.224.0",
  "190.131.232.0",
  "190.131.236.0",
  "190.131.237.0",
  "190.131.237.128",
  "190.131.238.0",
  "190.131.240.0",
  "190.143.0.0",
  "190.144.0.0",
  "190.151.192.0",
  "190.156.0.0",
  "190.165.0.0",
  "190.171.76.0",
  "190.182.0.0",
  "190.184.128.0",
  "190.184.200.0",
  "190.211.140.0",
  "190.216.128.0",
  "190.216.152.0",
  "190.216.192.0",
  "190.217.16.0",
  "190.217.20.0",
  "190.217.21.0",
  "190.217.21.64",
  "190.217.21.80",
  "190.217.21.96",
  "190.217.21.192",
  "190.217.22.0",
  "190.217.24.0",
  "190.217.26.0",
  "190.217.27.0",
  "190.217.27.128",
  "190.217.28.0",
  "190.217.29.0",
  "190.217.29.128",
  "190.217.29.144",
  "190.217.29.160",
  "190.217.29.192",
  "190.217.30.0",
  "190.217.30.64",
  "190.217.30.96",
  "190.217.30.104",
  "190.217.30.112",
  "190.217.30.128",
  "190.217.31.0",
  "190.217.48.0",
  "190.217.56.0",
  "190.217.60.0",
  "190.217.61.0",
  "190.217.61.64",
  "190.217.61.96",
  "190.217.61.112",
  "190.217.61.120",
  "190.217.61.128",
  "190.217.62.0",
  "190.217.63.0",
  "190.217.63.64",
  "190.217.63.80",
  "190.217.63.88",
  "190.217.63.96",
  "190.217.63.104",
  "190.217.63.112",
  "190.217.63.120",
  "190.217.63.128",
  "190.217.63.192",
  "190.217.63.208",
  "190.217.63.216",
  "190.217.63.224",
  "190.217.64.0",
  "190.217.65.0",
  "190.217.65.64",
  "190.217.65.80",
  "190.217.65.88",
  "190.217.65.96",
  "190.217.65.128",
  "190.217.66.0",
  "190.217.66.224",
  "190.217.67.0",
  "190.217.68.0",
  "190.217.68.128",
  "190.217.68.192",
  "190.217.68.208",
  "190.217.68.224",
  "190.217.69.0",
  "190.217.69.64",
  "190.217.69.80",
  "190.217.69.88",
  "190.217.69.96",
  "190.217.69.128",
  "190.217.70.0",
  "190.217.70.128",
  "190.217.70.192",
  "190.217.70.200",
  "190.217.70.208",
  "190.217.70.224",
  "190.217.71.0",
  "190.217.80.0",
  "190.217.96.0",
  "190.217.98.0",
  "190.217.98.32",
  "190.217.98.40",
  "190.217.98.48",
  "190.217.98.64",
  "190.217.98.128",
  "190.217.99.0",
  "190.217.99.128",
  "190.217.99.192",
  "190.217.99.224",
  "190.217.99.240",
  "190.217.99.248",
  "190.217.99.252",
  "190.217.100.0",
  "190.217.101.0",
  "190.217.101.32",
  "190.217.101.48",
  "190.217.101.56",
  "190.217.101.64",
  "190.217.101.128",
  "190.217.102.0",
  "190.217.104.0",
  "190.217.104.128",
  "190.217.104.192",
  "190.217.104.224",
  "190.217.104.240",
  "190.217.105.0",
  "190.217.105.128",
  "190.217.105.192",
  "190.217.105.224",
  "190.217.105.232",
  "190.217.105.240",
  "190.217.106.0",
  "190.217.108.0",
  "190.217.110.128",
  "190.217.112.0",
  "190.217.113.0",
  "190.217.113.128",
  "190.217.113.144",
  "190.217.113.152",
  "190.217.113.160",
  "190.217.113.192",
  "190.217.114.0",
  "190.217.116.0",
  "190.217.117.0",
  "190.217.117.128",
  "190.217.117.144",
  "190.217.117.148",
  "190.217.117.152",
  "190.217.117.160",
  "190.217.117.192",
  "190.217.118.0",
  "190.217.119.0",
  "190.217.119.64",
  "190.217.119.96",
  "190.217.119.128",
  "190.240.0.0",
  "190.242.0.0",
  "190.242.2.0",
  "190.242.4.0",
  "190.242.6.0",
  "190.242.7.0",
  "190.242.7.128",
  "190.242.16.0",
  "190.242.22.0",
  "190.242.28.0",
  "190.242.32.0",
  "190.242.48.0",
  "190.242.52.0",
  "190.242.58.0",
  "190.242.60.0",
  "190.242.64.0",
  "190.242.96.0",
  "190.242.98.0",
  "190.242.100.0",
  "190.242.103.0",
  "190.242.104.0",
  "190.242.112.0",
  "190.242.120.0",
  "190.242.123.0",
  "190.242.124.0",
  "190.242.128.0",
  "190.242.144.0",
  "190.242.146.0",
  "190.242.152.0",
  "190.242.154.0",
  "190.242.155.0",
  "190.242.155.128",
  "190.242.155.160",
  "190.242.155.192",
  "190.242.157.0",
  "190.242.158.0",
  "190.242.161.0",
  "190.242.162.0",
  "190.242.164.0",
  "190.242.168.0",
  "190.242.171.0",
  "190.242.172.0",
  "190.242.176.0",
  "190.242.192.0",
  "190.243.0.0",
  "190.248.0.0",
  "191.64.0.0",
  "191.72.0.0",
  "191.74.0.0",
  "191.75.0.0",
  "191.75.128.0",
  "191.75.196.0",
  "191.75.200.0",
  "191.75.208.0",
  "191.75.224.0",
  "191.76.0.0",
  "191.88.0.0",
  "191.97.0.0",
  "191.97.100.0",
  "191.98.0.0",
  "191.101.63.0",
  "191.102.0.0",
  "191.102.60.0",
  "191.102.64.0",
  "191.102.192.0",
  "191.102.224.0",
  "191.103.128.0",
  "191.104.0.0",
  "191.144.0.0",
  "192.68.185.0",
  "192.92.154.0",
  "192.100.191.0",
  "192.135.95.0",
  "192.140.124.0",
  "192.151.179.0",
  "192.229.213.0",
  "192.231.116.0",
  "194.50.99.49",
  "194.50.111.49",
  "196.19.212.0",
  "198.49.128.0",
  "198.51.71.0",
  "198.228.90.0",
  "198.255.115.0",
  "199.33.68.0",
  "199.232.48.0",
  "200.0.187.0",
  "200.0.201.0",
  "200.1.64.0",
  "200.1.96.0",
  "200.1.124.0",
  "200.1.126.0",
  "200.1.173.0",
  "200.1.175.0",
  "200.1.192.0",
  "200.2.64.0",
  "200.3.128.0",
  "200.3.144.0",
  "200.3.147.0",
  "200.3.148.0",
  "200.3.152.0",
  "200.3.160.0",
  "200.3.192.0",
  "200.3.244.0",
  "200.4.16.0",
  "200.6.160.0",
  "200.9.72.0",
  "200.9.94.0",
  "200.9.158.0",
  "200.10.28.0",
  "200.10.136.0",
  "200.10.154.0",
  "200.10.164.0",
  "200.10.174.0",
  "200.10.235.0",
  "200.11.33.0",
  "200.11.40.0",
  "200.12.170.0",
  "200.12.175.0",
  "200.12.176.0",
  "200.13.192.0",
  "200.14.40.0",
  "200.14.112.0",
  "200.14.232.0",
  "200.14.234.0",
  "200.14.234.128",
  "200.14.235.0",
  "200.14.236.0",
  "200.14.238.0",
  "200.14.239.0",
  "200.14.239.128",
  "200.14.253.128",
  "200.16.68.0",
  "200.16.79.0",
  "200.16.117.0",
  "200.16.118.0",
  "200.21.0.0",
  "200.23.75.0",
  "200.23.115.0",
  "200.24.0.0",
  "200.24.8.0",
  "200.24.16.0",
  "200.24.32.0",
  "200.24.96.0",
  "200.25.0.0",
  "200.25.16.0",
  "200.25.25.0",
  "200.25.26.0",
  "200.25.28.0",
  "200.25.54.76",
  "200.25.54.78",
  "200.25.54.84",
  "200.25.54.92",
  "200.25.54.100",
  "200.25.54.108",
  "200.25.54.119",
  "200.25.54.124",
  "200.25.54.126",
  "200.25.55.4",
  "200.25.55.12",
  "200.25.55.20",
  "200.25.55.28",
  "200.25.55.36",
  "200.25.55.44",
  "200.25.55.52",
  "200.25.64.0",
  "200.25.224.0",
  "200.26.128.0",
  "200.26.232.0",
  "200.29.96.0",
  "200.29.232.0",
  "200.30.64.0",
  "200.31.8.0",
  "200.31.10.0",
  "200.31.12.0",
  "200.31.16.0",
  "200.31.16.16",
  "200.31.16.24",
  "200.31.16.32",
  "200.31.16.64",
  "200.31.16.128",
  "200.31.17.0",
  "200.31.19.0",
  "200.31.20.0",
  "200.31.20.128",
  "200.31.20.136",
  "200.31.20.144",
  "200.31.20.160",
  "200.31.20.192",
  "200.31.21.0",
  "200.31.21.128",
  "200.31.21.144",
  "200.31.21.152",
  "200.31.21.160",
  "200.31.21.192",
  "200.31.22.0",
  "200.31.64.0",
  "200.31.192.0",
  "200.32.80.0",
  "200.32.80.64",
  "200.32.80.96",
  "200.32.80.104",
  "200.32.80.112",
  "200.32.80.128",
  "200.32.81.0",
  "200.32.82.0",
  "200.34.0.0",
  "200.34.171.0",
  "200.35.32.0",
  "200.41.4.0",
  "200.41.50.0",
  "200.41.64.0",
  "200.41.72.0",
  "200.41.76.0",
  "200.47.0.0",
  "200.47.156.0",
  "200.47.156.128",
  "200.47.157.0",
  "200.47.158.0",
  "200.47.172.0",
  "200.47.216.0",
  "200.58.192.0",
  "200.58.224.0",
  "200.62.60.0",
  "200.69.64.0",
  "200.69.66.0",
  "200.69.67.0",
  "200.69.67.8",
  "200.69.67.13",
  "200.69.67.14",
  "200.69.67.16",
  "200.69.67.32",
  "200.69.67.64",
  "200.69.67.128",
  "200.69.68.0",
  "200.69.72.0",
  "200.69.80.0",
  "200.69.96.0",
  "200.71.32.0",
  "200.74.128.0",
  "200.75.32.0",
  "200.75.64.0",
  "200.81.56.0",
  "200.81.119.32",
  "200.85.224.0",
  "200.89.96.0",
  "200.89.192.0",
  "200.91.192.0",
  "200.93.128.0",
  "200.106.196.0",
  "200.110.168.0",
  "200.112.192.0",
  "200.112.208.0",
  "200.114.0.0",
  "200.115.178.0",
  "200.115.180.0",
  "200.116.0.0",
  "200.118.0.0",
  "200.119.0.0",
  "200.122.192.0",
  "200.124.124.0",
  "200.192.106.0",
  "201.49.128.0",
  "201.130.16.0",
  "201.131.46.0",
  "201.131.78.0",
  "201.131.88.0",
  "201.131.97.0",
  "201.131.114.0",
  "201.131.188.0",
  "201.150.96.0",
  "201.175.24.0",
  "201.182.248.0",
  "201.184.0.0",
  "201.190.64.0",
  "201.216.0.0",
  "201.217.192.0",
  "201.219.112.0",
  "201.219.192.0",
  "201.219.240.0",
  "201.220.30.0",
  "201.220.32.0",
  "201.220.64.0",
  "201.221.122.0",
  "201.221.124.0",
  "201.221.128.0",
  "201.222.40.0",
  "201.228.0.0",
  "201.232.0.0",
  "201.233.0.0",
  "201.233.32.0",
  "201.233.48.0",
  "201.233.48.16",
  "201.233.48.32",
  "201.233.48.64",
  "201.233.48.128",
  "201.233.49.0",
  "201.233.50.0",
  "201.233.52.0",
  "201.233.56.0",
  "201.233.64.0",
  "201.233.128.0",
  "201.234.64.0",
  "201.234.176.0",
  "201.234.240.0",
  "201.234.240.32",
  "201.234.240.40",
  "201.234.240.48",
  "201.234.240.64",
  "201.234.240.128",
  "201.234.241.0",
  "201.234.242.0",
  "201.234.244.0",
  "201.236.192.0",
  "201.244.0.0",
  "204.199.64.0",
  "204.199.80.0",
  "204.199.82.0",
  "204.199.84.0",
  "204.199.88.0",
  "204.199.96.0",
  "205.234.171.0",
  "206.49.176.0",
  "206.223.124.0",
  "207.248.81.0",
  "208.33.28.180",
  "208.115.128.0",
  "208.116.139.136",
  "208.116.207.112",
  "208.116.210.128",
  "208.116.250.160",
  "208.127.170.139",
  "208.127.170.140",
  "208.127.170.144",
  "208.127.170.160",
  "209.88.63.0",
  "209.88.104.0",
  "209.88.168.0",
  "209.120.226.112",
  "216.72.4.0",
  "216.72.7.0",
  "216.72.79.0",
  "216.72.135.0",
  "216.72.136.0",
  "216.72.228.0",
  "216.72.232.0",
  "216.72.238.0",
  "216.194.96.16",
  "216.239.55.176"
]


function colombiablocker(req, res, next) {
    var ipsplit = req.ip.split(".");
  var found = 0;
  for(i = 0; i < blockedips.length; i++) {
    let tmpSplit = blockedips[i].split(".");
    if(ipsplit[0] == tmpSplit[0] && ipsplit[1] == tmpSplit[1] && ipsplit[2] == tmpSplit[2] ) {
      found = 1;
    }
  }
  if(found) {
     console.log("## Colombian chode eliminated. His ip address was : " + req.ip);
     res.send("<h1>Internal Server Error 401</h1>");
  }
  else {
    next();
  }
}


module.exports = colombiablocker;