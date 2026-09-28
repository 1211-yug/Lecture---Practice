// Array of length

let students = ["Yug", "Prince", "Mayur", "Akshat", "Banty"];

console.log("Element = ", students);
console.log("Array length = ", students.length);

console.log("=============================================");

// Array constructor

let array = new Array(12, 28, 16, 27)

console.log("Element = ", array);
console.log("Array length = ", array.length);


console.log("=============================================");

// concat()

let app = ["Youtube", "Instagram", "Snapchat"];
let ai = ["Chatgpt", "Gemini", "Claude"];
let app_ai = app.concat(ai);

console.log("App and Ai names =", app_ai);
console.log("Array of length = ", app_ai.length);


console.log("=============================================");


// 1. push()

// Array na last ma element add kare.

console.log("<<<=== 1. push ===>>>");

let fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);


// 2. pop()

// Array mathi last element remove kare.

console.log("<<<=== 2. pop ===>>>");

let movies = ["Dhurandhar", "Animal", "Baahubali"]

movies.pop();

console.log(movies);


// 3. unshift()

// Array ni shuruaat ma element add kare.

console.log("<<<=== 3. unshift() ===>>>");

let num = [2, 3, 4];

num.unshift(1);

console.log(num);


// 4. shift()

// Array no pehlo element remove kare.

console.log("<<<=== 4. shift() ===>>>");

let food = ["Pizza", "Burger", "Pasta"];

food.shift();

console.log(food);


// 5. indexof()

// Value no first index aape.

console.log("<<<=== 5. indexof() ===>>>");

let item = ["Bottle", "Button", "Camera"];

console.log(item.indexOf("Button"));


// 6. lastindexof()

// Value no last index aape.

console.log("<<<=== 6. lastindexof() ===>>>");

let numbers = [10, 20, 30, 40, 50];

console.log(numbers.lastIndexOf(50));


// 7. includes()

// Value che ke nai te check kare.

console.log("<<<=== 7. includes() ===>>>");

let car = ["BMW", "Thar", "Audi"];

console.log(car.includes("Audi"));


// 8. join()

// Array ne string ma convert kare.

console.log("<<<=== 8. join() ===>>>");

let bike = ["Splendor", "Yamaha", "Honda"];

console.log(bike.join("-"));


// 9. slice()

// Original array badalya vagar navo array return kare.

console.log("<<<=== 9. slice() ===>>>");

{
    let numbers = [12, 27, 16, 28]

    console.log(numbers.slice(1, 3));
}


// 10. splice()

// Original array ma add/remove/change kare.

console.log("<<<=== 10. splice() ===>>>");

let name = ["Yug", "Prince", "Mayur"];

console.log(name.splice(1, 2, "Banty"));


// 11. reverse()

// Array ulto kari de.

console.log("<<<=== 11. reverse() ===>>>");

{
    let numbers = [1, 2, 3, 4];

    console.log(numbers.reverse());
}


// 12. sort()

// Array ne sort kare.

console.log("<<<=== 12. sort() ===>>>");

{
    let fruits = ["Mango", "Apple", "Banana"];

    console.log(fruits.sort());

    let numbers = [30, 10, 50, 20];

    numbers.sort((a, b) => a - b);

    console.log(numbers);
}


// 13. fill()

// Badha elements ne ek j value thi fill kare.

console.log("<<<=== 13. fill() ===>>>");

{
    let arr = [1, 2, 3, 4, 5];

    console.log(arr.fill(2));

    let arrs = [1, 2, 3, 4, 5];

    console.log(arrs.fill(6, 1, 4));
}

console.log("=============================================");

