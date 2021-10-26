// Task write function with "?" and "||"
// Part 1
// function checkAge(age) {
//     return  age > 18 ? true : confirm('Родители разрешили?');

//Part 2
// function checkAge(age) {
//     return (age > 18) || return confirm('Родители разрешили?');

//Task function min(a.b)
// function min(a.b){
//     if (a > b) {
//        return a;
//     } else {
//         return b;
//     }
// }

//Task function pow(x.n)
// let x = prompt('Write x', '');
// let n = prompt('Write n', '');
// function pow(x, n) {

// let result = x ** n;
// return return;
// }
function pow(x, n) { return x ** n }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(x, n) );
  }