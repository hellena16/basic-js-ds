const { NotImplementedError } = require('../extensions/index.js')

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data
    this.right = null
    this.left = null
  }
}
class BinarySearchTree {
  constructor() {
    this.tree = null
  }

  root() {
    return this.tree ? this.tree : null
  }

  add(data) {
    this.tree = add(this.tree, data)

    function add(node, data) {
      if (!node) {
        return new Node(data)
      }

      if (node.data === data) {
        return node
      }

      if (data < node.data) {
        node.left = add(node.left, data)
      } else {
        node.right = add(node.right, data)
      }

      return node
    }
  }

  has(data) {
    return search(this.tree, data)

    function search(node, data) {
      if (!node) {
        return false
      }

      if (node.data === data) {
        return true
      }

      return data < node.data
        ? search(node.left, data)
        : search(node.right, data)
    }
  }

  find(data) {
    return find(this.tree, data)

    function find(node, data) {
      if (!node) {
        return null
      }

      if (node.data === data) {
        return node
      }

      return data < node.data
        ? find(node.left, data)
        : find(node.right, data)
    }
  }

  remove(data) {
    this.tree = remove(this.tree, data)

    function remove(node, data) {
      if (!node) {
        return null
      }

      if (data < node.data) {
        node.left = remove(node.left, data)
        return node
      } else if (node.data < data) {
        node.right = remove(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }

        if (!node.left) {
          node = node.right
          return node
        }

        if (!node.right) {
          node = node.left
          return node
        }

        let min = node.right
        while (min.left) {
          min = min.left
        }
        node.data = min.data

        node.right = remove(node.right, min.data)

        return node
      }
    }
  }

  min() {
    if (!this.tree) {
      return
    }

    let node = this.tree
    while (node.left) {
      node = node.left
    }

    return node.data
  }

  max() {
    if (!this.tree) {
      return
    }

    let node = this.tree
    while (node.right) {
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree,
}
