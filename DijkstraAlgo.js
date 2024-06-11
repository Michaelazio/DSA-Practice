'use strict';

class GraphNode {
    constructor(node, weight){
        this.node = node;
        this.weight = weight;
    };
}; 

class PriorityQueue{
    constructor(){
        this.list = [];
    };
    size(){
        return this.list.length
    };
    
    isEmpty(){
        return this.list.length = 0
    }
 
    enqueue(node, weight){
        let nodeEl = new GraphNode(node, weight);
        let i = 0;
        let contain = false;

        while( i < this.size() && !contain){
            if(this.list[i].weight > nodeEl.weight){
                this.list.splice(i,0,nodeEl);
                contain = true;
                console.log(`The Node is added at ${i}${ i === 1 ? 'st' : i === 2 ? 'nd' : i === 3 ? 'rd' : 'th'} place in the List`)
            };
            i++;
        };
        if(!contain){
            this.list.push(nodeEl);
            return console.log(`The Node is added to the last of the List`)
        }
    };

    dequeue(){
        return this.list.shift()
    };

    print(){
        return console.log(this.list)
    };

    popANode(node){
       this.list = this.list.filter(obj => obj.node !== node);
        return console.log(this.list)
    }
};


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
        if(this.adjacencyList.has(node) && !this.adjacencyListSize === 0){
            return this.adjacencyList.get(node)
        } else {
            return console.log('Node Not Found')
        }
    }; 

    getAllNodes(){
        return [...this.adjacencyList.keys()]
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

function dijkstra(graph, node){
    let distance ={};
    
}

















let graphList1 = new Graph();

graphList1.addEdges(0,1,100);
graphList1.addEdges(0,2,200);
graphList1.addEdges(1,2,300); 
graphList1.print()