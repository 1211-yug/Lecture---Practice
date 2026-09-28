
// 1. Declaration Function

console.log("====>>>>> 1. Declaration Function <<<<<<=====");

function addNumbers(a, b, c) {
    return a + b + c;
}

function sub(x, y) {
    return x - y;
}

console.log(addNumbers(10, 20, 30));
console.log(sub(30, 22));

// 2. Expression Function

console.log("====>>>>> 2. Expression Function <<<<<<=====");

const Mul = function (d, e) {
    return d * e
}

const div = function (f, g) {
    return f / g
}

console.log(Mul(20, 20));

console.log(div(100, 20));


// 3. Anonymous Function

setTimeout(function () {
    console.log("====>>>>> 3. Anonymous Function <<<<<<=====");
    console.log("Hello, My Name is Yug Patel");
}, 1000)

setTimeout(function () {
    console.log("I am Full Stack Developer");
}, 2000)


// 4. Named Function Expression

console.log("====>>>>> 4. Named Function Expression <<<<<<=====");

const factorial = function fact(num) {
    return num <= 1 ? 1 : num * fact(num - 1)
}

console.log(factorial(5));


// 5. Arrow Function

console.log("====>>>>> 5. Arrow Function <<<<<<=====");

const oddEven = (n) => {
    if (n % 2 == 0) {
        console.log("Even number = ", n);
    } else {
        console.log("Odd number =", n);
    }
};

const square = (oddEven(12));

// 6. IIFE (Immediately Invoked Function Expression)

console.log("====>>>>> 6. IIFE (Immediately Invoked Function Expression) <<<<<<=====");

(function () {
    console.log("App started");
})();

(() => {
    console.log("App End");
})();

// 7. Callback Function

console.log("====>>>>> 7. Callback Function <<<<<<=====");

function greetUser(name, callback) {
    console.log("Hello " + name);
    callback();
}

greetUser("Yug", function () {
    console.log("Welcome to JavaScript!");
});

// 8. HOC function (Higher-Order function)

console.log("====>>>>> 8. HOC function (Higher-Order function) <<<<<<=====");

function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

console.log(calculate(15, 13, add));

// 9. constructor function

console.log("====>>>>> 9. constructor function <<<<<<=====");

function Car(brand, color) {
    this.brand = brand;
    this.color = color;
}

Car.prototype.info = function () {
    return this.brand + " Car and color is " + this.color;
}

const myCar = new Car("Thar", "white");
const myCar1 = new Car("Bmw", "black");

console.log(myCar.info());
console.log(myCar1.info());

