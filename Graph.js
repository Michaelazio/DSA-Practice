'use strict';

class Graph{
    constructor(){
        this.adjacencyList = new Map();
        this.adjacencyListSize = 0;
    };

    addNodes(node, adjNode, weight){
       if(node !== null && adjNode !== null){
        if(!this.adjacencyList.has(node)){
            this.adjacencyList.set(node, new Set([{adjNode, weight}])) // When instanciating a Set then, it is required to pass an Iterable. That can be of objects or individual values.
            return console.log('The Node is Added')
         } else {
             if(this.adjacencyList.has(node)){
                 let nodeEl = this.adjacencyList.get(node);
                  // nodeEL = [node -> [adj_1{}, adj_2{}, ......]];
                  nodeEl.add({adjNode, weight}) // While adding any value to an existing Set then only the specific object or the value is to be passed.
                 return console.log('The Node has been updated')
             }
         };
         this.adjacencyListSize++
       } else {
         return console.log("Please Enter Valid Node and Adjacent Node")
       }
    };

    addEdges(node,adjNode,weight){
        this.addNodes(node,adjNode,weight);
        if(node !== adjNode){
            this.addNodes(adjNode,node,weight)
        }
    }

    getAParticularNode(node){
        if(this.adjacencyList.has(node) ){
            return this.adjacencyList.get(node)
        } else {
            return console.log('Node Not Found')
        }
    }; 

    getAllNodes(){
        return console.log([...this.adjacencyList.keys()])
    };

    removeANode(node){
        if(this.adjacencyList.has(node)){
            this.adjacencyList.delete(node);
            this.adjacencyListSize--;
            return console.log('Node Removed');
        } else {
            return console.log('Node Not Found'); 
        }
    };

    removeAdjacentNode(node, adjNode, weight){
        if(this.adjacencyList.has(node)){
            let nodeEl = this.adjacencyList.get(node); 
            console.log(nodeEl)
            if([...nodeEl].find(obj => obj.adjNode === adjNode)){
              for(let obj of nodeEl){
                if(obj.adjNode === adjNode){
                    nodeEl.delete(obj);
                    break;
                };
               
              }
              return console.log('Adjacent Node has been deleted')
            }else{
              return console.log('Adjacent Node Not Found')
            }
        }
    };
    getEdgesOfANode(node){
        if(this.adjacencyList.has(node)){
            return this.adjacencyList.get(node)
        }
    }

    print(){
        return console.log(this.adjacencyList)
    }

}; 

let graphList1 = new Graph();

graphList1.addEdges(0,1,100);
graphList1.addEdges(0,2,200);
graphList1.addEdges(1,2,300); 
graphList1.print()

console.log(...graphList1.getAParticularNode(0))

