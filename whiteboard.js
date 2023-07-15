const { Tree, TreeNode } = require('./mirror-image-trees');

function isMirror(p, q) {
    let queue = [[p, q]];

    while (queue.length > 0) {
        let [left, right] = queue.shift();

        if (!(left === null && right === null)) {

            if (left.value !== right.value) return false;
            if (
                (left.left === null && right.right !== null) ||
                (left.right === null && right.left !== null) ||
                (left.left !== null && right.right === null) ||
                (left.right !== null && right.left === null)
            ) return false;

            queue.push([left.left, right.right]);
            queue.push([left.right, right.left]);
        }
    }
    return true;
}

// test ---------------------------------

let tree1 = new Tree();
let tree2 = new Tree();

for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * 10);
    tree1.insert(random);
    tree2.insert(random);
}

console.log(isMirror(tree1.head, tree2.head));

tree1 = new Tree();
tree2 = new Tree();

tree1.insert(10);
tree1.head.right = new TreeNode(8);
tree1.head.right.right = new TreeNode(4);
tree1.head.right.left = new TreeNode(2);

tree1.head.left = new TreeNode(6);

tree2.insert(10);
tree2.head.right = new TreeNode(6);

tree2.head.left = new TreeNode(8);
tree2.head.left.right = new TreeNode(2);
tree2.head.left.left = new TreeNode(4);

console.log(isMirror(tree1.head, tree2.head));
