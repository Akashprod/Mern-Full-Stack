const fs = require("fs");

const watchMan = ((req,res,next)=>{
    if(req.url === "/about"){
        console.log("this is middleware from watch if part")
        next();
    }
    else{
        console.log("this is middleware from watch else part")
        res.send("Bye");
    }
})

const logger = ((req,res,next)=>{
    fs.appendFileSync("./logInfo.txt", `\n METHOD:${req.method} - PATH:${req.url} - TIME: ${new Date().getTime()}`);
    next();
})

module.exports = {watchMan,logger};