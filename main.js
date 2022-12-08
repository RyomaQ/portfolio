const closeMenuBtn = document.querySelector("#closeMenu")

// retourne l'index
function indexInClass(collection, target) {
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] == target)
            return i;
    }
}

// Mouse
document.addEventListener('click', () => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");
})

// Nav 
let k = 0;
menuBtn.addEventListener('click', function(){
    const toNav = document.querySelector('.toNav');
    const display = document.querySelectorAll('.display');
    if(k == 0 && menuBtn.classList.length == 0){
        menuBtn.classList.toggle('toNav')
        pages.forEach(e => e.classList.toggle('display'));
        pages.forEach(e => e.style.display = 'block');
        menu[0].classList.toggle('undisplay');
        k++;
        if (window.matchMedia("(max-width: 1023px)").matches) {
        setTimeout(() => {
                menuBtn.style.alignItems = "flex-end";
                menuBtn.style.justifyContent = "unset";
                menuBtn.style.marginTop = "0";
                menuBtn.style.paddingTop = "3vh"
                menuBtn.style.borderRadius = "0"
                closeMenuBtn.classList.toggle("display");
                closeMenuBtn.style.display = "flex";
            }, 200)
        }
    } else if(k == 1) {
        toNav.style.animationDirection = 'reverse'
        menuBtn.classList.remove('toNav');
        void menuBtn.offsetWidth;
        menuBtn.classList.add('toNav');
        pages.forEach(e => e.classList.toggle('display'));
        void pages.forEach(e => e.offsetWidth);
        pages.forEach(e => e.classList.add('undisplay'));
        setTimeout(() => {
            pages.forEach(e => e.style.display = 'none');
            if (window.matchMedia("(max-width: 1023px)").matches) {
                menuBtn.style.justifyContent = "center"
                menuBtn.style.alignItems = "center"
                menuBtn.style.marginTop = "2vh";
                menuBtn.style.paddingTop = "0"
                menuBtn.style.borderRadius = "50px"
                closeMenuBtn.classList.toggle("display");
                closeMenuBtn.style.display = "none";
            }
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
        if (window.matchMedia("(max-width: 1023px)").matches) {
            setTimeout(() => {
                menuBtn.style.alignItems = "flex-end"
                menuBtn.style.justifyContent = "unset"
                menuBtn.style.marginTop = "0";
                menuBtn.style.paddingTop = "3vh";
                menuBtn.style.borderRadius = "0"
                closeMenuBtn.classList.toggle("display");
                closeMenuBtn.style.display = "flex";
            }, 200)
        }
        
    }
})

function closeMenu() {
    toNav.style.animationDirection = 'reverse'
    menuBtn.classList.remove('toNav');
    void menuBtn.offsetWidth;
    menuBtn.classList.add('toNav');
    pages.forEach(e => e.classList.remove('display'));
    void pages.forEach(e => e.offsetWidth);
    pages.forEach(e => e.classList.add('undisplay'));
    setTimeout(() => {
        pages.forEach(e => e.style.display = 'none');
        if (window.matchMedia("(max-width: 1023px)").matches) {
            menuBtn.style.justifyContent = "center"
            menuBtn.style.alignItems = "center"
            menuBtn.style.marginTop = "2vh";
            menuBtn.style.paddingTop = "0"
            menuBtn.style.borderRadius = "50px"
        }
    }, 200)
    menu[0].classList.toggle('display');
    void menu[0].offsetWidth;
    menu[0].classList.toggle('undisplay');
    k--;
}