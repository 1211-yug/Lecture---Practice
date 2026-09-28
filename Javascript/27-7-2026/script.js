// Sticky Header 
const header = document.getElementById('myHeader');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Background change on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        document.body.style.background = "#1292c5ff"
    } else {
        document.body.style.background = "#4ba2c5ff"
    }
})

// Back To Top Btn
const topBtn = document.getElementById("back-To-Top")
const par = document.querySelectorAll("p");

document.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        par.forEach((p) => {
            p.style.color = "black";
        });
        topBtn.style.display = "block"
    } else {
        par.forEach((p) => {
            p.style.color = "white";
        });
        topBtn.style.display = "none"
    }
})

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

// Scroll Progress Bar
const progressBar = document.getElementById('progressBar');

window.addEventListener('scroll', () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const percentage = (scrolled / scrollableHeight) * 100;
    progressBar.style.width = percentage + '%';
})
