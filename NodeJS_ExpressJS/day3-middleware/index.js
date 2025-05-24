const express = require("express");
const app = express();
const {watchMan,logger} = require("./middleware.js");

// app.use((req,res,next)=>{
//     if(true){
//         res.send("BYE")
//     }else{
//         next();
//     }
// })

// app.use((req,res,next)=>{
//     const startTime = new Date().getTime();
//     next();
//     const endTime = new Date().getTime();
//     console.log(`endTime ${endTime} - startTime ${startTime} = ${endTime - startTime}`);
// })

// app.get("/", (req, res) => {
//   res.send("Welcome");
//   console.log("Hello from home page");
// });

// app.use((req, res, next) => {
//   console.log("Hello from middleware");
//   next();
// });

// app.get("/about", (req, res) => {
//   res.send("This is about page");
//   console.log("Hello from about page");
// });

// app.use((req, res, next) => {
//   console.log("Hello from middleware2");
//   next();
// });

// app.get("/blog", (req, res) => {
//   res.send("This is blogs page");
//   console.log("Hello from blog page");
// });

// const watchMan = ((req,res,next)=>{
//     if(req.url === "/about"){
//         console.log("this is middleware from watch if part")
//         next();
//     }
//     else{
//         console.log("this is middleware from watch else part")
//         res.send("Bye");
//     }
// })

// app.use(watchMan);
// app.use(logger);

app.use((req,res,next)=>{
    console.log("1");
    next();
    console.log("2");
})
app.use((req,res,next)=>{
    console.log("3");
    next();
    console.log("4");
})

app.get("/",(req,res)=>{
    console.log("Home");
    res.send("Welcome to home page");
})

app.listen("8080", () => {
    console.log("Running on port 8080");
  });