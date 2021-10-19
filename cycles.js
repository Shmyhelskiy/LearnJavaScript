// Task выведите чётные числа
// let i = 0;
// for (i; i <= 10; i++) {
//     if (i % 2 == 0){
//         alert(i);
//     } 
// };

//Task change for to while
// let i = 0;
// while(i < 3) {
//     alert(`number ${i}!` );
//     i++
// }

//Task nubmer > 100
// let number;
// di {
//     prompt{'Write number >100', ''}
// } while(number <= 100 && number)


//Task Вивести прості числа
let num = prompt (`До якого числа робити перебор?`, '')
nextPrime: for (let i = 2; i <= num ;i++ ) {
    for (let j = 2; j < i; j++){
        if (i % j == 0) continue nextPrime;
    }
        alert(i);

}

