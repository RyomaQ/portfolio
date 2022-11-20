let cardValues = [];
let score = 0;
let currentLevelRecord = 'record' + sessionStorage.getItem('level');
let blockingState = false;
let record = document.getElementById("record-value");
let flipped = document.getElementsByClassName("flipped");
let flipSound = new Audio('sound/card-flip-sound-effect.mp3')
let foundSound = new Audio('sound/win-sound-effect.mp3')
let notFoundSound = new Audio('sound/error-sound-effect.mp3')
let completeSound = new Audio('sound/complete-sound-effect.mp3')
const unfoundCard = document.getElementsByClassName("unfoundcard");
const CardsDiv = document.getElementById("cards-div");
const unfoundCardDiv = document.getElementsByClassName("card-div-unfound");
const foundCardDiv = document.getElementsByClassName("card-div-unfound");
const endPopUp = document.getElementsByClassName('end-popup');

// Disposer 16, 24 ou 32 cartes selon le level
function initCards(numberOfCardsToInit) {
    for (var i = 1; i <= numberOfCardsToInit; i++) {
        let div = document.createElement("div");
        div.className = 'card-div-unfound';
        CardsDiv.appendChild(div);

        let img = document.createElement("img");
        img.src = "img/verso.png";
        img.className = 'unfoundcard';
        img.id = 'card' + i;
        div.appendChild(img);
    }
}


// Disposer les cartes de manière aléatoire
function setCards() {
    let randomizedValues = [];

    while (randomizedValues.length < unfoundCard.length) {
        let randomValue = cardValues[Math.floor(Math.random() * cardValues.length)];

        let count = 0;
        randomizedValues.forEach((value) => {
            if (value == randomValue)
                count++;
        });

        // La carte ne doit pas sortir plus de 2 fois et doit être différente de la dernière posée sauf si c'est la dernière
        if (count < 2 && randomizedValues.length < unfoundCard.length && randomValue != randomizedValues[randomizedValues.length-1]) {
            randomizedValues.push(randomValue);
        }
        else if (count < 2 && randomizedValues.length > unfoundCard.length-2) {
            randomizedValues.push(randomValue);
        }
    };

    let i = 0;
    for (let item of unfoundCard) {
        item.id = randomizedValues[i];
        i++;
    };
};

// Compte le nombre de carte verso
function getVersoCardsCount() {
    let count = 0;

    for (var j = 0; j < unfoundCard.length; j++) {
        if (unfoundCard[j].src.includes("img/verso.png")) {
            count++;
        }
    }
    return count;
}

// Retourne true si les deux cartes sont identiques
function getIsFound(selectedCard) {
    let isFound = false;
    for (var j = 0; j < unfoundCard.length; j++) {
        if (unfoundCard[j] != selectedCard && unfoundCard[j].src.includes(selectedCard.id)) {
            isFound = true;
            break;
        }
    }
    return isFound;
}

// Au chargement de la page
function onload() {
    switch (sessionStorage.getItem('level')) {
        case 'easy':
            cardValues = [
                "dracofeu",
                "luffy",
                "trunks",
                "kirby",
                "megaman",
                "tail",
                "totoro",
                "wario"
            ];
            initCards(16);
            break;

        case 'medium':
            cardValues = [
                "dracofeu",
                "luffy",
                "trunks",
                "kirby",
                "megaman",
                "tail",
                "totoro",
                "wario",
                "astroboy",
                "link",
                'diddy',
                "bowser"
            ];
            initCards(24);
            break;

        case 'hard':
            cardValues = [
                "dracofeu",
                "luffy",
                "trunks",
                "kirby",
                "megaman",
                "tail",
                "totoro",
                "wario",
                "astroboy",
                "link",
                'diddy',
                "bowser",
                "mew",
                "yoda",
                "conan",
                "gon"
            ];
            initCards(32);
            break;
    }

    setCards();

    // Titre de la page
    document.getElementById('title').innerHTML = 'Memory - ' + sessionStorage.getItem('level');

    //Quand je clique sur une carte
    for (var i = 0; i < unfoundCard.length; i++) {
        unfoundCard[i].addEventListener('click', (event) => {
            onCardClick(event);
        });
    };

    // CSS changement
    addEventListener('scroll', (event) => {
        document.getElementById('textdiv').style.backgroundColor = '#18181880'
        if(window.scrollY==0){
            document.getElementById('textdiv').style.backgroundColor = '#18181800'
        }
    });
    

    // Afficher le record 
    if (localStorage.getItem(currentLevelRecord)==null){
        localStorage.setItem(currentLevelRecord, 'unset');
    }
    record.innerHTML = localStorage.getItem(currentLevelRecord);
}

// Quand je clique sur une carte on change la src de l'img
function onCardClick(event) {

    // Si les cartes sont déjà trouvé on ne fait rien
    if(event.target.classList.contains('found')) {
        return;
    }

    let sameCard = 0;

    // On compte le nombre de carte avec la même src
    for (var i = 0; i < unfoundCard.length; i++) {
        if(unfoundCard[i] != event.target && unfoundCard[i].src == event.target.src){
            sameCard++;
        }
    }

    // Augmenter le score
    score++

    let newSrc = "img/" + event.target.id + ".png";

    if(event.target.src.includes('verso')) {
        event.target.style.transform = "scaleX(0)";
    }

    // On change l'image 
    setTimeout(() => {
        event.target.src = newSrc;
        event.target.style.transform = "scaleX(1)";

        let count = getVersoCardsCount();  
        let currentScore = document.getElementById("score-value");

        // Retourner une carte qui est côté recto
        if (event.target.classList.contains('flipped')) {
            flipSound.play()
            event.target.style.transform = "scaleX(0)";
            setTimeout(() => {
                event.target.src = 'img/verso.png';
                event.target.style.transform = "scaleX(1)";
                event.target.classList.remove('flipped');
            }, "100")
        } else {
            // Quand je retourne la première carte
            if (count%2 == 1) {
                flipSound.play()
                // Permet de retourner les deux première cartes qd on clic sur une 3ème
                while (flipped.length != 0) {
                        flipped[0].src = 'img/verso.png';
                        flipped[0].classList.remove("flipped");
                }
                event.target.classList.add("flipped");
                  
            // Quand je retourne la deuxième
            } else if(count%2 == 0){
                event.target.classList.add("flipped");
                
                // Si c'est la même on conserve
                if (getIsFound(event.target)) {

                    foundSound.play();

                    while (flipped.length != 0) {
                        flipped[0].classList.add("found");
                        flipped[0].classList.remove("unfoundcard");
                        flipped[0].parentElement.classList.remove('card-div-unfound');
                        flipped[0].parentElement.classList.add('card-div-found');
                        flipped[0].classList.remove("flipped");
                    }
                    event.target.classList.remove("unfoundcard");
                    event.target.classList.add("found");
                    event.target.classList.remove("flipped");

                    event.target.parentElement.classList.remove('card-div-unfound');
                    event.target.parentElement.classList.add('card-div-found');
                    
                // Si elle est différente on anime
                } else {
                    notFoundSound.play();
                    const notFoundAnimation = [
                        { transform: 'translateX(-20px)' },
                        { transform: 'translateX(20px)' }
                      ];
                      
                      const notFoundTiming = {
                        duration: 60,
                        iterations: 4,
                      }
                    
                      flipped[0].animate(notFoundAnimation, notFoundTiming);
                      flipped[1].animate(notFoundAnimation, notFoundTiming);
                }
            }
        }

        currentScore.innerHTML = score;

        // Afficher la popup à la fin de la partie
        if (unfoundCard.length == 0) {
            completeSound.play();
            switch (sessionStorage.getItem('level')) {
                case 'easy':
                    endPopUp[0].style.display = 'flex';
                    break;

                case 'medium':
                    endPopUp[1].style.display = 'flex';
                    break;

                case 'hard':
                    endPopUp[2].style.display = 'flex';
                    break;
            }
        }

        // Si on bat notre record
        if (unfoundCard.length == 0 && score < localStorage.getItem(currentLevelRecord) || unfoundCard.length == 0 && localStorage.getItem(currentLevelRecord) == 'unset') {
            localStorage.setItem(currentLevelRecord, score);
            record.innerHTML = localStorage.getItem(currentLevelRecord);
            let endMessage = document.getElementsByClassName('endmessage')
            let newRecordMessage = 'New record : ' + localStorage.getItem(currentLevelRecord)
            switch (sessionStorage.getItem('level')) {
                case 'easy':
                    endMessage[0].innerHTML = newRecordMessage;
                    break;

                case 'medium':
                    endMessage[1].innerHTML = newRecordMessage;
                    break;

                case 'hard':
                    endMessage[2].innerHTML = newRecordMessage;
                    break;
            }
        }
    }, "150")
}

// Reset le record 
function resetRecord() {
    localStorage.setItem(currentLevelRecord, 'unset');
    record.innerHTML = localStorage.getItem(currentLevelRecord);
}

const bottomReveal2 = document.querySelector(".bottomReveal2")
const mainDiv = document.querySelector("main")

function exit() {
    bottomReveal2.style.animationDirection = "reverse";
    mainDiv.classList.remove("bottomReveal2");
    void mainDiv.offsetWidth;
    mainDiv.classList.add("bottomReveal2");
    setTimeout(() => {
        window.location = '../index.html#projet04'
    }, 400)
}