import gList from './Contents/Contents.js';
var index = 0;
var galleryPage = document.getElementById('iGallery');

function resizeIframe(obj) {
    console.log(obj.contentWindow.document.documentElement.scrollHeight);
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}

function setPage(n) {
    let url = `./Contents/${gList[n]}/index.html`;
    galleryPage.src = url;
    resizeIframe(galleryPage);
}

setPage(index);