'use strict';

class Node{
    constructor(val, next, prev){
        this.value = val;
        this.next = next;
        this.prev = prev; 
    }
};

class DoublyLinkedList{
    constructor(){
        this.front = new Node(null, null, null);
        this.rear = new Node(null, null, null);
        this.size = 0 
    };

    insertFront(val){
        let nodeIn = new Node( val, null, null);
        if( this.size === 0 ){
            this.front = this.rear = nodeIn
        } else {
            nodeIn.next = this.front
            this.front.prev = nodeIn;
            this.front = nodeIn;
        }
        this.size++
    };
    insertAtIndex(val, index){
        if( index > this.size){
            throw ` Index Out of Range`;
        } else {
            if( index === 0 ){
                this.insertFront(val)
            } else {
                let holder = this.front;
                let i = 0; 

                while( i < index - 1 ){
                    holder = holder.next;
                    i++
                };

                if(holder.next != null){
                    holder.next.prev = holder
                };

                let nodeIn = new Node( val,holder.next, holder);
                holder.next = nodeIn;
                this.size++
            }; 
        }
    };
    deleteFront(){
        return this.front = this.front.next;
    };

    deleteAtIndex(index){
        if(index > this.size){
            throw ` index Out of Range`
        } else {
            if( index === 0 ){
                this.deleteFront()
            } else {
                let holder = this.front; 
                let i = 0;

                while( i  < index - 1 ){
                    holder = holder.next;
                    i++
                };
                if(holder.next.next != null){
                    holder.next.next.prev = holder
                };
                holder.next = holder.next.next;
                this.size--
            }
            
        }
    };

    print(){
        let holder = this.front;
        while(holder != null){
            console.log(holder.value);
            holder = holder.next;
        };
    }
    printReverse(){
        let holder = this.rear;
        while(holder != null){
            console.log(holder.value);
            holder = holder.prev; 
        }
    }

    isPalindrome(){

        let leftPointer = 0;
        let rightPointer = this.size - 1;
        let validity = true; 

        let frontHolder = this.front;
        let rearMostHolder = this.rear; 


        while( validity && leftPointer < rightPointer){
            if( frontHolder.value != rearMostHolder.value){
                validity = false;
            }
        }
    return console.log(validity)        

    }

    printMiddle(){
        let fastPointer = this.front;
        let slowPointer = this.front; 

        while(fastPointer != null && fastPointer.next != null ){
            fastPointer = fastPointer.next.next;
            slowPointer = slowPointer.next;
        };
        console.log(slowPointer.value)   
    }

    isValuePresent(val){
        let frontHolder = this.front;
        let rearMostHolder = this.rear;

        let found = 0; 
    
        while( !found  ){
            if ( frontHolder.value === val || rearMostHolder.value === val){
                found = true
            } else {
                return console.log( `Value Not Found`)
            }
            
            frontHolder = frontHolder.next;
            rearMostHolder = rearMostHolder.prev; 
        };

        return console.log(found)

    }

}

const q = new DoublyLinkedList();
q.insertFront(1);
q.insertFront(2);
q.insertFront(3);
q.insertFront(4);
q.insertFront(5);
q.insertFront(6);
q.insertFront(7);
q.printMiddle()
q.isValuePresent(7)
// q.print()