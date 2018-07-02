function bst_count(node){
	if(!node)
		return 0;
	return bst_count(node.left) + 1 + bst_count(node.right);
}

module.exports = bst_count;