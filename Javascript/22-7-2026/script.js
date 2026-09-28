// javascript DOM

// Dom meaning = Document Object Model

// document.getElementById()
{
    let dom = document.getElementById("firstHeading");
    dom.style.textAlign = "center";
    dom.style.color = "white";
    dom.style.backgroundColor = "black";
    dom.style.paddingBlock = "10px";

    console.log(dom);

    console.log(dom.innerHTML);

    console.log(dom.textContent);

    console.log(dom.innerText)
}

// document.getElementByClassName()
{
    let center = document.getElementsByClassName('card')[0]
    center.style.textAlign = "center";
    center.style.border = "1px solid gray";

    let header = document.getElementsByClassName('card-header')[0]
    header.style.border = "1px solid gray";
    header.style.color = 'black';
    header.style.backgroundColor = 'lightgray';

    let button = document.getElementsByClassName('btn')[0]
    button.style.border = "1px solid gray";
    button.style.color = 'black';
    button.style.backgroundColor = 'skyblue';

    let footer = document.getElementsByClassName('card-footer')[0]
    footer.style.border = "1px solid gray";
    footer.style.color = 'black';
    footer.style.backgroundColor = 'lightgray';
}

// document.getElementByTagName()
{
    let tags = document.getElementsByTagName("span");
    for (let tag of tags) {
        tag.style.textAlign = "center";
        tag.style.display = "block";
        tag.style.margin = "10px auto";
    }

}

// document.getElementByName()
{
    let email = document.getElementsByName("email")[0];
    email.style.display = "block";
    email.style.margin = "10px auto";

    console.log(email);
    
    
    let text = document.getElementsByName("text")[0];
    text.style.display = "block";
    text.style.margin = "10px auto";
    
    console.log(text);
}
