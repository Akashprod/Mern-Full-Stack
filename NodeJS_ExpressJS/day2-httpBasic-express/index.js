// const http = require("http");

// const server = http.createServer((request,response)=>{
//     if(request.url === "/"){
//         response.setHeader("Content-Type","text/html");
//         response.end("<h1>Hello</h1>");
//     }
//     else if(request.url === "/data"){
//         response.write("data fetching in progress");
//         response.end("data fetched completed");
//     }
//     else if(request.url === "/adddata" && request.method==="POST"){
//         //some logic to get the data from frontend
//         let str = "";
//         request.on("data",(chunk)=>{
//             str += chunk;
//         });
//         request.on("end",()=>{
//             console.log(str);
//         })
//         response.end("Data has been recorded");
//     }
//     else{
//         response.end("Entered URL doesn't exist");
//     }
// });

// server.listen("8070",()=>{
//     console.log("listening to the port 8070");
// })

const express = require("express");
const app = express();
app.use(express.text());
app.use(express.json());

// app.get("/",(request,response)=>{
//     response.send("Hello User!!")
// });

// app.post("/adddetails",(request,response)=>{
//     console.log(request.body);
//     response.send("Data has been captured");
// })

// app.get("/details",(request,response)=>{
//     response.send("User details has been captured");
// })

const fs = require("fs");

app.get("/students",(request,response)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    console.log(data.students);
    response.json(data.students);
})

app.post("/addstudents",(request,response)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    data.students.push(request.body);
    fs.writeFileSync("./db.json",JSON.stringify(data));
    console.log(data);
    response.send("data has been added");
})

app.listen("8080",()=>{
    console.log("running on port 8080");
})