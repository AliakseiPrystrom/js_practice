"use strict";

//closures example...

const personOne = {
    name: 'Test1',
    age: 'Test1',
    job: 'Test1'
};
const personTwo = {
    name: 'Test2',
    age: 'Test2',
    job: 'Test2'
};

function bindFunc(person) {
    return function () {
        console.log(`Person: ${person.name},${person.age},${person.job}`);
    };
}

const one = bindFunc(personOne),
    two = bindFunc(personTwo);
one();
two();

//collback example...

function first(callback) {
    console.log(1);
    callback();
}

function collbackFNwithParametrs(a, b) {
    console.log(a * b);
}

function collbackFNwithOutParametrs() {
    console.log(2);
}

first(collbackFNwithOutParametrs);
first(function () {
    collbackFNwithParametrs(5, 5);
});

//object example...

const options = {
    name: 'test',
    size: 120,
    width: 1024,
    heigh: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('Making test...');
    }
};

delete options.size;

let counter = 0;
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Object in object info: ${i} = ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Object info: ${key} = ${options[key]}`);
        counter++;
    }
}
console.log(counter);

const{border,bg} = options.colors;
console.log(border,bg);

//array example...

const arr =[1,2,3,4,5,6,7,8,9,0];

for(let i = 0;i<arr.length;i++){
    console.log(arr[i]);
}

for(let value of arr){
    console.log(arr[value]);
}

arr.forEach(function(item,i,ar){
    console.log(`${i}, ${item}, ${ar}`);
});


