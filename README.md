# Destiny One TamperMonkey Scripts
This GitHub repository contains a series of TamperMonkey scripts written to modify the Destiny One user interface. Before you can use the scripts, visit the [TamperMonkey homepage](https://www.tampermonkey.net/) and install the extension for your favorite browser. Then use the links below to add a specific script to your browser. Full instructions are available in the [Destiny One TamperMonkey Userscripts guide](https://ucdavis.app.box.com/file/745737709189).

If you encounter issues with any of the scripts or have a suggestion for a future script, please reach out to Ven or submit a help desk ticket.

## [Download Button for Application Attachments](https://github.com/venmey/Destiny-One-TamperMonkey-Scripts/raw/main/downloadButtonForApplicationAttachments.user.js)
Adds a Download All button to download all attachments and a download button next to each attached file in a student's application for faster saving of application attachments.

*Note: For best results, some browser configuration changes are necessary.*
* Chrome
  * [REQUIRED] When prompted, be sure to allow the browser to download multiple files. This will occur after clicking the Download All button for the first time.
  * Disable the *Ask where to save each file before downloading* setting and specify the desired *Location* of downloads. These settings can be found in **Settings > Advanced > Downloads**.
* Firefox
  * [REQUIRED] Set the default action for Portable Document Format (PDF) files to *Save File* in **Options > General > Files and Applications > Applications**. If *Open in Firefox* is selected, the Download All button will simply open the first PDF attachment in the current window instead of downloading all the files.
  * Specify a location to *Save files to* instead of using the *Always ask you where to save files* setting in **Options > General > Files and Applications > Downloads**.
* Other browsers have not been tested.

## [Floating Save Button](https://github.com/venmey/Destiny-One-TamperMonkey-Scripts/raw/main/floatingButtons.user.js)
Creates a floating save button at the bottom of the screen whenever the actual save button on a particular page is not visible. This makes it easier to save your changes at any time without needing to scroll to the bottom of a page or remember the correct keyboard shortcut.

## [Make Destiny One Test Blue](https://github.com/venmey/Destiny-One-TamperMonkey-Scripts/raw/main/makeDestinyTestBlue.user.js)
Changes the style of various elements of the Destiny One TEST environment help distinguish it from PROD. The main change is a shift to a blue color scheme.

## [Set Favicons](https://github.com/venmey/Destiny-One-TamperMonkey-Scripts/raw/main/favIcons.user.js)
Adds a favicon (little icon in the top left-corner of the tab) when you visit either the Destiny One TEST or PROD staff view. This is useful for distiniguishing between PROD and TEST tabs of Destiny One.

## [Show CSN in Enrolled and Historical Courses](https://github.com/venmey/Destiny-One-TamperMonkey-Scripts/raw/main/showCsn.user.js)
Adds a checkbox on the **Enrollment Manager > Courses > Historical** and **Enrollment Manager > Courses > Enrolled** pages when a student is in context that allows you to toggle between displaying the Course and Section Code (default Destiny One behavior) or the Custom Section Number. Your checkbox selection will be maintained between both pages and between PROD and TEST.