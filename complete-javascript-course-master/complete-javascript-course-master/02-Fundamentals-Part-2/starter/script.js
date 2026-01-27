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



// const calcAge = function(birthYeah){
//     return 2037 - birthYeah;
// }
// const yearsUntilRetirement = function (birthYeah, firstName){
//     const age = calcAge(birthYeah);
//     const retirement = 65 - age ;

//     if (retirement > 0){
        
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired 🎉`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Bob'));


// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends); 

// //friends = ['Bob','Alice'];
// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

// console.log(jonas);

// // Exercise
// const calcAge = function(birthYeah){
//     return 2037 - birthYeah;
// }
// const years1 = [1990, 1967, 2002, 2010, 2018];


// const age1 = calcAge(years1[0]);
// const age2 = calcAge(years1[1]);
// const age3 = calcAge(years1[years1.length - 1]);
// console.log(age1, age2, age3);


// const ages = [calcAge(years1[0]), calcAge(years1[1]), calcAge(years1[years1.length - 1])];
// console.log(ages);


// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);


// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')){
//     console.log('You have a friend called Steven');
// }

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',  
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const jonas = {
//     firstName : 'jonas',
//     lastName : 'Schmedtmann',
//     age : 2037 - 1991,
//     job : 'teacher',
//     friends : ['Michael', 'Peter', 'Steven']
// }

// console.log(jonas);
// console.log(jonas.lastName);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');


// if (jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// // Challenge
// // "Jonas has 3 friends, and his best friend is called Michael" 
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


// const jonas = {
//     firstName : 'jonas',
//     lastName : 'Schmedtmann',       
//     birthYear : 1991,
//     job : 'teacher',
//     friends : ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense : false,
//     // calcAge : function() {
//     //   //  console.log(this);
//     //     return this.job;
//     // }
//     calcAge : function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getsSummary : function() {
//         return `${this.firstName} is a ${this.calcAge()} 
//         -year old ${this.job},
//         and he has ${this.hasDriversLicense ? 'a' : 'no'} 
//         driver's license.`
//     }
// };
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());

//  //console.log(jonas['calcAge'](1991));
// // Challenge
// // "Jonas is a 46-year old teacher, and he has a/no driver's license"

// console.log(jonas.getsSummary());

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');


// For loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 5; rep ++){
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }



// const jonas = [
//     'Jonas',
//     'Schmedtmann',   
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];   
// const types = [];

// for (let i = 0; i <jonas.length ; i++){
//     console.log(jonas[i], typeof jonas[i]);
    
//     types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++){
//     ages.push(2037 - years[i]);
// }
// console.log(ages);


// // continue and break
// for (let i = 0; i < jonas.length; i++){
//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- BREAK WITH NUMBER ---');
// for (let i = 0; i < jonas.length; i++){
//     if (typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// }


const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = jonas.length -1 ; i >=0; i--){
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++){
    console.log(`---- Starting exercise ${exercise} ----`); 
    for (let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise} : Lifting weight repetition ${rep} 🏋️‍♀️`);
    }
}