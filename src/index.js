import user from "./user.js";
import getELement from "./utils";

const displayUser = async function () {
  const userImg = getELement("#userImg");
  const desc = getELement("#desc");
  const text = getELement("#text");
  const symbol = document.querySelectorAll(".symbol");
  const person = await user();

  userImg.src = person.pic;
  text.innerText = person.name;
  console.log(symbol);
  symbol.forEach(function (sym) {
    console.log(sym);
    sym.addEventListener("click", function () {
      switch (sym.id) {
        case "symbol1":
          desc.innerText = "My Name is :";
          text.innerText = person.name;
          break;
        case "symbol2":
          desc.innerText = "Email:";
          text.innerText = person.mail;
          break;
        case "symbol3":
          desc.innerText = "Age:";
          text.innerText = person.age;
          break;
        case "symbol4":
          desc.innerText = "My adress:";
          text.innerText = person.adress;
          break;
        case "symbol5":
          desc.innerText = "Call me under:";
          text.innerText = person.phone;
          break;
      }
    });
  });
};

window.onload = function () {
  displayUser();
  const random = document.getElementById("random");
  random.addEventListener("click", function () {
    displayUser();
  });
  const dark = document.querySelector("#dark");
  dark.addEventListener("click", function () {
    const body2 = document.querySelector("body");
    body2.classList.toggle("dark");
    const centerDiv = document.getElementById("centerDiv");
    centerDiv.classList.toggle("dark");
  });
};
