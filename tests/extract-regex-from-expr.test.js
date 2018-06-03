const extractRegexFromExpr = require('./extract-regex-from-expr');

test('expression with countable variable', () => {
  expect(extractRegexFromExpr('seq_anual_cod_orgao_sip_07d').source).toBe('\\d{7}');
});

test('expression with punctuation marks and numbers variable', () => {
  expect(extractRegexFromExpr('.8.22.').source).toBe('.8.22.');
});

test('expression with undefined countable digits', () => {
  expect(extractRegexFromExpr('cod_orgao_sei').source).toBe('\\d+');
});
