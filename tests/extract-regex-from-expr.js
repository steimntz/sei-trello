const variableType = (regex, process) => {
	return { test: expr => { return regex.test(expr) }, process: expr => new RegExp(process(expr.match(regex))) };
};

const numberToRegex = num => { return `\\d{${parseInt(num)}}` };

const countableVariable   = variableType(/_(\d+)d$/, extracted => { return numberToRegex(extracted[1]); } );
const punctuationVariable = variableType(/[\d.\/-]+/, extracted => { return extracted[0]; } );
const undefinedVariable   = variableType(/[\d_]+/, _ => { return /\d+/ } );

const rules = [countableVariable, punctuationVariable, undefinedVariable];

module.exports = (expression) => {
  return rules.find( r => { return r.test(expression); } )
	      .process(expression);
};
