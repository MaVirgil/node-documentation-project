const url = 'https://example.org/api/items';

// Make asynchronous request
const response = await fetch(url);

if (!response.ok) {
  // Some code to handle unsuccessful request
}

// Retrieve JSON data from response
const result = await response.json();