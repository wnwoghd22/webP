import gList from './../../Gallery/Contents/Contents.js';
import { setPage } from './../../Gallery/Gallery.js';

var index = 0;

var leftButton = document.getElementById('leftButton');
var rightButton = document.getElementById('rightButton');

function setIcon (n) {
    if(n === 0) { leftButton.innerHTML = '|&lt;'; }
    else { leftButton.innerHTML = '&lt;'; }

    if(n === gList.length - 1) { rightButton.innerHTML = '&gt;|'; }
    else { rightButton.innerHTML = '&gt;'; }
}

function setIndex (n) {
    if(index + n < 0) { index = 0; }
    else if(index + n > gList.length - 1) { index = gList.length - 1; }
    else index += n;
    setIcon(index);
}

leftButton.onclick = () => {
    setIndex(-1);
    setPage(index);
}

rightButton.onclick = () => {
    setIndex(1);
    setPage(index);
}

setIcon(index);