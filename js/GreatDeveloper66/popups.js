/* jshint esversion: 6 */
/* global document */
/* global window */
export default function popups () {
  window.onscroll = () => {
    if (window.scrollY > 800) {
      document.getElementById('card1VR').style.opacity = 1.0
      document.getElementById('card2VR').style.opacity = 1.0
      document.getElementById('card3VR').style.opacity = 1.0
    }
    if (window.scrollY > 200) {
      document.querySelector('.topArrowVR').style.opacity = 1.0
    } else {
      document.querySelector('.topArrowVR').style.opacity = 0.0
    }
  }
}
