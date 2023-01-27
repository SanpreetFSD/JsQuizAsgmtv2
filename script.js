// creating the arrey and passing the number, questions, options, and answers
const quizDB = [
    {   
       question: "Q:1 What does HTML stand for?",
       a:"Hyper text pre-processor",
       b:"Hyper text markup language",
       c:"Hyper text multiple language",
       d:"Hyper tool multi language",
       ans: "ans2"
    },

    {   
        question: "Q:2 What does CSS stand for?",
        a:"Common style sheet",
        b:"Colourful style sheet",
        c:"Computer style sheet",
        d:"Cascading style sheet",
        ans: "ans4"
    },
    {   
        question: "Q:3 What does PHP stand for?",
        a:"Hypertext pre-processor",
        b:"Hypertext programming",
        c:"Hypertext pre-programming",
        d:"Hometext pre-processor",
        ans: "ans1"
    },
    {   
        question: "Q:4 What does SQL stand for?",
        a:"Stylish question language",
        b:"Stylesheet query language",
        c:"Statement question language",
        d:"Structured query language",
        ans: "ans4"
    },
    // {   
    //     question: "Q:5 What does XML stand for?",
    //     a:"Extensible markup language",
    //     b:"Executable multiple language",
    //     c:"Extra multi program language",
    //     d:"Examin multiple languaage",
    //     ans: "ans1"
    // },
];
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}


loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem)=> {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }

        
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener("click", () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3>You Scored ${score}/${quizDB.length} ✌</h3>
        <button class="btn" onclick="location.reload()"> Reload Quiz </button>
        `;

        showScore.classList.remove("scoreArea");
    }

});
