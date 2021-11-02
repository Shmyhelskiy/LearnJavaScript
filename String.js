// Task up first letter 
// function ucFirst(str){
//     if (!str) return str;

//     return str = str[0].toUpperCase() + str.slice(1);
// }
// alert(ucFirst("alex"));

// Task check spam 

// function checkSpam(str) {

// let foundPos = str.toLowerCase();

// return foundPos.includes('viagra') || foundPos.includes('xxx');

// };

// alert(checkSpam('fredasdasdasxxxdasdx'));

// Task 3
// function truncate(str, maxlength) {
//     return (str.length > maxlength ) ?
//     str.substr(0, maxlength - 1) +'…' : str;
//   }
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);

//Task Highlight number

let extractCorrencyValue = (str) => {
	let value = '';
	for (let i of str) {
		if(i % 1 == 0){
			value += i
		}
	}
	return value
}
alert(extractCorrencyValue('фьофао'))