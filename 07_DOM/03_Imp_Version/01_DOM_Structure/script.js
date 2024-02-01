console.log(window);

console.dir(window.document);
// # Also can write
console.log(document);

// # To see what's inside the body
console.log(document.body);

// # if we want just the HTML in the body
console.log(document.body.innerHTML);
//<h1 class="hello">Hello World</h1>
//<script src="script.js"></script>

console.log(document.body.innerText);
//Hello World

// # if we want to acess link using DOM
console.log(document.links);
// HTMLCollection[0]

// # if we want to acess a specific link
console.log(document.links[0]);
// <a href="www.google.co.in">Google</a>

// document.body.innerHTML = "<h2>Main hoon DOM</h2>";
//Main Hoon DOM  (on webpage)

// console.log(document.getElementById("main"));
// const main = document.getElementById("main");
// main.innerHTML = "<h1>World of AI , BEfore World of DOM</h1>";

document.querySelector("#main h1").innerHTML = "Intelligence Awkening";
document.querySelector("#main h1").style.color = "orange";
