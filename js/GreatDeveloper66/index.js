/*global document*/
/*jshint esversion:6*/

export default function tickyButtonEffects() {
  
  document.querySelector(".tickyButton").addEventListener("mouseenter", function () {
    document.querySelector(".slackImage").style.transform = "rotate(18deg)";
    document.querySelector(".slackImage").style.transform = "scale(1.2)";
  });
  
   document.querySelector(".tickyButton").addEventListener("mouseleave", function () {
    document.querySelector(".slackImage").style.transform = "rotate(-18deg)";
    
  });
  document.querySelector(".tickyButtonVR").addEventListener("mouseenter", function () {
    window.alert('mousenter');
    document.querySelector(".slackImageVR").style.transform = "rotate(18deg)";
  });
  
   document.querySelector(".tickyButtonVR").addEventListener("mouseleave", function () {
     window.alert("mouseleave");
    document.querySelector(".slackImageVR").style.transform = "rotate(-18deg)";
    
  });
  
}
