var slideIndex = 0;

function carousel() {
  var x = document.getElementsByClassName("slide");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = i === slideIndex ? "block" : "none";
  }
  slideIndex = (slideIndex + 1) % x.length;
  setTimeout(carousel, 500);
}

document.addEventListener("DOMContentLoaded", carousel);
