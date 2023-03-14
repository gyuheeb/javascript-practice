'use strict';
// Promise in a JavaScript object for asynchronous operation. : 비동기적으로 처리
// State : pending -> fulfilled or rejected
// Producer vs Consumer

//1. Producer
// when new Promise is created, the executor runs automatically
//새로운 프로미스가 만들어 질때는 전달한 executor라는 콜백 함수가 바로 실행 
const promise =new Promise((resolve, reject)=> {
    //doing some heavy work(network, read files)
    console.log('doing something...');
    setTimeout(() => {
      //  resolve('roopy');  -> 성공적으로 잘했다면 "resolve 호출"
      reject(new Error('no network'))        //실패했다면 "reject" 왜 실패했는지 error 출력 
    },2000);
});

//2. Cunsumers: then, catch, finally
promise.then(value =>{   //value == roopy
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log('finally');
})   //finally : 실패여부와 상관없이 무조건 수행 됨.


//3. Promise chaining
const fetchNumber =new Promise((resolve, reject) => {
    setTimeout(()=> resolve(1),1000)
});

fetchNumber.then(num => num*2)
            .then(num => num*3)
            .then(num =>{ 
                return new Promise((resolve, reject) => {
                    setTimeout(()=> resolve(num -1),1000);
                });
            })
    .then(num => console.log(num));

//4. Error Handling
const getChicken = () =>
        new Promise((resolve, reject) =>{
            setTimeout(()=> resolve(`chicken`),1000);
        });

const getegg = chicken =>
        new Promise((resolve, reject) => {
            setTimeout(()=> resolve(`${chicken} => egg`),1000);
        });

const getcook = egg =>
        new Promise((resolve,reject)=>{
            setTimeout(()=> reject(new Error(`error! ${egg} => egg fried`)),1000);
        });


getChicken().then(chicken=>getegg(chicken))
            .then(egg=> getcook(egg))
            .then(cook => console.log(cook));

// 위와 동일한 출력값 

   getChicken().then(getegg)
            .catch(error => {
                return 'Bread';
            })
            .then(getcook)
            .then(console.log)
            .catch(console.log);
 
 