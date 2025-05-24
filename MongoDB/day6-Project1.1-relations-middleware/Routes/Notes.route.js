const express = require("express");
const { NotesModel } = require("../Models/Notes.model");

const notesRouter = express.Router();

// notesRouter.post("/create", async(req, res) => {
//   try {
//     const note = new NotesModel(req.body);
//     await note.save();
//     res.status(200).send({ msg: "Notes has been created" });
//   } catch (error) {
//     console.log(error);
//     console.log("Error has been occurred while creating notes");
//     res.status(400).send({
//       error: error.message,
//     });
//   }
// });


notesRouter.post("/create", async (req, res) => {
  try {
    const note = new NotesModel(req.body);
    await note.save();
    res.status(200).send({ message: "new note has been added" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
});

// notesRouter.get("/", async (req, res) => {

//   try {
//     console.log("Hi2");
//     const notes = await NotesModel.find({authorID : req.body.authorID});
//     res.status(200).send(notes);
//   } catch (error) {
//     console.log(error);
//     console.log("Error has been occurred while getting notes");
//     res.status(400).send({
//       error: error.message,
//     });
//   }
// });

notesRouter.get("/", async (req, res) => {
  try {
    const notes = await NotesModel.find({ authorID: req.body.authorID });
    res.status(200).send(notes);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
});

// notesRouter.patch("/update/:noteID", async (req, res) => {
//   const { noteID } = req.params;
//   const note = await NotesModel.findOne({ _id: noteID });

//   try {
//     if (note.authorID !== req.body.authorID) {
//       res.send({ msg: "You bafoon, you are not authorized" });
//     } else {
//       await NotesModel.findByIdAndUpdate({ _id: noteID }, req.body);
//       res.status(200).send({ msg: "Notes has been updated" });
//     }
//   } catch (error) {
//     console.log(error);
//     console.log("Error has been occurred while patching notes");
//     res.status(400).send({
//       error: error.message,
//     });
//   }
// });

// notesRouter.patch("/update/:noteID", async (req, res) => {
//   const { noteID } = req.params;
//   const payload = req.body;

//   const note = await NotesModel.findOne({ _id: noteID });
//   const userID = req.body.authorID;

//   try {
//     if (note.authorID !== userID) {
//       res.send({ message: "you are not authorized" });
//     } else {
//       await NotesModel.findByIdAndUpdate({ _id: noteID }, payload);
//       res
//         .status(200)
//         .send({ message: `the note with ID${noteID} has been updated` });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(400).send({ error: error.message });
//   }
// });

notesRouter.delete("/delete/:noteID", async (req, res) => {
  const { noteID } = req.params;

  try {
    await NotesModel.findByIdAndDelete({ _id: noteID }, req.body);
    res
      .status(200)
      .send({ message: `the note with ID${noteID} has been delete` });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
});

// notesRouter.delete("/delete/:noteID",async (req,res) => {
//   const {noteID} = req.params;

//   const note = await NotesModel.findOne({_id : noteID});

//   try {
//     if(note.authorID !== req.body.authorID){
//       res.send({ msg: "You bafoon, you are not authorized" });
//     }else{
//       await NotesModel.findByIdAndDelete({_id : noteID});
//       res.status(200).send({ msg: "Notes has been deleted" });
//     }
//   } catch (error) {
//     console.log(error);
//     console.log("Error has been occurred while deleting notes");
//     res.status(400).send({
//       error: error.message,
//     });
//   }
// });



module.exports = { notesRouter };
