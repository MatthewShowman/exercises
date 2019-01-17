class Tree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if(value < this.value) {
            if(!this.left)
                this.left = new Tree(value);
            else
                this.left.insert(value);
        }
        else {
            if(!this.right)
                this.right = new Tree(value);
            else
                this.right.insert(value);
        }
    }

    getMinValue() {
        if(this.left === null)
            return this.value;
        else
            return this.left.getMinValue();
    }

    getMaxValue() {
        if(this.right === null)
            return this.value;
        else
            return this.right.getMaxValue();
    }

    contains(value) {
        if(value === this.value){
            return true;
        }
        
        if(value < this.value) {
            if(this.left) {
                return this.left.contains(value);
            }
            return false;
        }
        else {
                if(this.right) {
                    return this.right.contains(value);
                }
                return false;
        }
    }
}

module.exports = Tree;