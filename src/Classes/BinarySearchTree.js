class TreeNode {
    constructor(val, right, left) {
        this.val = (val === undefined ? 0 : val);
        this.right = (right === undefined ? null : right);
        this.left = (left === undefined ? null : left);
    }
}

class BinarySearchTree {
    constructor(values) {
        let j, zamjena;
        for(let i = 1; i < values.length; i++) {
            j = i - 1;
            while(values[j + 1] < values[j] && j >= 0) {
                zamjena = values[j];
                values[j] = values[j + 1];
                values[j + 1] = zamjena;
                j--;
            }
        }

        this.tree = this.createTree(values);
        this.traversePreorder(this.tree);
    }

    createTree(values, left = 0, right = values.length - 1) {
        if (left > right) {
            return null;
        }
        let rootIndex = Math.floor((left + right) / 2);
        let rootNode = new TreeNode(values[rootIndex]);
        rootNode.left = this.createTree(values, left, rootIndex - 1);
        rootNode.right = this.createTree(values, rootIndex + 1, right);
        return rootNode;
    }

    remove(root = this.tree, value) {
        if (root == null) {
            return null;
        }
        if (value > root.val) {
            root.right = remove(root.right, value);
        } else if (value < root.val) {
            root.left = remove(root.left, value);
        } else {
            if (root.left == null) {
                return root.right;
            } else if (root.right == null) {
                return root.left;
            } else {
                let minNode = minValueNode(root.right);
                root.val = minNode.val;
                root.right = remove(root.right, minNode.val);
            }
        }
        return root;
    }
    
    insert(value, root = this.tree) {
        if (root == null) {
            return new TreeNode(value);
        }
        
        if (value > root.val) {
            root.right = insert(root.right, value);
        } else  if (value < root.val) {
            root.left = insert(root.left, value);
        }
        return root;
    }
    
    minValueNode(root = this.tree) {
        let curr = root;
        while(curr != null && curr.left != null) {
            curr = curr.left;
        }
        return curr;
    }
    
    maxValueNode(root = this.tree) {
        let curr = root;
        while(curr != null && curr.right != null) {
            curr = curr.right;
        }
        return curr;
    }
    



    // Traversing the tree //
    traversePreorder(root = this.tree) {
        if (root == null) {
            return;
        } 
    
        console.log(root.val);
        this.traversePreorder(root.left);
        this.traversePreorder(root.right);
    }
    
    traversePostorder(root = this.tree) {
        if (root == null) {
            return;
        }  
        postorder(root.left);
        postorder(root.right);
        console.log(root.val);
    }
    
    traverseInorder(root = this.tree) {
        if (root == null) {
            return;
        }  
        postorder(root.left);
        console.log(root.val);
        postorder(root.right);
    }

    toBinaryArray(root = this.tree, output = ["/"]) {
        if (root == null) {
            return;
        } 
        console.log(output);
        output.push(root.val);
        this.toBinaryArray(root.left, output);
        this.toBinaryArray(root.right, output);
        return output;
    }

    bfs(root = this.tree) { 
        let queue = [];
        let output = ['/'];
        
        if (root != null) {
            queue.push(root.val);
        }    
        
        let level = 0;
        while(queue.length > 0) {
            console.log("level " + level + ": ");
            let levelLength = queue.length;
            for (let i = 0; i < levelLength; i++) {
                let curr = queue.shift(); 
                output.push(curr.val);
                if(curr.left != null) {
                    queue.push(curr.left);  
                }
                if(curr.right != null) {
                    queue.push(curr.right);
                }  
            }
            level++;
        }
        return output;
    }
}

export {TreeNode, BinarySearchTree};