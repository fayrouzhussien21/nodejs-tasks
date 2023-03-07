var myModule = require("./firstModule.js");
const http = require("http");

var flight = myModule.flightTickets;
flightObj = new flight();
flightObj.AddItem(88, "korea", "2016-9-4");
flightObj.AddItem(23, "istanbul", "2016-3-4");
flightObj.updateTickets(23, 1, "istanbul", "2016-3-4");

let server = http.createServer((req, res) => {
  res.end();
});
server.listen(9000, () => {
  console.log("hello");
});
