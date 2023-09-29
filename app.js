const quizdata = [
    {
        question:"Full form of HTML?",
        a:"HyperText Markup Language",
        b:"HyperText Markup Protocol",
        c:"HyperText Major Language",
        d:"HyperText Markdown Language",
        correct:"a",
    },
    {
        question:"Full form of CSS?",
        a:"Cascading Show Sheet",
        b:"Cascading Spread Sheet",
        c:"Circular Style Sheet",
        d:"Cascading Style Sheet",
        correct:"d",
    },
    {
        question:"What is Javascript extension?",
        a:".js",
        b:".py",
        c:".html",
        d:".css",
        correct:"a",
    },
    {
        question:"HTML tags are surrounded by ___ brackets",
        a:"Square",
        b:"Angle",
        c:"Curly",
        d:"Round",
        correct:"b",
    },
    {
        question:"HTML document can contain?",
        a:"Attributes",
        b:"Tags",
        c:"Plain text",
        d:"All of these",
        correct:"d",
    },
    {
        question:"Arrays in JavaScript are defined by which of the following statements?",
        a:"It is an ordered list of values",
        b:"It is an ordered list of objects",
        c:"It is an ordered list of string",
        d:"It is an ordered list of functions",
        correct:"a",
    },
    {
        question:"Which of the following is not javascript data types?",
        a:"Null type",
        b:"Undefined type",
        c:"Number type",
        d:"All of the mentioned",
        correct:"d",
    },
    {
        question:"Which of the following tag is used to embed css in html page?",
        a:"<css>",
        b:"<!DOCTYPE html>",
        c:"<script>",
        d:"<style>",
        correct:"d",
    },
    {
        question:"Which of the following is the correct syntax to link an external style sheet in the HTML file?",
        a:"<link rel=”stylesheet” href=”style.css” />",
        b:"<link rel=”stylesheet” src=”style.css” />",
        c:"<style rel=”stylesheet” src=”style.css” />",
        d:"<style rel=”stylesheet” link=”style.css” />",
        correct:"a",
        
    },
    {
        question:"Which of the following scoping type does JavaScript use?",
        a:"Sequential",
        b:"Segmental",
        c:"Lexical",
        d:"Literal",
        correct:"c",
    },

];
const quiz = document.getElementById('quiz')
const answergt = document.querySelectorAll('.answer')
const questiongt = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const sub_btn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()
function loadQuiz() {

deselectAnswers()
const currentQuizData = quizdata[currentQuiz]
questiongt.innerText = currentQuizData.question
 a_text.innerText = currentQuizData.a 
 b_text.innerText = currentQuizData.b 
 c_text.innerText = currentQuizData.c 
 d_text.innerText = currentQuizData.d

}

function deselectAnswers(){
    answergt.forEach(answerg => answerg.checked = false) 
}

function getSelected(){
    let answer
    answergt.forEach(answerg =>{
        if(answerg.checked){
            answer = answerg.id
        }
    })
    return answer
}

sub_btn.addEventListener('click' ,() => {
    const answer = getSelected()
    if(answer){
        if(answer === quizdata[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < quizdata.length){
            loadQuiz()
        }else{
            quiz.innerHTML=`<h2>Answered ${score} Out Of ${quizdata.length} Questions Correctly</h2>
            <button onclick = "location.reload()">Reload</button>`
        }
    }
})