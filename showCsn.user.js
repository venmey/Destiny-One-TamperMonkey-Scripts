// ==UserScript==
// @name         [D1] Show CSN in Enrolled and Historical Courses (Deprecated)
// @version      3.1
// @description  Creates a checkbox to toggle visibility of the custom section number/course and section codes on the Enrolled and Historical pages in Enrollment Manager unless The 'Custom Section No.' config is enabled.
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

// Only run the script if Custom Section No. column is not enabled in config editor.
if (!document.querySelector(".courseCustomSectionNumCol")) {
    console.log("No 'Custom Section No.' column has been detected. Script '[D1] Show CSN in Enrolled and Historical Courses' will run.")

    // Function to update what is displayed in the Course Section column
    function updateDisplay() {
         for (let i = 0; i < courseSections.length; i++) {
            if (csnCheckbox.checked) {
                courseSections[i].textContent = csnText[i];
                csnColumn.querySelector("a").innerText = "Custom Section Number";
            } else {
                courseSections[i].textContent = courseSectionText[i];
                csnColumn.querySelector("a").innerText = "Course Section";
            }
        }

        // Update localStorage checkbox value
        localStorage.setItem("csnCheckboxState", csnCheckbox.checked);
    } // end updateDisplay()

    // Select course history table
    let courseHistoryTable = document.querySelector("#courseHistoryTable");

    // Create csn checkbox, set attributes and style
    let csnCheckbox = document.createElement("input");
    csnCheckbox.setAttribute("type", "checkbox");
    csnCheckbox.setAttribute("id", "csnCheckbox");
    csnCheckbox.setAttribute("name", "csnCheckbox");
    csnCheckbox.style.marginTop = "10px";

    // Set checkbox value on pageload to value in localStorage or to false if no localStorage found
    csnCheckbox.checked = JSON.parse(localStorage.getItem('csnCheckboxState')) || false;

    // Create csn checkbox label
    let csnCheckboxLabel = document.createElement("label");
    csnCheckboxLabel.setAttribute("for", "csnCheckbox");
    csnCheckboxLabel.innerText = "Show Custom Section Number instead of Course and Section Codes";

    // Insert checkbox and label into DOM before the courseHistoryTable <table>
    courseHistoryTable.before(csnCheckbox);
    courseHistoryTable.before(csnCheckboxLabel);

    // Get course/section codes and csn values for each row and store them
    let csnColumn = document.querySelector(".courseHistoryNameCol");
    let courseSections = document.querySelectorAll("td.courseHistoryNameCol a");
    let courseSectionText = [];
    let csnText = [];

    for (let i = 0; i < courseSections.length; i++) {
    	courseSectionText[i] = courseSections[i].textContent; // Returns the course and section code and the CSN in parans

        let stringOffset = 16; // Length of the string 'Custom Section # ' that appears prior to the CSN that you need to offset the csnIndex by
        let csnIndex = courseSectionText[i].indexOf("Custom Section# ") + stringOffset; // Index of the start of the CSN
        let closeParanIndex = courseSections[i].textContent.indexOf(")"); // Index of the closing paran and therefore the end of the CSN

        csnText[i] = courseSections[i].textContent.slice(csnIndex, closeParanIndex); // Grab the string from the start of the CSN to the end of the CSN
    }

    // Update display based on checkbox initial value
    updateDisplay();

    // Add event listener to update display each time checkbox value changes
    csnCheckbox.addEventListener ("change", updateDisplay);
} else {
    console.log("Detected 'Custom Section No.' column. Script '[D1] Show CSN in Enrolled and Historical Courses' has been skipped.")
}
