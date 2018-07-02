class BST{
	constructor(data){
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(value){
		if(value < this.data){
			if(!this.left)
				this.left = new BST(value);
			else
				this.left.insert(value);
		}
		else{
			if(!this.right)
				this.right = new BST(value);
			else
				this.right.insert(value);
		}
		return this;
	}
}

module.exports = BST;