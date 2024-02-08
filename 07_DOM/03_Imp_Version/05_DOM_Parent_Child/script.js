let output;

const parent = document.querySelector(".parent");
output = parent.children;

output = parent.children[1]; // HTMLCollection

output = parent.children[1].innerText; // Child2
output = parent.children[1].className; // children
output = parent.children[1].nodeName; // DIV

parent.children[1].innerText = "Child Two";
parent.children[1].style.color = "red";

parent.firstElementChild.innerText = "child one";
parent.lastElementChild.innerText = "child three";

// Get parent element from a child

const child = document.querySelector(".children");
output = child.parentElement;

child.parentElement.style.border = "1px solid #ccc";
child.parentElement.style.padding = "10px";

//Sibling Element

const secondItem = document.querySelector(".children:nth-child(2)");
output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = "green";
secondItem.nextElementSibling.style.fontSize = "60px";

secondItem.previousElementSibling.style.color = "orange";
secondItem.previousElementSibling.style.fontSize = "60px";

console.log(output);
