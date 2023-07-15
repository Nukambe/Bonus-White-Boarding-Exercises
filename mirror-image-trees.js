class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    insert(val, end = null) {
        this.count++;

        if (!this.head) {
            this.head = new TreeNode(val);;
            return;
        }

        if (end === null) {
            if (val < this.head.value) {
                this.head = new TreeNode(val, this.head);
            } else {
                this.head = new TreeNode(val, null, this.head);
            }
            return;
        }

        let endNode = this.search(end);

        if (!endNode) {
            this.count--;
            console.error('End Node does not exist!');
            return;
        }

        if (val < endNode.value) {
            endNode.left = new TreeNode(val, endNode.left);
        } else {
            endNode.right = new TreeNode(val, null, endNode.right);
        }
    }

    search(val) {
        let queue = [this.head];

        while (queue.length > 0) {
            let node = queue.shift();

            if (node.value === val) return node;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return false;
    }
}


module.exports = { Tree, TreeNode };
