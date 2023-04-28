document.getElementById("htmlCode").value = "<div>\n\n</div>";
document.getElementById("cssCode").value = "<style>\n\n</style>";
document.getElementById("jsCode").value = "<script>\n\n</script>";

window.addEventListener("load", () => {
  if (window.localStorage.getItem("htmlCode")) {
    document.getElementById("htmlCode").value = JSON.parse(
      window.localStorage.getItem("htmlCode")
    );
  }
  if (window.localStorage.getItem("cssCode")) {
    document.getElementById("cssCode").value = JSON.parse(
      window.localStorage.getItem("cssCode")
    );
  }
  if (window.localStorage.getItem("jsCode")) {
    document.getElementById("jsCode").value = JSON.parse(
      window.localStorage.getItem("jsCode")
    );
  }
  showPreview();
});

function showPreview() {
  var htmlCode = document.getElementById("htmlCode").value;
  window.localStorage.setItem("htmlCode", JSON.stringify(htmlCode));
  var cssCode = "" + document.getElementById("cssCode").value + "";
  window.localStorage.setItem("cssCode", JSON.stringify(cssCode));
  var jsCode = "" + document.getElementById("jsCode").value + "";
  window.localStorage.setItem("jsCode", JSON.stringify(jsCode));
  var frame = document.getElementById("preview-window").contentWindow.document;
  frame.open();
  frame.write(htmlCode + cssCode + jsCode);
  frame.close();
}

function show(x) {
  document.getElementById("html").style.display = "none";
  document.getElementById("css").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById(x).style.display = "block";
}

function show_all() {
  if (window.innerWidth >= 992) {
    document.getElementById("html").style.display = "block";
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = "block";
    document.getElementById("result").style.display = "block";
  }
  if (
    window.innerWidth < 992 &&
    document.getElementById("html").style.display == "block"
  ) {
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
  }
}
