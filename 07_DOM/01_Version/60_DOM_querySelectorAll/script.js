document.querySelectorAll("li");
//NodeList(3) [li, li, li]

// its a NodeList not an array
// the diff between NodeList and Array
// in NodeList when we check in the prototype we do not get the properties like map , reduce , filter default, wherein in Arrays we get

const tempLiList = document.querySelectorAll("li");

tempLiList;
//NodeList(3) [li, li, li]

//! tempLiList.style.color = "orange";
tempLiList[0].style.color = "orange";
tempLiList[1].style.backgroundColor = "green";

const myH1 = document.querySelectorAll("h1");
//NodeList [h1#title.heading]0: h1#title.headinglength: 1[[Prototype]]: NodeList
// the page has only one H1 tag
// still need to mention the element location of the Node
myH1[0].style.color = "Blue";

//tempLiList - foreach()

tempLiList.forEach((h) => {
  h.style.backgroundColor = "yellow";
});

//** Try to USe .forEach loop for NodeList */
