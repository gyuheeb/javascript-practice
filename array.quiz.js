// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(' , ');
    console.log(result);
}
  // Q2. make an array out of a string
  {
    const fruits = '🍎,🥝,🍌,🍒';
    const arr1 =  fruits.split(',');
    console.log(arr1);

  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse());   //reverse 는 배열 자체순서도 변경
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2,5);  //slice : 배열에서 원하는 부분만 받아오고 싶을 때 사용 (단, end - = 1)
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
    //find : 정해진 값을 찾아서 return 
  }
  
  // Q6. make an array of enrolled students
  {
    const result = students.filter((student) => student.enrolled);
    console.log(result);

    //filter : true 값만 찾아서 return 
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const result = students.map((student) => student.score);
    console.log(result);
  //map : 배열안에 들어있는 요소 한가지 한가지를 다른 것으로 변환

  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    const result = students.some((student) => student.score < 50);
   console.log(result);

    //some: 배열의 요소중에서 콜백함수의 return true 가 있는지 없는지 확인
    //every: 모든 배열의 조건이 만족하는 지 확인
  }
  
  // Q9. compute students' average score
  {
    console.log('============방법 1=============');
    let result = 0;
    for(let i=0; i<students.length; i++){
       result = result + students[i].score;
      
    }
    console.log(result/students.length); 
    console.log('=============방법 2============');

    const result1 = students.reduce((prev, curr) => {
      // console.log(prev);
      // console.log(curr);
       return prev+ curr.score;
    },0 );
    console.log(result1/students.length);

    //reduce: 배열에 있는 모든 값을 누적할 때 사용 
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
{
  console.log('===== 방법 1 ======');
  const result1 =  students.map((student) => student.score);
  console.log(result1);
  console.log(result1.toString()); 

  console.log('===== 방법 2 ======');
  const result2 =  students.map((student) => student.score).join();
  console.log(result2);

}
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result = students.map((student) => student.score).sort((a,b)=>a-b).join();
    console.log(result);
  }
  //sort: 두 개의 인수를 전달받으며 정렬 순서를 결정하는 값을 반환
  //이전값과 현재 값 | 이전값 - 현재값값 - 값을 리턴하면 이전 값이 현재값보다 작다고 판단되어 앞에 출력