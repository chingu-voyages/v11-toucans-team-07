/*global document*/
/*global setTimeout*/
/*jshint esversion:6*/

export default function fadeInOut() {
  window.onscroll = () => {
    if(window.pageYOffset > 200){
      document.getElementById("#card1VR").style.opacity = 1.0;
    }
  }
}