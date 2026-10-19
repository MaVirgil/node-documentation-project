const url = 'https://example.org/api/items';

// Make asynchronous POST-request using promises
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    data: 'example data',
  }),
}).then((response) => {
  if (!response.ok) {
    // Some code to handle unsuccessful request
  }
});