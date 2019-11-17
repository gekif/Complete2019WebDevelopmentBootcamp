const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.route('/').get((req, res) => {
    res.render('home');
});

app.route('/login').get((req, res) => {
    res.render('login');
});

app.route('/register').get((req, res) => {
    res.render('register');
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});