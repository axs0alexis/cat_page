
const title = document.getElementById("title-card")
const mainCatElem = document.getElementById("cat-img")

const audios = {
    "meow": new Audio("assets/sounds/meow.mp3"),
    "laughter": new Audio("assets/sounds/laughter.mp3"),
    "scuba": new Audio("assets/sounds/scuba.mp3"),
    "bouncy": new Audio("assets/sounds/bouncy.mp3"),
    "muhehehe": new Audio("assets/sounds/muhehehe.mp3")
}

function playMeme (audio, memeURL) {
    Object.values(audios).forEach(audio => audio.pause());

    if (memeURL) mainCatElem.src = memeURL;
    audio.currentTime = 0;
    audio.play();
}

function resetValues () {
    mainCatElem.src = "assets/images/meow.jpg"
    title.textContent = "Gatito"
}


const meowBtn = document.getElementById("meow");
meowBtn.addEventListener("click", () => {
    title.textContent = "Gatito"
    playMeme(audios.meow, "assets/images/meow.jpg");
});



const laughterBtn = document.getElementById("laughter");

laughterBtn.addEventListener("click", () => {
    title.textContent = "Gato naranja burlandose"
    playMeme(audios.laughter, "assets/images/laughter.webp");
});
audios.laughter.addEventListener("ended", resetValues);



const scubaBtn = document.getElementById("scuba");

scubaBtn.addEventListener("click", () => {
    title.textContent = "Scuba Cat Dance"
    playMeme(audios.scuba, "assets/images/scuba.webp");
});
audios.scuba.addEventListener("ended", resetValues);


const bouncyBtn = document.getElementById("bouncy");

bouncyBtn.addEventListener("click", () => {
    title.textContent = "Gato Boing Boing"
    playMeme(audios.bouncy, "assets/images/bouncy.webp")
})
audios.bouncy.addEventListener("ended", resetValues)



const muheheheBtn = document.getElementById("muhehehe");

muheheheBtn.addEventListener("click", () => {
    title.textContent = "Mue HeHeHe"
    playMeme(audios.muhehehe, "assets/images/muhehehe.webp")
})
audios.muhehehe.addEventListener("ended", resetValues)