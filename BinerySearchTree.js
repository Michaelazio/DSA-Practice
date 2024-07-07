'use strict';

// Binery Search tree, has each node's one or two subnode connected according to the value's weight. 
// The Root node's leftwards nodes are gonna be smaller in size than that of to it's rightwards are. 



class Node{
    constructor(data) { //Nodes in a tree are undirected thus during their creation it is crucial to give their directional property 
        this.data = data; 
        this.left = null; 
        this.right= null;
    }
}; 


class BST{
    constructor() {
        this.root = null; // the root place has nothing untill any node is inserted
    }; 

    insertNewNode(commonNode, newNode){
        if(newNode.data < commonNode.data){
            if(commonNode.left === null){
                commonNode.left = newNode
            } else {
                this.insertNewNode(commonNode.left, newNode)
            }
        } else {
            if(commonNode.right === null){
                commonNode.right = newNode;
            }else{
                this.insertNewNode(commonNode.right, newNode)
            }
        }
    }

    insert(node){
        const newNode = new Node(node); 
        
        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertNewNode(this.root, newNode)
        }
    }; 

    inorderRec(node){
        if(node !== null){
            this.inorderRec(node.left);
            console.log(node.data);
            this.inorderRec(node.right)
        }
        /** 
         how this is actually working is, first it's printing the last most smallest node's data, then contineously going to it's right and printing one by one. 
         The basic idea here is that, the last smallest elements are always gonna be placed on the leftward side and the comparitively bigger ones gonna be placed towards it's right. 
         */
    }

    inorder(){
        this.inorderRec(this.root)
    }

};


const tree = new BST(); 

tree.insert(10);
tree.insert(5); 
tree.insert(15); 
tree.insert(20);

tree.inorder()