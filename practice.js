// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase().join(' ');
// };

// const upperFirstWord = function (str) {
//     const [first, ...others]= str.split(' ');
//     console.log(first, others);
//     return [first.toUpperCase(), ...others].join('');
// };

// const transform = function (str, fn) {

//     console.log(`Original string: ${str}`);

//     console.log(`Transform string: ${fn(str)}`);

//     console.log(`Transform by: ${fn.name}`);
// }

// transform('JavaScript is really best!', upperFirstWord);
// transform('JavaScript is really best!', oneWord);


const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Ashtosh');