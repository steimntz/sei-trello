const extractRegex = require('./extract-regex-from-expr');

module.exports = (seiPattern) => {
  return seiPattern.match(/([^@]+)/gm)
      .map(expr => { return extractRegex(expr); })
      .reduce((acc, r) => new RegExp(acc.source + r.source));
};
