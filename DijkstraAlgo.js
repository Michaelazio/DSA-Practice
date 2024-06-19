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
        return this.list.length === 0
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
        // how the enqueue actually looks like : list => [a,b,c,d,e.....n] where a,b,c... are nodes and the node{x: weight of x = y } then 
        // if the weight of 'a' -> any node in that list falls greater than the node that to enqueue into the list, is placed at that location.
    };

    dequeue(){
        let val = this.list.shift();
        return val
        //shit() takes the 0th element out from an array
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
            this.adjacencyList.set(node, new Set([{adjNode, weight}])) // When instanciating a Set then, it is required to pass an Iterable. 
            //That can be of objects or individual values.
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

    removeAdjacentNode(node, adjNode){
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
    // distance = {} -> { node : 0 , adj1 : infinity ...}
    let distance ={}; // going to keep track of the from a node to it's immediate adjacency.
    let prev = {}; // the previous node to it's adjacency, this actually provide the direction of approach for the calculation.



    //1st taking all the nodes in a graph and taking those into an array 
    let allNodes =  graph.getAllNodes(); // allNodes = [node1, adj1, adj2,...nodes];
    console.log(`all the nodes: `+ allNodes)
    //2nd just to start the calculation from a node, that is passed externally and it is then enqueued into a priorityqueue because it provides 1st and in this consecutive sequence priority, to the lowest weighed node. here the weight stands for the edges of the nodes in a graph. 
    let pq = new PriorityQueue(); 
    // going to pass in the starting node into this pq. 
    pq.enqueue(node, 0); // the weight is given zero because, this is the initial point and distance of it to itself is zero. 

    for (let i=0; i<allNodes.length; i++){ // for all the nodes = [node1, adj1,adj2, ...nodes] the loop runs
        if(allNodes[i] === node){ //in the very first attempt, if it found that the node at that iteration is equal to the initial node then into the distance object that initial node is passed with the distance value;
            distance[node] = 0
        } else distance[allNodes[i]] = Infinity; //there after every other nodes adjacent to it are given inifinity value because, later on it will be required to mutate the node's distance value which will be less and that is only for the first time.   
        prev[allNodes[i]] = null; // initially the previous node to a node is always null, as the calculation process hasn't started yet.
    };
<<<<<<< HEAD

=======
  
>>>>>>> 832ae97748dab6887efd954ff24ce39f01070d9c
   
    while(!pq.isEmpty()){
        let currentNode = pq.dequeue(); // currentNode -> GraphNode { {node:... , weight:...}}
        
        let adjacencySet = graph.getEdgesOfANode(currentNode.node); // adjacencySet -> Set{ {adjNode:..., weight: ...}...{}}
        
        for(let [key, value ] of adjacencySet.entries()){
            let shortestDistance = distance[currentNode.node] + key.weight; 
            if(shortestDistance < distance[key.adjNode]){
                distance[key.adjNode] = shortestDistance; 
                pq.enqueue(key.adjNode, distance[key.adjNode]); 
                prev[key.adjNode] = currentNode.node;
            }
        }
    }

    return distance; 
    
}


let graphList1 = new Graph();

graphList1.addEdges(0,1,100);
graphList1.addEdges(0,2,200);
graphList1.addEdges(1,2,300);
graphList1.addEdges(2,3,100);
graphList1.addEdges(3,4,100); 
graphList1.addEdges(4,0,100);

console.log(dijkstra(graphList1, 0))
