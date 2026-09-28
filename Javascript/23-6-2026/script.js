console.log("Hello World");

// Dom Element

document.getElementById("firstHeading").innerHTML = "Hello Javascript"

document.getElementById("paraOne").innerHTML = "This is JavaScripts"

document.getElementById("paraOne").style.color = "red"

const btn = document.getElementById("colorBtn");
let isColorApplied = false;

btn.addEventListener("click", () => {
    if (isColorApplied === false) {
        document.body.style.backgroundColor = "yellow";
        isColorApplied = true;

    } else {
        document.body.style.backgroundColor = "";
        isColorApplied = false;
    }
});

