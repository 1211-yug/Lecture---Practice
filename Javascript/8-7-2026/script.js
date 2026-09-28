// 1. copyWithin()

console.log("======= 1. copyWithin =======");

{
    let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    console.log(arr.copyWithin(0, 3));
}

{
    let seats = ["A", "B", "C", "D", "E"];

    seats.copyWithin(2, 0, 2);

    console.log(seats);
}

// 2. flat() 

console.log("======= 2. flat() =======");

{
    let arr = [1, 2, 3, [[4, 5], [6, 7]]];

    console.log(arr.flat(2));

}

// 3. flatmap()

console.log("======= 3. flatmap() =======");

{
    let numbers = [1, 2, 3, 4, 5];

    let result = numbers.flatMap(num => [num, num * 2]);

    console.log(result);
}

// 4. forEach()

console.log("======= 4. forEach() =======");

{
    let fruits = ["Apple", "Banana", "Mango"];

    fruits.forEach(function (item) {
        console.log(item);

    })

}

// 5. map()

console.log("======= 5. map() =======");

{
    let numbers = [1, 2, 3];

    let result = numbers.map(num => num + 2);

    console.log(result);
}

// 6. filter()

console.log("======= 6. filter() =======");

{
    let numbers = [10, 11, 12, 20, 33];

    let even = numbers.filter(num => num % 2 === 0);

    console.log(even);
}

// 7. some()

console.log("======= 7. some() =======");

{
    let numbers = [10, 20, 30, 40, 50];

    console.log(numbers.some(num => num > 20));
}

// 8. every()

console.log("======= 8. every() =======");

{
    let arr = [10, 20, 100, 30];

    console.log(arr.every(num => num > 5));
}

// 9. reduce()

console.log("======= 9. reduce() =======");

{
    let numbers = [50, 30, 30, 10];

    let sum = numbers.reduce((total, num) => total + num);

    console.log(sum);
}

// 10. reduceRight()

console.log("======= 10. reduceRight() =======");

{
    let array = ["y", "u", "g"];

    console.log(array.reduceRight((a, b) => a + b));

}

// 11. entries()

console.log("======= 11. entries() =======");

{
    let fruits = ["Apple", "Banana", "Mango"]

    for (let [index, value] of fruits.entries()) {
        console.log(index, value);
    }
}

// 12. key()

console.log("======= 12. key() =======");

{
    let foods = ["🍕", "🍔", "🍟", "🌭"];

    for (let key of foods.keys()) {
        console.log(key);
    }
}

// 13. values()

console.log("======= 13. values() =======");

{
    let fruits = ["Apple", "Banana", "Mango"];

    for (let value of fruits.values()) {
        console.log(value);
    }
}

console.log("============================");


{
    let foods = ["🍕", "🍔", "🍟", "🌭", "🍿", "🌮", "🥪", "🧀"];

    for (let value of foods.values()) {
        console.log(value);
    }
}

console.log("=================================");
console.log("=================================");

// 1. slice()

console.log("======= 1. slice() =======");

{
    let colors = "Red, Blue, Green, Yellow, Black";

    console.log(colors.slice(0, 16));
}


// 2. concat()

console.log("======= 2. concat() =======");

{
    let students = "Yug, Prince, Mayur ";
    let teachers = "Sir";

    console.log(students.concat(teachers));

}

// 3. at()

console.log("======= 3. at() =======");

{
    let citis = "Surat Rajkot Ahmedabad vadodara";

    console.log(citis.at(15));

}

// 4. endsWith()

console.log("======= 4. endsWith() =======");

{
    let file = "resume.pdf";

    console.log(file.endsWith(".pdf"));

}

// 5. startsWith()

console.log("======= 5. startsWith() =======");

{
    let username = "Mr Yug";

    console.log(username.startsWith("Mr"));
}

// 6. includes()

console.log("======= 6. includes() =======");

{
    let car = "Thar BMW Audi";

    console.log(car.includes("Audi"));

}

// 7. indexOf()

console.log("======= 7. indexOf() =======");

{
    let bike = "Yamaha Honda Splendor";

    console.log(bike.indexOf("Honda"));

}

// 8. lastIndexOf()

console.log("======= 8. lastIndexOf() =======");

{
    let str = "This is a javascript!";

    console.log(str.lastIndexOf("is"));
}

// 9. repeat()

console.log("======= 9. repeat() =======");

{
    console.log("hello, yug. ".repeat(3));
}

// 10. split()

console.log("======= 10. split() =======");

{
    let names = "yug,prince,mayur,banty,akshat";

    console.log(names.split(","));

}

// 11. toLowerCase()

console.log("======= 11. toLowerCase() =======");

{
    console.log("SURAT".toLowerCase());
}

// 12. toUpperCase()

console.log("======= 12. toUpperCase() =======");

{
    console.log("yug patel".toUpperCase());
}

// 13. trim / trimEnd / trimStart

console.log("======= 13. trim / trimEnd / trimStart =======");

// trmStart
{
    console.log("   Hello".trimStart());
}

// trmEnd
{
    console.log("Hello   ".trimEnd());
}

// trim
{
    let city = "   Surat   ";

    console.log(city.trim());
}

// 14. valueOf()

console.log("======= 14. valueOf() =======");

{
    let language = "JavaScript";

    console.log(language.valueOf());

}

