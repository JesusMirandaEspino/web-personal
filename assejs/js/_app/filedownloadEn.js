var btnCvEn = document.getElementById('btncvEn');
var dataUrlEn = 'assets/documents/Jose de Jesus Miranda Espino..pdf';
var filenameEn = 'Jose de Jesus Miranda Espino';
function downloadDataUrlFromJavascriptEn() {
    // Construct the 'a' element
    var linkEn = document.createElement("a");
    linkEn.download = filenameEn;
    linkEn.target = "_blank";
    // Construct the URI
    linkEn.href = dataUrlEn;
    document.body.appendChild(linkEn);
    linkEn.click();
    // Cleanup the DOM
    document.body.removeChild(linkEn);
    // Cleanupdelete link;
}
btnCvEn === null || btnCvEn === void 0 ? void 0 : btnCvEn.addEventListener('click', function () {
    downloadDataUrlFromJavascriptEn();
});
