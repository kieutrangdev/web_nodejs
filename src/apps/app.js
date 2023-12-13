const config = require("config");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use("/static", express.static(config.app.static_folder));
app.set("views", config.app.views_folder);
app.set("view engine", config.app.view_engine);
app.use(require("../routers/web"));

module.exports = app;