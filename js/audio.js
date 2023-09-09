window.addEventListener("DOMContentLoaded", (event) => {
  const audio = document.querySelector("audio");
  audio.volume = 0.4;
  audio.loop = true;
  audio.play();
});

const volumeUpSVGPath = "svg/volume-up.svg";
const volumeMuteSVGPath = "svg/volume-mute.svg";

const button = document.querySelector("#audio-button");
const icon = document.querySelector("#audio-icon");
const audio = document.querySelector("audio");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    icon.src = volumeMuteSVGPath;
  } else {
    audio.pause();
    icon.src = volumeUpSVGPath;
  }
});
