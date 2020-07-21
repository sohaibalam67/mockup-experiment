window.onload = function () {
  let canvasScale = 1;
  let canvas = document.getElementById("canvasView");
  canvas.width = 1024 * canvasScale;
  canvas.height = 768 * canvasScale;
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "#00d2d3";
  ctx.fillRect(0, 0, canvas.width * canvasScale, canvas.height * canvasScale);

  let screenWidth = 240 * canvasScale;
  let screenHeight = 521 * canvasScale;

  let screenshot = new Image();
  screenshot.onload = function () {
    let img = this;
    let scale = Math.max(screenWidth / img.width, screenHeight / img.height);
    ctx.drawImage(
      img,
      30 * canvasScale,
      38 * canvasScale,
      img.width * scale,
      img.height * scale
    );
  };
  screenshot.src = "../image/sample.png";

  let frame = new Image();
  frame.onload = function () {
    ctx.drawImage(frame, 0, 0, 300 * canvasScale, 597 * canvasScale);
  };
  frame.src = "../image/frame.png";
};
