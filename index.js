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

const db = require("./server");
const cltusers = "users";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// session/connect-mongo db
mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
const NODE_ENV = 'developement';
const IN_PROD = NODE_ENV === 'production';
app.use(session( {
    sessname: '',
    secret: 'rioting',
    saveUninitialized: false,
    resave: false, 
    cookie : {
        maxAge : 1000 * 60 * 60* 24,
        sameSite : true,
        secure : IN_PROD
    },
    store: new MongoStore({ 
        mongooseConnection: mongoose.connection, 
        autoRemove: 'disabled',
        secret: 'oral',
        mongoUrl:'mongodb://127.0.0.1:27017/test',
        touchAfter: 1000 * 60 * 60* 720
    }),
}));

// set locals sessions
app.use((req, res, next) => {
    req.session.userId;
    req.session.user;
    next();
});

// set locals sessions
app.use((req, res, next) => {
    const { exUser } = req.session;
    next();
});

// main ex-user session
app.use((req, res, next) => {
    const { exUser2 } = req.session;
    next();
});

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

app.listen(/*process.env.PORT*/8000, () => {
    console.log('Connected successfully! app listening on port 2020');
})

module.exports = app;