drawEmblem = () => {
    document.write(`
        <div id='emblemBox'>
            <div class='emblem' id='emblem1'></div>
            <div class='emblem' id='emblem2'></div>
            <div class='emblem' id='emblem3'></div>
        </div>
    `);
}

drawMenu = () => {
    document.write(`
        <div id='menuLine'>
            <span><a href='./Gallery/index.html'>갤러리</a></span>
            <span>
                <a>작가 소개</a>
            </span>
            <span>메뉴 1</span>
        </div>
        <hr></hr>
    `);
}
drawMenu_Absolute = () => {
    document.write(`
        <div id='menuLine'>
            <span><a href='/wnwoghd22.github.io/webP/Gallery/index.html'>갤러리</a></span>
            <span><a href='/wnwoghd22.github.io/webP/Introduce/index.html'>작가 소개</a></span>
            <span><a href='/wnwoghd22.github.io/webP/index.html'>홈</a></span>
        </div>
        <hr></hr>
    `);
}

drawHead = () => {
    document.write(`<div id='title'>`);
        drawEmblem();
        document.write(`
            <h1 id='HeadText'>Red<sup>3</sup></h1>
        `);
    document.write(`</div>`);
    //drawMenu();
    drawMenu_Absolute();
}

drawHead();