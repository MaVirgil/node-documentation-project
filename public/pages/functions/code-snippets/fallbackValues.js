function fallback(value = 'fallback') {
  console.log(value);
}

fallback('argument!');
// => 'argument!'

fallback();
// => 'fallback'