drawEmblem = () => {
    document.write(`
        <div id='emblemBox'>
            <div class='emblem' id='emblem1'></div>
            <div class='emblem' id='emblem2'></div>
            <div class='emblem' id='emblem3'></div>
        </div>
    `);
}

drawHead = () => {
    document.write(`<div id='title'>`);
        drawEmblem();
        document.write(`
            <h1 id='HeadText'>Red<sup>3</sup></h1>
        `);
    document.write(`</div>`);
}

drawHead();