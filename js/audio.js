window.addEventListener("DOMContentLoaded", (event) => {
  const audio = document.querySelector("audio");
  audio.volume = 0.4;
  audio.loop = true;
  audio.play();
});

const volumeUpSVGPath = "png/volume-up.png";
const volumeMuteSVGPath = "png/volume-mute.png";

const button = document.querySelector("#audio-button");
const icon = document.querySelector("#audio-icon");
const audio = document.querySelector("audio");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    icon.src = volumeUpSVGPath;
  } else {
    audio.pause();
    icon.src = volumeMuteSVGPath;
  }
});
