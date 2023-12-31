const config = require("config");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use("/static", express.static(config.app.static_folder));
app.use(require("./middlewares/share"))


app.set("views", config.app.views_folder);
app.set("view engine", config.app.view_engine);
app.set('trust proxy', 1) // trust first proxy
//config session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(require("../routers/web"));

module.exports = app;