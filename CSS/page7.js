let videoIndex = 1;

function changeVideo() {
    videoIndex++;
    const videoPlayer = document.getElementById("videoPlayer");

    if (videoIndex > 2) {
        videoIndex = 1;
    }

    videoPlayer.src = `video${videoIndex}.mp4`;
}