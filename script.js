
const title = document.getElementById("title-card")
const mainCatElem = document.getElementById("cat-img")

const audios = {
    "meow": new Audio("assets/audios/meow.mp3"),
    "laughter": new Audio("assets/audios/laughter.mp3"),
    "scuba": new Audio("assets/audios/scuba.mp3"),
    "bouncy": new Audio("assets/audios/bouncy.mp3"),
    "muhehehe": new Audio("assets/audios/muhehehe.mp3")
}

const images = {
    "meow": "assets/images/meow.jpg",
    "laughter": "assets/images/laughter.webp",
    "scuba": "assets/images/scuba.webp",
    "bouncy": "assets/images/bouncy.webp",
    "muhehehe": "assets/images/muhehehe.webp"
}

function playMeme (audio, memeURL) {
    Object.values(audios).forEach(audio => audio.pause());

    if (memeURL) mainCatElem.src = memeURL;
    audio.currentTime = 0;
    audio.play();
}

function resetValues () {
    mainCatElem.src = images.meow
    title.textContent = "Gatito"
}

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        Object.values(audios).forEach(audio => audio.pause());
        resetValues();
    }
});

window.addEventListener("load", () => {
    Object.values(images).forEach(image => {
        const img = new Image();
        img.src = image;
    });
});

const meowBtn = document.getElementById("meow");
meowBtn.addEventListener("click", () => {
    title.textContent = "Gatito"
    playMeme(audios.meow, images.meow);
});



const laughterBtn = document.getElementById("laughter");

laughterBtn.addEventListener("click", () => {
    title.textContent = "Gato naranja burlandose"
    playMeme(audios.laughter, images.laughter);
});
audios.laughter.addEventListener("ended", resetValues);



const scubaBtn = document.getElementById("scuba");

scubaBtn.addEventListener("click", () => {
    title.textContent = "Scuba Cat Dance"
    playMeme(audios.scuba, images.scuba);
});
audios.scuba.addEventListener("ended", resetValues);


const bouncyBtn = document.getElementById("bouncy");

bouncyBtn.addEventListener("click", () => {
    title.textContent = "Gato Boing Boing"
    playMeme(audios.bouncy, images.bouncy)
})
audios.bouncy.addEventListener("ended", resetValues)



const muheheheBtn = document.getElementById("muhehehe");

muheheheBtn.addEventListener("click", () => {
    title.textContent = "Mue HeHeHe"
    playMeme(audios.muhehehe, "assets/images/muhehehe.webp")
})
audios.muhehehe.addEventListener("ended", resetValues)