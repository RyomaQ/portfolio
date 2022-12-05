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
        description.innerHTML = "C'est mon tout premier projet codé en JavaScript. Il permet de jouer au pierre, feuille, ciseau contre un bot et et de compter les points. Cet exercice m'a permis d'apprendre les bases du JavaScript et les fonctions Math.random(), addEventListener().";
    } else if (projectCenter(projet[1]) > windowHeight/2 - windowHeight/3 && projectCenter(projet[1]) < windowHeight/2 + windowHeight/3) {
        h1.innerHTML = "Convertisseur de taille";
        description.innerHTML = "Vous voulez savoir combien de d'iPhone il faut empiler pour atteindre la taille de la Tour Eiffel ? Parfait car cette application permet de convertir des tailles d'objets improbables. Ce projet m'a permis de comprendre comment stocker des valeurs dans des objets JavaScript.";
    } else if (projectCenter(projet[2]) > windowHeight/2 - windowHeight/3 && projectCenter(projet[2]) < windowHeight/2 + windowHeight/3) {
        h1.innerHTML = "Puissance 4";
        description.innerHTML = "Vous voulez savoir combien de d'iPhone il faut empiler pour atteindre la taille de la Tour Eiffel ? Parfait car elle permet de convertir des tailles d'objets improbables. Ce projet m'a permis d'apprendre à stocker des valeurs dans des objets JavaScript.";
    } else if (projectCenter(projet[3]) > windowHeight/2 - windowHeight/3 && projectCenter(projet[3]) < windowHeight/2 + windowHeight/3) {
        h1.innerHTML = "Memory";
        description.innerHTML = "Vous voulez savoir combien de d'iPhone il faut empiler pour atteindre la taille de la Tour Eiffel ? Cette application est pour vous car elle permet de convertir des tailles d'objets improbables. Ce projet m'a permis d'apprendre à stocker des valeurs dans des objets JavaScript.";
    } else if (projectCenter(projet[4]) > windowHeight/2 - windowHeight/3 && projectCenter(projet[4]) < windowHeight/2 + windowHeight/3) {
        h1.innerHTML = "IceCube";
        description.innerHTML = "Vous voulez savoir combien de d'iPhone il faut empiler pour atteindre la taille de la Tour Eiffel ? Cette application est pour vous car elle permet de convertir des tailles d'objets improbables. Ce projet m'a permis d'apprendre à stocker des valeurs dans des objets JavaScript.";
    }

    let lastPos = ((projet[projet.length-1].getBoundingClientRect().top) + (projet[projet.length-1].getBoundingClientRect().bottom))/2+window.innerWidth/15;

    if(descPos > projet[projet.length-1].getBoundingClientRect().bottom) {
        document.querySelector("#titles").style.bottom = windowHeight - lastPos + "px";
    } else {
        document.querySelector("#titles").style.bottom = "300px";
    }
})

