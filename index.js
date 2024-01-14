const express = require("express");
const bodyParser = require("body-parser");
//const Joi = require('joi');
const path = require("path");
const session = require('express-session');
//const ejs = require('ejs');
//const crypt = require('bcrypt');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const fs = require('fs');
//const favicon = require('serve-favicon');

//const db = require("./server");
//const cltusers = "users";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// session/connect-mongo db

// set locals sessions
app.use(express.static(path.join(__dirname, 'html')));
// SETTING FAVICON
//app.use(favicon(__dirname, '/img/log4.png'));

// FUNCTIONALITIES APPLIED - FUNTIONALITIES AND CONNECTION BELOW
//----------------------------------------------------------- 

// SETTING UP ROUTES
// setting login
// locale javascript funcs
var lJs = '';

// get Gen lcl

app.get('/', (req, res) => {
    lJs = 'hme';
    res.sendFile(path.join(__dirname, 'html/index.html'));
});

// connection

app.listen(process.env.PORT || 8000, () => {
    console.log('Connected successfully! app listening on port 2020');
})

module.exports = app;
