const express = require("express");
const {studentRouter} = require("./Routes/student.router");
const {teacherRoute} = require("./Routes/teachers.router");
const app = express();
app.use(express.json());

app.use("/students",studentRouter);
app.use("/teachers",teacherRoute);

app.get("/weather",(req,res)=>{
    const data = {
        delhi : 'winter',
        kkd : "summer",
        banglore : "autumn"
    }
    const {city} = req.query;
    const weather = data[city];
    res.send(`it is ${weather} in ${city}`);
})

app.listen("8080",()=>{
    console.log("Listening to port 8080");
})