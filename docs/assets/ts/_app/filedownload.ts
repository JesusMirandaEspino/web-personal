const btnCv: HTMLElement | null = document.getElementById('btncv');
const dataUrl: string = 'assets/documents/Jose de Jesus Miranda Espino.pdf';
const filename: string = 'Jose de Jesus Miranda Espino';

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

btnCv.addEventListener( 'click', () => {
    downloadDataUrlFromJavascript();
} );