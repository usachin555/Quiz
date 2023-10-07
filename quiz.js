const questions = [
    {
        question: "What is the jersey number of rohit sharma?",
        answers:[
           { text: "46" , correct: false},
           { text: "44" , correct: false},
           { text: "45" , correct: true},
           { text: "18" , correct: false},

        ]
    },

    {
        question: "Highest individual score of rohit sharma",
        answers:[
           { text: "264" , correct: true},
           { text: "468" , correct: false},
           { text: "246" , correct: false},
           { text: "183" , correct: false},

        ]
    },

    {
        question: "how can wwe achieve mutlple inheritance in java",
        answers:[
           { text: "Through interface" , correct: true},
           { text: "using class" , correct: false},
           { text: "abstraction" , correct: false},
           { text: "encapsulation" , correct: false},

        ]
    },

    {
        question: "which keyword is used with interface",
        answers:[
           { text: "extends" , correct: false},
           { text: "this" , correct: false},
           { text: "implements" , correct: true},
           { text: "super" , correct: false},
        ]
    }
];

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("bttn");

    let currentQuestionIndex  = 0;
    let score = 0;

    function startQuiz(){
        currentQuestionIndex  = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        showQuestion();
    }
    
    function showQuestion(){
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer)
        });
    }

    function resetState(){
        nextButton.style.display = "none";
        while(answerButtons.firstChild)
        {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect)
        {
            selectedBtn.classList.add("correct");
            score++;
        }
        else{
            selectedBtn.classList.add("incorrect");
        }
    

    Array.from(answerButtons.children).forEach(button =>
        {if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    }); 
    nextButton.style.display = "block";
}

function showScore(){;
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }else{
        showScore();
    }
 }


nextButton.addEventListener("click", () =>
{
    if(currentQuestionIndex < questions.length)
    {
        handleNextButton();
    }else{
        startQuiz();
    }
})
        // console.log("hi")
startQuiz();