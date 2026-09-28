// Set & Get Attributes

{
    let h1s = document.getElementsByTagName("h1");
    for (let h1 of h1s) {
        h1.style.textAlign = "center";
        h1.style.color = "red";
        h1.style.backgroundColor = "yellow";
    }
}

{

    const element1 = document.getElementById('link1')

    console.log(element1);

    let result = element1.getAttribute("target")

    console.log(result);

    const element2 = document.getElementById("link2")

    element2.setAttribute("href", "https://bloomshop12.netlify.app")

    console.log(element2);

}

// ClassList Methods 

{

    const element = document.getElementById("run")

    function add() {
        const element = document.getElementById("run")

        element.classList.add("box")
    }

    function remove() {
        const element = document.getElementById("run")

        element.classList.remove("box")
    }

    function toggle() {
        const element = document.getElementById("run")

        element.classList.toggle("box")
    }

    function replace() {
        const element = document.getElementById("run")

        element.classList.replace("box", "box-1")
    }

    function check() {
        const result = element.classList.contains("box")

        console.log(result);
    }
}

console.log(document);


// create element

const div = document.createElement("div")

div.innerText = "Create Element"

div.style.paddingBlock = "5px"
div.style.fontSize = "20px"
div.style.textAlign = "center"
div.style.color = "white"
div.style.backgroundColor = "red"

document.body.appendChild(div)



