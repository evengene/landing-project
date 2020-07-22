
// // Exercise 1

// function getInfo() {
//
//     let people = [
//         {
//             name: 'Elina',
//             age: 30
//         },
//
//         {
//             name: 'Alex',
//             age: 33
//         },
//
//         {
//             name: 'Sam',
//             age: 49
//         }
//     ];
//
//     const age = people.map(person => person.age); //we created a new function that has people's age in it
//     console.log(`All the available ages are: ${age}`);
//     const average = age.reduce((total, next) => total + next, 0) / age.length; //finding average through function
//     console.log(`The average age is: ${average}`);
//     const old = Math.max(...age); //передать array как несколько параметро через запятую
//     console.log(`The oldest age is: ${old}`);
//     const oldest = people.find(function (person) {
//         return person.age === old
//     });
//     console.log(`The oldest person in array is: ${oldest.name}, ${oldest.age}`);
//
//     console.log('Average age here is:' + average, 'Name of the oldest person is:' + oldest.name)
// }
//
// getInfo();


// //Exercise 2
// //Из массива в объект
// const fromEntries = entries => {
//     const obj = {}; //create a variable and assign an empty array
//     entries.forEach(entry => { //go through each element in array
//         obj[entry[0]] = entry[1]; //and assign one to another
//     });
//     return obj;
// };
//
// console.log(fromEntries([
//     ['key2', 3],
//     ['key1', 'hello'],
// ]));


// //Exercise 3
//
// function countChars(str) {
//
//     let find = {}; //we want it to be put in an empty object container
//     //current string is separated into letters; we go Through each item
//     str.split('').forEach(item => {
//         //if the item is not empty
//         if (find[item] != null) {
//             //return value after adding +1
//             ++find[item];
//         }
//         //if isn't there, we assign it 1
//         else {
//             find[item] = 1;
//         }
//     });
//
//     console.log(find);
// }
//
// console.log(countChars('арарат'));


// //Closures
// //Exercise 1

// let myFunc = function () {
//     let counter = 0;
//
//     return function (name) {
//         if (counter >= 3) return;
//         ++counter;
//         console.log(`run n ${counter} Hello, ${name}`);
//     };
//
// };
//
// let sayHello = myFunc();
//
// sayHello('Lina');
// sayHello('Lina');
// sayHello('Lina');
// sayHello('Lina');
// sayHello('Lina');
//

// //Exercise 2
//
// for (var i = 0; i < 10; i++ ) {
//     console.log(i)
// }


// for (let i = 0; i < 10; ++i) {
//     myFunction(i);
//
//     function myFunction(i) {
//         setTimeout(insideFunction, 0);
//
//         function insideFunction() {
//             return console.log(i);
//         }
//     }
//
// }
//


