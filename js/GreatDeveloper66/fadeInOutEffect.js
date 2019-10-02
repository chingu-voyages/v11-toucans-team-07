/*global document*/
/*global setTimeout*/
/*jshint esversion:6*/

export default function fadeInOut() {
  setTimeout(() => {
    document.querySelector(".tickyContainer").style.opacity = 1.0;
    document.querySelector(".robotPic").style.opacity = 1.0;
    document.querySelector("section#whatIs h2").style.opacity = 1.0;
    document.querySelector(".tickyContainer").style.transform = "translateY(20px)";
    document.querySelector(".robotPic").style.transform = "TranslateY(20px)";
    document.querySelector("section#whatIs h2").style.transform = "TranslateY(20px)";
  }, 3000);

  document.querySelector(".tickyContainer").style.opacity = 0.0;
  document.querySelector(".robotPic").style.opacity = 0.0;
  document.querySelector("section#whatIs h2").style.opacity = 0.0;
  document.querySelector(".tickyContainer").style.transform = "translateY(-20px)";
  document.querySelector(".robotPic").style.transform = "TranslateY(-20px)";
  document.querySelector("section#whatIs h2").style.transform = "TranslateY(-20px)";
}