
const title = document.getElementById("title-card")
const mainCatElem = document.getElementById("cat-img")

const cacheVideos = {};
const UrlVideos = [
    'assets/videos/laughter.mp4',
    'assets/videos/scuba.mp4',
    'assets/videos/bouncy.mp4',
    'assets/videos/muhehehe.mp4',
    'assets/videos/damdam.mp4',
];

async function preLoadVideos(url) {
    try {
        const response = await fetch(url);
        const blobFile = await response.blob();
        
        const localUrl = URL.createObjectURL(blobFile);
        
        cacheVideos[url] = localUrl;
    } catch (error) {
        console.error(error);
    }
}

window.addEventListener("load", async () => {
    await Promise.all(UrlVideos.map(url => preLoadVideos(url)));
});

const catVideo = document.getElementById("cat-video");
const catImg = document.getElementById("cat-img");

function playMeme (url, text) {
    if (cacheVideos[url]) {
        catVideo.src = cacheVideos[url];
        
    } else {
        catVideo.src = url;
    }

    title.textContent = text;
    catImg.style.display = "none";
    catVideo.style.display = "block";
    catVideo.play();
}

catVideo.addEventListener('ended', () => {
    catVideo.style.display = "none";
    catImg.style.display = "block";
    title.textContent = "Gatito";
});