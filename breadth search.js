'use strict'; 

class Node{
    constructor(value, next){
        this.value = value;
        this.next = next
    };
};

class Queue{
    constructor() {
        this.front = new Node(null, null);
        this.rear = new Node(null, null);
        this.size = 0; 
    };
    
    isEmpty(){
        return this.size === 0; 
    }
    
    enqueue(value){
        let nodeEl = new Node(value, null); 
        if(this.size === 0 ){
            this.front = this.rear = nodeEl;
            
        } else {
            this.rear.next = nodeEl; 
            this.rear = nodeEl; 
        };
        this.size++; 
        return console.log(`Node got Inseted into the queue`) 
    }; 

    dequeue(){
        if(this.size == 0 ){
            throw `Stack Underflow`
        } else {
        let capturedNode = this.front.value; 
        this.front = this.front.next; 
        this.size--;
        return capturedNode;
        }
    }; 

    print(){
        let holder = this.front; 
        while(holder !=null){
          console.log(holder.value);
          holder = holder.next; 
        }
    }
}; 

class Graph{
    constructor(){
        this.adjacencyList = new Map();
        this.size = 0;
    };

    addNodes(node, adjNode, weight){  
     if( !this.adjacencyList.has(node)){
        let newNodeEl = new Set([{adjNode, weight}]); 
        this.adjacencyList.set(node, newNodeEl);
        } else {
            if(this.adjacencyList.has(node)){
                let existingNode = this.adjacencyList.get(node);
                // existingNode = Set{{adjNode, weigth}, {...}, ...}; 
                existingNode.add({adjNode, weight})
            }
        }; 
      return console.log(`Node Hasbeen added`)   
    };

    addEdges(node, adjNode, weight){
        this.addNodes(node, adjNode, weight); 
        if(node !== adjNode){
            this.addNodes(adjNode, node, weight); 
            this.size +=2;
        } else {
            this.size++;
        };
        return;
    }; 

    getEdgesOfaNode(node){
        if(this.adjacencyList.has(node)){
            return this.adjacencyList.get(node); 
        } else {
            return console.log(`Node Not Found`)
        }
    }; 


    deleteNode(node){
        /* 
        @Kunal Mkkherjee
        1. take the node in and get the it's adjNode set -> node = Set{{adj1}, {adj2}, {adj3},...}
        2. then collect it -> collectionNode = [...Set{{adj1}, {adj2}, {adj3},...}]; 
        3. for each of the adjNode in the collectionNode 
            3.a. get the adjNodeSet and spread it into an array -> adjNodeSet = [...this.getEdgesOfANode(adjnode)];
                3.a.1. Now this adjNodeSet will have -> [{adj1}, {adj2}, {node},...] from this array the {node} is required and that can be found from the node that is passed in, from outside; 
                3.a.2. then modifiedAdjacentNodes array -> [{adj1}, {adj2}, {node},...].filter(obj => obj.adj !== node) this part requires to be seen in the console
                3.a.3. after filtering -> do --> adjacencyList.set(adjNode, new Set(the filtered array))     
        4. then after all these delete the node from the adjacency list. 
        
        */
        if(this.adjacencyList.has(node)){
            //first took the node and procured the adjacent node set
            console.log(node)
            let adjNodesOfThisNode = this.getEdgesOfaNode(node);
            console.log(`The Adjacent node Set, of Node = ${node},  are: `,[...adjNodesOfThisNode])

            // Then Collected The set of Adjacent Nodes 
            let collectedAdjacentNodes = [...adjNodesOfThisNode]
            console.log(collectedAdjacentNodes); 

            //for each of the adjNode in the collectionNode; 
            collectedAdjacentNodes.forEach(adjNodeObject => {
                // To each Adj Node Object, there is a Adjaceny Node Set associated that is required ;
                let targetedNode = adjNodeObject.adjNode; 
                console.log(`The Targeted Node: `,targetedNode); 

                // now it is required to get the adjacency set of the targetedNode; 
                let associatedAdjacencySet = [...this.getEdgesOfaNode(targetedNode)]; 
                console.log(associatedAdjacencySet); 

                // Now that the associated adjacency set if found for the targeted node, it is now required to filter out the subjective node from it; 
                let modifiedAssociatedAdjacencySet = associatedAdjacencySet.filter(obj => obj.adjNode !== node); 
                console.log(modifiedAssociatedAdjacencySet); 

                // Now the Set is modified, it is the time to set this Set to the adjacencyList which is a Map for the targeted node; 
                this.adjacencyList.set(targetedNode, new Set(modifiedAssociatedAdjacencySet));
                
            })
            this.adjacencyList.delete(node)
            console.log(this.adjacencyList)
        } else {
            return console.log(`${node} is not present`)
        }
        //Oh!! Boy!!! This was really hard ..... no wonder y I couldnt keep the count as how many times I lost the track to the Algorithm; 
    };

    print(){
        return console.log(this.adjacencyList)
    };


    breadthSearch(sourceNode){
        let visited = []; 
        let queue = new Queue(); 

        //1st I will insert the source node into the queue and mark it as visited; 
        queue.enqueue(sourceNode); 
        visited.push(sourceNode); 

        // until the queue is completely emptied after contineously inserting and taking out of the nodes; 
        while(!queue.isEmpty()){
            // taking the node out from the queue to search for it's adjacency nodes set; 
            let nodeOutFromQ = queue.dequeue(); 
            
            //Now going to get the adjacency set of it;
            let adjacencySetOfNodeOutFromQ = [...this.getEdgesOfaNode(nodeOutFromQ)]; 
            console.log(adjacencySetOfNodeOutFromQ); 

            //Now for each of the adjacent nodes, if each one of these aren't visited yet, then needs to be visited and enqueued to the queue for further continuation of this search method; 
            adjacencySetOfNodeOutFromQ.forEach(adjNodeObject => {
                if(!visited.includes(adjNodeObject.adjNode)){
                    visited.push(adjNodeObject.adjNode);
                    queue.enqueue(adjNodeObject);
                }
            });
            return console.log(`These Nodes are visited:`,...visited)
        }
    }
};


//Testing the Code, written till now; 
const g = new Graph(); 
g.addEdges(0,1,100);
g.addEdges(1,2,300);
g.addEdges(2,0, 400);
g.addEdges(0,4, 600);
g.addEdges(2,5, 600);
g.addEdges(2,6, 600);
g.print()


g.deleteNode(4);
g.deleteNode(5);
g.deleteNode(6);
g.print()
g.breadthSearch(0)


