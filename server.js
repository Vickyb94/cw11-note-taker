//import express package
const express = require('express');
//initialize the app variable by setting it to the value of express()
const app = express();
const path = require('path');
//load server
const PORT = process.env.PORT || 3001;

//link files in the public folder with static middleware
app.use(express.static('public'));

//sending data to the server to store req.body
app.use(express.urlencoded({ extended: true}));

