//JSON
//JavaScript Object Notation

//1. Object to JSON
//stringify(obj)  string -> object
let json =JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);    //["apple","banana"]

const rabbit = {
    name: 'tori',
    color: 'pink',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name']);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color','size']);
console.log(json);

json = JSON.stringify(rabbit,(key, value) => {
    //console.log(`key: ${key} , value: ${value}`);
    return key === 'name' ? 'gyuheeb': value;
});
console.log(json);

//2. JSON to Object
// parse(json)  object -> string

console.clear();
json = JSON.stringify(rabbit);
const obj =  JSON.parse(json, (key, value) => {
    console.log(`key: ${key} , value: ${value}`);
    return key === 'birthDate' ? new Date(value): value;
});
console.log(json);
console.log(obj);

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

console.log(rabbit.birthDate); //object
console.log(obj.birthDate);  //string

console.log(json);