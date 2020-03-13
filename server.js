// libraries
const express = require("express");
const path = require("path");
const favicon = require("express-favicon");

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "dist")));
app.use(favicon(__dirname + "/dist/favicon.ico"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
app.listen(port);
