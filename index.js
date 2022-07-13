const express = require("express");
require("dotenv").config();
const {engine} = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 8000;

const logger = (req, res, next) => {
  console.log(req.method);
  next();
};

app.use(express.json());

// add new template engine for express
app.engine("handlebars", engine());

// define handlebars as template engine in express
app.set("view engine", "handlebars");

// define the directory of the files
app.set("views", "./views");

app.use(express.static('public'));

app.get('/',(req,res) => {
    res.redirect('/users');
});

app.get('/about',(req,res) => {
    res.render('about',{title: 'About us'});
});

app.get('/users',(req,res) => {
    res.render('users');
});

app.get('*',(req,res) => {
    res.render('pageNotFound');
});

app.listen(PORT, () => console.log("Server started on port " + PORT));