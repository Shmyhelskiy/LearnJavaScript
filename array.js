// Task 2

// let styles = [ 'Джаз','Блюз', ];
// alert( styles );
// styles.push('rok and roll');
// alert( styles );
// styles[ 1 ] = 'Classik';
// alert( styles );
// styles.shift();
// alert( styles );
// styles.unshift('Rep', 'Reggi');
// alert( styles );




// Task 4
// function sumInput(){

//     let numbers = [];

//     while (true) {

//         let value = prompt('Write number', 0);
        
//         if (value === '' || value === null || !isFinite(value) )  break;
        
//         numbers.push(+value);
//     }

//    let sum = 0;
//    for (let number of numbers){
//        sum += number;
//    }
//    return sum;

    
// }

// alert( sumInput() );


// Task 5
function getMaxSubSum(arr){
    let maxSum = 0;
    let centerSum = 0;


    for ( let item of arr){
        centerSum += item;
        maxSum = Math.max(maxSum, centerSum);
        if (centerSum < 0) centerSum = 0;
    }
    return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9,-11,20]) ); // 5

