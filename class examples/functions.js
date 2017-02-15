// var catName = 'Piper';

// function getPetName () {
//     var petName = 'Tori';
    // console.log(catName);
    // you can read earlier variables from within functions, but nothing from within the function can escape until you return it. So here, you can tell the console log to print Piper. But the console log outside of the function would not print Tori until you tell it to RETURN.
    // return petName;
    // anything you want to send out of a function, you have to return. 
// }
// console.log(getPetName());


// a different function example.
// function getPetName(name) {
//     return name + ' is cute.';
// }
// console.log(getPetName('Piper'));
// console.log(getPetName('Tori'));
// console.log(getPetName('Sammy'));

// new example of . . . something.
// function callMeBackMaybe(action) {
//     action();
// }

// callMeBackMaybe(function() {
//     console.log('Hey');
// });

// anonymous function
// document.getElementById('button').addEventListener('click', function() {
//     alert('You clicked me.');
// });

// another way to do it, but name the function
// function buttonClick() {
//     alert('You clicked me.');
// }

// document.getElementById('button').addEventListener('click', buttonClick);

// another way to do it but use e for event. Not really worried about this yet. He'll get to this e stuff in a few weeks.
// function buttonClick(id) {
//     alert('You clicked ' id + '.');
// }

// document.getElementById('button').addEventListener('click', function(e) {
//     buttonClick(e.target.it);
// });

// a closure is one function that returns another function. 
// function getPetName() {
//     var petName = "Tori";
//     return function() {
//         console.log(petName);
//     }
// }
// getPetName()();

// another way to do it:
// function getPetName() {
//     var petName = "Tori";
    
//     function foo() {
//         console.log(petName);
//     }
//     return foo;
// }
// getPetName()();

// iife -- anonymous function
// (function() {


// }());

// if you had a library of functions, and didn't lock them down with iffe, it is available to the whole web, and some functions are built-in by the browswer. LIke here, if we used alert, that is a built-in function within the browser, and you would destroy the normal behavior of it. (just for the time you're using it . . .not, like, permanently. So you protect your code by putting it inside the iffe.)
// function clickButton() {

// }

// function alert() {

// }



// (function() {
//     function alert() {
//         console.log('Hey');
//     }

//     function red() {
//         document.body.style.backgroundColor = 'red';
//     }

//     window.waterBottle = {
//         alert,
//         red
//     };

// }());

