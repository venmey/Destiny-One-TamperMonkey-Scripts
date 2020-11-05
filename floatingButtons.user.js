// ==UserScript==
// @name         Floating Buttons
// @namespace    https://github.com/venmey/Destiny-One-TamperMonkey-Scripts
// @version      1.1
// @description  Makes the Save button on various pages float on the left side of the screen as you scroll for easier access.
// @author       Ven Meyerzon
// @match        https://ucdavistestsv.destinysolutions.com/srs/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  
  let saveButton = document.querySelectorAll("#savePage, #save");
  
  if (saveButton[0]) {
	  let cloneButton = saveButton[0].cloneNode(true);
	  saveButton[0].insertAdjacentElement('beforebegin', cloneButton)
	  cloneButton.style.cssText = "position: fixed; left: 17%;  top: 93%; font-size: 20px !important;"
  }

})();
