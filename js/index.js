/* jshint esversion: 6 */
/* global document */
/* global CSS */

import tickyButtonEffects from '../js/GreatDeveloper66/tickyButtonEffects.js'
import popups from '../js/GreatDeveloper66/popups.js'
import scrollEffects from '../js/GreatDeveloper66/scrollEffects.js'

window.onload = () => {
  tickyButtonEffects()
  popups()
  if (!CSS.supports('scroll-behavior: smooth')) {
    scrollEffects([...Array.from(document.querySelectorAll('nav a')), document.getElementById('topArrow')])
  }
}
