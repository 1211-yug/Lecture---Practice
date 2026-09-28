const API = "http://localhost:3000/student";

let product_array = []  

const fetchApi = async() => {
    let res = await fetch(API)
    let data = await res.json()
    product_array.push(data)
}

const getData = async() => {
    await fetchApi()
    console.log(product_array);
    product_array.flat().map((item , index) => {
        document.getElementById(`demo${index}`).innerText = item.name
    })
}

getData()