//Objects
//one of the JavaScript's data types.
//a collection of related data and/or functionality.
//Nearly all objects in JavaScript are instances of Object
//object는 key 와 value의 집합체

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const dooly = {name: 'dooly', age:4};
console.log(dooly);   //{ name: 'dooly', age: 4 }
print(dooly);


//can add properties later
dooly.hasJob = true;
console.log(dooly.hasJob);


//can delete properties later
delete dooly.hasJob;
console.log(dooly.hasJob);  //undefined

//2. Computed properties
//key should be always string
console.log(dooly.name);
console.log(dooly['name']); 

dooly['hasJob'] =true;
console.log(dooly.hasJob);   //true

function printValue(obj, key){
    console.log('!!!!!!!!!!!!!!!!!!');
    console.log(obj[key]);
}
printValue(dooly, 'name');
printValue(dooly, 'age');


//3. Property value shorthand
const person1 ={name: '루피', age: 2};
const person2 ={name: '뽀로로', age: 3};
const person3 ={name: '포비', age: 4};
const person4 = new Person('gyuheeb', 10);
console.log(person4);


//4. Constuctor function
function Person(name,age){
    //this = {};
    this.name=name;
    this.age =age;
    //return this;
}


// 5. in operator: property existence check(key in obj)
console.log('name'in dooly); 
console.log('age'in dooly); 
console.log('job'in dooly); 
console.log(dooly.random);  //undefined

//6. for .. in vs for .. of
//for (key in obj)
for(key in dooly){
    console.log(key);  //모든 키값 출력
}

//for (value of iterable)
 const array= [1,2,3,4,5];
// for(let i=0; i<array.length; i++){
//     console.log(i);
// }
for(value of array){
    console.log(value);
}

//7. Fun cloning
//Object.assign(dest, [obj1, obj2, obj3 ...])
const user ={name: 'dooly', age : '20'};
const user2 = user;
user2.name ='roopy';
console.log(user);

// old way
 const user3 ={};
 for(key in user){
    user3[key] = user[key];
 }
 console.log(user3);

 const user4 = {};
 Object.assign(user4, user);

 //const user4 = Object.assign({},user);
 console.log(user4);

 //another example
 const fruit1 ={color: 'red'};
 const fruit2 ={color: 'blue', size:'big'};
 const mixed = Object.assign({},fruit1,fruit2);
 console.log(mixed.color);
 console.log(mixed.size);


































