//Logic Modules
const add = (a,b)=>{
    console.log(a+b);
}

// add(1,2);

// export {add}
module.exports ={add};

//External modules

const isPrime = require("is-prime");
// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(4));
// console.log(isPrime(5));

//Internal Modules

// const os = require("os");

//   console.log(os.version());
//   console.log(os.cpus());
//   console.log(os.freemem());

const fs = require("fs");

//reading files

// console.log("check-start");
// fs.readFileSync("./text.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//         console.log("Th file cant be processed");
//     }
//     else{
//         console.log(data);
//     }
// })
// console.log("check-end");

// console.log("check-start");
// const data = fs.readFileSync("./text.txt","utf-8");
// console.log(data);
// console.log("check-end");

//writing files

// fs.writeFile("./text.txt","I am writing that I want to become full stack developer using writeFile",(err)=>{
//     if(err){
//         console.log("Error occurred while writing inside the file");
//         console.log(err);
//     }else{
//         console.log("Data has been written inside the file");
//     }
// })
// console.log(data);

//Appending file

fs.appendFile("./text.txt","\nAfter becoming mern stack developer I want to create websites and applications",(err)=>{
    if(err){
        console.log("Error occurred while writing inside the file");
        console.log(err);
    }else{
        console.log("Data has been written inside the file");
    }
})


