const express = require("express");
const router = require("./routes/index");
const fs = require('fs');
const https = require('https');
const http = require('http');

//App Setup
const app = express();

//SSL
var options = {
     key: fs.readFileSync('/etc/letsencrypt/live/austensummers.com/privkey.pem'),
     cert: fs.readFileSync('/etc/letsencrypt/live/austensummers.com/fullchain.pem'),
     ca: fs.readFileSync('/etc/letsencrypt/live/austensummers.com/chain.pem')
}



//Middlewares
app.use(express.static("public"));

//Routing
app.use("/", router);

//Let's Run the App
var server = https.createServer(options, app);
server.listen(8080, '127.0.0.1');