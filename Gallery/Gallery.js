import gList from './Contents/Contents.js';

var index = 0;
var galleryPage = document.getElementById('iGallery');

galleryPage.onload = () => resizeIframe(galleryPage);

function resizeIframe(obj) {
    let height = obj.contentDocument.body.scrollHeight;
    obj.style.height = parseInt(height, 10) + 20 + 'px';
}

function setPage(n) {
    let url = `./Contents/${gList[n]}/index.html`;
    galleryPage.src = url;
}

let hrefData = location.href.split('?');
if(hrefData.length > 1) {
    index = hrefData[1].split('=')[1];
}

setPage(index);

export { setPage }