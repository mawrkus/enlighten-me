const fs = require('fs');

function loadQuotes() {
  try {
    return JSON.parse(fs.readFileSync('./quotes.json', 'utf8'));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

function pickOne(quotes) {
  const rnd = Math.floor(Math.random() * (quotes.length + 1));
  return quotes[rnd];
}

const quotes = loadQuotes();
console.log('\n', pickOne(quotes), '\n');
