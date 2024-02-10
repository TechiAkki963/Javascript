let output;

const parent = document.querySelector(".parent");

output = parent.childNodes;
// NodeList(7) [text, div.children, text, div.children, text, div.children, text]
// 0:text
// 1:div.children
// 2:text
// 3:div.children
// 4:text
// 5:div.children
// 6:text
// length:7

output = parent.childNodes[0]; // #text
output = parent.childNodes[0].textContent; // blank
output = parent.childNodes[0].nodeName; // #text
output = parent.childNodes[3].textContent; // Child 2
output = parent.childNodes[3].outerHTML; // <div class="children">Child 2</div>

output = parent.childNodes[3].innerHTML = "Child One";
output = parent.childNodes[5].style.color = "red";

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild, (textContent = "Hello");

// Acessing Parent Element from Child node

const child = document.querySelector(".children");
output = child.parentNode; //<div></div>
output = child.parentElement; // div.parent

child.parentNode.style.backgroundColor = "#ccc";
child.parentNode.style.padding = "10px";

// Siblings
const secondItem = document.querySelector(".child:nth-child(2)");
output = secondItem.nextSibling;
output = secondItem.previousSibling;
console.log(output);
