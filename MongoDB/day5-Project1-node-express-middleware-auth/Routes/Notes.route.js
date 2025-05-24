const express = require("express");
const { NotesModel } = require("../Models/Notes.model");

const notesRouter = express.Router();

notesRouter.post("/create",(req,res)=>{
try {
    const note = new NotesModel(req.body);
    note.save();
    res.status(200).send({msg : "Notes has been created"})
} catch (error) {
        console.log(error);
        console.log("Error has been occurred while creating notes");
        res.status(400).send({
          error: error.message,
        });
      }
});

notesRouter.get("/",(req,res)=>{

});

notesRouter.patch("/update/:noteID",(req,res)=>{

})

notesRouter.delete("/delete/:noteID",(req,res)=>{

});

module.exports = {notesRouter};