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
   
    const noteInfo = {title: req.body.title, text: req.body.text, id: uuid.v1};
      noteList.push(noteInfo);
      fs.writeFileSync('db/db.json', JSON.stringify(noteList));
      res.json(noteList);
    });   
    
    //to delete notes, a query parameter that contains id to be deleted will be sent
    router.delete('/notes/:id', (req, res) => {
      //filtering saved notes from the output and removing notes with id
      const removeNote = noteList.filter(item => item.id !== req.params.id);
      fs.writeFileSync('db/db.json', JSON.stringify(removeNote));
      res.json(noteList);
    });

   

    module.exports = router;

