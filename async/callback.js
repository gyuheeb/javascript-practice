'use strict';

//JavaScript is synchronous. 동기적
//Execute the code block by orger after hoisting.
console.log('1');
setTimeout(() => console.log('2'),1000);
console.log('3');

//Synchronous callback : 즉각적으로 동기적으로 실행
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));


//Asynchronus callback : 나중에 언제실행될 지 예측할 수 없다.
function printWithDelay(print, timeout){
    setTimeout(print,timeout);
}
printWithDelay(() => console.log('async callback'),2000);


//Callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'roopy' && password === '1234') ||
                (id === 'dooly' && password === '1234')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        },2000);
    }
    getRoles(user, onSuccess, onError){ 
        setTimeout(() => {
            if(user === 'dooly'){
                onSuccess({name: 'dooly', role: 'admin'});
            }else{
                onError(new Error('no access'));
            }
        },1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(user, userWithRole => {
                            alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
        },error =>{ console.log(error);}
                );
            },
 error => { console.log(error);}
);