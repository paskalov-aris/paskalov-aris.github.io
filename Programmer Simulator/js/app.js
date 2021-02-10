const money = document.getElementById("money");
const counter = document.getElementById("counter");
const speed = document.getElementById("speed");
const button = document.getElementById("button");

const audio = new Audio()
audio.src = "./sounds/sound.mp3";

if(localStorage.getItem("counter")) {
    counter.textContent = localStorage.getItem("counter");
}

let amountOfClicks = 0;

button.addEventListener("click", function () {
    playAudio();
    counter.textContent++;
    localStorage.setItem("counter", counter.textContent);
});

function playAudio() {
    audio.currentTime = 0;
    audio.play();
}
