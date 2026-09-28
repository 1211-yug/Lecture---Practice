// charAt()

// only positive value.

console.log("======= charAt() =======");

{
    let name = "Yug Patel";

    console.log(name.charAt("2"));
}

//  charCodeAt()

// ASCII value Return kare.

console.log("======= charCodeAt() =======");

{
    let name = "Yug Patel"

    console.log(name.charCodeAt("2"));
}

// codePointAt()

console.log("======= codePointAt() =======");

{
    let emoji = "😊";

    console.log(emoji.codePointAt(0));
}

// match()

console.log("======= match() =======");

{
    let str = "This is a dog. but dog is very dangeres.";

    result = /[a-z]/g;

    console.log(str.match(result));

}

// matchAll()

console.log("======= matchAll() =======");

{
    let str = "This is Javascript String Methods!"

    let result = /[A-Z]/g

    const arr = [...str.matchAll(result)]

    console.log(arr[0]);
}

// replace()

console.log("======= replace() =======");

{
    let par = "This dog's name is jerry and jerry is very good dog.";

    console.log(par.replace(/\bjerry\b/, "bob"));

    console.log(par.replace(/\bjerry\b/g, "bob"));
}

// toString()

console.log("======= toString() =======");

{
    const stringobj = new String("Yug");

    console.log(stringobj);

    console.log(stringobj.toString());

}

