// object function

let student = {
    name: "Yug",
    age: 19,

    intro: function () {
        // console.log("Hello Brother, My name is ", this.name);
        // console.log("I am ", this.age, "Year old");
        return `Hello Brother, My name is ${this.name}. I am  ${this.age} Year old.`;
    }
};

console.log(student.intro());

// student.intro();

function* signal() {
    yield red;
    yield green;
    yield yellow;
}

console.log(signal.next());
console.log(signal.next());
console.log(signal.next());
