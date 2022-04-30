// DÉCLARATION DE TOUT LES CONST / VAR -----------------------------------------------

const bg = document.querySelector(".img-visuel-background");
var width = window.innerWidth;
const hoverBtn = document.querySelector(".btn1");
var mySong = document.getElementById("mySong");
var btn = document.getElementById("btnVideo");

// FUNCTION MUSIQUE DU WEBSITE -----------------------------------------------

function playAndPause() {
  if (mySong.paused) {
    mySong.play();
    btn.innerHTML = "Pause II";
  } else {
    mySong.pause();
    btn.innerHTML = "Play ▶";
  }
}

// SCROLL DU VOLUME MUSIQUE DU WEBSITE SUR INDEX.HTML -----------------------------------------------

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    mySong.volume = 0.1;
  } else {
    mySong.volume = 0.7;
  }
});

// SCROLL ET APPARITION SUR INDEX.HTML -----------------------------------------------

const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-80px";
  }
});

// SCROLL SMOOTH EN APPUYANT SUR LE BACKGROUND VISUEL DE INDEX.HTML -----------------------------------------------

function scrollsection() {
  var elem = document.getElementById("scrollhere");
  elem.scrollIntoView({ behavior: "smooth", block: "end" });
}

// HOVER BOUTON DISCOVER INDEX.HTML POUR ALLER AUX COLLECTIONS -----------------------------------------------

hoverBtn.addEventListener("mouseenter", function () {
  hoverBtn.style.transform = "translateX(20px)";
  hoverBtn.style.transition = "1s ease";
  hoverBtn.style.opacity = "1";
});
hoverBtn.addEventListener("mouseout", function () {
  hoverBtn.style.transform = "translateX(-5px)";
  hoverBtn.style.transition = "1s ease";
  hoverBtn.style.opacity = "0.4";
});
