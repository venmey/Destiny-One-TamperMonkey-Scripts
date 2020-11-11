// ==UserScript==
// @name         Floating Buttons
// @namespace    https://github.com/venmey/Destiny-One-TamperMonkey-Scripts
// @version      2.3
// @description  Makes the Save button on various pages float on the left side of the screen as you scroll for easier access.
// @author       Ven Meyerzon
// @match        https://ucdavistestsv.destinysolutions.com/srs/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let buttonStyle = "position: fixed; left: 37.5%;  bottom: 5px; font-size: 20px !important; width: 25%;";

    // Helper function to determine if an element is in the viewport
    var isInViewport = function (elem) {
        var distance = elem.getBoundingClientRect();
        return (
            distance.top >= 0 &&
            distance.left >= 0 &&
            distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            distance.right <= (window.innerWidth || document.documentElement.clientWidth)
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
