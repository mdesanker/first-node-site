const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 8080;

const server = http
  .createServer((req, res) => {
    fs.readFile("./index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(port, () => {
    console.log(`Server running at port ${port}`);
  });
