# JavaScript Date Object Exercise

---

## Task 1: Creating Dates

Create a variable `currentDate` and set it to the current date and time using `new Date()`. Print the result.

Create a variable `specificDate` and set it to a specific date and time: `January 10, 2024, at 12:30 PM`. Print the result.

Create a variable `stringDate` and set it by passing a date string: `"2024-07-10T12:30:00"`. Print the result.

---

## Task 2: Timestamps

Create a variable `timestampNow` and set it to the current timestamp using `Date.now()`. Print the result.

Create a variable `timestampSpecific` and set it to the timestamp of `July 1, 2024, at 12:30 PM`. Print the result.

---

## Task 3: Methods on Date Object

Use the `date.getTime()` method to get the timestamp of the `specificDate` variable. Print the result.

Use various date methods to get the following information from the currentDate:

- Year
- Month (in numerical format)
- Date of the month
- Day of the week (0 for Sunday, 1 for Monday, etc.)
- Hours
- Minutes
- Seconds
- Milliseconds

Print each result.

---

## Task 4: Date Formatting

Create a variable `formattedDate` and set it to the current date formatted as `"MM/DD/YYYY"`. Print the result.

Use the `Intl.DateTimeFormat` method to get the month name in full, short, and default formats from the `currentDate`. Print each result.

Use the latest way of formatting dates to create a string that includes the `full weekday`, `numeric year`, `full month`, `numeric day`, `hours`, `minutes`, and `seconds for the currentDate`. Print the result.
