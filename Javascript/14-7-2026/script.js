
// Javascript object methods

{
    let Employee = {
        id: "1",
        name: "Rahul",
        salary: "20000"
    }

    console.log(Employee);
}


{
    let student = new Object({
        id: "2",
        name: "Tushar",
        age: "20",
        course: "Full Stack Developer"
    })

    console.log(student);

}

// assign()

console.log("<<<<===== assign() =====>>>>");

{
    let movie1 = {
        name: "KGF",
        rate: "9.2",
        year: "2020"
    }

    let movie2 = {
        name: "KGF2",
        rate: "8.0",
        year: "2023"
    }

    let movie3 = {
        name: "Salar",
        rate: "7.5",
        year: "2021"
    }

    let result = Object.assign(movie1, movie2, movie3)

    console.log(result);

    console.log(movie1);

    console.log(movie2);

    console.log(movie3);
}

// create()

console.log("<<<<===== create() =====>>>>");

{
    let food = {
        item1: "Pizza",
        item2: "Burger",
        item3: "Sandwich"
    }

    let result = Object.create(food)

    result.item1 = "Frenki"

    console.log(result);

    console.log(food);

}

// entries()

console.log("<<<<===== entries() =====>>>>");

{
    let citys = {
        city1: "Surat",
        city2: "Ahmedabad",
        city3: "Rajkot"
    }

    for (let [key, value] of Object.entries(citys)) {
        console.log(`${key} : ${value}`);

    }

    console.log(citys);

}

// freeze()

console.log("<<<<===== freeze() =====>>>>");

{
    let obj = {
        name: "Yug",
        age: "19"
    }

    Object.freeze(obj);

    obj.age = 20;

    console.log(obj.age);

}

// isFrozen()

// return a boolean value.

console.log("<<<<===== isFrozen() =====>>>>");

{
    let animals = {
        fname: "Lion",
        sname: "Tiger",
        tname: "Elephant"
    }

    console.log(Object.isFrozen(animals));

    Object.freeze(animals);

    console.log(Object.isFrozen(animals));

}

// seal()

console.log("<<<<===== seal() =====>>>>");

{
    const object = {
        num: 42,
    }

    Object.seal(object);

    object.num = 33;

    console.log(object.num);
}

// isSealed()

// return a boolean value.

console.log("<<<<===== isSealed() =====>>>>");

{
    let birds = {
        fname: "Peacock",
        sname: "Flamingo",
        tname: "Sparrow"
    }

    console.log(Object.isSealed(birds));

    Object.seal(birds);

    console.log(Object.isSealed(birds));
}


// Game Task 

console.log("<<<<===== Game Task =====>>>>");

{
    let correctNum = 12;
    let chooseNum = prompt("Choose the correct Number :- ");

    while (chooseNum != correctNum) {
        chooseNum = prompt("It's wrong number plz Choose the correct Number :- ");
    }

    console.log("Congratulations is the correct Number.");

}

