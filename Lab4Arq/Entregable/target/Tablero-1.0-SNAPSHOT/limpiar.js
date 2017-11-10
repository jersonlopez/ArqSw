let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');


window.onload = function () {

  // do some drawing
  context.clear();

  // do some more drawing
  context.setTransform(-1, 0, 0, 1, canvas.width, canvas.height);
  // do some drawing with the new transform
  context.clear(true);
  // draw more, still using the preserved transform
};

function save () {
    /*let image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
    window.location.href=image; // it will save locally
    let dataURL = canvas.toDataURL();
    console.log(dataURL);*/
    var img = document.getElementById("img");
                context.drawImage(img, 0, 0);
};
