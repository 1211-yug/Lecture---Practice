// Web storage in JS

let Student = {
    name: "Yug",
    age: 19,
    email: "pyug31196@gmail.com",
    course: "Full Stack Developer",
    grid: 10232
}

// setData button

let setdata = document.getElementById("setData");

setdata.addEventListener("click", () => {
    let data = JSON.stringify(Student)
    localStorage.setItem("student", data)
})

setdata.addEventListener("click", () => {
    let data = JSON.stringify(Student)
    sessionStorage.setItem("student", data)
})

// getData button

let getdata = document.getElementById("getData");

getdata.addEventListener("click", () => {
    let data = localStorage.getItem("student");

    console.log(data);

    let student = JSON.parse(data);

    console.log(student);
    console.log(student.name);
    console.log(student.age);
    console.log(student.grid);
    console.log(student.course);
});

getdata.addEventListener("click", () => {
    let data = sessionStorage.getItem("student");

    let student = JSON.parse(data);

    console.log(student);
    console.log(student.name);
});

// removeData

let removedata = document.getElementById("removeData");

removedata.addEventListener("click", () => {
    localStorage.removeItem("student");
    console.log("Student data removed successfully!");
});

removedata.addEventListener("click", () => {
    sessionStorage.removeItem("student");
    console.log("Student data removed successfully!");
});

// clearData

let cleardata = document.getElementById("clearData");

cleardata.addEventListener("click", () => {
    localStorage.clear();
    console.log("All Local Storage data cleared!");
});

cleardata.addEventListener("click", () => {
    sessionStorage.clear();
    console.log("All session Storage data cleared!");
});



