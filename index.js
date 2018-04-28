const quotes = require('./quotes');

function pickOne(quotes) {
  const rnd = Math.floor(Math.random() * quotes.length);
  return quotes[rnd];
}

console.log('\n', pickOne(quotes), '\n');
