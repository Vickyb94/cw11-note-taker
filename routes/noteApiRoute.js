const express = require('express');   //import express package
const router = express.Router();
const uuid = require('uuid');    //to create an id for each note
const path = require('path')

const noteList = JSON.parse(fs.readFileSync('../db/db.json'));

//create routes so Get /api/notes reads the db.json file and return all saved notes as JSON.
router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'))
})