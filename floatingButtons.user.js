// ==UserScript==
// @name         Floating Buttons
// @namespace    https://github.com/venmey/Destiny-One-TamperMonkey-Scripts
// @version      2.6
// @description  Creates a floating Save button that is always visible at the bottom of the screen when the actual save button on the page is not visible.
// @author       Ven Meyerzon
// @match        https://ucdavistestsv.destinysolutions.com/srs/*
// @match        https://ucdavissv.destinysolutions.com/srs/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let buttonStyle = "position: fixed; left: 0;  bottom: 0; font-size: 20px !important; width: 100%; border-radius: 0px !important;";

    // Helper function to determine if an element is in the viewport
    var isInViewport = function (elem) {
        var distance = elem.getBoundingClientRect();
        return (
            distance.bottom > 0 &&
            distance.right > 0 &&
            distance.left < (window.innerWidth || document.documentElement.clientWidth) &&
            distance.top < (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    // look for save button on page
    let saveButton = document.querySelectorAll("#savePage, #save");

    // if save button exists
    if (saveButton[0]) {

        // clone save button
        let cloneButton = saveButton[0].cloneNode(true);
        saveButton[0].insertAdjacentElement('beforebegin', cloneButton)

        // add class to save button we want to track to differentiate it from our clone button
        saveButton[0].classList.add("trackedSaveButton");

        // determine initial display state of clone button
        // if regular save button is visible, hide clone button
        if (isInViewport(saveButton[0])) {
            cloneButton.style.cssText = "display: none;";
            // if regular save button is not visible show clone button
        } else {
            cloneButton.style.cssText = buttonStyle;
        }

        // add event listener on scroll
        window.addEventListener('scroll', function (event) {
            // if regular save button is visible
            if (isInViewport(saveButton[0])) {
                // hide clone button
                cloneButton.style.cssText = "display: none;";
                // if regular save button is not visible
            } else {
                // display clone button
                cloneButton.style.cssText = buttonStyle;
            }
        })
    }
})();
