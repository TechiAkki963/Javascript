const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubleNumbers); //[ 2, 4, 6, 8, 10, 12 ]

// same with foreach
const dubNum = [];

numbers.forEach((number) => {
  dubNum.push(number * 2);
});

console.log(dubNum); //[ 2, 4, 6, 8, 10, 12 ]

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

// Create a array of company name
const companyNames = companies.map((company) => company.name);
console.log(companyNames);
/*
[
    'Company1',  'Company 2',
    'Company 3', 'Company 4',
    'Company 5', 'Company 6',
    'Company 7', 'Company 8',
    'Company 9'
  ]
*/

//Create an array with just companies and category

const companyCat = companies.map((company) => {
  return {
    name: company.name,
    catergory: company.catergory,
  };
});

console.log(companyCat);
/*
[
    { name: 'Company1', catergory: 'Finanace' },
    { name: 'Company 2', catergory: 'Retail' },
    { name: 'Company 3', catergory: 'Auto' },
    { name: 'Company 4', catergory: 'Retail' },
    { name: 'Company 5', catergory: 'Technology' },
    { name: 'Company 6', catergory: 'Finanace' },
    { name: 'Company 7', catergory: 'Auto' },
    { name: 'Company 8', catergory: 'Technology' },
    { name: 'Company 9', catergory: 'Retail' }
  ]
  */

//Create the length of years of the companies

const companyYears = companies.map((company) => {
  return {
    name: company.name,
    years: company.end - company.start,
  };
});

console.log(companyYears);
/*
[
    { name: 'Company1', years: 20 },
    { name: 'Company 2', years: 10 },
    { name: 'Company 3', years: 8 },
    { name: 'Company 4', years: 21 },
    { name: 'Company 5', years: 5 },
    { name: 'Company 6', years: 23 },
    { name: 'Company 7', years: 10 },
    { name: 'Company 8', years: 5 },
    { name: 'Company 9', years: 8 }
  ]
  */

// Chain map method

const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);

console.log(squareAndDouble);
/*
[
  2,
  2.8284271247461903,
  3.4641016151377544,
  4,
  4.47213595499958,
  4.898979485566356,
  5.291502622129181,
  5.656854249492381,
  6,
  6.324555320336759
]
*/

const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);
console.log(evenDouble); //[ 4, 8, 12, 16, 20 ]
