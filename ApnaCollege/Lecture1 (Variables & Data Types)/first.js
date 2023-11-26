
// JavaScript Full Course ❤️ | Variables & Data Types | Lecture 1
// https://www.youtube.com/watch?v=ajdRvxDWH4w

// https://stackoverflow.com/a/77550630/11493297
// Live Server: http://127.0.0.1:5500/

console.log("Apna College");
console.log("I love JS");
console.log("Vicky K.");

// no need to define datatype.

fullName = "Tony Stark"; // string
console.log(fullName);

age = 24; // int
console.log(age);

price = 99.99; // float
console.log(price);

x = null; // known and empty
console.log(x);

y = undefined; // unknown
console.log(y);

isFollow = false; // boolean
console.log(isFollow); 

// variable is dynamically typed.

a = 'hello';
a = 3.14;
// a = 24;
console.log(a);

// var : Variable can be re-declared & updated. A global scope variable.
// let : Variable cannot be re-declared but can be updated. A block scope variable.
// const : Variable cannot be re-declared or updated. A block scope variable.

var b = 7;
var b = 6; // can be re-declared & updated

{
    let a = 4;
    // let a = 5; // cannot be re-declared
    a = 3;
    console.log(a);
    console.log(b); // var has global scope
}

// let has block scope
{
    let a = 5;
    console.log(a);

    var b = 9;
    var b = 10;
    console.log(b);
}

const student = {
    fullName : "Rahul Kumar",
    age : 20,
    marks : 89.67,
    isPass : true
}
console.log(student);

student['age'] += 2;
console.log(student['age']);

student.fullName = "Vicky Kumar";
console.log(student.fullName);

student['marks'] = student.marks - 70;
console.log(student.marks);

student.isPass = !student['isPass'];
console.log(student['isPass']);
