const quotes = require('./quotes');

const blacklistedTerms = {
  'a': true,
  'an': true,
  'and': true,
  'as': true,
  'by': true,
  'for': true,
  'in': true,
  'is': true,
  'it': true,
  'it\'s': true,
  'of': true,
  'that': true,
  'the': true,
  'to': true,
  'with': true,
};

function analyseTerms({ quotes }) {
  const quotesCount = quotes.length;

  const termsOccurences = quotes.reduce((acc, quote) => {
    quote
      .replace(/,|;|\.|\?/g, '')
      .toLowerCase()
      .split(' ')
      .forEach((term) => {
        acc[term] = acc[term] || 0;
        acc[term] += 1;
      });

    return acc;
  }, {});

  let uniqueTerms = Object.keys(termsOccurences).filter((term) => !blacklistedTerms[term]);
  const uniqueTermsCount = uniqueTerms.length;

  uniqueTerms = uniqueTerms.map((term) => ({
    term,
    occurences: termsOccurences[term],
    frequency: (termsOccurences[term] * 100 / uniqueTermsCount).toFixed(2),
  }))
  .sort((a, b) => b.occurences - a.occurences);

  const analysis = { quotesCount, uniqueTermsCount, uniqueTerms };

  return analysis;
}

const analysis = analyseTerms({ quotes });

console.log(JSON.stringify(analysis, null, 2));
