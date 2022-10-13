const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  node = null;

  addNewNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
        return;
      }

      this.addNewNode(node.left, newNode);
      return;
    } 
    
    if (node.right === null) {
      node.right = newNode;
      return;
    } 

    this.addNewNode(node.right, newNode);
  }

  removeNode(node, data) {
    if (node === null) return null;
    
    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } 

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } 

    if (node.left === null && node.right === null) {
      return null;
    }
    
    if (node.left === null) {
      return node.right;
    } 
    
    if (node.right === null) {
      return node.left;
    }
    
    let newNode = this.min(node.right);
    node.data = newNode;
    node.right = this.removeNode(node.right, newNode);
    return node;
}

  root() {
    return this.node;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.node === null) {
      this.node = newNode;
      return;
    } 
  
    this.addNewNode(this.node, newNode);
  }

  has(data) {
    return this.find(data) ? true : false;
  }

  find(data, node = this.node) {
    if (node.data === data) return node; 
    
    if (node.data > data) {
      return node.left ? this.find(data, node.left) : null
    }

    if (node.data < data) {
      return node.right ? this.find(data, node.right) : null
    }

  }

  remove(data) {
    let node = this.find(data);

    if (!node) return;

    this.removeNode(this.node, data);
  }

  min(node = this.node) {
    if (node.left === null) return node.data;

    return this.min(node.left);
  }

  max(node = this.node) {
    if (node.right === null) return node.data;

    return this.max(node.right);
  }
}

module.exports = {
  BinarySearchTree
};