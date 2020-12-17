// ==UserScript==
// @name         [D1] Download Button for Application Attachments
// @namespace    https://github.com/venmey/Destiny-One-TamperMonkey-Scripts
// @version      1.0
// @description  Adds a download button next to each attached file in a student's application for faster saving of application attachments.
// @author       Ven Meyerzon
// @match        https://ucdavistestsv.destinysolutions.com/srs/*
// @match        https://ucdavissv.destinysolutions.com/srs/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Select all the hyperlinks within the #uploadFile table
    let attachments = document.querySelectorAll("#uploadFile tr a");

    // Loop through the nodelist of hyperlinks
    attachments.forEach(function(attachment) {
        // Regex to match url of file
        let urlRegex = /centeredPopup\('(.*)'/; 

        // Get onclick attribute of hyperlink since it contains the url to the file
        let onClickContents = attachment.getAttribute("onclick");

        // Use the regex to pull out the URL to the file
        let url = onClickContents.match(urlRegex)[1];

        // Get the file name
        let fileName = attachment.innerText;
        
        // Create a new node that is a hyperlink to the file with a download button image
        let downloadButton = document.createElement("a");
        downloadButton.setAttribute("href", url);
        downloadButton.setAttribute("download", fileName);
        let tooltip = "Download " + fileName;
        downloadButton.innerHTML = '<img style="width: 20px; margin-bottom: -5px; margin-left: 10px;" src="https://github.com/venmey/Destiny-One-TamperMonkey-Scripts/raw/main/images/downloadIcon.png" alt="' + tooltip + '" title="' + tooltip + '">';

        // Add the new node to the DOM
        attachment.after(downloadButton);
    });

    
})();