'use strict';


class Node{
    constructor(val, next){
        this.value = val;
        this.next = next
    }
};

class SinglyLinkedList{
    constructor(){
        this.front = new Node(null, null);
        this.size = 0 
    };

    insertFront(val){
        const nodeIn = new Node(val, this.front);
        this.front = nodeIn
      
        this.size++
    };

    isEmpty(){
        return this.size == 0; 
    }

    deleteFront(){
        if(this.isEmpty()){
            throw ` Nothing There in the List`
        } else {
            this.front = this.front.next; 
            return this.size--
        };
    }

    insertAṭIndex(val, index){
        if( index > this.size){
            throw `Index Out of Range`
        } else if ( index == 0 ){
            this.insertFront(val);
        } else {
            let holder = this.front;
            let i = 0;

            while( i < index - 1){
                holder = holder.next;
                i++
            };
            let nodeIn = new Node(val, holder.next);
            holder.next = nodeIn
            this.size++
        }
    }

    deleteAtIndex(index){
        if(index > this.size){
            throw ` Index Out of Range`
        } else  {
            if( index == 0){
                this.deleteFront();
            } else {
                let holder = this.front;
                let i = 0;

                while( i < index - 1 ){
                    holder = holder.next;
                    i++
                };
                holder.next = holder.next.next;
                this.size-- 
            }
        }
    }

    print(){
        let holder = this.front;
        while( holder != null){
            console.log(holder.value);
            holder = holder.next
        }
    }
    insertRear(val){
        if(this.size ==0 ){
            this.insertFront(val)
        } else {
            let nodeIn = new Node(val, null);
            if (this.size == 1){
                this.front.next = nodeIn;
               
            } else {
                let holder = this.front; 
                while(holder.next != null){
                    holder = holder.next
                };
                holder.next = nodeIn
            }
            this.size++
        }


    }
}

const q = new SinglyLinkedList();


q.insertRear(6);
q.insertRear(7);
q.insertRear(8);
q.print()