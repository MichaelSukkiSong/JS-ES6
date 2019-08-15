
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
*/


/*
// ES6 (variables are block scoped) - {}로 둘러 쌓인 것이 block이라 함.
function driversLicence6(passedTest) {

    //console.log(firstName); //temporal dead zone(a technical term): the variables are actually hoisted, but we stil cannot access them until they are declared.
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
// ES5에서는..(2개의 i가 서로 동일하겟지)
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

//console.log(a + b); // CAN'T access them because they are block scoped
console.log(c); // CAN access it because it is function scoped
*/

/*
// ES5 (IIFE 방법..좀 구질구질하지)
(function() {
    var cc =3;
})();

console.log(cc); // CAN'T access them
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
// another cool trick while not using var self=this;
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








/////////////////////////////////////////////////
// Lecture: The Spread Operator

// this operator is used in the function call

/*
function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18,30,12,21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);



// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'purple');
*/







/////////////////////////////////////////////////
// Lecture: Rest Parameters

// used in the function declaraion to accept an arbitrary number of parameters.

/*
// ES5
function isFullAge5() {
    console.log(arguments); //argument를 보여주는 내장(?)변수
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}

isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);
*/

/*
// ES6
function isFullAge6(...years) {
    console.log(years);
    years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);
*/






/*
// ES5
function isFullAge5(limit) {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    console.log(argsArr);

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit);
    })
}

isFullAge5(16, 1990, 1999, 1965);



// ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);
*/








/////////////////////////////////////////////////
// Lecture: Default Parameters


/*
// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'american' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
*/


/*
// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
*/









/////////////////////////////////////////////////
// Lecture: Maps

// new data structure
// up until ES6 we had to use objects as hash maps, but now in ES6 we have maps
// a new key value datastructure in ES6

// 1. we can use anything as keys
// 2. iterable
// 3. easy to get the size of the map
// 4. can easily add/remove data from a map



/*
// basic methods
// set method
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

console.log(question);
// get method
console.log(question.get('question'));
console.log(question.size);

// has, delete method
if(question.has(4)) {
    //question.delete(4);
    console.log('Answer 4 is here');
};

// clear method
//question.clear();






// looping

// for each
question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

// for of
for (let [key,value] of question.entries()) {
    console.log([key,value]);
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}:${value}`);
    }
}

console.log(question.entries());
const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));  //beauty of MAPS! xD
*/










/////////////////////////////////////////////////
// Lecture: Classes

// 1. class definitions are NOT hoisted. have first implement a class and only later in our code we can start using it.
// 2. we can only add methods to classes but not properties.

/*
// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');


// ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);    
    }

    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();
*/











/////////////////////////////////////////////////
// Lecture: Classes with Subclasses

/*
// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    // when creating a new athlete object, 'new' creates a new empty object, calls the athlete function constructor, and sets the this keyword to the newly created empty object.
    // so in the execution context, that we are in here, the this keyword will point to the new empty object
    // now if we want the person's properties(name,yearOfBirth,job) to be set on the new athlete object then we need to call the person function constructor with the this keyword also set to our newly created athlete object
    // that's exactly what we do in the next line. so after this, all the properties will be set in the athlete object that's created by the new operator.
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}


// object.create allows us to manually set the prototype of an object.
// we want the prototype of the athlete to be the prototype of the person, so they become connected.
Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}


var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();
*/





/*
// ES6
// prefered (but understand it behind the scenes)
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);    
    }
}

class Athlete6 extends Person6 {
    constructor (name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.calculateAge();
johnAthlete6.wonMedal();
*/












/////////////////////////////////
// CODING CHALLENGE

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a 
name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:

1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees

4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

var sum = 0, avgAge, parks, streets, treePark=[], totalLength = 0, avgLength;

class Park {
    constructor(name, buildYear, numTrees, area) {
        this.name = name;
        this.buildYear = buildYear;
        this.numTrees = numTrees;
        this.area = area;
        this.age = new Date().getFullYear() - this.buildYear;
    }

    calcTreeDensity() {
        return this.numTrees / this.area ;
    }
}

class Street {
    constructor(name, buildYear, length, size = 'normal') {
        this.name = name;
        this.buildYear = buildYear;
        this.length = length;
        this.size = size;
        this.age = new Date().getFullYear() - this.buildYear;
    }
}

const yellowStonePark = new Park('Yellow Stone Park', 1984, 1200, 800)
const BigBearPark = new Park('Big Bear Park', 2002, 740, 300);
const HydePArk = new Park('Hyde Park', 1859, 600, 1100);

parks = [yellowStonePark, BigBearPark, HydePArk];

const WallStreet = new Street('The Wall Street', 1789, 250, 'huge');
const HeavenStreet = new Street('The Road to Heaven', 1990, 120, 'small');
const OlympicStreet = new Street('The Olympic Big Street', 1988, 220, 'big');
const OrgrimaStreet = new Street('Orgrima Street', 1650, 100);

streets = [WallStreet, HeavenStreet, OlympicStreet, OrgrimaStreet];


//parks solution part
const parksTreeDensity = new Map();
parksTreeDensity.set('Yellow Stone Park', yellowStonePark.calcTreeDensity());
parksTreeDensity.set('Big Bear Park', BigBearPark.calcTreeDensity());
parksTreeDensity.set('Hyde Park', HydePArk.calcTreeDensity());

const parkAge = new Map();
parkAge.set('Yellow Stone Park', yellowStonePark.age);
parkAge.set('Big Bear Park', BigBearPark.age);
parkAge.set('Hyde Park', HydePArk.age);

parkAge.forEach((value) => sum+=value);
avgAge =  sum / parkAge.size;

function findTreePark(parkList) {
    parkList.forEach(el => {
        if(el.numTrees > 1000) {
            treePark.push(el.name);
        }
    })
}

findTreePark(parks);

//streets solution part
const streetsLength = new Map();
streetsLength.set('The Wall Street', WallStreet.length);
streetsLength.set('The Road to Heaven', HeavenStreet.length);
streetsLength.set('The Olympic Big Street', OlympicStreet.length);
streetsLength.set('Orgrima Street', OrgrimaStreet.length);

streetsLength.forEach((value) => totalLength += value)
avgLength = totalLength / streetsLength.size;

const streetsSize = new Map();
streetsLength.set('The Wall Street', WallStreet.size);
streetsLength.set('The Road to Heaven', HeavenStreet.size);
streetsLength.set('The Olympic Big Street', OlympicStreet.size);
streetsLength.set('Orgrima Street', OrgrimaStreet.size);


// display to console
console.log('---------Park Report---------');
parksTreeDensity.forEach((value,key) => console.log(`${key} has tree density of ${value}`));
console.log(`Average age of each town's park is ${avgAge}`);
console.log(`${treePark} has more than 1000 trees!`);
console.log('---------Street Report---------');
console.log(`The total length is ${totalLength} and the average length is ${avgLength}`);
streetsLength.forEach((value, key) => console.log(`${key} is size: ${value}`));



































