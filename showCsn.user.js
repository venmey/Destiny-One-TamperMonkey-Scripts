// ==UserScript==
// @name         Show CSN
// @version      1.0
// @description  Make the custom section number visible on the enrollments page.
// @author       Ven Meyerzon
// @match        https://ucdavissv.destinysolutions.com/srs/enrolmgr/common/course/studentEnrolledCourses*
// @match        https://ucdavissv.destinysolutions.com/srs/enrolmgr/common/course/academicHistory*
// @match        https://ucdavissv.destinysolutions.com/srs/jsp/enrolmgr/common/course/academicHistory*
// @match        https://ucdavissv.destinysolutions.com/srs/jsp/enrolmgr/common/course/studentEnrolledCourses*
// @match        https://ucdavistestsv.destinysolutions.com/srs/enrolmgr/common/course/academicHistory*
// @match        https://ucdavistestsv.destinysolutions.com/srs/jsp/enrolmgr/common/course/academicHistory*
// @match        https://ucdavistestsv.destinysolutions.com/srs/enrolmgr/common/course/studentEnrolledCourses*
// @match        https://ucdavistestsv.destinysolutions.com/srs/jsp/enrolmgr/common/course/studentEnrolledCourses*
// @grant        none
// ==/UserScript==

var courseSections = document.querySelectorAll("td.courseHistoryNameCol a");
var csnButton = document.querySelector(".expandCollapseCol");
var originalText = [];
var newText = [];

var showingCSN = false;

function getOriginal() {
	for (var i = 0; i < courseSections.length; i++) {
		originalText[i] = courseSections[i].textContent;
        newText[i] = courseSections[i].textContent.slice(-19, -10);
	}
}

function updateDisplay() {
	for (var i = 0; i < courseSections.length; i++) {
		if (showingCSN) {
			courseSections[i].textContent = originalText[i];
		} else {
			courseSections[i].textContent = newText[i];
		}
	}
	showingCSN = !showingCSN;
}




// main script
getOriginal();
console.log("Original values stored");
csnButton.innerHTML = "<span \" style=\"cursor:pointer;\" id=\"ShowCSN\">Show CSN</span>";
var myButton = document.querySelector("#ShowCSN");
myButton.addEventListener ("click", updateDisplay, false);
