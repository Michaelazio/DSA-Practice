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
        // adjacencySet = [...this.getEdges(node)]; -> [{adjNode:..., weight:...}, {adjNode:...,weight:...},...]; 
            let adjacencySet = [...this.getEdgesOfANode(node)];
            console.log(`The Adjacency Set of the Node ${node}`,...adjacencySet); 

        // adjacencySet.forEach(nodeObj => 1st adjSetOfEachNode = [...this.getEdges(nodeObj.adjNode)]; 
                //then modifiedAdjSet = adjSetOfEachNode.filter(obj => obj.adjNode !== node);
                //then this.adjacencyList.set(nodeObj.adj, modifiedAdjSet);
            adjacencySet.forEach(nodeObj => {
                let secondAdjacencySet = [...this.getEdgesOfANode(nodeObj.adjNode)];
                console.log(`The Adjacency set of the adjacent node ${nodeObj.adjNode} of the node ${node}`,...secondAdjacencySet);

                let modifiedAdjSet = adjacencySet.filter(obj => obj.adjNode !== node);

                this.adjacencyList.set(nodeObj.adjNode, modifiedAdjSet)
            })
      
        // after all the above process done then -> this.adjacencyList.delete(node) 
        this.adjacencyList.delete(node); 

        return this.print()
    };
    getEdgesOfANode(node){
        if(this.adjacencyList.has(node)){
            return this.adjacencyList.get(node)
        }
    }

    print(){
        return console.log(this.adjacencyList)
    };

    degree(){
        // take all the nodes of the graph in a list -> let allTheNodes = [...graph.getAllNodes()]; 
        let allTheNodes = [...this.adjacencyList.keys()]
        console.log(`All The Nodes of The Graph are:`,...allTheNodes); 

        // need to create a Map named degreeMap for inserting all the nodes with their relevant degrees; 
        let degreeMap = new Map(); 
     
        //then for all the nodes that allTheNodes and by each nodes there in 
        for(let i=0; i<allTheNodes.length; i++){

             // 1st need to get the adjacency set of each nodes and assign it as adjacencySet
            let adjacencySet = [...this.getEdgesOfANode(allTheNodes[i])];
            console.log(`The Adjacency nodes are for ${allTheNodes[i]} is,`, ...adjacencySet); 

            // then for all the adjacent Node objects there in the set of adjacencySet and with each of those objects
            adjacencySet.forEach(nodeObjects => {

                // first I must check the degreeMap for presence of any number of degree to a specific adjacent node of the adjNode Object
                    //if already present then resetting to that adjacent node with an addition to a degree
                    if(degreeMap.has(nodeObjects.adjNode)){
                        degreeMap.set(nodeObjects.adjNode, degreeMap.get(nodeObjects.adjNode) + 1)
                    }else{
                    //if not then setting of that adjacent node with a degree one;
                        degreeMap.set(nodeObjects.adjNode, 1)
                    }      
            });
             //then return the degreeMap in console.log();
             return console.log(`The Degree of each nodes are:`,degreeMap)
        }
           
            
                
                   
       
                   
    }

}; 

let graphList1 = new Graph();

graphList1.addEdges(0,1,100);
graphList1.addEdges(0,2,200);
graphList1.addEdges(1,2,300); 
graphList1.addEdges(0,3,300); 
graphList1.addEdges(0,4,300); 
graphList1.addEdges(1,3,300); 
graphList1.print()


graphList1.removeANode(0);
graphList1.print()
graphList1.degree()




