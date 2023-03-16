//async & await
//clear style of using promise

//1. async
function fetchUser(){
    //do network request in 10 secs... (backend)

    return 'gyuhee';
}
const user = fetchUser();
console.log(user);
console.log('b');

//2. await 
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function apple(){
    await delay(2000);
    return 'Apple';
}

async function banana(){
    await delay(1000);
    return 'Banana';
}
        /* callback */
// function pickFruits(){
//     return apple().then(apple => {
//         return banana()
//         .then(banana =>`${apple}+${banana}`);
//     });
// }

async function pickFruits(){
    const apple1 = await apple();
    const banana1 = await banana();

    return `${apple1}+${banana1}`;

}

    /*await 병렬 처리 */
    async function pickFruits(){
        const applePromise = apple();
        const bananaPromise = banana();
        const apple2 = await applePromise;
        const banana2 = await bananaPromise;
    
        return `${apple2}+${banana2}`;
    
    }
      

pickFruits().then(console.log);

//3.useful Promise APIs  (await 병렬 처리 간단한 코드로 정리)
function pickAllFruits(){
    return Promise.all([apple(), banana()]).then(fruits => fruits.join('+')          //promise.all 을 통해서 여러 개의 promise를 비동기적으로 수행
    );
    
}
    pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([apple(), banana()]);               //promise.race 여러 개의 promise 중 가장 먼저 수행된 값을  return
}
    pickOnlyOne().then(console.log); 