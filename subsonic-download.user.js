// ==UserScript==
// @name        Subsonic 4.9+ download links
// @namespace   http://github.com/LukeCarrier/subsonic-download
// @description Displays download links for media items on Subsonic 4.9+ installations
// @include     
// @version     1
// @grant       none
// ==/UserScript==

var tbody;
$("table").each(function() {
    tbody = $(this).find("tbody");
});

tbody.find("tr").each(function() {
    var starImg  = $(this).find("img[id^=starImage]");
    var downCell = $(this).find("td:nth-of-type(3)");

    var downLink = $("<a>");
    downLink.attr("href", "/download.view?id=" + starImg.attr("id").match(/[0-9]*$/)[0]);
    downLink.html("Download");
    
    downCell.append(downLink);
});
