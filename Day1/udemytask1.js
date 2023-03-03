const superagent = require("superagent");
const fs = require("fs");
let getData = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) reject("error not found");
      else {
        resolve(data);
      }
    });
  });
};

let writeData = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dogurl.txt", data._body.message, (err) => {
      if (err) console.log("invalid");
      else console.log("successful operation!");
    });
  });
};

// getData("./dog.txt")
//   .then((data) => {
//     superagent.get(`https://dog.ceo/api/${data}/image/random`).then((data) => {
//       writeData(data);
//     });
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
///anothersolution////////////
var getdata = async () => {
  try {
    const data = await getData("./dog.txt");
    const res = await superagent.get(
      `https://dog.ceo/api/${data}/image/random`
    );
    const res2 = await writeData(res);
  } catch (err) {
    console.log(err.message);
  }
};

getdata();
///////////////////////////////////

// fs.readFile("dog.txt", "utf-8", (err, data) => {
//   superagent
//     .get(`https://dog.ceo/api/${data}/image/random`)
//     .then((data) => {
//       fs.writeFileSync("./dogurl.txt", data._body.message);
//     })
//     .catch((err) => {
//       console.log("invalid dog name");
//     });
// });
