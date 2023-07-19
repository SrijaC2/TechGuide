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

// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser("shh! some secret string"));
// app.use(csrf("this_should_be_32_character_long", ["POST", "PUT", "DELETE"]));

// const passport = require("passport");
// const connectEnsureLogin = require("connect-ensure-login");
// const session = require("express-session");
// const LocalStrategy = require("passport-local");

// const flash = require("connect-flash");
app.set("views", path.join(__dirname, "views"));
// app.use(flash());

// const bcrypt = require("bcrypt");
// const saltRounds = 10;

// app.use(
//   session({
//     secret: "my-super-secret-key-21728172615261563",
//     cookie: {
//       maxAge: 24 * 60 * 60 * 1000,
//     },
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// app.use(function (request, response, next) {
//   response.locals.messages = request.flash();
//   next();
// });

// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "email",
//       passwordField: "password",
//     },
//     (username, password, done) => {
//         Persons.findOne({ where: { email: username } })
//         .then(async function (user) {
//           const result = await bcrypt.compare(password, user.password);
//           if (result) {
//             return done(null, user);
//           } else {
//             return done(null, false, { message: "Invalid password" });
//           }
//         })
//         .catch((error) => {
//           return done(null, false, {
//             message: "Your account doesn't exist, try signing up",
//           });
//         });
//     }
//   )
// );

// passport.serializeUser((user, done) => {
//   console.log("Serializing user in session", user.id);
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//     Persons.findByPk(id)
//     .then((user) => {
//       done(null, user);
//     })
//     .catch((error) => {
//       done(error, null);
//     });
// });

app.get("/", async (request, response) => {
  return response.render("index");
});

module.exports = app;