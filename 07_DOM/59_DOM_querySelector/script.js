title;

title.textContent;

const title = document.getElementsByClassName("heading");
console.log(title);

document.querySelector("h2");

document.querySelector("#title");

document.querySelector(".heading");
/* <h1 id=​"title" class=​"heading">​…​</h1>​ */

document.querySelector('input[type="password"]');
/* writingMonitor.js:2 host: 127.0.0.1, id: , name: password, tagName: input, className: , isWebsiteDisabled: false, isWebsiteBlacklisted: false, appToolbarShown: false */

document.querySelector("p:first-child");

document.querySelector("ul");

const myul = document.querySelector("ul");
console.log(myul);
// <ul>
// <li></li>
// <li></li>
// <li></li>
// </ul>

myul.querySelector("li");
// <li></li>
// <li></li>
// <li></li>

const turnGreen = document.querySelector("li");

turnGreen.style.backgroundColor = "green";

turnGreen.style.padding = "15px";

turnGreen.innerText;

turnGreen.innerText = "five";
