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
        description.innerHTML = "C'est mon tout premier projet cod?? en JavaScript. Pendant ce projet, j'ai appris les fondamentaux du JavaScript ainsi que les fonctions Math.random() et addEventListener(). En plus de m'amuser en jouant contre le bot, j'ai ??galement pu mettre en pratique mes connaissances en codant un syst??me de comptage des points.";
    } else if (projectCenter(projet[1]) > windowHeight/2 - windowHeight/3 && projectCenter(projet[1]) < windowHeight/2 + windowHeight/3) {
        h1.innerHTML = "Convertisseur de taille";
        description.innerHTML = "Vous ??tes curieux de savoir combien de d'iPhone il faut empiler pour atteindre la taille de la Tour Eiffel ? Parfait car cette application permet de convertir les tailles de diff??rents objets. Pendant ce projet, j'ai appris ?? stocker des valeurs dans des objets JavaScript, ce qui m'a permis de d??velopper cette application originale.";
    } else if (projectCenter(projet[2]) > windowHeight/2 - windowHeight/3 && projectCenter(projet[2]) < windowHeight/2 + windowHeight/3) {
        h1.innerHTML = "Puissance 4";
        description.innerHTML = "Dans ce projet, j'ai cr???? une version du c??l??bre jeu de strat??gie, le Puissance 4. J'ai ??galement cr???? tous les ??l??ments graphiques n??cessaires ?? la r??alisation du jeu. J'ai appris ?? utiliser les boucles pour v??rifier si un joueur a remport?? la partie.";
    } else if (projectCenter(projet[3]) > windowHeight/2 - windowHeight/3 && projectCenter(projet[3]) < windowHeight/2 + windowHeight/3) {
        h1.innerHTML = "Memory";
        description.innerHTML = "Dans ce projet, j'ai recr???? le jeu de Memory pour 1 joueur. J'ai con??u moi-m??me les cartes du jeu et j'ai impl??ment?? trois niveaux de difficult??. Le meilleur score du joueur est stock?? en local, permettant ?? chaque joueur s'am??liorer au fil des parties.";
    } else if (projectCenter(projet[4]) > windowHeight/2 - windowHeight/3 && projectCenter(projet[4]) < windowHeight/2 + windowHeight/3) {
        h1.innerHTML = "IceCube";
        description.innerHTML = "IceCube est un jeu que j'ai d??velopp?? sur Unity en utilisant le langage C#. Ce jeu a pour objectif de sensibiliser les joueurs ?? l'environnement et au r??chauffement climatique. On incarne IceCube, un gla??on qui m??ne des actions pour limiter le r??chauffement climatique pour ne pas fondre. Le but du jeu est de r??cup??rer des d??chets dans l'oc??an ?? l'aide d'un sous-marin, tout en ??vitant de capturer des poissons.";
    }

    let lastPos = ((projet[projet.length-1].getBoundingClientRect().top) + (projet[projet.length-1].getBoundingClientRect().bottom))/2+window.innerWidth/15;

    if(descPos > projet[projet.length-1].getBoundingClientRect().bottom) {
        document.querySelector("#titles").style.bottom = windowHeight - lastPos + "px";
    } else {
        document.querySelector("#titles").style.bottom = "300px";
    }
})

