// const mongoose = require("mongoose");

// const notesSchema = mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   body: String,
//   author: String,
//   category: String,
//   authorID : {
//     type : String, required : true
//   }
// },
//   {
//     versionKey: false,
//   });

// const NotesModel = mongoose.model("Notes", notesSchema);

// module.exports = { NotesModel };


const mongoose = require("mongoose");

const notesSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    body: String,
    author: String,
    category: String,
    authorID: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const NotesModel = mongoose.model("Notes", notesSchema);

module.exports = {
  NotesModel,
};
