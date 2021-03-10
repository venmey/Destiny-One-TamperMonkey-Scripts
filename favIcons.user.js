// ==UserScript==
// @name         [D1] Set Favicons
// @namespace    https://github.com/venmey/Destiny-One-TamperMonkey-Scripts
// @version      2.0
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
    let favImg = (window.location.href.indexOf('ucdavissv') > -1 ? prodIcon : testIcon);

    // Check if favIcon already exists.
    if (document.querySelector("link[rel='shortcut icon']")) {
        // FavIcon exists, so let's replace it
        document.querySelector("link[rel='shortcut icon']").href = favImg;
    } else {
        // FavIcon doesn't exist, so let's create one
        let headTitle = document.querySelector('head');
        let setFavicon = document.createElement('link');
        setFavicon.setAttribute('rel', 'shortcut icon');
        setFavicon.setAttribute('href', favImg);
        headTitle.appendChild(setFavicon);
    } 
})();
