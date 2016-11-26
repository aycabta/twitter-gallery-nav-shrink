// ==UserScript==
// @name       Twitter Gallery Nav Shrink
// @namespace  http://aycabta.github.io/
// @version    0.0.1
// @description  Twitter Gallery Nav Shrink
// @include    /^https?:\/\/twitter.com/
// @copyright  2016+, Code Ass
// ==/UserScript==

(function() {
    var sheet;
    var style = document.createElement('style');
    style.setAttribute('id', 'gallery-nav-shrink');
    style.type = "text/css";
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
    sheet = style.sheet;
    sheet.insertRule('.GalleryNav--next {' +
                     '    width: 33% !important;' +
                     '}', sheet.cssRules.length);
})();

