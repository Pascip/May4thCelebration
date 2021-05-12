function changeColour(colour) {
  const root = document.querySelector(":root");
  root.style.setProperty("--lightsabercolour", colour);
}

function changeSoundSetting() {
  const activateAudio = document.getElementById("audioActivate");
  const humAudio = document.getElementById("audioHum");
  const deactivateAudio = document.getElementById("audioDeactivate");
  const soundspan = document.getElementById("settingSound");

  if (humAudio.volume > 0) {
    humAudio.volume = 0;
    deactivateAudio.volume = 0;
    activateAudio.volume = 0;
    soundspan.innerText = "Sound: OFF";
  } else {
    humAudio.volume = 0.2;
    deactivateAudio.volume = 0.2;
    activateAudio.volume = 0.2;
    soundspan.innerText = "Sound: ON";
  }
}

function activateSaber() {
  const activateAudio = document.getElementById("audioActivate");
  const humAudio = document.getElementById("audioHum");
  const deactivateAudio = document.getElementById("audioDeactivate");

  humAudio.loop = true;

  if (
    document.getElementById("saberblade").style.animation ==
    "0.5s ease 0s 1 normal forwards running activate"
  ) {
    document.getElementById("saberblade").style.animation =
      "deactivate 0.5s forwards";
    humAudio.pause();
    deactivateAudio.play();
  } else {
    document.getElementById("saberblade").style.animation =
      "activate 0.5s forwards";
    activateAudio.play();
    humAudio.play();
  }
}

document.addEventListener("visibilitychange", function () {
  const humAudio = document.getElementById("audioHum");
  if (document.hidden) {
    humAudio.pause();
  } else if (
    document.getElementById("saberblade").style.animation ==
    "0.5s ease 0s 1 normal forwards running activate"
  ) {
    humAudio.play();
  }
});

changeSoundSetting();
