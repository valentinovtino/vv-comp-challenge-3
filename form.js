function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("Copy");
}

document.querySelector("#copy").addEventListener("click", copy);