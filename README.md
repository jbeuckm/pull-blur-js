pull-blur-js
============

Example of using scroll position to unblur and fade header text. I'm not aware of any available scroll position events after the scroller is released, so there is a timer to simulate the tween back to zero position.

This is working nicely on iOS given that the webview is prevented from scrolling when the touch events bubble to the document.

Converting this into an Angular directive...
