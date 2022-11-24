const bottomReveal = document.querySelector(".bottomReveal")
const mainDiv = document.querySelector("main")
const section01 = document.querySelector(".design-section01");

function exit() {
    section01.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });


    setTimeout(() => {
        bottomReveal.style.animationDirection = "reverse";
        mainDiv.classList.remove("bottomReveal");
        void mainDiv.offsetWidth;
        mainDiv.classList.add("bottomReveal");
    }, 600)

    setTimeout(() => {
        window.location = '../index.html'
    }, 1000)
}