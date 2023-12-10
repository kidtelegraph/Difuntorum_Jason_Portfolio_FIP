// variables
const playerCon = document.querySelector(".player-container");
const player = document.querySelector("#videoplayer");
const videoControls = document.querySelector("#video-controls");
const playButton = document.querySelector("#play-button");
const pauseButton = document.querySelector("#pause-button");
const stopButton = document.querySelector("#stop-button");
const volumeSlider = document.querySelector("#change-vol");
const fullScreen = document.querySelector("#full-screen");

// functions
// if JS is loaded, super. Remove the default controls
player.controls = false;
videoControls.classList.remove('hidden');

function playVideo() {
    player.play();
}

function pauseVideo() {
    player.pause();
}

function stopVideo() {
    player.pause();
    player.currentTime = 1;
} 

function changeVolume() {
    player.volume = volumeSlider.value;
    console.log(volumeSlider.value);
}

function toggleFullScreen() {
    if (document.fullscreenEnabled) {
        if (document.fullscreenElement || document.webkitFullscreenElement) {
            // Exit full screen if already in full screen
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        } else {
            // Enter full screen based on browser support
            if (playerCon.requestFullscreen) {
                playerCon.requestFullscreen();
            } else if (playerCon.webkitRequestFullscreen) {
                playerCon.webkitRequestFullscreen();
            }
        }
    } else {
        console.error("Fullscreen not supported by your browser.");
    }
}

function hideControls() {
    if (player.paused) {
        return;
    }
    videoControls.classList.add('hide');
}

function showControls() {
    videoControls.classList.remove('hide');
}

// Event Listeners
playButton.addEventListener("click", playVideo);
pauseButton.addEventListener("click", pauseVideo);
stopButton.addEventListener("click", stopVideo);
volumeSlider.addEventListener("input", changeVolume); // Changed to input event for smooth volume change

fullScreen.addEventListener("click", toggleFullScreen);
videoControls.addEventListener("mouseenter", showControls);
videoControls.addEventListener("mouseleave", hideControls);
player.addEventListener("mouseenter", showControls);
player.addEventListener("mouseleave", hideControls);