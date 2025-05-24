const { default: mongoose } = require("mongoose");

const notesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: String,
  author: String,
  category: String,
});

const NotesModel = mongoose.model("Notes", notesSchema);

module.exports = { NotesModel };
