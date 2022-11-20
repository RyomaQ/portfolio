// const meters = document.getElementById('meters')
// const kilometers = document.getElementById('kilometers')
// const inches1 = document.getElementById('inches1')
// const miles = document.getElementById('miles')
// const tourEiffel = document.getElementById('tour-eiffel')
// const bigMac = document.getElementById('bigmac')
// const iPhone = document.getElementById('iphone')
// const macBook = document.getElementById('macbook')
// const falcon9 = document.getElementById('falcon9')
// const can = document.getElementById('can')

const imgs1 = document.querySelectorAll('.img1');
const units1 = document.querySelectorAll('.unit1');

const imgs2 = document.querySelectorAll('.img2');
const units2 = document.querySelectorAll('.unit2');

const one = document.getElementById('one');
var result = document.getElementById('result');

var form1 = document.getElementById("form1");
var value1 = form1.value;
var text1 = form1.options[form1.selectedIndex].text;

var form2 = document.getElementById("form2");
var text2 = form2.options[form2.selectedIndex].text;

var elements = [
    {
        id: "meters", 
        height : 1, 
        weight: 0.5
    },
    {
        id: "kilometers", 
        height : 1000, 
        weight: 0.5
    },
    {
        id: "miles", 
        height : 1609.34, 
        weight: 0.5
    },
    {
        id: "inches", 
        height : 0.0254, 
        weight: 0.5
    },
    {
        id: "tour-eiffel", 
        height : 330, 
        weight: 0.5
    },
    {
        id: "bigmac", 
        height : 0.069, 
        weight: 0.5
    },
    {
        id: "macbook", 
        height : 0.0112, 
        weight: 0.5
    },
    {
        id: "iphone", 
        height : 0.00785, 
        weight: 50000
    },
    {
        id: "falcon", 
        height : 70, 
        weight: 50000
    },
    {
        id: "can", 
        height : 0.115, 
        weight: 50000
    },
    {
        id: "moon", 
        height : 3474800, 
        weight: 50000
    },
    {
        id: "earth", 
        height : 12756000, 
        weight: 50000
    },
    {
        id: "sun", 
        height : 1392700000, 
        weight: 50000
    },
    {
        id: "christ-redeemer", 
        height : 38, 
        weight: 50000
    },
    {
        id: "human", 
        height : 1.7, 
        weight: 50000
    },
    {
        id: "basketball", 
        height : 0.24, 
        weight: 50000
    },
    {
        id: "shiba", 
        height : 0.38, 
        weight: 50000
    },
    {
        id: "truck", 
        height : 4.3, 
        weight: 50000
    },
];


function hideImg1() {
    imgs1.forEach(img1 => {
        img1.style.display = 'none';
    });
    units1.forEach(unit1 => {
        unit1.style.display = 'none';
    });
}

function hideImg2() {
    imgs2.forEach(img2 => {
        img2.style.display = 'none';
    });
    units2.forEach(unit2 => {
        unit2.style.display = 'none';
    });
}

let count = 0;

// Quand je change mon option 1
form1.addEventListener('change',(event) =>  {
    hideImg1();
    myVal = document.getElementById(event.target.value);
    myVal.style.display = 'block';
    if(myVal.className == "unit1") {
        one.style.marginTop = '15vh'; 
    }
    else{
        one.style.marginTop = '5vh'; 
    }

    let selectedElement1 = event.target.value.replace(/[0-9]/g, '');
    let height1 = elements.find(x => x.id === selectedElement1).height;

    let selectedElement2 = form2.value.replace(/[0-9]/g, '');
    let height2 = elements.find(x => x.id === selectedElement2).height;

    ratioCalc = Math.round((height1/height2)*100)/100;
    result.innerHTML = ratioCalc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
})

// Quand je change mon option 2
form2.addEventListener('change',(event) =>  {
    hideImg2();
    myVal = document.getElementById(event.target.value);
    myVal.style.display = 'block';
    if(myVal.className == "unit2") {
        result.style.marginTop = '15vh'; 
    }
    else{
        result.style.marginTop = '5vh'; 
    }

    let selectedElement2 = event.target.value.replace(/[0-9]/g, '');
    let height2 = elements.find(x => x.id === selectedElement2).height;

    let selectedElement1 = form1.value.replace(/[0-9]/g, '');
    let height1 = elements.find(x => x.id === selectedElement1).height;
 
    ratioCalc = Math.round((height1/height2)*100)/100;
    result.innerHTML = ratioCalc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
});

const bottomReveal = document.querySelector(".bottomReveal")
const mainDiv = document.querySelector("main")

function exit() {
    bottomReveal.style.animationDirection = "reverse";
    mainDiv.classList.remove("bottomReveal");
    void mainDiv.offsetWidth;
    mainDiv.classList.add("bottomReveal");
    setTimeout(() => {
        window.location = '../index.html#projet02'
    }, 400)
}


