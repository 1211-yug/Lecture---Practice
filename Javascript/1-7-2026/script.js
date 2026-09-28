/* Control Flow */

// 1. squential control flow
console.log("<<<<<=== squential control flow ===>>>>>");

let a = 10;
let b = 20;
let c = 30;

console.log("a = ", a);
console.log("b = ", b);
console.log("c = ", c);
console.log("sum = ", a + b + c);


// 2. Condtional control flow
console.log("<<<<<=== Condtional control flow ===>>>>>");

// 2.1 if statement
console.log("<<<<<=== if statement ===>>>>>");

let age = 18;

if (age >= 16) {
    console.log("You can get a driving license 🚗");
}

// 2.2 if...else statement
console.log("<<<<<=== if...else statement ===>>>>>");

let number = 8;

if (number % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

// 2.3 else...if statement
console.log("<<<<<=== else...if statement ===>>>>>");

let marks = 92;

if (marks >= 90) {
    console.log("A+ Grade 🏆");
} else if (marks >= 80) {
    console.log("B Grade ⭐");
} else if (marks >= 70) {
    console.log("C Grade 👍");
} else if (marks >= 60) {
    console.log("D Grade 😊");
} else if (marks >= 45) {
    console.log("E Grade 😐");
} else {
    console.log("Fail ❌");
}

// 2.4 switch case statement
console.log("<<<<<=== switch case statement ===>>>>>");

let menu = 2;

switch (menu) {
    case 1:
        console.log("Pizza 🍕 - ₹299");
        break;
    case 2:
        console.log("Burger 🍔 - ₹80");
        break;
    case 3:
        console.log("Pasta 🍝 - ₹139");
        break;
    case 4:
        console.log("Sandwich 🥪 - 62");
        break;
    case 5:
        console.log("Cold Drink 🥤 - ₹30");
        break;
    default:
        console.log("Item Not Available");
        break;
}

/* 3. Looping Control Flow */
console.log("<<<<<=== Looping Control Flow ===>>>>>");

// 3.1 while loop
console.log("<<<<<=== While loop ===>>>>>");

let w = 11;

while (w > 1) {
    w--;
    console.log(w);
}
console.log("Blast Off! 🚀");


// 3.2 do while loop
console.log("<<<<<=== do while loop ===>>>>>");

let i = 1;

do {
    i++;
    console.log(i);
} while (i <= 12)

// 3.3 for loop
console.log("<<<<<=== for loop ===>>>>>");

for (i = 1; i <= 5; i++) {
    console.log(i, "Yug");
}

console.log("============");

for (i = 5; i >= 1; i--) {
    console.log(i);
}

console.log("============");

for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("============");

for (i = 10; i >= 1; i--) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("============");

for (i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

console.log("============");

for (i = 10; i >= 1; i--) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// 3.4 for...of loop
console.log("<<<<<=== for...of loop ===>>>>>");

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}

console.log("============");

let numbers = [10, 20, 30, 40];
let sum = 0;

for (let num of numbers) {
    sum += num;
}

console.log(sum);

// 3.5 for...in loop
console.log("<<<<<=== for...in loop ===>>>>>");

let student = {
    name: "Yug",
    age: 18,
    city: "Surat"
};

for (let key in student) {
    console.log(key);
}

console.log("============");

{
    let fruits = ["Apple", "Banana", "Mango"];

    for (let index in fruits) {
        console.log(fruits[index]);
    }
}

// Jump Statement

/* break, continue, return */
console.log("<<<<<=== break, continue, return ===>>>>>");

// break statement

for (i = 1; i <= 12; i++) {
    if (i == 8) {
        break;
    }
    console.log(i);
}

console.log("============");
console.log("============");


//continue statement
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 4; j++) {
        if (i == 3) {
            continue;
        }
        console.log(j);
    }
    console.log("============");
}

// return statement
function add(x, y) {
    return x - y;
}

console.log(add(100, 30));

console.log("============");
