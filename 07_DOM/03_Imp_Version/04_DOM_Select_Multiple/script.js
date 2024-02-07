// const listItems = document.querySelectorAll(".item");
// // console.log(listItems);
// console.log(listItems[1].innerText);
// listItems[1].style.color = "red";

// listItems.forEach((item, index) => {
//   item.style.color = "red";

//   if (index === 1) {
//     item.remove();
//   }

//   if (index === 0) {
//     item.innerText = "Strawberry";
//   }
//   // but as seen in using innerText the 'x' closing icon also disappers
//   //so instead

//   if (index === 2) {
//     item.innerHTML = `Guava
//     <button class="remove-item btn-link text-red">
//       <i class="fa-solid fa-xmark"></i>`;
//   }
// });

//

// Method 2

const listItems2 = document.getElementsByClassName(".item");
// console.log(listItems2);
console.log(listItems2[1].innerText);

const listItemsArray = Array.from(listItems2);

listItems2.array.forEach((item) => {
  console.log(item.innerText);
});
