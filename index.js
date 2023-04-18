"use strict";
var faq = document.querySelectorAll(".one-line");
var arr = document.querySelectorAll(".question__button");
var i;

for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function (event) {
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      this.querySelector("#uploadPreview").classList.remove("active");
      this.querySelector("#question").classList.remove("after");
    } else {
      for (i = 0; i < faq.length; i++) {
        faq[i].nextElementSibling.style.display = "none";
      }
      panel.style.display = "block";
      this.querySelector("#uploadPreview").classList.add("active");
      this.querySelector("#question").classList.add("after");
    }
  });
}
