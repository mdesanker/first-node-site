const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 8080;

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      fs.readFile(`./index.html`, (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (req.url === "/about") {
      fs.readFile(`./about.html`, (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (req.url === "/contact") {
      fs.readFile(`./contact.html`, (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else {
      fs.readFile(`./404.html`, (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    }
  })
  .listen(port, () => {
    console.log(`Server running at port ${port}`);
  });
