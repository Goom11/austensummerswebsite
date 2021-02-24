const express = require("express");
const router = require("./routes/index");
const fs = require('fs');
const https = require('https');
const http = require('http');

//App Setup
const app = express();

//SSL
var credentials = {
     key: fs.readFileSync('/etc/letsencrypt/live/austensummers.com/privkey.pem', 'utf8'),
     cert: fs.readFileSync('/etc/letsencrypt/live/austensummers.com/fullchain.pem', 'utf8'),
     ca: fs.readFileSync('/etc/letsencrypt/live/austensummers.com/chain.pem', 'utf8')
}



//Middlewares
app.use(express.static("public"));

//Routing
app.use("/", router);

//Let's Run the App
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});
