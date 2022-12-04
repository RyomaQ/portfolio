const gradientBg = document.querySelector("#gradientBg");
const bonjour = document.querySelector("#bonjour");
const jeSuis = document.querySelector("#jeSuis");
const creativeDesigner = document.querySelector("#creative-designer");
const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelectorAll('.menu');
const pages = document.querySelectorAll('.pages');
const positionDot = document.querySelectorAll('.positionDot');
const cursor = document.querySelector('.cursor');
const sectionDot = document.querySelectorAll(".sectionDot");
const verticalNav = document.querySelector('#verticalNav');
const s2 = document.querySelector("#section02");
const s3 = document.querySelector("#section03");
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

// retourne le numéro de la colonne
function indexInClass(collection, target) {
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] == target)
            return i;
    }
}

let RX = 0;
let RY = 0;



// Animated BG
if (window.matchMedia("(min-width: 1023px)").matches) {
    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");
        gradientBg.classList.add("fadeIn");
        bonjour.classList.add("fadeIn");
        setTimeout(() => {
            jeSuis.classList.add("fadeIn");
        }, 600)
        setTimeout(() => {
            creativeDesigner.classList.add("fadeIn");
        }, 1300)
        setTimeout(() => {
            gradientBg.style.background = "radial-gradient(at "+ e.pageX + "px " + e.pageY + "px , hsl(" + (250 + (e.pageX * 50 / windowWidth)) + ", 100%, 50%), hsl(" + (120 +(e.pageY * 50 / windowHeight)) + ", 100%, 50%))";
        }, 200)
    })    
  } else {
    gradientBg.classList.add("fadeIn");
    bonjour.classList.add("fadeIn");
    setTimeout(() => {
        jeSuis.classList.add("fadeIn");
    }, 1000)
    setTimeout(() => {
        creativeDesigner.classList.add("fadeIn");
    }, 2000)

    let value1 = 0;
    let value2 = 0;
    setInterval(() => {
        if(value1 != 1) {
            console.log('rx : ' + RX);
            if(RX != 600) {
                RX = RX + 5;
            } else if (RX == 600) {
                value1 = 1;
            }
        } else if (value1 != 0) {
            console.log('rx : ' + RX);
            if(RX != 0) {
                RX = RX - 5;
            } else if (RX == 0) {
                value1 = 0;
            }
        }
    }, 50)

    setInterval(() => {
        if(value2 != 1) {
            console.log('ry : ' + RY);
            if(RY != 600) {
                RY = RY + 5;
            } else if (RY == 600) {
                value2 = 1;
            }
        } else if (value2 != 0) {
            console.log('ry : ' + RY);
            if(RY != 0) {
                RY = RY - 5;
            } else if (RY == 0) {
                value2 = 0;
            }
        }
        gradientBg.style.background = "radial-gradient(at "+ RX + "px " + RY + "px , hsl(" + (250 + (RX * 50 / windowWidth)) + ", 100%, 50%), hsl(" + (120 +(RY * 50 / windowHeight)) + ", 100%, 50%))";
        
      }, 100)

    //   setInterval(() => {
    //     if (value1 != 0) {
    //         console.log('rx : ' + RX);
    //         console.log('ry : ' + RY);
    //         if(RX != 0) {
    //             RX = RX - 5;
    //         } else if (RX == 0) {
    //             value1 = 0;
    //         }
    //         if(RY != 0) {
    //             RY = RY + 5 ;
    //         } else if (RY == 0) {
    //             value1 = 1;
    //         }
    //         gradientBg.style.background = "radial-gradient(at "+ RX + "px " + RY + "px , hsl(" + (250 + (RX * 50 / windowWidth)) + ", 100%, 50%), hsl(" + (120 +(RY * 50 / windowHeight)) + ", 100%, 50%))";
    //     }
    //   }, 10)
  }

// Menu BTN
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

// Mouse
document.addEventListener('click', () => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

// Scroll BTN
function scrollFunction1() {
    if(window.pageYOffset <  925){
        s2.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'start'
        });
    } else {
        s3.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'start'
        });
    }
}

function getVerticalScrollPercentage( elm ){
    var p = elm.parentNode
    return (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100
  }

// Vertical Nav
document.addEventListener('scroll', () => {
    positionDot[0].style.marginTop = (window.pageYOffset/6) + 'px';
    let scrollValue = window.pageYOffset*100/windowHeight;
    console.log(scrollValue);

    if(window.pageYOffset < 200 ) {
        positionDot[0].style.scale = 1 - window.pageYOffset*(0.7/200);
    } else if (window.pageYOffset > 200 && window.pageYOffset < 630 || window.pageYOffset > 1030 && window.pageYOffset < 1660) {
        positionDot[0].style.scale = 0.3;
    } else if (window.pageYOffset > 780 && window.pageYOffset < 880) {
        positionDot[0].style.scale = 0.3-(window.pageYOffset-780)*(-0.7/100);
    } else if (window.pageYOffset > 880 && window.pageYOffset < 980) {
        positionDot[0].style.scale = 1;
    } else if (window.pageYOffset > 980 && window.pageYOffset < 1080) {
        positionDot[0].style.scale = 1+(window.pageYOffset-980)*(-0.7/100);
    } else if (window.pageYOffset > 1660 && window.pageYOffset < 1860) {
        positionDot[0].style.scale = 0.3-(window.pageYOffset-1660)*(-0.7/200);
    }
})


for(i=0; i < 3; i++){
    sectionDot[i].addEventListener('click', (event) => {
        let sectionSelected = '#section0'+(indexInClass(sectionDot, event.target)+1);
        if(sectionSelected == '#section01'){
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }else {
            document.querySelector(sectionSelected).scrollIntoView({
                block: 'start',
                behavior: 'smooth',
                inline: 'start',
              });   
        }

    // positionDot[0].classList.toggle('dotMove')
    })
}

// Contact form 
if(document.referrer == "https://ryomaquenot.com/") {
    setTimeout(() => {
        document.querySelector("#paperPlane").classList.add("takeOff");
        document.querySelector("#remerciement").classList.add("displayThank");
    }, 500)
}

