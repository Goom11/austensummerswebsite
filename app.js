var fs = require("fs"),
  http = require("http"),
  https = require("https"),
  express = require("express"),
  router = require("./routes/index");

//App
var app = express();
app.use(express.static("public"));

//Enforce HTTPS
app.use(function (req, res, next) {
  if (req.secure) {
    next();
  } else {
    res.redirect("https://" + req.headers.host + req.url);
  }
});

//Routing
app.use("/", router);

//SSL Setup
const httpServer = http.createServer(app);
const httpsServer = https.createServer(
  {
    key: fs.readFileSync("/etc/letsencrypt/live/austensummers.com/privkey.pem"),
    cert: fs.readFileSync(
      "/etc/letsencrypt/live/austensummers.com/fullchain.pem"
    ),
  },
  app
);

//Launch!
httpServer.listen(80, () => {
  console.log("HTTP Server running on port 80!");
});

httpsServer.listen(443, () => {
  console.log("HTTPS Server running on port 443!");
});
