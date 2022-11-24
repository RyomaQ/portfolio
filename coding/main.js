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


document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

// retourne l'index
function indexInClass(collection, target) {
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] == target)
            return i;
    }
}

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


let k = 0;
menuBtn.addEventListener('click', function(){
    const toNav = document.querySelector('.toNav');
    const display = document.querySelectorAll('.display');
    if(k == 0 && menuBtn.classList.length == 0){
        menuBtn.classList.toggle('toNav')
        pages.forEach(e => e.classList.add('display'));
        pages.forEach(e => e.style.display = 'block');
        menu[0].classList.toggle('undisplay');
        k++;
    } else if(k == 1) {
        toNav.style.animationDirection = 'reverse'
        menuBtn.classList.remove('toNav');
        void menuBtn.offsetWidth;
        menuBtn.classList.add('toNav');
        pages.forEach(e => e.classList.remove('display'));
        void pages.forEach(e => e.offsetWidth);
        pages.forEach(e => e.classList.add('undisplay'));
        setTimeout(() => {
            pages.forEach(e => e.style.display = 'none');
        }, 200)
        menu[0].classList.toggle('display');
        void menu[0].offsetWidth;
        menu[0].classList.toggle('undisplay');
        k--;
    } else if(k == 0 && menuBtn.classList.length == 1) {
        toNav.style.animationDirection = 'normal';
        menuBtn.classList.remove('toNav');
        void menuBtn.offsetWidth;
        menuBtn.classList.add('toNav');
        pages.forEach(e => e.style.display = 'block');
        pages.forEach(e => e.classList.remove('undisplay'));
        void pages.forEach(e => e.offsetWidth);
        pages.forEach(e => e.classList.add('display'));
        menu[0].classList.toggle('display');
        void menu[0].offsetWidth;
        menu[0].classList.toggle('undisplay');
        k=k+1;
    }
})

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

