// ==UserScript==
// @name         [D1] Make Destiny One Test Purple
// @namespace    https://github.com/venmey/Destiny-One-TamperMonkey-Scripts
// @version      3.0
// @description  Makes various elements in Destiny One TEST purple instead of blue to distinguish it from PROD.
// @author       Ven Meyerzon
// @match        https://ucdavistestsv.destinysolutions.com/srs/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let mainColor = '#76236C';
    let supportingColor = '#C6007E';

    document.head.insertAdjacentHTML("beforeend",
 `<style>
 #navigation01, #footer01,
 #navigation02 ul.navigationMenu > li:hover,
 .dropDownThirdLevelMenu > li > div:hover,
 #main-menu ul li.hover li.hover,
 .dropDownFourthLevelMenu > li > div:hover {
     background-color: ${mainColor} !important;
 }


 #main-menu ul li.selectedItem:hover {
     background-color: ${supportingColor} !important;
 }

 .dropDownThirdLevelMenu li.selected > div a {
     border-left: 5px solid ${mainColor} !important;
 }

 .dropDownFourthLevelMenu li.selected > div > a {
    border: none !important;
 }

 #navigation02 ul.navigationMenu > li.selected > div > a,
 .dropDownThirdLevelMenu li.selected > div a {
     color: ${mainColor} !important;
 }

 .dropDownThirdLevelMenu li > div:hover > a, #navigation02 ul.navigationMenu > li:hover > div > a {
     color: #ffffff !important;
 }

 .schoolName-text {
    font-size: 13pt !important;
    margin-left: 20px;
 }
 </style>`
)
})();
