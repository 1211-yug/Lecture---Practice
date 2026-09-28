// Async await

/* then,catch,finally */

// async function Pro() {
//     console.log("Async Function");
//     return Promise.reject("Operation failed....")
// }

// Pro().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log("Operation Complete.");
// })

/* ------------------------ */
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved......")
//     }, 2000);
// })

// const asyncFunc = async () => {
//     let result = await promise;

//     console.log(result);
//     console.log("Hello");
// }

// asyncFunc()

/* ------------------------ */

// callback hell

// console.log("Getting Data 1.......");
// getData(1, () => {
//     console.log("Getting Data 2.......");
//     getData(2, () => {
//         console.log("Getting Data 3......");
//         getData(3, () => {
//             console.log("Getting Data 4......");
//             getData(4, () => {
//                 console.log("Getting Data 5......");
//                 getData(5, () => {
//                     console.log("Getting Data 6......");
//                     getData(6, () => {
//                         console.log("Getting Data 7......");
//                         getData(7, () => {
//                             console.log("Getting Data 8......");
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

// Error Handling
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved.....")
//         // reject("Promise reject.....")
//     }, 2000)
// })

// const asyncFunc = async () => {
//     try {
//         let result = await promise;
//         console.log(result);
//         console.log("Hello, Javascript!!");
//     } catch (err) {
//         console.log(err);
//     }
// }

// asyncFunc();

/* ------------------------ */

// function fetchData(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data Received!.")
//         } , 3000)
//     })
// }

// async function getData(){
//     console.log("Loading....");
//     const result = await fetchData();
//     console.log(result);
// }

// getData()

// async function getData(){
//     try{
//         const response = await fetch("https://dummyjson.com/products/search?q=phone")

//         if(!response.ok){
//             throw new Error("Request failed..")
//         }
//         const product = await response.json()

//         console.log(product);
        

//     }catch(error){
//         console.log("Error : " , error.message);
//     }
// }
// getData()

/* ------------------------ */

let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Data received!");
        reject("Error.")
    }, 2000);

});

promise.then((data) => {
    console.log(data);
});

async function getData() {

    try {
        let result = await promise;
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }

}

getData();
