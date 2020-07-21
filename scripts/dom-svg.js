window.onload = function () {
  let svg_root = document.getElementById("imageRender");
  let svg_source = svg_root.outerHTML;
  let svg_data_uri = "data:image/svg+xml;base64," + btoa(svg_source);
  let link = document.getElementById("download");
  link.setAttribute("href", svg_data_uri);
};
