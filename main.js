let spanIndex = 4;

function szinez(gomb) {
  var gombStilus = getComputedStyle(gomb);
  var gombSzin = gombStilus.backgroundColor;
  document.getElementsByTagName("SPAN")[spanIndex].style.backgroundColor =
    gombSzin;
  spanIndex++;
}

function feltolt() {
  let gepTipp = new Array();
  for (let i = 0; i < 4; i++) {
    var velSzin = Math.floor(Math.random() * 6 + 1);
    gepTipp[i] = velSzin;
  }
  for (let i = 0; i < gepTipp.length; i++) {
    gepTipp[i];
  }
}
