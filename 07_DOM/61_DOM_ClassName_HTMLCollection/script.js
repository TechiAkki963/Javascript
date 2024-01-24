const iList = document.getElementsByClassName("item-list");
/*
HTMLCollection(3) [li.item-list, li.item-list, li.item-list]
0:li.item-list
1:li.item-list
2:li.item-list
length:3
*/

// for HTML Collection we cannot directly use properties and methods of Array
// for that we need to convert the HTML collection []  to Array using Array.from()

const convertedArray = Array.from(iList);

convertedArray.forEach((li) => {
  li.style.color = "orange";
  li.style.backgroundColor = "green";
  li.style.padding = "15px";
  li.style.borderRadius = "30px";
  li.style.margin = "20px";
});
