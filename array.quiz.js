// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(' , ');
    console.log(result);
}
  // Q2. make an array out of a string
  {
    const fruits = 'π,π₯,π,π';
    const arr1 =  fruits.split(',');
    console.log(arr1);

  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse());   //reverse λ λ°°μ΄ μμ²΄μμλ λ³κ²½
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2,5);  //slice : λ°°μ΄μμ μνλ λΆλΆλ§ λ°μμ€κ³  μΆμ λ μ¬μ© (λ¨, end - = 1)
    console.log(result);
    array.splice(0,2)
    console.log(array);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];

  // Q5. find a student with the score 90
  {
    const result = students.find((student) =>  student.score === 90
    );
    console.log(result);
    //find : μ ν΄μ§ κ°μ μ°Ύμμ return 
  }
  
  // Q6. make an array of enrolled students
  {
    const result = students.filter((student) => student.enrolled);
    console.log(result);

    //filter : true κ°λ§ μ°Ύμμ return 
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const result = students.map((student) => student.score);
    console.log(result);
  //map : λ°°μ΄μμ λ€μ΄μλ μμ νκ°μ§ νκ°μ§λ₯Ό λ€λ₯Έ κ²μΌλ‘ λ³ν

  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    const result = students.some((student) => student.score < 50);
   console.log(result);

    //some: λ°°μ΄μ μμμ€μμ μ½λ°±ν¨μμ return true κ° μλμ§ μλμ§ νμΈ
    //every: λͺ¨λ  λ°°μ΄μ μ‘°κ±΄μ΄ λ§μ‘±νλ μ§ νμΈ
  }
  
  // Q9. compute students' average score
  {
    console.log('============λ°©λ² 1=============');
    let result = 0;
    for(let i=0; i<students.length; i++){
       result = result + students[i].score;
      
    }
    console.log(result/students.length); 
    console.log('=============λ°©λ² 2============');

    const result1 = students.reduce((prev, curr) => {
      // console.log(prev);
      // console.log(curr);
       return prev+ curr.score;
    },0 );
    console.log(result1/students.length);

    //reduce: λ°°μ΄μ μλ λͺ¨λ  κ°μ λμ ν  λ μ¬μ© 
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
{
  console.log('===== λ°©λ² 1 ======');
  const result1 =  students.map((student) => student.score);
  console.log(result1);
  console.log(result1.toString()); 

  console.log('===== λ°©λ² 2 ======');
  const result2 =  students.map((student) => student.score).join();
  console.log(result2);

}
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result = students.map((student) => student.score).sort((a,b)=>a-b).join();
    console.log(result);
  }
  //sort: λ κ°μ μΈμλ₯Ό μ λ¬λ°μΌλ©° μ λ ¬ μμλ₯Ό κ²°μ νλ κ°μ λ°ν
  //μ΄μ κ°κ³Ό νμ¬ κ° | μ΄μ κ° - νμ¬κ°κ° - κ°μ λ¦¬ν΄νλ©΄ μ΄μ  κ°μ΄ νμ¬κ°λ³΄λ€ μλ€κ³  νλ¨λμ΄ μμ μΆλ ₯