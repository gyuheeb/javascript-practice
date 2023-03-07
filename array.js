//Object는 서로 연관된 특징과 행동들을 묶어두는 것 -> Array는 같은 Object를 담아둔 것
 'use strict';
 //Array

 //1. Declaration
 const arr1 = new Array();
 const arr2 =[1,2];

 //2. Index position
const fruits =['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);   //undefined

//3. Loopong over an array
//print all fruits
//a. for
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
//b. for of
for(let fruit of fruits){
    console.log(fruit);
}
//c. forEach
// fruits.forEach(function (fruit,index,array){
//     console.log(fruit,index); 
// })
fruits.forEach((fruit,index) =>  console.log(fruit,index)); 

//4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('lemon','tomato');
console.log(fruits);
// pop: remove an item from the end
fruits.pop();
console.log(fruits);    //배열의 맨 뒤의 값 부터 remonve

//unshift: add an item to the beginning
fruits.unshift('peach','tomato');
console.log(fruits);
//shift: remove an item to tho beginning
fruits.shift();
console.log(fruits);   //배열의 맨 앞의 값 부터 remonve

/**shift, unshift are slower than pop, push */

//splice: remove an item by index position
fruits.splice(1,2);  //value.splice( A, B)  -> A의 값부터 B의 수만큼 배열의 값을 remove 
fruits.splice(1);    // B의 값을 지정하지 않았다면 지정한 시작 값부터 끝까지 모두 remove
console.log(fruits);

fruits.splice(1,1,'banana','orange');  //value.splice( A, B)  -> A의 값부터 B의 수만큼 배열의 값을 remove 하고 "원하는 data를 삽입 가능"
console.log(fruits);

//combine two arrays
console.log('----combine----');
const fruits2 = ['Coconut',' papaya'];
console.log(fruits2);  // [ 'Coconut', ' papaya' ]
console.log(fruits);   // [ 'tomato', 'banana', 'orange' ]

const newFruits = fruits.concat(fruits2);
console.log(newFruits);  // [ 'tomato', 'banana', 'orange', 'Coconut', ' papaya' ]

//5. Searching  (index / includes)
//find the index
console.log(fruits);
console.log(fruits.indexOf('banana'));  //indexOf 위치 확인
console.log(fruits.includes('orange'));  //includes 포함 여부를 true false로 출력
console.log(fruits.indexOf('melon'));   //존재하지 않는 값의 위치를 확인하게 된다면 '-1' 출력

//lastIndexOf
console.log(fruits);
fruits.push('banana');
console.log(fruits);
console.log(fruits.indexOf('banana'));  //제일 첫번째에 해당하는 값을 나타냄
console.log(fruits.lastIndexOf('banana'));  //제일 뒤에 있는 값을 나타냄 