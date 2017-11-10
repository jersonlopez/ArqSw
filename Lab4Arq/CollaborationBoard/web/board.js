/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
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

//obtencion de coordenadas a pintar
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
        "size":6,
        "coords": {
            "x": currentPos.x,
            "y": currentPos.y
        }
    });
    drawImageText(json); 
    sendText(json);
    
}


//pintar lineas
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

//guardar canvan
function saveC(evt) {
    let MIME_TYPE = "image/jpeg";

    let imgURL = canvas.toDataURL(MIME_TYPE);
    let dlLink = document.createElement('a');
    
    dlLink.download = 'canvas';
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
}

//limpiar canvan
function clearC(evt) {
    
  context.clear();
  context.setTransform(-1, 0, 0, 1, canvas.width, canvas.height);
  context.clear(true);
}

