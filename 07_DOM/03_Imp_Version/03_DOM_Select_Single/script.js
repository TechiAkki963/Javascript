//document.getElementById()
console.log(document.getElementById("app-title")); //<h1 id="app-title">Shopping List</h1>

console.log(document.getElementById("app-title").id); //app-title

console.log(document.getElementById("app-title").className);

console.log(document.getElementById("app-title").getAttribute("id")); // app-title

//Set Attribute
// document.getElementById("app-title").id = "new-id";

document.getElementById("app-title").title = "Shopping List";

document.getElementById("app-title").setAttribute("class", "title");

//

const title = document.getElementById("app-title");
console.log(title);
title.textContent = " Shop items here";
title.innerText = "Shopping majja";
title.innerHTML = "<strong>Shopping Now</strong>";

// Change Style
title.style.color = "red";
title.style.backgroundColor = "orange";
title.style.padding = "20px";
title.style.borderRadius = "10px";

//document.querySelector()

console.log(document.querySelector("h1"));
console.log(document.querySelector("#app-title"));
console.log(document.querySelector(".container"));
console.log(document.querySelector(".container"));
console.log(document.querySelector("input[text='text']"));
console.log(document.querySelector("li:nth-child(2)").innerText);

const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "Strawberry Juice";
secondItem.style.color = "red";

// Use these method on other element as well not only on document

const lists = document.querySelector("ul");
console.log(lists);

const firstItem = lists.querySelector("li");
firstItem.style.color = "Blue";
