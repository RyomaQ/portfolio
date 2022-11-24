const btnRock = document.getElementById('rock-btn')
const btnPaper = document.getElementById('paper-btn')
const btnScissors = document.getElementById('scissors-btn')

const userRock = document.getElementById('user-rock')
const userPaper = document.getElementById('user-paper')
const userScissors = document.getElementById('user-scissors')

const botRock = document.getElementById('bot-rock')
const botPaper = document.getElementById('bot-paper')
const botScissors = document.getElementById('bot-scissors')

const win = document.getElementById('win')
const loose = document.getElementById('loose')

const resetBtn = document.getElementById('reset-btn')

var myPoint = document.getElementById('myPoint')
var botPoint = document.getElementById('botPoint')

let mycount = 0;
let botcount = 0;

const functionArray = [ 
    function botUseRock() {
        botRock.style.display = 'block';
        botPaper.style.display = 'none';
        botScissors.style.display = 'none';
    },
    
    function botUsePaper() {
        botRock.style.display = 'none';
        botPaper.style.display = 'block';
        botScissors.style.display = 'none';
    },
    
    function botUseScissors() {
        botRock.style.display = 'none';
        botPaper.style.display = 'none';
        botScissors.style.display = 'block';
    }
];

// Le choix du bot
function botChoice() {
    let result = functionArray[Math.floor(Math.random() * 3)](); 
}

// Quand je clique sur pierre
btnRock.addEventListener('click',() =>  {
    displayRock(); 
    botChoice()
    if (botRock.style.display =='block') {
        win.style.display = 'none';
        loose.style.display = 'none';
    } else if (botPaper.style.display == 'block') {
        win.style.display = 'none';
        loose.style.display = 'block';
        botcount+=1;
        botPoint.innerHTML=botcount;
    } else if (botScissors.style.display == 'block') {
        win.style.display = 'block';
        loose.style.display = 'none';
        mycount+=1;
        myPoint.innerHTML=mycount;
    }
});

function displayRock() {
    userRock.style.display = 'block';
    userPaper.style.display = 'none';
    userScissors.style.display = 'none';
}

// Quand je clique sur papier
btnPaper.addEventListener('click',() =>  {
    displayPaper(); 
    botChoice()
    if (botRock.style.display =='block') {
        win.style.display = 'block';
        loose.style.display = 'none';
        mycount+=1;
        myPoint.innerHTML=mycount;
    } else if (botPaper.style.display == 'block') {
        win.style.display = 'none';
        loose.style.display = 'none';
    } else if (botScissors.style.display == 'block') {
        win.style.display = 'none';
        loose.style.display = 'block';
        botcount+=1;
        botPoint.innerHTML=botcount;
    }});

function displayPaper() {
    userPaper.style.display = 'block';
    userRock.style.display = 'none';
    userScissors.style.display = 'none';
}

// Quand je clique sur ciseaux
btnScissors.addEventListener('click',() =>  {
    displayScissors(); 
    botChoice()
    if (botRock.style.display =='block') {
        win.style.display = 'none';
        loose.style.display = 'block';
        botcount+=1;
        botPoint.innerHTML=botcount;
    } else if (botPaper.style.display == 'block') {
        win.style.display = 'block';
        loose.style.display = 'none';
        mycount+=1;
        myPoint.innerHTML=mycount;
    } else if (botScissors.style.display == 'block') {
        win.style.display = 'none';
        loose.style.display = 'none';
    }});

function displayScissors() {
    userScissors.style.display = 'block';
    userPaper.style.display = 'none';
    userRock.style.display = 'none';
}

// Quand je clique sur reset
resetBtn.addEventListener("click", resetFunction);

function resetFunction() {
    win.style.display = 'none';
    loose.style.display = 'none';
    userScissors.style.display = 'none';
    userPaper.style.display = 'none';
    userRock.style.display = 'none';
    botRock.style.display = 'none';
    botPaper.style.display = 'none';
    botScissors.style.display = 'none';
    mycount=0;
    myPoint.innerHTML=mycount;
    botcount=0;
    botPoint.innerHTML=botcount;
}; 

const bottomReveal = document.querySelector(".bottomReveal");
const mainDiv = document.querySelector("main");

function exit() {
    bottomReveal.style.animationDirection = "reverse";
    mainDiv.classList.remove("bottomReveal");
    void mainDiv.offsetWidth;
    mainDiv.classList.add("bottomReveal");
    setTimeout(() => {
        window.location = '../index.html'
    }, 400)
}

