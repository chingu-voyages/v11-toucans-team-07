/*global document*/
/*jshint esversion:6*/

export default function tickyButtonEffects() {
  document.querySelector(".tickyButton").addEventListener("mouseenter", function () {
    document.querySelector(".slackImage").style.transform = "rotate(18deg)";
  });

  document.querySelector(".tickyButton").addEventListener("mouseleave", function () {
    document.querySelector(".slackImage").style.transform = "rotate(-18deg)";

  });

  document.querySelector(".tickyButtonVR").addEventListener("mouseenter", function () {
    document.querySelector(".slackImageVR").style.transform = "rotate(18deg)";
  });

  document.querySelector(".tickyButtonVR").addEventListener("mouseleave", function () {
    document.querySelector(".slackImageVR").style.transform = "rotate(-18deg)";

  });

}
