var btnCvEs = document.getElementById('btncv');
var dataUrl = 'assets/documents/Jose de Jesus Miranda Espino.pdf';
var filename = 'Jose de Jesus Miranda Espino';
function downloadDataUrlFromJavascript() {
    // Construct the 'a' element
    var link = document.createElement("a");
    link.download = filename;
    link.target = "_blank";
    // Construct the URI
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    // Cleanup the DOM
    document.body.removeChild(link);
    // Cleanupdelete link;
}
btnCvEs === null || btnCvEs === void 0 ? void 0 : btnCvEs.addEventListener('click', function () {
    console.log('hola');
    downloadDataUrlFromJavascript();
});
