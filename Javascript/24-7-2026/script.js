{
    const boxForm = document.getElementById("box-form");
    const heading = document.getElementById("heading1");
    const input = document.getElementById("task");
    const btn = document.getElementById("btn");
    const form = document.querySelector("form");

    // box-form
    boxForm.style.textAlign = "center";
    boxForm.style.borderRadius = "15px";
    boxForm.style.background = "#2B2B45";
    boxForm.style.boxShadow = "0 4px 15px rgba(0,0,0,0.4)";

    // heading (h1)
    heading.style.color = "#3EA8F6";

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (input.value.trim() === "") {
            alert("Please enter a task!");
        } else {
            alert("Task Submitted!!");
            input.value = "";
        }
    });
}

{
    const btnClick = document.getElementById("btn-click");
    const btnDblClick = document.getElementById("btn-dblclick");
    const btnMouseEnter = document.getElementById("btn-mouseenter");
    const btnMouseLeave = document.getElementById("btn-mouseleave");
    const btnMouseMove = document.getElementById("btn-mousemove");

    btnClick.addEventListener("click", () => {
        alert("Click Event Triggered! ✅");
    });

    btnDblClick.addEventListener("dblclick", () => {
        alert("Double Click Event Triggered! ⚡");
    });

    btnMouseEnter.addEventListener("mouseenter", () => {
        alert("Mouse Entered! 🎯");
    });

    btnMouseLeave.addEventListener("mouseleave", () => {
        alert("Mouse Left! 🚪");
    });

    btnMouseMove.addEventListener("mousemove", () => {
        alert("Mouse Moving!");
    });
}

// form-event

{
    const form = document.querySelector("form")

    console.log(form);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const input = document.getElementById('firstName')
        console.log(input.value);

        alert("Form Submitted!!")
    })

}
