const express = require('express');   //import express package
const router = express.Router();
const uuid = require('uuid');    //to create an id for each note
const path = require('path')
const fs = require('fs');

const noteList = JSON.parse(fs.readFileSync('db/db.json'));

//create routes so Get /api/notes reads the db.json file and return all saved notes as JSON.
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'))
});

//post request sends a new note that is saved in json file and is returned to client
router.post('/notes', (req, res) => {res.json(noteList)
    
    //create title, text, and id for each note saved
    const noteInfo = {title: req.body.title, text: req.body, id: uuid.v9()};
      noteList.push(noteInfo);
      fs.writeFileSync('db/db.json', JSON.stringify(db));
      res.json(noteList);
    });     

    module.exports = router;

