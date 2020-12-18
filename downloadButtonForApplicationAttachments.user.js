// ==UserScript==
// @name         [D1] Download Button for Application Attachments
// @namespace    https://github.com/venmey/Destiny-One-TamperMonkey-Scripts
// @version      2.0
// @description  Adds a download button next to each attached file in a student's application for faster saving of application attachments.
// @author       Ven Meyerzon
// @match        https://ucdavistestsv.destinysolutions.com/srs/enrolmgr/student/applications/*
// @match        https://ucdavissv.destinysolutions.com/srs/enrolmgr/student/applications/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // function that will attempt to download all URLs in an array
    function downloadAll(urls) {
        for (url of urls) {
            let a = document.createElement("a");
            a.setAttribute("href", url[0]);
            a.setAttribute("download", url[1]);
            a.setAttribute("target", "_blank");
            a.click();
        }
    }

    // Initiate empty list that will store all the download links
    let urlArray = [];

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

        // Add url and file name to urlArray
        urlArray.push([url, fileName]);
        
        // Create a new node that is a hyperlink to the file with a download button image
        let downloadButton = document.createElement("a");
        downloadButton.setAttribute("href", url);
        downloadButton.setAttribute("download", fileName);
        let tooltip = "Download " + fileName;
        downloadButton.innerHTML = '<img style="width: 20px; margin-bottom: -5px; margin-left: 10px;" src="https://github.com/venmey/Destiny-One-TamperMonkey-Scripts/raw/main/images/downloadIcon.png" alt="' + tooltip + '" title="' + tooltip + '">';

        // Add the new node to the DOM
        attachment.after(downloadButton);
    });

    // Create downloadAll button to download all attachments at once
    let downloadAllButton = document.createElement("button");
    downloadAllButton.setAttribute("type", "button");
    downloadAllButton.setAttribute("class", "yui3-button button-intraForm");
    downloadAllButton.setAttribute("id", "downloadAllButton");
    downloadAllButton.setAttribute("name", "downloadAllButton");
    downloadAllButton.setAttribute("value", "Download All");
    downloadAllButton.setAttribute("title", "Download All Attachments");
    downloadAllButton.innerText = "Download All";
    downloadAllButton.onclick = function() { downloadAll(urlArray); };

    // Place downloadAll button below the "Attached Files" text
    document.querySelector("#uploadFile").parentElement.previousElementSibling.appendChild(downloadAllButton);
})();
