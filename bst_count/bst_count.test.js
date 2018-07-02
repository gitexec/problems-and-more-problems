const bst_count = require('./bst_count');
const bst = require('./BST');

test("BST count", () => {
	expect(bst_count(new bst(10).insert(5).insert(11).insert(1))).toEqual(4);
});