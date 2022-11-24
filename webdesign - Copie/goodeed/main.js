const bottomReveal = document.querySelector(".bottomReveal")
const mainDiv = document.querySelector("main")

function exit() {
    bottomReveal.style.animationDirection = "reverse";
    mainDiv.classList.remove("bottomReveal");
    void mainDiv.offsetWidth;
    mainDiv.classList.add("bottomReveal");
    setTimeout(() => {
        window.location = '../index.html'
    }, 400)
}

