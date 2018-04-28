const quotes = require('./quotes');

const blacklistedTerms = {
  a: true,
  an: true,
  and: true,
  are: true,
  is: true,
  it: true,
  of: true,
  the: true,
  to: true,
};

function analyseTerms({ quotes }) {
  const quotesCount = quotes.length;

  const termsOccurences = quotes.reduce((acc, quote) => {
    const terms = quote
      .replace(/,|;|\./g, '')
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
    frequency: (termsOccurences[term] / uniqueTermsCount).toFixed(3),
  }))
  .sort((a, b) => b.occurences - a.occurences);

  const analysis = { quotesCount, uniqueTermsCount, uniqueTerms };

  return analysis;
}

const analysis = analyseTerms({ quotes });

console.log(JSON.stringify(analysis, null, 2));
