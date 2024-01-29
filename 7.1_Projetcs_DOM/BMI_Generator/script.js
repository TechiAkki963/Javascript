// #form
// DOM in form
// values to be manipulated i.e. height , weight , result
// #Checks
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // it stop the page to load automatically

  const height = parseInt(document.querySelector("#height").value);
  //.value is used when the user is inserting any value
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  //#Checks
  if (height === "" || height < 0 || isNaN(height)) {
    //isNaN to check height is not a number
    results.innerHTML = `Please enter a valid Height ${height}`;
  }
  if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // to show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
