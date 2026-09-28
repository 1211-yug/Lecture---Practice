// Number of object javscript
console.log("<<<==== Numbers of objects in javscript ====>>>");

{
    let num = "12"
    let result = Number(num)

    console.log(typeof num);
    console.log(typeof result);

    let num1 = 12
    let result1 = Number(num1)

    console.log(typeof num1);
    console.log(typeof result1);

    let numObj = new Number("70")

    console.log(typeof numObj);
    console.log(numObj);

    let numObj1 = new Number("Hello")

    console.log(typeof numObj1);
    console.log(numObj1);
}

// toExponential()
console.log("<<<==== toExponential() ====>>>");

{
    let num = 39453237

    let toEx = num.toExponential(2)

    console.log(typeof toEx);
    console.log(toEx);
}

// toFixed()
console.log("<<<==== toFixed() ====>>>");

{
    let num = 121.3483

    let toFix = num.toFixed(3)

    console.log(typeof toFix);
    console.log(toFix);
}

// toPricision()
console.log("<<<==== toPricision() ====>>>");

{
    let num = 0.003823

    let toPri = num.toPrecision(3)

    console.log(typeof toPri);
    console.log(toPri);
}

// toString()
console.log("<<<==== toString() ====>>>");

{
    let num = 12112007

    let tostr = num.toString()

    console.log(typeof tostr);
    console.log(tostr);

    let strObj = { name: "Yug" };
    console.log(strObj.toString());
}

// parseFloat()
console.log("<<<==== parseFloat() ====>>>");

{
    let num = 10.6;

    let result = parseFloat(num)

    console.log(result);
}

// parseInt()
console.log("<<<==== parseInt() ====>>>");

{
    let num = 10.2;

    let result = parseInt(num)

    console.log(result);
}
