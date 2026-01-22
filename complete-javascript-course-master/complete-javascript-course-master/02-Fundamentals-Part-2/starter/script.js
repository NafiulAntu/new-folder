// 'use strict';


// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true ;
// if (hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio';

//const privete = 534;

// function logger(){
//     console.log('My name is Jonas');
// }

// calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);
// console.log(fruitProcessor(5,0));

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// const num = Number('23');




// // Function Declaration
// const age1 = calcAge1(1991);

// function calcAge1 (birthYeah) {
//     return 2037 - birthYeah;
// }


// // Function Expression

// const calcAge2 = function (birthYeah) {
//     return 2037 - birthYeah;
// }
// const age2 = calcAge2(1991);
// console.log(age1,age2);




// // Arrow Function
// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991);

// //calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//     const age = 2037 - birthYeah;
//     const retirement = 65 - age ;
//    // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas')); 
// console.log(yearsUntilRetirement(1980, 'Bob'));



// function cutFruitPieces(fruit){
//     return fruit * 3;
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// const juice = fruitProcessor(2,3);
// console.log(juice);

const calcAge = function(birthYeah){
    return 2037 - birthYeah;
}
const yearsUntilRetirement = function (birthYeah, firstName){
    const age = calcAge(birthYeah);
    const retirement = 65 - age ;

    if (retirement > 0){
        return retirement;
    } else {
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));