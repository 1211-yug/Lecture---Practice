
// Map()
console.log("===== Map() =====");

{
    let student = new Map([['name', 'Yug'], ['age', 19], ["GRID", 10278], ['course', 'full stack developer']])

    console.log(student);

    // set()
    // new value
    console.log("===== set() =====");

    student.set('year', '1.5')
    console.log(student);

    // get()
    // return a key value
    console.log("===== get() =====");

    console.log(student.get('GRID'));

    // has()
    // return a boolean value
    console.log("===== has() =====");

    let result = student.has("year");
    console.log(result);

    // delete()
    console.log("===== delete() =====");

    student.delete('year')
    console.log(student);

    // size
    console.log("===== delete() =====");

    console.log(student.size);

    // entries()
    console.log("===== entries() =====");

    let mapent = student.entries()

    console.log(mapent.next().value);
    console.log(mapent.next().value);
    console.log(mapent.next().value);
    console.log(mapent.next().value);

    // keys()
    console.log("===== keys() =====");

    let mapkey = student.keys()

    console.log(mapkey.next().value);
    console.log(mapkey.next().value);
    console.log(mapkey.next().value);
    console.log(mapkey.next().value);

    // values()
    console.log("===== values() =====");

    let mapval = student.values()

    console.log(mapval.next().value);
    console.log(mapval.next().value);
    console.log(mapval.next().value);
    console.log(mapval.next().value);

}


// Set Object
console.log("===== Set Object =====");

let set1 = new Set([1, 2, 3, 4, 5, 6, 7, 8])
let set2 = new Set([1, 2, 3, 4, 5, 6, 9, 10])

// difference()
console.log("===== difference() =====");

console.log(set1.difference(set2));
console.log(set2.difference(set1));

// intersection()
console.log("===== intersection() =====");

console.log(set1.intersection(set2));
console.log(set2.intersection(set1));

// symmetricDifference()
console.log("===== symmetricDifference() =====");

console.log(set1.symmetricDifference(set2));
console.log(set2.symmetricDifference(set1));

// union()
console.log("===== union() =====");

console.log(set1.union(set2));
console.log(set2.union(set1));

// isDisjointFrom()
console.log("===== isDisjointFrom() =====");

let is1 = new Set([1, 2, 3, 4, 5])
let is2 = new Set([6, 7, 8, 9, 10])

console.log(is1.isDisjointFrom(is2));
console.log(is2.isDisjointFrom(is1));

// isSubsetOf()
console.log("===== isSubsetOf() =====");

let issub1 = new Set([2, 8, 12, 14, 18])
let issub2 = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18, 20])

console.log(issub1.isSubsetOf(issub2));
console.log(issub2.isSubsetOf(issub1));

// isSupersetOf()
console.log("===== isSupersetOf() =====");

let sup1 = new Set([1, 3, 5, 7, 9, 13, 15, 17, 21])
let sup2 = new Set([1, 5, 13, 17, 21])

console.log(sup1.isSupersetOf(sup2));
console.log(sup2.isSupersetOf(sup1));
