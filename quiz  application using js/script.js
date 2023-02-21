const quizdb=[
{
    question:"Q1: What is the full form of HTML?",
    a:"Hell To My Land",
    b:"Hey Text Markup Language",
    c:"Hypertext Makeup Language",
    d:"Hypertext Markup Language",
    ans:"ans4"
},
{
    question:"Q2: What is the full form of CSS?",
    a:"Cascading Style Sheets",
    b:"Cacading Style Sheep",
    c:"Cartoon Style Sheets",
    d:"Cascading Super Sheets",
    ans:"ans1"
},
{
    question:"Q3: What is the full form of HTTP?",
    a:"Hypertext Transfer Product",
    b:"Hypertext Transfer Protocol",
    c:"Hey Transfer Protocol",
    d:"Hypertext Test Protocol",
    ans:"ans2"
},
{
    question:"Q4: What is the full form of JS?",
    a:"JavaScript",
    b:"JavaSuper",
    c:"JustScript",
    d:"JordenShoes",
    ans:"ans1"
}
];
const question=document.querySelector(".question");
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll(".answer");
const showscore=document.querySelector('#showscore');
let quescount=0;
let score=0;
const loadquestion=()=>{
    const queslist= quizdb[quescount];
    question.innerText= queslist.question;
    option1.innerText=queslist.a;
    option2.innerText=queslist.b;
    option3.innerText=queslist.c;
    option4.innerText=queslist.d;

}
loadquestion();
const getcheckans=()=>{
  let answer;
  answers.forEach((curransele)=>{
     if(curransele.checked){
        answer=curransele.id;
     }
  });
  return answer;
};
const deselectall=()=>{
    answers.forEach((curransele)=>curransele.checked=false);
}
submit.addEventListener('click',()=>{
    const checkans=getcheckans();
    console.log(checkans);
    if(checkans==quizdb[quescount].ans){
       score++;
    };
    quescount++;
    deselectall();
    if(quescount<quizdb.length){
   loadquestion();
    }else{
        showscore.innerHTML=`<h3> You Scored ${score}/${quizdb.length} </h3> 
        <button class="btn" onclick="location.reload()">Play Again</button> </button>`;
        showscore.classList.remove('scorearea');
    };
});