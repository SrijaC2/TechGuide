const { request, response } = require("express");
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.engine('ejs', require('ejs').__express);
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + '/public'));
app.set("views", path.join(__dirname, "views"));

const session = require('express-session');
app.use(session({
  secret: 'your-secret-key', // Replace with your secret key
  resave: false,
  saveUninitialized: true,
}));
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let BucketList = [
  { ID:"0",lang:'english', url: "https://drive.google.com/file/d/1duT7IgyZt8DHveleAkYl6CSxsS5SAMKJ/preview", type: 'Shop' ,name:'Amazon', try: "https://www.amazon.in/"},
  { ID:"0",lang:'telugu',url: "https://drive.google.com/file/d/1rTkKXO_zpw4jbc-ii7pZ5opLs0o2jP1z/preview", type: 'Shop' ,name:'Amazon', try: "https://www.amazon.in/"},
  { ID:"0",lang:'hindi',url: "https://drive.google.com/file/d/14114ucPQF6LykcepUyR3pY1SNLTKFJ7s/preview", type: 'Shop' ,name:'Amazon', try: "https://www.amazon.in/"},

  { ID:"1",lang:'telugu',url: "https://drive.google.com/file/d/1mbu5saWMQ9j2twPCd05Qo5fXRd9vUxLC/preview", type: 'Shop' ,name:'Flipkart', try: "https://www.flipkart.com/"},
  { ID:"1",lang:'hindi',url: "https://drive.google.com/file/d/1bODCWH1HUbvdc9kGyeGa11pfVSC-GLd8/preview", type: 'Shop' ,name:'Flipkart', try: "https://www.flipkart.com/"},
  { ID:"1",lang:'english',url: "https://drive.google.com/file/d/1tKAkbpqTIBnGlDgCQu7J7BL3aDXaPF-e/preview", type: 'Shop' ,name:'Flipkart', try: "https://www.flipkart.com/"},

  { ID:"2",lang:'english', url: "https://drive.google.com/file/d/15qfCGxr5ci-9MnL1ui0ifrfKE0ffl4Ag/preview", type: 'Food' ,name:'Swiggy', try: "https://www.swiggy.com/"},
  { ID:"2",lang:'telugu', url: "https://drive.google.com/file/d/19KvxwTNAR7NnD2iZzAqpFC7T_-qM5ea5/preview", type: 'Food' ,name:'Swiggy', try: "https://www.swiggy.com/"},
  { ID:"2",lang:'hindi', url: "https://drive.google.com/file/d/1T4Fmxss_aFTPYeoH8lo4FmUmuHGcPl-L/preview", type: 'Food' ,name:'Swiggy', try: "https://www.swiggy.com/"},

  { ID:"3",lang:'telugu', url: "https://drive.google.com/file/d/1P9FS144ft0p0bhBWYzVXSXc4IQZmKwUQ/preview", type: 'Food' ,name:'Zomato', try: "https://www.zomato.com/hyderabad"},
  { ID:"3",lang:'hindi', url: "https://drive.google.com/file/d/1xwj3f3TS_IxZrNH1QKo9sQnALtiUkMOT/preview", type: 'Food' ,name:'Zomato', try: "https://www.zomato.com/hyderabad"},
  { ID:"3",lang:'english', url: "https://drive.google.com/file/d/1RRdaMqs8EO4QEckKmp3dmC9ooUI6KBuv/preview", type: 'Food' ,name:'Zomato', try: "https://www.zomato.com/hyderabad"},

  { ID:"4",lang:'english',url: "https://drive.google.com/file/d/11uFoWI1bx6JhZ2KKl1_SVWtXG8FhpTKz/preview", type: 'Payment',name:'Google Pay', try: "https://pay.google.com/about/"},
  { ID:"4",lang:'telugu',url: "https://drive.google.com/file/d/1V5PFyaL1OjLYsQCtMJKzBqWN45eQOLr-/preview", type: 'Payment',name:'Google Pay', try: "https://pay.google.com/about/"},
  { ID:"4",lang:'hindi',url: "https://drive.google.com/file/d/14Exy4Sc4PT68WKbprvv6KvaQNN9t1vI1/preview", type: 'Payment',name:'Google Pay', try: "https://pay.google.com/about/"},

  { ID:"5",lang:'telugu',url: "https://drive.google.com/file/d/179k57Xe8v0fVTvTw3FoWke3tSLyRO_RL/preview", type: 'Payment',name:'paytm', try: "https://paytm.com/"},
  { ID:"5",lang:'hindi',url: "https://drive.google.com/file/d/1_cZedRg5LPNYel4_Ce1tZUhFhLBFSqEf/preview", type: 'Payment',name:'paytm', try: "https://paytm.com/"},
  { ID:"5",lang:'english',url: "https://drive.google.com/file/d/1-SXJipeOVu-QEwczZyFoKLc0CFIphDQ4/preview", type: 'Payment',name:'paytm', try: "https://paytm.com/"},

  {ID:"6",lang:'english', url: "https://drive.google.com/file/d/1T1pZ467k9LRFhJD1jqrnbMPhhSIloyJg/preview", type: 'Travel' ,name:'Uber', try: "https://m.uber.com/"},
  {ID:"6",lang:'hindi', url: "https://drive.google.com/file/d/1GKdeKSuM8UBu52NbDv1rhFtuGv3CEIRs/preview", type: 'Travel' ,name:'Uber', try: "https://m.uber.com/"},
  {ID:"6",lang:'telugu', url: "https://drive.google.com/file/d/1pI1aB0C06Bs1gx_zPC0tjh4MS0t9o_GO/preview", type: 'Travel' ,name:'Uber', try: "https://m.uber.com/"},

  {ID:"7",lang:'english', url: "https://drive.google.com/file/d/13loMmn_pJq0PdefUBYDrnGtvtKBk7YCt/preview", type: 'Travel' ,name:'IRCTC', try: "https://www.irctc.co.in/nget/train-search"},
  {ID:"7",lang:'telugu', url: "https://drive.google.com/file/d/1rwweYlKqCg-NNz7mQwv0mjXesmrOIZQu/preview", type: 'Travel' ,name:'IRCTC', try: "https://www.irctc.co.in/nget/train-search"},
  {ID:"7",lang:'hindi', url: "https://drive.google.com/file/d/1L0Ooy87Ras7-iK4o6ECLT11Zpeef4gNH/preview", type: 'Travel' ,name:'IRCTC', try: "https://www.irctc.co.in/nget/train-search"}
];

app.post('/set-font-size', async (request, response) => {
  console.log(request.body)
  const selectedFontSize = request.body.fontSize;

  request.session.fontSize = selectedFontSize;


  response.redirect('/');
});

app.post('/set-font-size/:id', async (request, response) => {
  console.log(request.body)
  const selectedLanguage = request.body.language;

  request.session.language = selectedLanguage;


  response.redirect(`/video/${request.params.id}`);
});

app.get("/", async (request, response) => {
  const selectedFontSize = request.session.fontSize || 'medium';
  return response.render("index", {
    fontSize: selectedFontSize,
  });
  
});
app.get("/typesOfApps", async (request, response) => {
  const selectedFontSize = request.session.fontSize || '15px';
  return response.render("typesOfApps", {
    fontSize: selectedFontSize,
  });
});

app.get("/video/:id", async (request, response) => {
  const selectedFontSize = request.session.fontSize || '15px';
  const selectedLanguage = request.session.language || 'english'
  let id = request.params.id;
  const filteredItems = BucketList.filter(item => item.ID === id);
  return response.render("video",{
    objects: filteredItems,
    fontSize: selectedFontSize,
    selectedLanguage
  });
});

app.get("/category/:type", async (request, response) => {
  const selectedFontSize = request.session.fontSize || '15px';

  let type = request.params.type;
  try{
    return response.render("category",{
      fontSize: selectedFontSize,
      type
    });
  }catch (error) {
      console.log(error);
    }
});




module.exports = app;