// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT =  process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });
  app.get("/index.html", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });
  app.get("/about.html", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/about.html"));
  });
  app.get("/web-design.html", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/web-design.html"));
  });
  app.get("/photography.html", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/photography.html"));
  });
  app.get("/writing.html", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/writing.html"));
  });

  //initilize server
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });