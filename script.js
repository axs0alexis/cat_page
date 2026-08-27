
const title = document.getElementById("title-card")
const catVideo = document.getElementById("cat-video");
const catImg = document.getElementById("cat-img");

const cacheVideos = {};
const UrlVideos = [
    'assets/videos/laughter.mp4',
    'assets/videos/hello.mp4',
    'assets/videos/bouncy.mp4',
    'assets/videos/muhehehe.mp4',
    'assets/videos/ruffles.mp4',
    'assets/videos/damdam.mp4'
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

const buttonsContainer = document.getElementById("meme-buttons-container");

buttonsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("cat-btn")) {
        const url = event.target.dataset.url;
        const text = event.target.dataset.text;
        
        if (cacheVideos[url]) {
            catVideo.src = cacheVideos[url];
        } else {
            catVideo.src = url;
        }

        title.textContent = text;
        catImg.style.display = "none";
        catVideo.style.display = "block";
        catVideo.currentTime = 0; 
        catVideo.play();
    }
});

catVideo.addEventListener('ended', () => {
    catVideo.style.display = "none";
    catImg.style.display = "block";
    title.textContent = "Gato normal";
});