const gradientBg = document.querySelector("#gradientBg");
const pageTitle = document.querySelector("#pageTitle");
const jeSuis = document.querySelector("#jeSuis");
const bonjour = document.querySelector("#bonjour");
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
const bodyElement = document.querySelector("body");
const skillsCircle = document.querySelector("#skillsCircle");
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;


if (window.matchMedia("(max-width: 1023px)").matches) {
    menuBtn.setAttribute('onclick','menuToggle()');
}

// Animated BG
if (window.matchMedia("(min-width: 1023px)").matches) {
    document.addEventListener('mousemove', e => {
        gradientBg.classList.add("fadeIn");
        pageTitle.classList.add("fadeIn");
        skillsCircle.classList.add("fadeIn");
        bonjour.classList.add("fadeOut");
        menu[0].classList.remove("menuWhite");
        // console.log("radial-gradient(at " + e.pageX + "px " + e.pageY + "px , hsl(" + (250 + (e.pageX * 150 / windowWidth)) + ", 100%, 60%), hsl(" + (120 + (e.pageY * 150 / windowHeight)) + ", 100%, 60%))");
        setTimeout(() => {
            creativeDesigner.classList.add("fadeIn");
        }, 400)
        setTimeout(() => {
            gradientBg.style.background = "radial-gradient(at " + e.pageX + "px " + e.pageY + "px , hsl(" + (250 + (e.pageX * 150 / windowWidth)) + ", 100%, 60%), hsl(" + (120 + (e.pageY * 150 / windowHeight)) + ", 100%, 60%))";
        }, 200)
    })
} else {
    gradientBg.classList.add("fadeIn");
    pageTitle.classList.add("fadeIn");
    setTimeout(() => {
        creativeDesigner.classList.add("fadeIn");
    }, 400)

    let value1 = 0;
    let value2 = 0;
    let RX = 0;
    let RY = 350;
    setInterval(() => {
        if (value1 != 1) {
            if (RX != 700) {
                RX = RX + 5;
            } else if (RX == 700) {
                value1 = 1;
            }
        } else if (value1 != 0) {
            if (RX != 0) {
                RX = RX - 5;
            } else if (RX == 0) {
                value1 = 0;
            }
        }
    }, 50)

    setInterval(() => {
        if (value2 != 1) {
            if (RY != 700) {
                RY = RY + 5;
            } else if (RY == 700) {
                value2 = 1;
            }
        } else if (value2 != 0) {
            if (RY != 0) {
                RY = RY - 5;
            } else if (RY == 0) {
                value2 = 0;
            }
        }
        gradientBg.style.background = "radial-gradient(at " + RX + "px " + RY + "px , hsl(" + (250 + (RX * 50 / windowWidth)) + ", 100%, 50%), hsl(" + (120 + (RY * 50 / windowHeight)) + ", 100%, 50%))";

    }, 50)
}

// Scroll BTN
function scrollFunction1() {
    if (window.pageYOffset < 925) {
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

function getVerticalScrollPercentage(elm) {
    var p = elm.parentNode
    return (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight) * 100
}

function getScrollValue() {
    return bodyElement.scrollTop * 100 / windowHeight;
}

// Vertical Nav
document.addEventListener('scroll', () => {
    // let scrollValue = getScrollValue();


    // console.log(window.pageYOffset)
    if (window.pageYOffset > 1920) {
        positionDot[0].style.marginTop = '320px';
    } else {
        positionDot[0].style.marginTop = (window.pageYOffset / 6) + 'px';
    }
    let scrollValue = window.pageYOffset * 100 / windowHeight;

    if (window.pageYOffset < 200) {
        positionDot[0].style.scale = 1 - window.pageYOffset * (0.7 / 200);
    } else if (window.pageYOffset > 200 && window.pageYOffset < 630 || window.pageYOffset > 1030 && window.pageYOffset < 1660) {
        positionDot[0].style.scale = 0.3;
    } else if (window.pageYOffset > 780 && window.pageYOffset < 880) {
        positionDot[0].style.scale = 0.3 - (window.pageYOffset - 780) * (-0.7 / 100);
    } else if (window.pageYOffset > 880 && window.pageYOffset < 980) {
        positionDot[0].style.scale = 1;
    } else if (window.pageYOffset > 980 && window.pageYOffset < 1080) {
        positionDot[0].style.scale = 1 + (window.pageYOffset - 980) * (-0.7 / 100);
    } else if (window.pageYOffset > 1660 && window.pageYOffset < 1860) {
        positionDot[0].style.scale = 0.3 - (window.pageYOffset - 1660) * (-0.7 / 200);
    }
})

// document.addEventListener('scroll', () => {
//     positionDot[0].style.marginTop = (window.pageYOffset/6) + 'px';
//     let scrollValue = window.pageYOffset*100/windowHeight;

//     if(window.pageYOffset < 200 ) {
//         positionDot[0].style.scale = 1 - window.pageYOffset*(0.7/200);
//     } else if (window.pageYOffset > 200 && window.pageYOffset < 630 || window.pageYOffset > 1030 && window.pageYOffset < 1660) {
//         positionDot[0].style.scale = 0.3;
//     } else if (window.pageYOffset > 780 && window.pageYOffset < 880) {
//         positionDot[0].style.scale = 0.3-(window.pageYOffset-780)*(-0.7/100);
//     } else if (window.pageYOffset > 880 && window.pageYOffset < 980) {
//         positionDot[0].style.scale = 1;
//     } else if (window.pageYOffset > 980 && window.pageYOffset < 1080) {
//         positionDot[0].style.scale = 1+(window.pageYOffset-980)*(-0.7/100);
//     } else if (window.pageYOffset > 1660 && window.pageYOffset < 1860) {
//         positionDot[0].style.scale = 0.3-(window.pageYOffset-1660)*(-0.7/200);
//     }
// })


for (i = 0; i < 3; i++) {
    sectionDot[i].addEventListener('click', (event) => {
        let sectionSelected = '#section0' + (indexInClass(sectionDot, event.target) + 1);
        if (sectionSelected == '#section01') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
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
if (document.referrer == "https://ryomaquenot.com/") {
    setTimeout(() => {
        document.querySelector("#paperPlane").classList.add("takeOff");
        document.querySelector("#remerciement").classList.add("displayThank");
    }, 500)
}

