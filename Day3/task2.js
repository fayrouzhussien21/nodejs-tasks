const http = require("http");
const fs = require("fs");
const url = require("url");
var mainHtml = fs.readFileSync("./main.html").toString();
var welcome = fs.readFileSync("./welcomepage.html").toString();
var styleCSS = fs.readFileSync("./main.css").toString();
var scriptJS = fs.readFileSync("./main.js").toString();
var jsonfile = fs.readFileSync("./clientinfo.json", "utf-8");
let userName = "";
let address = "";
let mobile = "";
let email = "";
var obj = {
  table: [],
};
obj.table = JSON.parse(jsonfile);
// http.createServer().listen("7002",()=>{console.log("Listining On PORT 7002")})
http
  .createServer((req, res) => {
    let { query, pathname } = url.parse(req.url);
    if (req.method == "GET") {
      switch (pathname) {
        case "/main.html":
          res.write(mainHtml);
          break;
        case "/main.css":
          res.write(styleCSS);
          break;
        case "/main.js":
          res.write(scriptJS);
          break;
        case "/clientinfo.json":
          res.write(jsonfile);
          break;
        default:
          res.write("<h1>Page Not Found</h1>");
          break;
      }
      res.end();
    } else if (req.method == "POST") {
      req.on("data", function (data) {
        let quer = data.toString().split("=");
        userName = quer[1].split("&")[0];
        mobile = quer[2].split("&")[0];
        address = quer[3].split("&")[0];
        email = quer[4].split("&")[0];
        var client = {
          userName,
          mobile,
          address,
          email,
        };
        obj.table.push(client);
        console.log(obj.table);
        fs.writeFileSync("./clientinfo.json", JSON.stringify(obj.table));
        //Async
      });
      req.on("end", () => {
        // console.log(urlObj.query);
        // res.setHeader("content-type", "text/html");
        welcome = welcome.replaceAll("{name}", userName);
        welcome = welcome.replace("{mobile}", mobile);
        welcome = welcome.replace("{Email}", email);
        welcome = welcome.replace("{address}", address);
        res.write(welcome);
        res.end();
        welcome = welcome.replace(userName, "{userName}");
        // // userName
      });
    }
  })
  .listen("7000", () => {
    console.log("http://localhost:7000");
  });
