// Getting the client's local time as Unix time
const timestamp = Date.now();

// Do something with the timestamp, e.g. save it to a database

// Later, display the timestamp in another client's local timezone

const date = new Date(timestamp);

console.log(date);