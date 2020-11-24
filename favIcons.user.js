// ==UserScript==
// @name         [D1] Set favicons
// @namespace    https://github.com/venmey/Destiny-One-TamperMonkey-Scripts
// @version      1.0
// @description  Sets a favicon for PROD and TEST
// @author       Ven Meyerzon
// @match        https://ucdavistestsv.destinysolutions.com/srs/*
// @match        https://ucdavissv.destinysolutions.com/srs/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Set favIcon URLs
    let prodIcon = 'https://github.com/venmey/Destiny-One-TamperMonkey-Scripts/raw/main/images/prod.ico';
    let testIcon = 'https://github.com/venmey/Destiny-One-TamperMonkey-Scripts/raw/main/images/test.ico';

    // Create favIcon element and add to document
    let favImg = (window.location.href.indexOf('ucdavissv') > -1 ? prodIcon : testIcon);
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel', 'shortcut icon');
    setFavicon.setAttribute('href', favImg);
    headTitle.appendChild(setFavicon);
})();
