const { request, response } = require("express");
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.engine('ejs', require('ejs').__express);
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + '/public'));
app.set("views", path.join(__dirname, "views"));

let BucketList = [
  { url: "https://www.youtube.com/embed/vhpC4m61w-o", type: 'Shop' ,name:'Amazon', try: "https://www.amazon.in/"},
  { url: "https://www.youtube.com/embed/orOdajUOC6o", type: 'Food' ,name:'Swiggy', try: "https://www.swiggy.com/"},
  { url: "https://www.youtube.com/embed/-E8IQ8jekkQ", type: 'Payment' ,name:'Google Pay', try: "https://pay.google.com/about/"},
  { url: "https://www.youtube.com/embed/D8HI7Bg4Dqw", type: 'Travel' ,name:'Uber', try: "https://m.uber.com/"}
];

app.get("/", async (request, response) => {
  return response.render("index");
});
app.get("/typesOfApps", async (request, response) => {
  return response.render("typesOfApps");
});

app.get("/video/:id", async (request, response) => {
  let id = request.params.id;
  return response.render("video",{
    object: BucketList[id]
  });
});


module.exports = app;