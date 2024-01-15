const socials = ["Twitter", "Facebook", "Intagram", "Youtube"];

// console.log(socials.__proto__);

//With Normal Function
socials.forEach((element) => {
  console.log(element);
});

//with Arrow Function
socials.forEach((item) => console.log(item));

//example with element , index and arr
socials.forEach((item, index, arr) => console.log(`${item}-${index}`, arr));

const socialObjs = [
  { siteName: "Twitter", url: "https://Twitter.com" },
  { siteName: "Facebook", url: "www.facebook.com" },
  { siteName: "Youtube", url: "https:youtube.com" },
];
socialObjs.forEach((element) => console.log(element.siteName));
