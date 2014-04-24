
var header, headerBackground;

function init() {

  var scroller = document.getElementById('scroller');
  header = document.getElementById('header-content');
  headerBackground = document.getElementById("header-background");
  var wrap = document.getElementById('wrap');

/*
  document.ontouchmove = function(event){
      event.preventDefault();
  };
*/

  var touchEndTimeout;
  var touchEndInterval;
  var lastPosition;
  scroller.ontouchend = function() {
    clearInterval(touchEndInterval);
    clearInterval(touchEndTimeout);

    touchEndInterval = setInterval(function() {
      lastPosition *= .95;
      updateFraction(lastPosition);
    }, 10);
    touchEndTimeout = setTimeout(function(){
      clearInterval(touchEndInterval);
      updateFraction(0);
    }, 2000);

  };
  scroller.ontouchmove = function(event){
    clearInterval(touchEndInterval);
    clearInterval(touchEndTimeout);
  };
  scroller.ontouchstart = function(event){
    clearInterval(touchEndInterval);
    clearInterval(touchEndTimeout);
  };

  scroller.onscroll = function(event) {

    if (scroller.scrollTop < 0) {

      var fraction = Math.min(scroller.scrollTop / -100, 1);

      lastPosition = fraction;

      updateFraction(fraction);
    }
  };

}


function updateFraction(fraction) {
  header.style.opacity = 1 - fraction;
  headerBackground.setAttribute("style","-webkit-filter:blur(" + 10*(1-fraction) + "px)");
}
