$(function () {
  const d = new Date();
  const hours = d.getHours();
  const night = hours >= 18 || hours <= 6;
  const body = document.querySelector("body");
  const toggle = document.getElementById("toggle");
  const input = document.getElementById("switch");
  if (night) {
    input.checked = !0;
    body.classList.add("night");
  }
  toggle.addEventListener("click", function () {
    const isChecked = input.checked;
    if (isChecked) {
      body.classList.remove("night");
    } else {
      body.classList.add("night");
    }
  });
  const introHeight = document.querySelector(".intro").offsetHeight;
  const topButton = document.getElementById("top-button");
  const $topButton = $("#top-button");
  window.addEventListener(
    "scroll",
    function () {
      if (window.scrollY > introHeight) {
        $topButton.fadeIn();
      } else {
        $topButton.fadeOut();
      }
    },
    !1
  );
  topButton.addEventListener("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
  const hand = document.querySelector(".emoji.wave-hand");
  function waveOnLoad() {
    hand.classList.add("wave");
    setTimeout(function () {
      hand.classList.remove("wave");
    }, 2000);
  }
  setTimeout(function () {
    waveOnLoad();
  }, 1000);
  hand.addEventListener("mouseover", function () {
    hand.classList.add("wave");
  });
  hand.addEventListener("mouseout", function () {
    hand.classList.remove("wave");
  });
  window.sr = ScrollReveal({
    reset: !1,
    duration: 600,
    easing: "cubic-bezier(.694,0,.335,1)",
    scale: 1,
    viewFactor: 0.3,
  });
  sr.reveal(".background");
  sr.reveal(".skills");
  sr.reveal(".experience", { viewFactor: 0.2 });
  sr.reveal(".featured-projects", { viewFactor: 0.1 });
  sr.reveal(".other-projects", { viewFactor: 0.05 });
});
if (document.addEventListener) {
  document.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    },
    !1
  );
} else {
  document.attachEvent("oncontextmenu", function () {
    window.event.returnValue = !1;
  });
}

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
