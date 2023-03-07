const express = require("express");
const app = express();
const fs = require("fs");
var welcome = fs.readFileSync("./welcomepage.html").toString();
var jsonfile = fs.readFileSync("./clientinfo.json", "utf-8");
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var arr = [];

arr = JSON.parse(jsonfile);
app.post("/welcomepage.html", (req, res) => {
  console.log(req.body);
  const client = {
    fname: req.body.fname,
    mobile: req.body.mobile,
    address: req.body.address,
    email: req.body.email,
  };
  arr.push(client);
  welcome = welcome.replaceAll("{name}", req.body.fname);
  welcome = welcome.replace("{mobile}", req.body.mobile);
  welcome = welcome.replace("{address}", req.body.address);
  welcome = welcome.replace("{Email}", req.body.email);
  fs.writeFileSync("./clientinfo.json", JSON.stringify(arr));
  res.send(welcome);
  welcome = welcome.replaceAll(req.body.fname, "{name}");
  welcome = welcome.replace(req.body.mobile, "{mobile}");
  welcome = welcome.replace(req.body.address, "{address}");
  welcome = welcome.replace(req.body.email, "{Email}");
});

module.exports = app;
