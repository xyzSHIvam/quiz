
const quizData = [{
      'question': "Which of the following is a client site language?",
        'a': "Java",
        'b': "C",
        'c': "Python",
        'd': "JavaScript",
        'correct': "d",
    },
    {
        'question': "What does HTML stand for?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notation",
        'd': "Helicopters Terminals Motorboats Lamborginis",
        'correct': "a",
    },
    {
        'question': "What year was JavaScript launched?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "none of the above",
        'correct': "b",
    },
    {
        'question': "What does CSS stands for?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notation",
        'd': "Helicopters Terminals Motorboats Lamborginis",
        'correct': "b",
    }
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd();
    }
    reset()
    const data = quizData[index];
    
    questionBox.innerHTML = `${index + 1}) ${data.question}`;
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}


    function sub() {
        const data = quizData[index]
        const ans = getAnswer()
       
        if (ans === data.correct) {
          console.log(ans);
            correct++;
            document.getElementById(ans).style.backgroundColor="green";
           function normalcolor(){
            console.log("hello");
            document.getElementById(ans).style.backgroundColor="rgb(200, 177, 177)";
            }
            setTimeout(normalcolor,1000);
        } else {
            incorrect++;
            document.getElementById(ans).style.backgroundColor="red";
           function normalcolor(){
            document.getElementById(ans).style.backgroundColor="rgb(200, 177, 177)";
            }
            setTimeout(normalcolor,1000);
        }
        index++;
       setTimeout(loadQuestion,1000);
    }


const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    
    document.getElementsByClassName("real")[0].innerHTML = 
    `        <div class="col">
    <h3 class="w-100" style="text-align:center;"> Hii, you've scored ${correct} / ${total} </h3>
    <button type="submit" onclick="replay()" class="btn btn-primary">Replay!</button>
</div>  
    `;
}
function replay(){
  window.location.reload();
}

loadQuestion(index);
