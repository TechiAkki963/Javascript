const clock = document.querySelector("#clock");

// to show time using Vanilla JS
// in advance concept in Node we used cron jobs
setInterval(function () {
  let date = new Date();
  //   console.log(date.toLocaleTimeString());
  clock.textContent = date.toLocaleTimeString();
}, 1000);
