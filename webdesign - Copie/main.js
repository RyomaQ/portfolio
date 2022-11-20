const menuBtn = document.querySelector('#menu-btn');
const pages = document.querySelectorAll('.pages');
const menu = document.querySelectorAll('.menu');
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");
})

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
        pages.forEach(e => e.style.display = 'none');
        pages.forEach(e => e.classList.remove('display'));
        void pages.forEach(e => e.offsetWidth);
        pages.forEach(e => e.classList.add('undisplay'));
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

// $(window).load(function() {
//     $(".loader").fadeOut("slow");
// })

$(window).load(function() {
    $("#bg");
})