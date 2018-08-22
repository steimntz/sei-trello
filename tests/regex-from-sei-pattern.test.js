const regexFromSEIPattern = require('./regex-from-sei-pattern');

test('parsing regex from a SEI pattern', () => {
  expect(regexFromSEIPattern('@cod_orgao_sip_05d@.@seq_anual_cod_orgao_sip_06d@/@ano_4d@-@dv_mod11_executivo_federal_2d@').source).toBe('\\d{5}.\\d{6}\\/\\d{4}-\\d{2}');
});

test('parsing regex from a SEI pattern with plain numbers', () => {
  expect(regexFromSEIPattern('@seq_anual_cod_orgao_sip_07d@-@dv_mod97_base10_cnj_2d@.@ano_4d@.8.22.@cod_orgao_sei@').source).toBe('\\d{7}-\\d{2}.\\d{4}.8.22.\\d+');
});
