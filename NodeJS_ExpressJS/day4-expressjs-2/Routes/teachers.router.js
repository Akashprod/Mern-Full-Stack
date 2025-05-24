const express = require("express");
const teacherRoute = express.Router();

teacherRoute.get("/",(req,res)=>{
    res.send("All Teachers");
})

teacherRoute.post("/addteacher",(req,res)=>{
    console.log(req.body);
    res.send("Teacher details added successfully");
})

module.exports = {teacherRoute};