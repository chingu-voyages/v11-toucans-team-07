/*jshint esversion: 6*/
/*global document*/

import tickyButtonEffects from "../js/GreatDeveloper66/tickyButtonEffects.js";
import fadeInOut from "../js/GreatDeveloper66/fadeInOutEffect.js";
tickyButtonEffects();
window.onscroll = () => {
    if(window.scrollY > 800){
      document.getElementById("card1VR").style.opacity = 1.0;
      document.getElementById("card2VR").style.opacity = 1.0;
      document.getElementById("card3VR").style.opacity = 1.0;
    }
  if(window.scrollY > 200){
    document.querySelector(".topArrowVR").style.opacity = 1.0;
  }
  else {
    document.querySelector(".topArrowVR").style.opacity = 0.0;
  }
  }
/*
fadeInOut();
*/
