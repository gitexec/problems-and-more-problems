//O(n^2)
/*function rotate(input_array, n_times){
	for(let i = 0; i < n_times; i++){
		let last = input_array[input_array.length-1];
		for(let j = input_array.length -1;  j > 0; j--){
			input_array[j] = input_array[j-1];
		}
		input_array[0] = last;
	}
	return input_array;
}
*/
//O(n)
function rotate(input_array, n_times){
	const helper = [];
	for(let i = 0; i < input_array.length; i++){
		helper[(i + n_times % input_array.length) % input_array.length] = input_array[i];
	}	
	return helper;
}

module.exports = rotate;