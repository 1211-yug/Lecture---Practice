/* String Operator In Javascript */

console.log("<<<<<<<<<< String Operator >>>>>>>>>>");

let fristName = prompt("Enter the frist Name :-");
let lastName = prompt("Enter the Last Name :-");

let fullName = fristName + " " + lastName;

console.log(fullName);

let wlcMsg = "Welcome to the report card system, "
wlcMsg += fullName;

console.log(wlcMsg);

/* Ternary Operator */

console.log("<<<<<<<<<< Ternary Operator >>>>>>>>>>");

let marks = prompt("Enter a marks number (0-100) :-");

let status = marks >= 40 ? "Pass✅" : "Fail❌";

console.log("Marks :-", marks);
console.log("Status :-", status);

/* Typeof operator */

console.log("<<<<<<<<<< Typeof Operator >>>>>>>>>>");

let mark = 23;
let fName = "yug";
let age;
let student = {
    name: "Mayur",
    PhoneNum: 12342,
    address: {
        city: "Mumbai"
    }
}

console.log(typeof mark);
console.log(typeof fName);
console.log(typeof age);
console.log(typeof null);
console.log(typeof student);

/* Opetional Operator */

console.log("<<<<<<<<<< Opetional Operator >>>>>>>>>>");

let std = {
    name: "Rahul",
    scores: {
        math: 85
    }
}

console.log(std?.name);
console.log(std?.scores?.math);

/* Bitwise Operator */

console.log("<<<<<<<<<< Bitwise Operator >>>>>>>>>>");

let x = 6

let y = 3

console.log(x & y);

console.log(x | y);

console.log(x ^ y);


/* Spread and Rest Parameter */

console.log("<<<<<<<<<< Spread and Rest Parameter >>>>>>>>>>");

let subjects = ["Math", "Science", "English"]
let Marks = [...subjects, 65, 60, 73]

console.log(subjects);
console.log(Marks);

/* Operator Precedince Reminder */

console.log("<<<<<<<<<< Operator Precedince Reminder >>>>>>>>>>");

console.log(6 + 10 * 5);

console.log(13 + 9 - 3);

console.log(20 - 3 + 10);

console.log(50 - 5 / 10);

console.log(30 + 5 % 3);

console.log(true || false && false);
