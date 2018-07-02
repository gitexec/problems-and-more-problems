const delimeter = require('./delimeter-checker');

test('delimeters checker', () => {
	expect(delimeter("()[]{}")).toEqual(true);  
	expect(delimeter("([{}])")).toEqual(true);
	expect(delimeter("([]{})")).toEqual(true);  
	expect(delimeter("([)]")).toEqual(false);
	expect(delimeter("([]")).toEqual(false);  
	expect(delimeter("([})")).toEqual(false);
});