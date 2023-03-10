//import express package
const express = require('express');

//to create a new router object
const router = express.Router();

const path = require('path');

//created route so Get /notes will return notes.html files
router.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));

//created route path so Get * returns the index.html page
router.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

module.exports = router;