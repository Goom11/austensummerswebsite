var fs = require('fs'),
    http = require('http'),
    https = require('https'),
    express = require('express'),
    router = require("./routes/index");

var port = 80;

var options = {
    key: fs.readFileSync('/etc/letsencrypt/live/austensummers.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/austensummers.com/cert.pem'),
};

var app = express();

//Middlewares
app.use(express.static("public"));

//Routing
app.use("/", router);

var server = https.createServer(options, app).listen(port, function(){
  console.log("Express server listening on port " + port);
});




