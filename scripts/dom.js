window.onload = function () {
  html2canvas(document.querySelector("#mockupContainer")).then((canvas) => {
    document.body.appendChild(canvas);
  });
};
