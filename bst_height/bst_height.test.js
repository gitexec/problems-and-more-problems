const height = require('./bst_height');
const bst = require('./BST');

test("BST height", () => {
	expect(height(new bst(4).insert(6).insert(3).insert(2))).toEqual(3);
});