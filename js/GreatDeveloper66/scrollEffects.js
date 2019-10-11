/*global document*/
/*jshint esversion:6*/
/*global window*/
/*global requestAnimationFrame*/

export default function scrollEffects(elements) {
  elements.forEach(function (elem) {
      elem.addEventListener("click", (function () {
          smoothScroll(this.getAttribute("href"));
        }));
      });
  }

  function smoothScroll(targ = "#homepage", duration = 1000) {
    let getIt = document.querySelector(targ);
    const targetPosition = getIt.getBoundingClientRect().top - 75;
    const startPosition = window.pageYOffset;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      window.scrollTo(0, ease(timeElapsed, startPosition, targetPosition, duration));
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
