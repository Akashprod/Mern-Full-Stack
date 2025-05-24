const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: false,
  },
});

const StudentModal = mongoose.model("student",studentSchema);

const main = async() => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/trail");
    await StudentModal.insertMany([{
        name : "Akash",
        age : 25,
        city : "KKD"
    }])
    console.log("Connected to db successfully");
  } catch (error) {
    console.log(error);
    console.log("Error in main function");
  }
};

main();
