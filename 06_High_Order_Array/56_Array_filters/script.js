const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Scenario: Suppose we have to filter even number

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);

//
// ShortHand
const eveNum = numbers.filter((number) => number % 2 === 0);
console.log(eveNum);

//
//
// With foreach
const eN = [];
numbers.forEach((number) => {
  if (number % 2 === 0) {
    eN.push(number);
  }
});
console.log(eN);

//Challenge
const companies = [
  {
    name: "Company1",
    catergory: "Finanace",
    start: 1984,
    end: 2004,
  },
  {
    name: "Company 2",
    catergory: "Retail",
    start: 1992,
    end: 2002,
  },
  {
    name: "Company 3",
    catergory: "Auto",
    start: 1999,
    end: 2007,
  },
  {
    name: "Company 4",
    catergory: "Retail",
    start: 1989,
    end: 2010,
  },
  {
    name: "Company 5",
    catergory: "Technology",
    start: 2009,
    end: 2014,
  },
  {
    name: "Company 6",
    catergory: "Finanace",
    start: 1987,
    end: 2010,
  },
  {
    name: "Company 7",
    catergory: "Auto",
    start: 1986,
    end: 1996,
  },
  {
    name: "Company 8",
    catergory: "Technology",
    start: 2011,
    end: 2016,
  },
  {
    name: "Company 9",
    catergory: "Retail",
    start: 1981,
    end: 1989,
  },
];

const eval = companies.filter((company) => company.catergory === "Retail");
console.log(eval);
/*
{ name: 'Company 2', catergory: 'Retail', start: 1992, end: 2002 },
{ name: 'Company 4', catergory: 'Retail', start: 1989, end: 2010 },
{ name: 'Company 9', catergory: 'Retail', start: 1981, end: 1989 }
*/

// Get companies that started in 1980 and ended before 2005

const earlyCompanies = companies.filter((company) => {
  return company.start >= 1980 && company.end <= 2005;
});

console.log(earlyCompanies);

/*
[
  { name: 'Company1', catergory: 'Finanace', start: 1984, end: 2004 },
  { name: 'Company 2', catergory: 'Retail', start: 1992, end: 2002 },
  { name: 'Company 7', catergory: 'Auto', start: 1986, end: 1996 },
  { name: 'Company 9', catergory: 'Retail', start: 1981, end: 1989 }
]
*/

//
// Get companies lasted 10 years +

const longLastedCompanies = companies.filter((company) => {
  return company.end - company.start >= 10;
});
console.log(longLastedCompanies);
/*
[
    { name: 'Company1', catergory: 'Finanace', start: 1984, end: 2004 },
    { name: 'Company 2', catergory: 'Retail', start: 1992, end: 2002 },
    { name: 'Company 4', catergory: 'Retail', start: 1989, end: 2010 },
    { name: 'Company 6', catergory: 'Finanace', start: 1987, end: 2010 },
    { name: 'Company 7', catergory: 'Auto', start: 1986, end: 1996 }
  ]
  */
