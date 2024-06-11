'use strict'

class HashTable{
    constructor(size){
        this.size= size;
        this.values = {};
    };

    createHash(value){
        return value % this.size;
    };
    
    add(value){
        let hash = this.createHash(value);
        if( this.values[hash] === undefined){
            this.values[hash] = value
        } else {
            let pointer = 0;
            while ( this.values[hash] !== undefined && pointer <= this.size){
                hash++;
                hash = this.createHash(hash); 
                pointer++
            }
            if(pointer > this.size){
                throw `NO VALUE PRESENT`
            } else {
                this.values[hash] = value
            }
        }
    }; 

    contains(value){
        let hash = this.createHash(value);

        if( this.values[hash] === value){
            return true 
        } else {
            let pointer = 0
            while( this.values[hash] !== value && pointer <= this.size){
                hash++;
                hash = this.createHash(hash);
                pointer++
            };
            if(this.values[hash] === value){
                return true
            } else {
                return false 
            }
        }
    }
    print(){
        return console.log(this.values)
    }
}

const h = new HashTable(53);

h.add(1);
h.add(10)
h.add(24)
h.add(5)
h.add(7)
h.add(11);
h.print();
console.log(h.contains(12))

// Creating a single set with elements, union of two sets

function union(arr1, arr2){

    let unionSet = [];
    let unionTable = new HashTable(101);

    for(let i=0; i < arr1.length ; i++){
        if(!unionTable.contains(arr1[i])){
            unionTable.add(arr1[i]);
            unionSet.push(arr1[i])
        }
    }

    for(let i=0; i < arr2.length ; i++){
        if(!unionTable.contains(arr2[i])){
            unionTable.add(arr2[i]);
            unionSet.push(arr2[i])
        }
    }

    return console.log(unionSet), unionTable.print()

};

const num1 = [1,2,3];
const num2 = [4,5,6];

union(num1, num2);


// Creating hash table that accepts strings as key
class HashTableForStringKey{

    constructor(size){
        this.size = size;
        this.values = {}
    };

    createHashWithKeys(stringKey){
        let totalStringNumericalValue = 0;
        for(let i=0; i < stringKey.length; i++){
            totalStringNumericalValue += stringKey.charCodeAt(stringKey[i]);
        };
        return totalStringNumericalValue % this.size; 
    };

    setValue(key, value){
        let hash = this.createHashWithKeys(key);
        return this.values[hash] = value.toString();   
    };

    getValue(key){
        let hash = this.createHashWithKeys(key);
        return this.values[hash]
    };

    print(){
        return console.log(this.values)
    }

}

const a = new HashTableForStringKey(101);

a.setValue('hello', 'World');
a.print()
console.log(a.getValue('hello'))

// to find wheather set A is a subset of set B

function toFindSubSet(setA, setB){

    let numberTable = new HashTable(51)
    for(let i=0; i < setB.length; i++){
        numberTable.add(setB[i])
    };
    let subset= true;
    let i = 0 
    while(i <= numberTable.size && subset){
        if(!numberTable.contains(setA[i])){
            subset = false
        }
        i++
    }
    return subset ? true : false 
 
}

let setA = [1,2,6];
let setB = [1,2,3,4,5,6];

console.log(toFindSubSet(setA, setB))


// Using Map constructor 

function subsetFinding(setA, setB){

let mapInstance = new Map(); 

for(let i=0; i< setB.length ; i++){
    mapInstance.set(setB[i], setB[i])
}
let subset = true
let i = 0; 
while( i < setA.length && subset){
    if(!mapInstance.has(setA[i])){
        subset = false; 
    }
    i++
}
return console.log(subset)
}

subsetFinding(setA, setB);


// Interception Problem 

function interception(setA, setB){

    let hash = new HashTable(71);
    let intercept = []
    for(let i = 0; i< setA.length; i++){
        hash.add(setA[i]);
    };
    let i = 0
    while(i < setB.length){
        let el = setB[i];
        if(hash.contains(el)){
            intercept.push(el)
        }
        i++
    };

    return console.log(intercept)

};

interception(setB, setA);

// creating unique Array 

const duplicate = [1,1,1,1,2,2,2,2,3,3,4];

function unique(arr){
    let hst = new HashTable; 
    let uniqueArray = []
    let i = 0; 
    while(i < arr.length){
        let el = arr[i]
        if(!hst.contains(el)){
            hst.add(el);
            uniqueArray.push(el); 
        }
        i++
    };
    return console.log(uniqueArray)
};
unique(duplicate)

//Two Sum Problem; 

function twoSum(arr, target){

    let map = new Map();
    let solution = []
    for(let i= 0; i < arr.length; i++){
        map.set(arr[i], i);
    };

    let found = false; 
    let i =0; 

    while(i < arr.length && !found){
        let compliment = target - arr[i]; 
        if(map.has(compliment)){
            
                solution.push(arr[i]);
                solution.push(arr[map.get(compliment)]);
                found = true
            
        };
        i++
    }
    return console.log(solution)
};

twoSum([1,2,2,7], 9)