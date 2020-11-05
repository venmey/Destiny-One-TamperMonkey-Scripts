// ==UserScript==
// @name         Make Destiny One Test Blue
// @namespace    https://github.com/venmey/Destiny-One-TamperMonkey-Scripts
// @version      2.4
// @description  Makes various elements in Destiny One TEST blue instead of red to distinguish it from PROD.
// @author       Ven Meyerzon
// @match        https://ucdavistestsv.destinysolutions.com/srs/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.head.insertAdjacentHTML("beforeend",
 `<style>
 #navigation01, #footer01, #navigation02 ul.navigationMenu > li:hover, .dropDownThirdLevelMenu > li > div:hover, .dropDownThirdLevelMenu > li > div:hover, #main-menu ul li.hover li.hover {
     background-color: #4F7094 !important;
 }

 #main-menu ul li.selectedItem:hover {
     background-color: #6884A3 !important;
 }

 .dropDownThirdLevelMenu li.selected > div a {
     border-left: 5px solid #4F7094 !important;
 }

 #navigation02 ul.navigationMenu > li.selected > div > a, .dropDownThirdLevelMenu li.selected > div a {
     color: #4F7094 !important;
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
