// ==UserScript==
// @name         Make Destiny One Test Blue
// @version      1.01
// @description  Makes the Destiny One toolbar blue instead of red when using TEST.
// @author       Ven Meyerzon
// @match        https://ucdavistestsv.destinysolutions.com/srs/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let sheet = window.document.styleSheets[9];
    sheet.insertRule(
        '#navigation01, #footer01, #navigation02 ul.navigationMenu > li:hover, .dropDownThirdLevelMenu > li > div:hover, .dropDownThirdLevelMenu > li > div:hover, #main-menu ul li.hover li.hover { background-color: #1d22b5; }',
        sheet.cssRules.length); // main nav, footer, secondary nav dropdown, teritary menu item, hover over main nav dropdown to blue
    sheet.insertRule('#main-menu ul li.selectedItem:hover { background-color: #2e30d9; }', sheet.cssRules.length); // top-level dropdown navigation to blue
    sheet.insertRule('.dropDownThirdLevelMenu li.selected > div a { border-left: 5px solid #1d22b5; }', sheet.cssRules.length); // teriary menu currently selected page marker to blue
    sheet.insertRule('#navigation02 ul.navigationMenu > li.selected > div > a, .dropDownThirdLevelMenu li.selected > div a { color: #1d22b5; }', sheet.cssRules.length); // secondary selected menu, teriary selected menu font color to blue
    //test
})();
