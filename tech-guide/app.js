const { request, response } = require("express");
const express = require("express");
// const csrf = require("tiny-csrf");
const app = express();
// const { Persons,Rooms,Events } = require("./models");
// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
// app.use(bodyParser.json());

app.set("view engine", "ejs");
app.engine('ejs', require('ejs').__express);
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + '/public'));

// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser("shh! some secret string"));
// app.use(csrf("this_should_be_32_character_long", ["POST", "PUT", "DELETE"]));

// const passport = require("passport");
// const connectEnsureLogin = require("connect-ensure-login");
// const session = require("express-session");
// const LocalStrategy = require("passport-local");

// const flash = require("connect-flash");
app.set("views", path.join(__dirname, "views"));
app.get("/", async (request, response) => {
  return response.render("index");
});

app.get("/typesOfApps", async (request, response) => {
  return response.render("typesOfApps");
});

app.get("/video/:id", async (request, response) => {
  return response.render("video");
});


module.exports = app;