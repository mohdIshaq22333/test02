const buttons = document.querySelectorAll("[data-btn]");
const skip = document.querySelectorAll("[data-skip]");
const bgImg = document.querySelector("#bgImg");
const title = document.querySelector("#title");
const para = document.querySelector("#para");
let prev = 0;
let num = 0;
const slideValues = [0, -0.7, -1.2, -1.9, -2.6, -3.3, -4, -5, -5, -5.7];
const textArray = [{
        title: "WE ARE BREAKING OUR VOW OF SILENCE",
        para: "In January 2011 after  decade of digital we opened the doors to our temple.",
        class: "top",
    },
    {
        title: "TALENT IS GIVEN TRUE SKILL IS EARNED",
        para: "Step 1 out of 8 on the path to digital enlightenment.",
        class: "left",
    },
    {
        title: "BE FLEXIBLE TO CHANGE AND STURDY IN CONVICTION",
        para: "Step 2 out of 8 on the path to digital enlightenment.",
        class: "left",

    },
    {
        para: "Step 3 out of 8 on the path to digital enlightenment.",
        title: "USE MANY SKILLS YET WORK AS ONE",
        class: "right",

    },
    {
        para: "Step 4 out of 8 on the path to digital enlightenment.",
        title: "TO MASTER ANYTHING FIND INTEREST IN EVERYTHING",
        class: "right",

    },
    {
        para: "Step 5 out of 8 on the path to digital enlightenment.",
        title: "INDIVIDUALS FLOURISH IF CULTURE AND WISDOM ARE SHARED",
        class: "right",

    },
    {
        para: "Step 6 out of 8 on the path to digital enlightenment.",
        title: "TRAIN FOR PERFECTION BUT AIM FOR MORE",
        class: "left",

    },
    {
        para: "Step 7 out of 8 on the path to digital enlightenment.",
        title: "TAKE PRIDE IN YOUR WORK BUT DO NOT SEEK PRAISE",
        class: "left",
    },
    {
        para: "Step 8 out of 8 on the path to digital enlightenment.",
        title: "TEMPORARY SACRIFICE BRINGS LASTING  RESULTS",
        class: "left",
    },
    {
        para: "",
        title: "",
        class: "hide",
    }
];

buttons.forEach(button => {
    button.addEventListener("click", () => slide(button))
})
skip.forEach(skip => {
    skip.addEventListener("click", () => navSlide(skip))
})

function slide(button) {
    const offset = button.dataset.btn === "right" ? 1 : -1;

    if (offset + num > slideValues.length || offset + num < 0) return;
    prev = num;
    num += offset;
    bgImg.style.transform = `translateX(${slideValues[num]*100}vw)`;
    activeNum(num);
    hideArrow();
    textChange();
    // const slides = button
    //     .closest("[data-carousel]")
    //     .querySelector("[data-slides]")

    // const activeSlide = slides.querySelector("[data-active]")
    // let newIndex = [...slides.children].indexOf(activeSlide) + offset
    // if (newIndex < 0) newIndex = slides.children.length - 1
    // if (newIndex >= slides.children.length) newIndex = 0

    // slides.children[newIndex].dataset.active = true
    // delete activeSlide.dataset.active
}

function textChange() {
    if (prev === num) return;
    title.classList.add("opacity");
    para.classList.add("opacity");
    // return;
    setTimeout(() => {
        title.classList.remove(textArray[prev].class);
        para.classList.remove(textArray[prev].class);
        title.classList.remove("opacity");
        para.classList.remove("opacity");
        title.innerText = textArray[num].title;
        para.innerText = textArray[num].para;
        title.classList.add(textArray[num].class);
        para.classList.add(textArray[num].class);
    }, 1000);

}

function hideArrow() {
    if (prev === num) return;
    if (prev === 0) {
        buttons[0].classList.remove("hide");
    } else if (num === 0) {
        buttons[0].classList.add("hide");
    }
    if (prev === slideValues.length - 1) {
        buttons[1].classList.remove("hide");
    } else if (num === slideValues.length - 1) {
        buttons[1].classList.add("hide");
    }
}

function navSlide(skip) {
    prev = num;
    num = parseInt(skip.dataset.skip);
    bgImg.style.transform = `translateX(${slideValues[num]*100}vw)`;
    activeNum(num);
    hideArrow();
    textChange();
}

function activeNum(num) {
    skip[prev].firstChild.classList.remove("active");
    skip[num].firstChild.classList.add("active");
}