const title = document.getElementById("title");
console.log(title);

const tc = title.textContent;
console.log(tc);
//output is along with the Hidden element
/** 
Let's see the Text Manipulation
Hidden Text
*/

const iText = title.innerText;
console.log(iText);
// it only shows the element which is visible
/*
Let's see the Text Manipulation
*/

const iHtml = title.innerHTML;
console.log(iHtml);
// it shows the txt element with html element
/*
      Let's see the Text Manipulation
      <span style="display: none">Hidden Text</span>
*/
