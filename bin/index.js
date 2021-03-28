#!/usr/bin/env node

const quotes = require('../quotes.json');

function pickOne(quotes) {
  const rnd = Math.floor(Math.random() * quotes.length);
  return quotes[rnd];
}

console.log('\n✨ %s\n', pickOne(quotes));
