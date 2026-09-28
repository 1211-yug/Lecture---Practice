/* === Quiz Start page === */
const quiz_start = () => {
    let startPage = document.getElementById("start_page")
    startPage.style.display = "none"

    let score_Page = document.getElementById("score_page")
    score_Page.style.display = "none"

    let quiz_body = document.getElementsByClassName("main_content")[0]
    quiz_body.style.display = "flex"

    /* === Quiz Data === */
    const quizData = [
        {
            question: "Inside which HTML element do we put the JavaScript?",
            options: [
                '&lt;script&gt;',
                '&lt;scripting&gt;',
                '&lt;javascript&gt;',
                '&lt;js&gt;'
            ],
            correct: 0
        },
        {
            question: `What is the correct JavaScript syntax to change the content of the HTML element below?
            <p id="demo">This is a demonstration.</p>`,
            options: [
                'document.getElementByName("p").innerHTML = "Hello World!"',
                'document.getElementById("demo").innerHTML = "Hello World!"',
                'document.getElement("p").innerHTML = "Hello World!"',
                'document.getElementbyclassName("p").innerHTML = "Hello World!"',
            ],
            correct: 1
        },
        {
            question: 'How do you write "Hello World" in an alert box?',
            options: [
                'msgBox("Hello World");',
                'alertBox("Hello World");',
                'alert("Hello World");',
                'msg("Hello World");',
            ],
            correct: 2
        },
        {
            question: `What is the correct syntax for referring to an external script called "script.js"?`,
            options: [
                '&lt;script src="script.js"&gt;',
                '&lt;script href="script.js"&gt;',
                '&lt;script name="script.js"&gt;',
                '&lt;script alt="script.js"&gt;'
            ],
            correct: 0
        },
        {
            question: "How to write an IF statement in JavaScript?",
            options: [
                'if i = 5 then',
                'if i = 5',
                'if i == 5 then',
                'if (i == 5)'
            ],
            correct: 3
        },
        {
            question: "How does a FOR loop start?",
            options: [
                'for (i = 0; i <= 5)',
                'for (i = 0; i <= 5; i++)',
                'for (i <= 5; i++)',
                'for i = 1 to 5',
            ],
            correct: 1
        },
        {
            question: "What is the correct way to write a JavaScript array?",
            options: [
                'var colors = ["red", "green", "blue"]',
                'var colors = (1:"red", 2:"green", 3:"blue")',
                'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
                'var colors = "red", "green", "blue"',
            ],
            correct: 0
        },
        {
            question: "How do you find the number with the highest value of x and y?",
            options: [
                'ceil(x, y)',
                'top(x, y)',
                'Math.max(x, y)',
                'Math.ceil(x, y)',
            ],
            correct: 2
        },
        {
            question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
            options: [
                'if i <> 5',
                'if (i != 5)',
                'if (i <> 5)',
                'if i =! 5 then',
            ],
            correct: 1
        },
        {
            question: "How do you round the number 7.25, to the nearest integer?",
            options: [
                'round(7.25)',
                'Math.rnd(7.25)',
                'rnd(7.25)',
                'Math.round(7.25)'
            ],
            correct: 3
        }
    ]

    /* === Variables / DOM === */

    const questionElement = document.getElementById("question");

    const optionsList = document.getElementById("options");

    const questionCount = document.getElementById("questionCount");

    const progressPercent = document.getElementById("progressPercent");

    const progressFill = document.getElementById("progressFill");

    const previousBtn = document.getElementById("previousBtn");

    const nextBtn = document.getElementById("nextBtn");

    const totalQuestions = document.getElementById("totalQuestions");

    const correctValue = document.getElementById("correctValue");

    const wrongValue = document.getElementById("wrongValue");

    const timeLeft = document.getElementById("timeLeft");

    const scorePage = document.getElementById("score_page");

    let currentQuestion = 0;

    const userAnswers = new Array(quizData.length).fill(null);

    function getOptionletter(index) {
        return String.fromCharCode(65 + index);
    }

    /* === Current Question === */
    function renderQuestion() {

        const question = quizData[currentQuestion];

        questionElement.innerText = `${currentQuestion + 1}. ${question.question}`;

        questionCount.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;

        const progress = ((currentQuestion + 1) / quizData.length) * 100;
        progressFill.style.width = progress + '%';
        progressFill.setAttribute("aria-valuenow", progress);
        progressPercent.textContent = `${Math.round(progress)}% Complete`;

        optionsList.innerHTML = "";

        const ul = document.createElement("ul");

        question.options.forEach((optionText, index) => {
            const li = document.createElement("li");

            li.innerHTML = `<span class="option-letter"> ${getOptionletter(index)}.</span><span class="option-text"> ${optionText}</span>`

            if (userAnswers[currentQuestion] === index) {
                li.classList.add("selected");
            }

            li.addEventListener("click", () => selectOption(index));

            ul.appendChild(li);

        });

        optionsList.appendChild(ul);

        previousBtn.disabled = currentQuestion === 0;

        nextBtn.disabled = userAnswers[currentQuestion] === null;

        nextBtn.innerHTML = currentQuestion === quizData.length - 1 ? `Submit <i class="fa-solid fa-check"></i>` : `Next <i class="fa-solid fa-arrow-right-long"></i>`;

    }

    function selectOption(index) {
        userAnswers[currentQuestion] = index;
        renderQuestion();
    }

    nextBtn.addEventListener("click", () => {
        if (currentQuestion < quizData.length - 1) {
            currentQuestion++;
            renderQuestion();
        } else {
            submitQuiz();
        }
    });

    previousBtn.addEventListener("click", () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            renderQuestion();
        }
    });


    /* === Timer === */
    const revTime = document.getElementById("timer");

    let totalSec = 600;

    const countdown = setInterval(() => {
        totalSec--;

        let minutes = Math.floor(totalSec / 60);
        let seconds = totalSec % 60;

        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");

        revTime.innerHTML = `${minutes}:${seconds}`;

        if (totalSec < 0) {
            clearInterval(countdown);
            revTime.innerHTML = "00:00";
            submitQuiz();
        }

    }, 1000);

    /* === submit Quiz === */
    function submitQuiz() {
        clearInterval(countdown);
        
        let correctCount = 0;
        let wrongCount = 0;
        
        userAnswers.forEach((answer, index) => {
            if (answer === quizData[index].correct) {
                correctCount++;
            } else {
                wrongCount++;
            }
        });
        
        totalQuestions.textContent = quizData.length;
        correctValue.textContent = correctCount;
        wrongValue.textContent = wrongCount;

        const minutesLeft = String(Math.floor(Math.max(totalSec, 0) / 60)).padStart(2, "0");
        const secondsLeft = String(Math.max(totalSec, 0) % 60).padStart(2, "0");
        timeLeft.textContent = `${minutesLeft}:${secondsLeft}`;

        quiz_body.style.display = "none";
        scorePage.style.display = "flex";
    }

    renderQuestion()
}

/* === Restart Button === */
function restart_quiz() {
    let quiz_body = document.getElementsByClassName("main_content")[0]
    quiz_body.style.display = "none";
    quiz_start();
}

/* === Go To Home Button === */
function goToHome() {

        let startPage = document.getElementById("start_page");
        let quizBody = document.getElementsByClassName("main_content")[0];
        let scorePage = document.getElementById("score_page");

        scorePage.style.display = "none";
        quizBody.style.display = "none";
        startPage.style.display = "flex";
    }
