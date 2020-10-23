const http = require("http");
const { resourceUsage } = require("process");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    // res.write("<h1>OK Youre In !!</h1>");
    const homePageHTML = fs.readFileSync("apps.html");
    res.write(homePageHTML);
    res.end();
  } else {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>NO Youre NOT In !!</h1>");
    res.end();
  }
});

server.listen(3000, console.log("ok on 3000"));
