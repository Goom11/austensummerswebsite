const express = require("express");
var router = require("./routes/index");
 
//App Setup and Middlewares
const app = express();
app.use(express.static("public"));

//Routing
app.use("/", router);

//Let's Run the App
app.listen(80, "127.0.0.1", () => {
  console.log(`AustenSummers Website Up And Running...`)
});
