// toggle & responsive nav
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navList = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navList.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    })
}

navSlide();

// clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
}

// keyframe project
const texts = ["Project","And","Experience"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.text').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1800); // Delay before switching to the next text
    } else {
        setTimeout(type, 110);
    }
})();


// keyframe portfolio
const PortTexts = ["Practice","And","Portfolios"];
let PortCount = 0;
let PortIndex = 0;
let PortCurrentText = '';
let PortLetter = '';

(function type() {
    if (PortCount === PortTexts.length) {
        PortCount = 0;
    }
    PortCurrentText = PortTexts[PortCount];
    PortLetter = PortCurrentText.slice(0, ++PortIndex);

    document.querySelector('.port-text').textContent = PortLetter;
    if (PortLetter.length === PortCurrentText.length) {
        PortCount++;
        PortIndex = 0;
        setTimeout(type, 1800);
    } else {
        setTimeout(type, 100);
    }
})();