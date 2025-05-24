const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    // response.end("Hello boss, Welcome");
    fs.appendFile(
      "./text.txt",
      "\nChecking the append using append command",
      (err) => {
        if (err) {
          response.write("no data \n");
          response.end(err);
        } else {
          response.end("Checking append using response.end");
        }
      }
    );
  } else if (request.url === "/reports") {
    fs.readFile("./text.txt", "UTF-8", (err, data) => {
      if (err) {
        response.write("no data \n");
        response.end(err);
      } else {
        response.end(data);
      }
    });
  } else if (request.url === "/data") {
    response.write("Go to www.findPriya.com and give her a gift");
    response.end("Here is the data you retrieved");
  }
});

server.listen("8080", () => {
  console.log("Listening to the port 8080");
});
