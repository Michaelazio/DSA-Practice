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


const priorityQ = new PriorityQueue(); 

priorityQ.enqueue(1, 100);
priorityQ.enqueue(2, 50);
priorityQ.enqueue(4,500);
priorityQ.enqueue(3, 350);
priorityQ.print()
priorityQ.popANode(4);

if(!priorityQ.isEmpty()){
    console.log(`it's not empty !!`)
}