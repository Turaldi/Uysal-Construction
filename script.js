function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}


function fadeOut() {

    setInterval(loader, 4000);
}
window.onload = fadeOut();



var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

// Javascript for image slider autoplay navigation
var repeat = function (activeClass) {
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function () {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if (slides.length == i) {
                i = 0;
            }
            if (i >= slides.length) {
                return;
            }
            repeater();
        }, 7000);
    }
    repeater();
}
repeat();


const button = document.querySelector("button");
const close = document.querySelector(".close");
const trailer = document.querySelector(".trailer");
const video = document.querySelector("video");

button.addEventListener('click', () => {
    trailer.style.visibility = "visible";
    trailer.style.opacity = 1;
});

close.addEventListener('click', () => {
    trailer.style.visibility = "hidden";
    trailer.style.opacity = 0;

    video.pause();
    video.currentTime = 0;
});






