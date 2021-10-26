//Task 1  Hello object

// let user = {};
// user.name = 'John';
// user.surname = 'Smith';


// console.log(user.name)
// user.name = 'Pete';
// delete user.name;
// console.log(user)

//Task 2 Check for nothing 
// const user = {
//     name: 'Alex',
//     age: 24,
// };
// console.log (user);
// function isEmpty (user) {
//     for ( let key in user ) {
//         user.name = 'Alex';
//         return false;
//     } 
//     return true;
// }
// console.log (user);

//Task 3 Sum 
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// let sum = 0;
// for ( let key in salaries){
//     sum += salaries[key];
// }
//   console.log (sum);

//Task 4 multiply on 2 
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
//   multiplyNumeric(menu);
  
//   // после вызова функции
// //   menu = {
// //     width: 400,
// //     height: 600,
// //     title: "My menu"
// //   };
//  let n = 2;
//   function multiplyNumeric (menu) {
//       for (let key in menu) {
//         if ( typeof menu[key] == 'number') {
//             menu[key] *= 2;
//         }
        
//       }
//   }

// console.log (menu);