// Проверка значений из диапазона
// let age = 23;

// if (age >=14 && age <=90) {
//     alert ("All good");
// } else {
//         alert("Try again");
//     }

//Проверка значений вне диапазона
// let age = 23;

// if (!(age >= 14 && age <= 90))
// if (age <= 14 || age >= 90)


// Task проверка логина
let userName = prompt ('Who are you?', '');
 if (userName == 'Admin') {
    let pass = prompt('Pass?', '')
    if ( pass === '12345') {
        alert('Hello');
    } else if( pass =='' || pass == null) {
        alert('cancellation');
    }else {
        alert('Sorry password is wrong')
    }
 }
 else if (userName =='' || userName == null) {
     alert('cancellation');
 } else {
     alert('Sorry you are not my owner');
 }