// Lecture: let and const

/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/


/*
// ES5 (variables are function scoped)
function driversLicence5(passedTest) {
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}


driversLicence5(true);


// ES6 (variables are block scoped) - {}로 둘러 쌓인 것이 block이라 함.
function driversLicence6(passedTest) {

    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence6(true);
*/




/*
// ES6 실용적인 예 (2개의 i는 서로 다르지)
let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
};

console.log(i);
*/

/*
// ES5에서는..2개의 i가 서로 동일하겟지
var i = 23;

for (var i = 0; i < 5; i++) {
    console.log(i);
};

console.log(i);
*/





/////////////////////////////////////////////////////
// Lecture: Blocks and IIFEs

/*
// ES6 ({}block 안에 걍 넣으면 됨.)
{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b);
console.log(c);



// ES5 (IIFE 방법..좀 구질구질하지)
(function() {
    var c =3;
})();

//console.log(c);
*/





//////////////////////////////////////////////////////////
// Lecture: Strings
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}


// ES5
console.log('This is ' + firstName + ' '+ lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6 (template literals)
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);



const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('th'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));
*/







/////////////////////////////////////////////////
// Lecture: Arrow functions

/*
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});
console.log(ages5);



// ES6
// one argument with one line of code
let ages6 = years.map(el => 2016-el);
console.log(ages6);

// if more than one argument or with no argument, use ().
ages6 = years.map((el, index) => `Age element ${index +1}: ${2016 - el}.`);
console.log(ages6);

// if more than one lines of code, use {} and return keyword at the end.
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);
*/






/////////////////////////////////////////////////
// Lecture: Arrow functions 2

/*
// ES5
// you have to define a variable to store the 'this' in the method
// and use that variable inside a function to have access to the object.
// If you don't, your 'this' keyword will point to the window object(in a browser)
// in the case of a function.
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    },
}

//box5.clickMe();
*/



/*
// ES6
// By using the arrow function, we have access to the 'this' keyword of the method.
// Because the arrow function shares the lexical 'this' keyword of it's surrondings.
// If you want to use ES6 and arrow functions, then the best practice is to always use
// arrow functions when you need to preserve the value of the 'this' keyword.
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    },
}

//box6.clickMe();
*/


/*
// another
const box66 = {
    color: 'green',
    position: 1,
   
    clickMe: () => {
        // this method also no longer has it's own 'this' keyword.
        // So it shares the global this keyword. which points to the global object, window.
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    },
}

//box66.clickMe();
*/




/*
//
function Person(name) {
    this.name = name;
}


// ES5
// another cool trick while not using the var self=this;
// Using bind() to set the this keyword.
Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);



// ES6
Person.prototype.myFriends6 = function(friends) {

    var arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
}
new Person('Mike').myFriends6(friends);
*/








/////////////////////////////////////////////////
// Lecture: Destructuring

/*
// ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];
*/


/*
// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith',
}

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName:a , lastName: b} = obj;
console.log(a);
console.log(b);



//example
function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/








/////////////////////////////////////////////////
// Lecture: Arrays

/*
const boxes = document.querySelectorAll('.box');

// ES5
// we used a hack to change the nodeList to an array
// and used forEach to loop through elements
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});


// ES6
// we simply can use the from method to change it to an array
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
*/





// ES5
// when we want to loop over an array, we used the forEach or the map method
// but if we want to use the break/continue statement in a loop, we can't use forEach or map
// so we have to use a simple for loop in ES5
/*
for(var i = 0; i < boxesArr5.length; i++) {
    if(boxesArr5[i].className === 'box blue') {
        continue; //skips the iteration of the loop and go right to the next one
    }

    boxesArr5[i].textContent = 'I changed to blue!';
}
*/



// ES6
// We can use the for of.(where we can use the continue/break statement)
// it's basically forEach/map combined with the for loop.
/*
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}
*/



/*
// ES5
var ages = [12,17,8,21,14,11];
var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >=18));
*/













