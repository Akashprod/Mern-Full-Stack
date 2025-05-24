const express = require("express");
const studentRouter = express.Router();

studentRouter.get("/",(req,res)=>{
    res.send("All Students");
})

studentRouter.post("/addstudent",(req,res)=>{
    console.log(req.body);
    res.send("Student details saved successfully");
})

studentRouter.get("/:roll_no",(req,res)=>{
    const id = req.params.roll_no;
    res.send(`this is the data of the student roll no:${id}`);
})

module.exports =  {studentRouter}