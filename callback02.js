function greetToUser(greet){
    const name = 'Roopy';

    greet(name);
}

function greetInKorean(name){
    console.log(`${name}님 안녕하세요`);
}

function greetInEnglish(name){
    console.log(`Hi, ${name}`);
}

greetToUser(greetInKorean);
greetToUser(greetInEnglish);


setTimeout(function(){
    console.log('Hi');
}, 1000);

setTimeout(() =>console.log('Hi'), 1000) ;
