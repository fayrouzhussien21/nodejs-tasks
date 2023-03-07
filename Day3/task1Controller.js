module.exports = addclient = (req, res) => {
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
};
