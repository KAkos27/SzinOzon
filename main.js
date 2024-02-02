let spanIndex = 4;

function szinez(gomb) {
  let gombStilus = getComputedStyle(gomb);
  let gombSzin = gombStilus.backgroundColor;
  document.getElementsByTagName("SPAN")[spanIndex].style.backgroundColor =
    gombSzin;
  spanIndex++;
}

function feltolt() {
  let gepTipp = new Array();
  for (let i = 0; i < 4; i++) {
    let velSzin = Math.floor(Math.random() * 6 + 1);
    gepTipp[i] = velSzin;
  }
  for (let i = 0; i < gepTipp.length; i++) {
    let gepStilus = document.getElementsByTagName("BUTTON");
    let gepSzin = window.getComputedStyle(
      gepStilus[gepTipp[i]]
    ).backgroundColor;
    document.getElementsByTagName("SPAN")[i].style.backgroundColor = gepSzin;
  }
}
