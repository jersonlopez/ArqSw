var WSUri = "WS://" + document.location.host + document.location.pathname + "mitablero";

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