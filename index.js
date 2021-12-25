const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

router.get("/", (req, res) =>
  res.sendFile(path.join(__dirname + "/index.html"))
);

router.get("/about", (req, res) =>
  res.sendFile(path.join(__dirname + "/about.html"))
);

router.get("/contact", (req, res) =>
  res.sendFile(path.join(__dirname + "/contact.html"))
);

router.get("*", (req, res) => res.sendFile(path.join(__dirname + "/404.html")));

// Add the router
app.use("/", router);
app.listen(process.env.port || 3000);
