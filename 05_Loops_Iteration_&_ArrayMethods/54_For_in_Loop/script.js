const colorObj = {
  color1: "red",
  color2: "green",
  color3: "blue",
  color4: "orange",
};
for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

const colorArr = ["red", "blue", "green", "orange"];
for (const key in colorArr) {
  console.log(colorArr[key]);
}
