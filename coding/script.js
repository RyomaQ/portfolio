const cursor = document.querySelector('.cursor');
const menuBtn = document.querySelector('#menu-btn');
const pages = document.querySelectorAll('.pages');
const menu = document.querySelectorAll('.menu');
const h1 = document.querySelector('h1');
const description = document.querySelector('p');
const body = document.querySelector("body");
const mainDiv = document.querySelector("#main");
const projet01 = document.querySelector("#projet01");
const projet = document.querySelectorAll(".projet");
const projetArray = Array.from(projet);
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
let descPos = description.getBoundingClientRect().bottom;



const whiteFade = document.querySelector('#whiteFade');

projetArray.forEach(e => e.addEventListener("click", function(){

    whiteFade.style.display = "block";
    whiteFade.classList.add("bottomReveal");
    if(indexInClass(projetArray, e) == 0) {
        setTimeout(() => {
            window.location = 'RockPaperScissors/index.html'
        }, 400)
    } else if(indexInClass(projetArray, e) == 1) {
        setTimeout(() => {
            window.location = 'FunConverter/index.html'
        }, 400)
    } else if(indexInClass(projetArray, e) == 2) {
        setTimeout(() => {
            window.location = 'ConnectFour/index.html'
        }, 400)
    } else if(indexInClass(projetArray, e) == 3) {
        setTimeout(() => {
            window.location = 'MemoryGame/index.html'
        }, 400)
    } else if(indexInClass(projetArray, e) == 4) {
        window.open("https://simmer.io/@rkeno/icecube")
        whiteFade.classList.remove("bottomReveal");
    }

}))

// Avoir le centre en y d'une div
function projectCenter(projet) {
    return (projet.getBoundingClientRect().top + projet.getBoundingClientRect().bottom) / 2
}

document.addEventListener("scroll", () => {
    if(projectCenter(projet[0]) > windowHeight/2 - windowHeight/3 && projectCenter(projet[0]) < windowHeight/2 + windowHeight/3) {
        h1.innerHTML = "Pierre Feuille Ciseaux";
        description.innerHTML = "C'est mon tout premier projet codé en JavaScript. Pendant ce projet, j'ai appris les fondamentaux du JavaScript ainsi que les fonctions Math.random() et addEventListener(). En plus de m'amuser en jouant contre le bot, j'ai également pu mettre en pratique mes connaissances en codant un système de comptage des points.";
    } else if (projectCenter(projet[1]) > windowHeight/2 - windowHeight/3 && projectCenter(projet[1]) < windowHeight/2 + windowHeight/3) {
        h1.innerHTML = "Convertisseur de taille";
        description.innerHTML = "Vous êtes curieux de savoir combien de d'iPhone il faut empiler pour atteindre la taille de la Tour Eiffel ? Parfait car cette application permet de convertir les tailles de différents objets. Pendant ce projet, j'ai appris à stocker des valeurs dans des objets JavaScript, ce qui m'a permis de développer cette application originale.";
    } else if (projectCenter(projet[2]) > windowHeight/2 - windowHeight/3 && projectCenter(projet[2]) < windowHeight/2 + windowHeight/3) {
        h1.innerHTML = "Puissance 4";
        description.innerHTML = "Dans ce projet, j'ai créé une version du célèbre jeu de stratégie, le Puissance 4. J'ai également créé tous les éléments graphiques nécessaires à la réalisation du jeu. J'ai appris à utiliser les boucles pour vérifier si un joueur a remporté la partie.";
    } else if (projectCenter(projet[3]) > windowHeight/2 - windowHeight/3 && projectCenter(projet[3]) < windowHeight/2 + windowHeight/3) {
        h1.innerHTML = "Memory";
        description.innerHTML = "Dans ce projet, j'ai recréé le jeu de Memory pour 1 joueur. J'ai conçu moi-même les cartes du jeu et j'ai implémenté trois niveaux de difficulté. Le meilleur score du joueur est stocké en local, permettant à chaque joueur s'améliorer au fil des parties.";
    } else if (projectCenter(projet[4]) > windowHeight/2 - windowHeight/3 && projectCenter(projet[4]) < windowHeight/2 + windowHeight/3) {
        h1.innerHTML = "IceCube";
        description.innerHTML = "IceCube est un jeu que j'ai développé sur Unity en utilisant le langage C#. Ce jeu a pour objectif de sensibiliser les joueurs à l'environnement et au réchauffement climatique. On incarne IceCube, un glaçon qui mène des actions pour limiter le réchauffement climatique pour ne pas fondre. Le but du jeu est de récupérer des déchets dans l'océan à l'aide d'un sous-marin, tout en évitant de capturer des poissons.";
    }

    let lastPos = ((projet[projet.length-1].getBoundingClientRect().top) + (projet[projet.length-1].getBoundingClientRect().bottom))/2+window.innerWidth/15;

    if(descPos > projet[projet.length-1].getBoundingClientRect().bottom) {
        document.querySelector("#titles").style.bottom = windowHeight - lastPos + "px";
    } else {
        document.querySelector("#titles").style.bottom = "300px";
    }
})

