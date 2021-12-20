import {Court} from './Court.js';
window.addEventListener('load', (event) => {
    const image = document.querySelector('img');
    const body = document.querySelector('body');
    var imageMargin = Math.round(0.125 * body.clientWidth);
    var court = new Court({x:imageMargin,y:0},{x:imageMargin+image.width,y:image.height});



    const shootChart = document.getElementById('shoot-chart');
    
    function showClickCoord(event){
        console.log(`x:${event.x}, y:${event.y}`);
    }
    shootChart.addEventListener('click',showClickCoord);
});