let redshow = document.querySelector(".red");
let greenshow = document.querySelector(".green");
let yellowshow = document.querySelector(".yellow");
let showtimer = document.querySelector(".timer");

let red = true,
    yellow = false,
    green = false;
let container = 10;

let timer = setInterval(() => {

    if (container === -1 && red) {
        green = true;
        red = false;
        showtimer.style.border = "5px solid rgb(28,255,39)";
        showtimer.style.color = "rgb(28,255,39)";
        showtimer.style.boxShadow = "0px 0px 50px rgb(28,255,39)";
        container = 10;
    } else if (container === -1 && yellow) {
        red = true;
        yellow = false;
        showtimer.style.border = "5px solid rgb(255,28,28)";
        showtimer.style.color = "rgb(255,28,28)";
        showtimer.style.boxShadow = "0px 0px 50px rgb(255,28,28)";
        container = 10;
    } else if (container === -1 && green) {
        yellow = true;
        green = false;
        showtimer.style.border = "5px solid rgb(255,213,28)";
        showtimer.style.color = "rgb(255,213,28)";
        showtimer.style.boxShadow = "0px 0px 50px rgb(255,213,28)";
        container = 10;
    }

    if (red) {
        redshow.classList.remove("disable");
        greenshow.classList.add("disable");
        yellowshow.classList.add("disable");
    }
    if (yellow) {
        yellowshow.classList.remove("disable");
        greenshow.classList.add("disable");
        redshow.classList.add("disable");
    }
    if (green) {
        greenshow.classList.remove("disable");
        redshow.classList.add("disable");
        yellowshow.classList.add("disable");
    }
    if (container < 10) {
        showtimer.innerText = `0${container}`
    } else {
        showtimer.innerText = `${container}`
    }


    container--;

}, 1000)