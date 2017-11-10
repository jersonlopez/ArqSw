/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var WSUri = "WS://" + document.location.host + document.location.pathname + "myboard";

var Websocket = new WebSocket(WSUri);

Websocket.onmessage = function(evt){onMessage(evt)};

function sendText(json){
    console.log("sending text: " + json);
    Websocket.send(json);
}

function onMessage(evt){
    console.log("recived: " + evt.data);
    drawImageText(evt.data);
}

