// ==UserScript==
// @name         [D1] More Obvious Inactive Items
// @namespace    https://github.com/venmey/Destiny-One-TamperMonkey-Scripts
// @version      1.0
// @description  Makes inactive items in select lists more obvious by giving them a red background and displays an alert if an inactive item has been selected.
// @author       Ven Meyerzon
// @match        https://ucdavistestsv.destinysolutions.com/srs/*
// @match        https://ucdavissv.destinysolutions.com/srs/*
// @grant        none
// ==/UserScript==

(function() {
	let selectedInactives = "Warning! You have selected the following inactive items in a dropdown/select list:\n"; // will display warning message with all selected inactives
	let selectedInactivesCount = 0; // counts selected inactives
	// Get all select lists on the page
	let selectLists = document.querySelectorAll("select");

	// Loop through the select lists
	for (list of selectLists) {
		// Loop through options of the list
		for (option of list.options) {
			// Find inactive (I) options
			if (option.text.slice(-3) == "(I)") {
				// Style them
				option.style.backgroundColor = "#ffcccc";
				option.style.color = "#424242";
				option.style.fontSize = "90%";

				// If the inactive item is currently selected, add it to selectedInactives
				if (option.selected) {
					selectedInactives+= "\n* " + option.text;
					selectedInactivesCount++;
				}
			}
		}
	}

	// If there are more than 0 selectedInactives, display an alert to the user.
	if (selectedInactivesCount > 0) {
		alert(selectedInactives);
	}
})();