document.getElementById("title");
// console.log(title);
// <h1 id="title" class="heading">Document Object Model</h1>

document.getElementById("title").id;
//'title'

document.getElementById("title").class;
//undefined

document.getElementById("title").className;
//'heading'

document.getElementById("title").getAttribute;

// document.getElementById("title").getAttribute();
//!TypeError

document.getElementById("title").getAttribute("id");
//'title'

document.getElementById("title").getAttribute("class");
//'heading'

document.getElementById("title").setAttribute("class", "test");
//**to change the class name */
// undefined

document.getElementById("title");
// console.log("title");

const title = document.getElementById("title");
console.log(title);
//<h1 id="title" class="test">Document Object Model</h1>

title.style.backgroundColor = "orange";

title.style.padding = "15px";

title.style.borderRadius = "30px";
