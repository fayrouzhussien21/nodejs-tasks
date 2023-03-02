const http = require("http");
const fs = require("fs");
let calculate = (url) => {
  let res;
  if (url[1] == "add") {
    res = 0;
    for (let i = 2; i < url.length; i++) {
      var first = parseInt(url[i]);
      res += first;
    }
    return res;
  }

  if (url[1] == "min") {
    res = 0;
    for (let i = 2; i < url.length; i++) {
      var first = parseInt(url[i]);
      res -= first;
    }
    return res;
  }
  if (url[1] == "mul") {
    res = 1;
    for (let i = 2; i < url.length; i++) {
      var first = parseInt(url[i]);
      res += first;
    }
    return res;
  }
};

const server = http.createServer((req, res) => {
  let url = req.url;
  if (url != "/favicon.ico") {
    url = url.split("/");
    const v = calculate(url);
    fs.writeFileSync("./cal.txt", v.toString());
    res.end();
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("hello");
});
