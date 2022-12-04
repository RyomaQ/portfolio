const menuBtn = document.querySelector('#menu-btn');
const pages = document.querySelectorAll('.pages');
const menu = document.querySelectorAll('.menu');
const cursor = document.querySelector('.cursor');
const titles = document.querySelector('#titles');
const h1 = document.querySelector('#projectTitle');
const description = document.querySelector('#projectDescription');
const rightSide = document.querySelector('#rightSide');
const projet01 = document.querySelector("#projet01");
const projet02 = document.querySelector("#projet02");
const projet03 = document.querySelector("#projet03");
const dotNav = document.querySelectorAll(".navDot")
let windowHeight = window.innerHeight;


function indexInClass(collection, target) {
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] == target)
            return i;
    }
}

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");
})

dotNav.forEach(e => e.addEventListener("click", function(){
    if(indexInClass(dotNav, e) == 0) {
        projet01.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'start'
        });
    } else if(indexInClass(dotNav, e) == 1) {
        projet02.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'start'
        });
    } else if(indexInClass(dotNav, e) == 2) {
        projet03.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'start'
        });
    }
}))

document.addEventListener('click', () => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})


// .toNav {
//     flex-direction: column;
//     animation: mobile-toNav 0.5s cubic-bezier(.94,-0.01,.27,.99) forwards;
//     margin-top: 10vh;
//     justify-content: unset;
//     gap: 5vh;
//     align-items: flex-end;
// }

// .toNav a {
//     font-size: 60px;
//     text-transform: capitalize;
// }

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
        setTimeout(() => {
            menuBtn.style.alignItems = "flex-end"
            menuBtn.style.justifyContent = "unset"
        }, 200)
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
            menuBtn.style.justifyContent = "center"
            menuBtn.style.alignItems = "center"
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
        setTimeout(() => {
            menuBtn.style.alignItems = "flex-end"
            menuBtn.style.justifyContent = "unset"
        }, 200)
        
    }
})

function scrollValue() {
    return rightSide.scrollTop*100/windowHeight;
}

function scrollFunction1() {
    if(scrollValue() <  50){
        projet02.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'start'
        });
    } else {
        projet03.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'start'
        });
    }
}

function scrollFunction2() {
    if(scrollValue() <  200){
        projet01.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'start'
        });
    } else {
        projet02.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'start'
        });
    }
}

// toNav.style.animationDirection = 'reverse'
// menuBtn.classList.remove('toNav');
// void menuBtn.offsetWidth;
// menuBtn.classList.add('toNav');

function fadeIn() {
    return document.querySelector('.fadeIn')
}


rightSide.addEventListener("scroll", () => {
    titles.classList.add("fadeIn");
    console.log(scrollValue())
    if(scrollValue() == 0) {
        setTimeout(() => {
            fadeIn().style.animationDirection = "normal";
            titles.classList.remove("fadeIn");
            void titles.offsetWidth;
            titles.classList.add("fadeIn");
            h1.innerHTML = "Stage";
            description.innerHTML = "Goodeed invente les solutions de demain de collecte de dons en ligne pour aider les ONG à trouver de nouvelles sources de financements.";
        }, 300)
        setTimeout(() => {
            fadeIn().style.animationDirection = "reverse";
            titles.classList.remove("fadeIn");
        }, 800)
    } else if (scrollValue() > 100 && scrollValue() < 100.1){
        setTimeout(() => {
            fadeIn().style.animationDirection = "normal";
            titles.classList.remove("fadeIn");
            void titles.offsetWidth;
            titles.classList.add("fadeIn");
            h1.innerHTML = "Stage"
            description.innerHTML = "Nomad's est un restaurant situé au cœur de la place du marché Saint-Honoré. Leur cuisine comporte une multitude d’influences culinaires, tant méditerranéennes qu’asiatiques. Ma mission principale durant ce stage a été de refaire de A à Z l'ancien site internet.";
        }, 300)
        setTimeout(() => {
            fadeIn().style.animationDirection = "reverse";
            titles.classList.remove("fadeIn");
        }, 800)
    } else if (scrollValue() > 200 && scrollValue() < 200.1){
        setTimeout(() => {
            fadeIn().style.animationDirection = "normal";
            titles.classList.remove("fadeIn");
            void titles.offsetWidth;
            titles.classList.add("fadeIn");
            h1.innerHTML = "Site Web"
            description.innerHTML = "Spring&Co mènent des études ouvertes et collaboratives pour bouger les lignes du marketing développement et être en affinité avec l’époque et ses enjeux. J'ai eu la chance d'être en charge de la refonte de leur site web.";
        }, 300)
        setTimeout(() => {
            fadeIn().style.animationDirection = "reverse";
            titles.classList.remove("fadeIn");
        }, 800)
    }

    // Dot position 
    if(scrollValue() < 50) {
        dotNav[0].style.backgroundColor = "#252525"
        dotNav[1].style.backgroundColor = "#ffffff9f"
        dotNav[2].style.backgroundColor = "#ffffff9f"
    } else if (scrollValue() > 50 && scrollValue() < 150) {
        dotNav[0].style.backgroundColor = "#ffffff9f"
        dotNav[1].style.backgroundColor = "#252525"
        dotNav[2].style.backgroundColor = "#ffffff9f"
    } else if (scrollValue() > 15) {
        dotNav[0].style.backgroundColor = "#ffffff9f"
        dotNav[1].style.backgroundColor = "#ffffff9f"
        dotNav[2].style.backgroundColor = "#252525"
    }
})

const projet = document.querySelectorAll(".projet");
const projetArray = Array.from(projet);
const whiteFade = document.querySelector('#whiteFade');

projetArray.forEach(e => e.addEventListener("click", function(){

    whiteFade.style.display = "block";
    whiteFade.classList.add("bottomReveal");
    if(indexInClass(projetArray, e) == 0) {
        setTimeout(() => {
            window.location = 'goodeed/index.html'
        }, 400)
    } else if(indexInClass(projetArray, e) == 1) {
        setTimeout(() => {
            window.location = 'nomads/index.html'
        }, 400)
    } 
}))




$(window).load(function() {
    $("#bgg").hide();
})