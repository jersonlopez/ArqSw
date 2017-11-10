/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
let clear = document.getElementById("clear");
let save = document.getElementById("save");

canvas.addEventListener("mousedown", init, false);
canvas.addEventListener("mouseup", finish, false);
clear.addEventListener("click", clearC, false);
save.addEventListener("click", saveC, false);

function getCurrentPos(evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

//Cuando presionen el botón del mouse
function init(evt) {
    //se lanza este metodo
   canvas.addEventListener("mousemove", defineImage, true);
}

//Cuando suelten el botón del mouse
function finish(evt) {
    canvas.removeEventListener("mousemove", defineImage, true);
}

//pintar en el canvan
function defineImage(evt) {
    let currentPos = getCurrentPos(evt);

    for (i = 0; i < document.inputForm.color.length; i++) {
        if (document.inputForm.color[i].checked) {
            var color = document.inputForm.color[i];
            break;
        }
    }


    let json = JSON.stringify({
        "color": color.value,
        "size":3,
        "coords": {
            "x": currentPos.x,
            "y": currentPos.y
        }
    });
    drawImageText(json); 
    sendText(json);
    
}

function drawImageText(image) {
  console.log("drawImageText");
    var json = JSON.parse(image);
    context.beginPath(); // begin
    context.strokeStyle = json.color;
    context.lineWidth = json.size;
    context.lineCap = 'round';
    context.moveTo(json.coords.x,json.coords.y); 
    context.lineTo(json.coords.x,json.coords.y); 
    context.stroke(); 
    
}

function saveC(evt) {
    let MIME_TYPE = "image/png";

    let imgURL = canvas.toDataURL(MIME_TYPE);
    let dlLink = document.createElement('a');
    
    dlLink.download = 'canvas';
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
}

function clearC(evt) {
    var json = JSON.stringify({
        "color": '#FFFFFF',
        "size" : 5000, 
        "coords": {
            "x": 20,
            "y": 20
        }
    });
    drawImageText(json);
    sendText(json);
}
