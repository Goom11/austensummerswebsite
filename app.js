const express = require("express");
const router = require("./routes/index");
const fs = require('fs');
const https = require('https');
const https = require('http');

//App Setup
const app = express();

//SSL
const privateKey = fs.readFileSync('/ssl/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/ssl/cert.pem', 'utf8');
const ca = fs.readFileSync('/ssl/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};


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