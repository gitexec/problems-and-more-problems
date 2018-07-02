function height(bst){
	if(!bst)
		return 0;
	return Math.max(height(bst.left), height(bst.right)) + 1;
}

module.exports = height;