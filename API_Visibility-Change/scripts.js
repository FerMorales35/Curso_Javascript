const video = document.getElementById("video");

addEventListener("visibilitychange", () => {
    document.visibilityState === 'visible' ? video.play() : video.pause()
})