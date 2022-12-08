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
const dotNav = document.querySelectorAll(".navDot");
const openProject = document.querySelector("#openProject");
const openProjectLink = document.querySelector("#openProjectLink");
const projet = document.querySelectorAll(".projet");
const projetArray = Array.from(projet);
const whiteFade = document.querySelector('#whiteFade');
let windowHeight = window.innerHeight;


function indexInClass(collection, target) {
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] == target)
            return i;
    }
}

dotNav.forEach(e => e.addEventListener("click", function(){
    let projectToScrollTo;
    switch(indexInClass(dotNav, e)){
        case 0:
            projectToScrollTo = projet01;
        break;
        case 1:
            projectToScrollTo = projet02;
        break;
        case 2:
            projectToScrollTo = projet03;
        break;
    }

    if(projectToScrollTo){
        projectToScrollTo.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'start'
        });
    }
}))


function getScrollValue() {
    return rightSide.scrollTop*100/windowHeight;
}

function scrollFunction1() {
    if(getScrollValue() <  50){
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
    if(getScrollValue() <  200){
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
 function manageProjectTitleDisplay(subject, descr, color, link, target) {
    fadeIn().style.animationDirection = "normal";
    titles.classList.remove("fadeIn");
    void titles.offsetWidth;
    titles.classList.add("fadeIn");
    h1.innerHTML = subject;
    description.innerHTML = descr;
    openProject.style.backgroundColor = color;
    openProjectLink.href = link;
    openProjectLink.target = target;
}

function reverseProjectTitleDisplay() {
    fadeIn().style.animationDirection = "reverse";
    titles.classList.remove("fadeIn");
}

rightSide.addEventListener("scroll", () => {
    titles.classList.add("fadeIn");
    let scrollValue = getScrollValue();
    if(scrollValue == 0) {
        setTimeout(
            manageProjectTitleDisplay(
                "Stage", 
                "Goodeed invente les solutions de demain de collecte de dons en ligne pour aider les ONG à trouver de nouvelles sources de financements.", "#24afff", "goodeed/index.html", ""), 300);
        setTimeout(reverseProjectTitleDisplay(), 800);
    } else if (scrollValue > 99.9 && scrollValue < 100.1){
        setTimeout(
            manageProjectTitleDisplay(
                "Stage", 
                "Nomad's est un restaurant situé au cœur de la place du marché Saint-Honoré. Leur cuisine comporte une multitude d’influences culinaires, tant méditerranéennes qu’asiatiques. Ma mission principale durant ce stage a été de refaire de A à Z l'ancien site internet.", "#CD942D", "nomads/index.html", ""), 300);
        setTimeout(reverseProjectTitleDisplay(), 800);
    } else if (scrollValue > 199.9 && scrollValue < 200.1){
        setTimeout(
            manageProjectTitleDisplay(
                "Site Web", 
                "Spring&Co mènent des études ouvertes et collaboratives pour bouger les lignes du marketing développement et être en affinité avec l’époque et ses enjeux. J'ai eu la chance d'être en charge de la refonte de leur site web.", "#FB0000", "nomads/index.html", "_blank"), 300);
        setTimeout(reverseProjectTitleDisplay(), 800);
    }

    // Dot position 

    for(var i = 0; i < 3 ; i++){
        dotNav[i].style.backgroundColor = "#ffffff9f";
    }
    let indexForBlack;
    if(scrollValue < 50) {
        indexForBlack = 0;
    } else if (scrollValue > 50 && scrollValue < 150) {
        indexForBlack = 1;
    } else if (scrollValue > 15) { 
        indexForBlack = 2;
    }
    dotNav[indexForBlack].style.backgroundColor = "#252525";
});

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
    setTimeout(() => {
        whiteFade.style.display = "none";
    }, 800)
    
}))


$(window).load(function() {
    $("#bgg").hide();
})