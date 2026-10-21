const url = 'https://example.org/api/items';

// Make asynchronous POST-request with header and body
const response = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    data: 'example data',
  }),
});

if (!response.ok) {
  // Some code to handle unsuccessful request
}