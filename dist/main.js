(()=>{"use strict";const e=function(e){console.log("selection",e);const n=document.querySelector(e);if(console.log("element",n),n)return n;throw new Error(`no element selected${e}`)},n=async function(){const n=e("#userImg"),t=e("#desc"),o=e("#text"),c=document.querySelectorAll(".symbol"),r=await async function(){const e=await fetch("https://randomuser.me/api/?gender=female"),n=(await e.json()).results[0],t=n.name.first+" "+n.name.last,o=n.email;return{person:n,name:t,age:n.dob.age,adress:n.location.city+" "+n.location.country+" "+n.location.street.name+" "+n.location.street.number,phone:n.cell,pic:n.picture.medium,mail:o}}();n.src=r.pic,o.innerText=r.name,console.log(c),c.forEach((function(e){console.log(e),e.addEventListener("click",(function(){switch(e.id){case"symbol1":t.innerText="My Name is :",o.innerText=r.name;break;case"symbol2":t.innerText="Email:",o.innerText=r.mail;break;case"symbol3":t.innerText="Age:",o.innerText=r.age;break;case"symbol4":t.innerText="My adress:",o.innerText=r.adress;break;case"symbol5":t.innerText="Call me under:",o.innerText=r.phone}}))}))};window.onload=function(){n(),document.getElementById("random").addEventListener("click",(function(){n()})),document.querySelector("#dark").addEventListener("click",(function(){document.querySelector("body").classList.toggle("dark"),document.getElementById("centerDiv").classList.toggle("dark")}))}})();