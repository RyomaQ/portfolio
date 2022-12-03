let columns = document.getElementsByClassName('column')
let playerTurn = 0;
const token = document.getElementsByClassName('token');
const nodeList = document.body.childNodes;
const endPopUp = document.getElementById('end-popup');
const P1Score = document.getElementById('p1score');
const P2Score = document.getElementById('p2score');
const winnerIs = document.getElementById('winner');
const playAgain = document.getElementById('play-again');
const reset = document.getElementById('reset');
let player1score = localStorage.getItem('player1score');
let player2score = localStorage.getItem('player2score');
const startSounds = new Audio('sounds/start.mp3');
const winSounds = new Audio('sounds/win.mp3');
const tokenSounds = new Audio('sounds/token-drop.mp3');

// Au chargement
function onLoad() {
    
    // localStorage.clear('player1score');
    // localStorage.clear('player2score');

    for (var i = 0; i < columns.length; i++) {
        columns[i].addEventListener('click', (event) => {
            onGridClick(event);
        });
    };

    if(localStorage.getItem('player2score') == 'null' && localStorage.getItem('player2score') == 'null' || localStorage.getItem('player2score') == null && localStorage.getItem('player2score') == null) {
        localStorage.setItem('player1score' , 0)
        localStorage.setItem('player2score' , 0)
    } 

    P1Score.innerHTML = localStorage.getItem('player1score');
    P2Score.innerHTML = localStorage.getItem('player2score');    
    
}

// A la fin de la partie
function endOfGame(){
    if (playerTurn == 1) {
        player1score++;
        endPopUp.style.display = 'flex';
        localStorage.setItem('player1score' , player1score);
        P1Score.innerHTML = localStorage.getItem('player1score');
    } else {
        player2score++;
        endPopUp.style.display = 'flex';
        localStorage.setItem('player2score' , player2score);
        P2Score.innerHTML = localStorage.getItem('player2score');
    }

    setTimeout(() => {
        winSounds.play();
    }, '200')

    if(playerTurn == 1) {
        winnerIs.innerHTML = 1;
    } else {
        winnerIs.innerHTML = 2;
    }
}

// retourne le numéro de la colonne
function indexInClass(collection, target) {
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] == target)
            return i;
    }
}


function onGridClick(event) {
    setTimeout(() => {
    tokenSounds.play();
    }, '100')

    console.log([indexInClass(columns, event.target)]);

    // Set les tokens 
    if (playerTurn == 0) {
        let img = document.createElement("img");
        img.src = "img/blue-token.png";
        img.className = 'token , blue';

        // Donner un id aux tokens du player 1
        if (columns[indexInClass(columns, event.target)].children.length == 6) {
            return;
        } else if (columns[indexInClass(columns, event.target)].lastChild == null) {
            img.id = indexInClass(columns, event.target) + '0';
        } else {
            i = columns[indexInClass(columns, event.target)].children.length;
            img.id = indexInClass(columns, event.target) + i.toString();
        }

        columns[indexInClass(columns, event.target)].appendChild(img);
        playerTurn = 1;
    // Donner un id aux tokens du player 2
    } else {
        let img = document.createElement("img");
        img.src = "img/pink-token.png";
        img.className = 'token , pink';

        if (columns[indexInClass(columns, event.target)].children.length == 6) {
            return;
        } else if (columns[indexInClass(columns, event.target)].lastChild == null) {
            img.id = indexInClass(columns, event.target) + '0';
        } else {
            i = columns[indexInClass(columns, event.target)].children.length;
            img.id = indexInClass(columns, event.target) + i.toString();
        }

        columns[indexInClass(columns, event.target)].appendChild(img);
        playerTurn = 0;
    }

    // Savoir si c'est win 
    let column = columns[indexInClass(columns, event.target)];
    let row = column.children.length - 1;
    //Vertical
    for (var i = 0; i < 3; i++) { 
        if (typeof column.children[i] !== 'undefined' && typeof column.children[i+1] !== 'undefined' && typeof column.children[i+2] !== 'undefined' && typeof column.children[i+3] !== 'undefined' && column.children[i].src == column.children[i+1].src && column.children[i].src == column.children[i+2].src && column.children[i].src == column.children[i+3].src) {
            for (var j = 0; j < token.length; j++) { 
                token[j].style.filter = 'grayscale(100%)';
            }
            column.children[i].style.filter = 'grayscale(0%)';
            column.children[i+1].style.filter = 'grayscale(0%)';
            column.children[i+2].style.filter = 'grayscale(0%)';
            column.children[i+3].style.filter = 'grayscale(0%)';
            
            endOfGame();
        }
    }

    // // Horizontal
    for (var i = 0; i < 4; i++) { 
        if(typeof columns[i].children[row] !== 'undefined' && typeof columns[i+1].children[row] !== 'undefined' && typeof columns[i+2].children[row] !== 'undefined' && typeof columns[i+3].children[row] !== 'undefined' && columns[i].children[row].src == columns[i+1].children[row].src && columns[i].children[row].src == columns[i+2].children[row].src && columns[i].children[row].src == columns[i+3].children[row].src) {
            for (var j = 0; j < token.length; j++) { 
                token[j].style.filter = 'grayscale(100%)';
            }
            columns[i].children[row].style.filter = 'grayscale(0%)';
            columns[i+1].children[row].style.filter = 'grayscale(0%)';
            columns[i+2].children[row].style.filter = 'grayscale(0%)';
            columns[i+3].children[row].style.filter = 'grayscale(0%)';
            
            endOfGame();
        }
    }

    // Diagonal descente
    for (var i = 0; i < 4; i++) { 
        for (var j = 0; j < 6; j++) { 
            if(typeof columns[i].children[j] !== 'undefined' && typeof columns[i+1].children[j-1] !== 'undefined' && typeof columns[i+2].children[j-2] !== 'undefined' && typeof columns[i+3].children[j-3] !== 'undefined' && columns[i].children[j].src == columns[i+1].children[j-1].src && columns[i].children[j].src == columns[i+2].children[j-2].src && columns[i].children[j].src == columns[i+3].children[j-3].src) {
                for (var k = 0; k < token.length; k++) { 
                    token[k].style.filter = 'grayscale(100%)';
                }
                columns[i].children[j].style.filter = 'grayscale(0%)';
                columns[i+1].children[j-1].style.filter = 'grayscale(0%)';
                columns[i+2].children[j-2].style.filter = 'grayscale(0%)';
                columns[i+3].children[j-3].style.filter = 'grayscale(0%)';
                
                endOfGame();
            } 
            // Diagonal monté
            else if(typeof columns[i].children[j] !== 'undefined' && typeof columns[i+1].children[j+1] !== 'undefined' && typeof columns[i+2].children[j+2] !== 'undefined' && typeof columns[i+3].children[j+3] !== 'undefined' && columns[i].children[j].src == columns[i+1].children[j+1].src && columns[i].children[j].src == columns[i+2].children[j+2].src && columns[i].children[j].src == columns[i+3].children[j+3].src) {
                for (var k = 0; k < token.length; k++) { 
                    token[k].style.filter = 'grayscale(100%)';
                }
                columns[i].children[j].style.filter = 'grayscale(0%)';
                columns[i+1].children[j+1].style.filter = 'grayscale(0%)';
                columns[i+2].children[j+2].style.filter = 'grayscale(0%)';
                columns[i+3].children[j+3].style.filter = 'grayscale(0%)';
                
                endOfGame();
            }
        }
    }

    if(token.length == 42) {
        endPopUp.style.display = 'flex';
        winnerIs.innerHTML = 'none';
    }
}


playAgain.addEventListener('click', (event) => {
    startSounds.play();
    for (var i = 0; i < token.length; i++) { 
        token[i].classList.add('token-fall');
    }
    setTimeout(() => {
        location.href = "index.html";
    }, '800')
});

reset.addEventListener('click', (event) => {
    localStorage.setItem('player1score' , 0);
    localStorage.setItem('player2score' , 0);
    P1Score.innerHTML = localStorage.getItem('player1score');
    P2Score.innerHTML = localStorage.getItem('player2score');
});

const bottomReveal = document.querySelector(".bottomReveal")
const mainDiv = document.querySelector("main")

function exit() {
    bottomReveal.style.animationDirection = "reverse";
    mainDiv.classList.remove("bottomReveal");
    void mainDiv.offsetWidth;
    mainDiv.classList.add("bottomReveal");
    setTimeout(() => {
        window.location = '../index.html#projet03'
    }, 400)
}