// // TASK 1
// function camelize(text){
//     return text
//     .split('-')
//     .map (
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join('');

// };

// alert(camelize("background-color"));
// alert(camelize("list-style-image"));
// alert(camelize("-webkit-transition"));      

//TASK 2
// function filterRage(arr, a, b){
//    return arr.filter(item => ( a <= item  && item <= b));
// }

// let arr = [5, 3, 8, 1];
// let filtered = filterRage(arr, 1, 4);

// alert(filtered)
// alert(arr)

// TASK 3
// function filterRangeInPlace(arr, a, b) {
//     for ( let i = 0; i < arr.length; i++ ){
//         let val = arr[i];

//         if (  val < a  || val >  b) {
//             arr.splice(i,1);
//         }
//     }
// }
// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]

// Task 4 
// let arr = [5, 2, 1, -10, 8, 22, 15, 22, 155, -3,0 ];
// // function compareNumeric( a, b ) {
// //     // if (a > b) return -1;
// //     // if (a == b) return 0;
// //     // if (a < b) return 1;
// // }

// arr.sort( (a, b) => b -a );

// alert( arr ); // 8, 5, 2, 1, -10

// Task 5

// function copySorted(arr) {
//     return arr.concat().sort();
// }
// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr );


//Task 7
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name)

// console.log( names ); // Вася, Петя, Маша

//Task 8

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];
// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
//   }));

// console.log(usersMapped)


// Task 9
// function sortByAge(arr) {
//   arr.sort((a, b) => a.age > b.age ? 1 : -1)
//   }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];


// sortByAge(arr);

// Task 19
// function shuffle(arr) {
//   arr.sort(() => Math.random() - 0,5 )
// }
// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...

// console.log()



// Task from Freecodecamp
// let arr = ([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])



// let maxnumber = [];
// let newArr = [];



// for (let i = 0; i < arr.length; i++){
//     arr[i].sort((a,b) => { return b - a})
//     maxnumber = arr[i].slice([0], [1])

//     newArr.push(arr[i].slice([0], [1]))

    
// }
    

// console.log(newArr)

//Task 'Title Case a Sentence'
// function titleCase(str) {
//     let str = `I'm a little tea pot`;
//     let arr = str.toLowerCase().split(' ');
  
//     let newStr = arr.map((value)=>{
//         return value.replace(value.charAt(0), value.charAt(0).toUpperCase())
//     })
//       return newStr.join(',')

// //   }

 

