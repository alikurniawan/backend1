const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.all("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/apps.html"));
});
app.all("*", (req, res) => {
  res.send("<h1>Sorry Dear You are Ridicilous !!</h1>");
});

app.listen(3000, console.log("OK 3000"));
