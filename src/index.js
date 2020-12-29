const express = require("express");
const path = require("path");
const app = express();

//Settings
app.set("port", 8080);
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

//Middlewares

//Routes
app.use(require("./routes/index"));

//Static Files
app.use(express.static(path.join(__dirname, "public")));

//Listening to Server
app.listen(app.get("port"), () => {
  console.log("Servidor en el puerto:", app.get("port"));
});
