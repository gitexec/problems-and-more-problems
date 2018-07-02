function delimeter(str){
	const opening = "([{";
	const closing = ")]}";
	const stack = [];
	for(let ch of str){
		if(opening.includes(ch)){
			stack.push(ch);
		}
		else if(closing.includes(ch)){
			if(stack.length === 0)
				return false;
			let openingDelimeter = stack.pop();
			if(ch === ')'){
				if(openingDelimeter != '('){
					return false;
				}
			}
			else if(ch === ']'){
				if(openingDelimeter != '['){
					return false;
				}
			}
			else if(ch === '}'){
				if(openingDelimeter != '{'){
					return false;
				}
			}
		}
		else{
			return false;
		}
	}
	if(stack.length === 0)
		return true;
	return false;
}

module.exports = delimeter;