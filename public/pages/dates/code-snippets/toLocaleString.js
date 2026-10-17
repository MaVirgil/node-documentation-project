const date = new Date();

const localeString = date.toLocaleString('en-GB');
console.log(localeString);
// => 17/10/2026, 18:22:03

const localeStringFormatted = date.toLocaleString('en-GB', {
  year: "numeric",
  month: "short",
  day: "numeric",
  weekday: "long",
  hour: "numeric",
  minute: "numeric"
});

console.log(localeStringFormatted);
// => Saturday, 17 Oct 2026, 18:22