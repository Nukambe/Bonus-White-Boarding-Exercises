const { expect } = require('chai');
const { Tree, TreeNode } = require('../mirror-image-trees');

describe('TreeNode', () => {
    describe('constructor', () => {
        let node;

        beforeEach(() => {
            node = new TreeNode();
        });


        it('should have a value', () => {
            expect(node.value).to.equal(0);
        });

        it('should have a left pointer', () => {
            expect(node.left).to.equal(null);
        });

        it('should have a right pointer', () => {
            expect(node.right).to.equal(null);
        });
    });
});

describe('Tree', () => {
    let tree;

    beforeEach(() => {
        tree = new Tree();
    });

    describe('constructor', () => {

        it('should initialize head to null', () => {
            expect(tree.head).to.equal(null);
        });

        it('should initialize count to 0', () => {
            expect(tree.count).to.equal(0);
        });
    });

    describe('insert method', () => {

        it('should set inserted node as head if tree is empty or not passed in an end vale', () => {
            tree.insert(0);
            expect(tree.head.value).to.equal(0);
            tree.insert(1);
            expect(tree.head.value).to.equal(1);
            expect(tree.head.right.value).to.equal(0);
        });

        it('should insert a node at the end of a given value', () => {
            tree.insert(1);
            tree.insert(0);
            tree.insert(2, 0);
            expect(tree.head.right.value).to.equal(2);
        });

        it('should update the count', () => {
            tree.insert(0);
            tree.insert(1);
            tree.insert(2, 0);
            expect(tree.count).to.equal(3);
        });

        // it("should update the inserted node's next value if inserted between 2 nodes", () => {
        //     tree.insert(1);
        //     tree.insert(0, 1);
        //     tree.insert(2, 1);
        //     expect(tree.head.right.value).to.equal(2);
        //     tree.insert(3, 1);
        //     let right = tree.head.right;
        //     expect(right.value).to.equal(3);
        //     expect(right.left.value).to.equal(2);
        // });
    });
});
