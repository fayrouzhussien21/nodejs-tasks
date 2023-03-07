let getinfo = async () => {
  await fetch("/clientinfo.json")
    .then((re) => re.json())
    .then((result) => {
      for (let i = 0; i < result.length; i++) {
        document.getElementsByClassName(
          "inserthere"
        )[0].innerHTML += ` <td> ${result[i].userName} </td>
          <td >${result[i].email}</td>
          <td >${result[i].mobile}</td>
          <td >${result[i].address}</td>`;
      }
    });
};
let viwbtn = document.getElementsByClassName("viw")[0];
viwbtn.addEventListener("click", getinfo);
let b = document.getElementsByTagName("tbody")[0].innerHTML;
console.log(b);
