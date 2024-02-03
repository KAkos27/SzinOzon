let spanIndex = 4;

function szinez(gomb) {
  let gombStilus = getComputedStyle(gomb);
  let gombSzin = gombStilus.backgroundColor;
  document.getElementsByTagName("SPAN")[spanIndex].style.backgroundColor =
    gombSzin;
  spanIndex++;
}

function ujJatek() {
  spanIndex = 4;
  let gepTipp = new Array();
  for (let i = 0; gepTipp.length != 4; i++) {
    let velSzin = Math.floor(Math.random() * 6 + 1);
    if (!gepTipp.includes(velSzin)) {
      gepTipp.push(velSzin);
    }
  }

  for (let i = 0; i < gepTipp.length; i++) {
    let gepStilus = document.getElementsByTagName("BUTTON");
    let gepSzin = getComputedStyle(gepStilus[gepTipp[i]]).backgroundColor;
    document.getElementsByTagName("SPAN")[i].style.backgroundColor = gepSzin;
  }

  for (let i = 4; i < 41; i++) {
    let feherStilus = document.getElementsByTagName("BODY");
    let feherSzin = getComputedStyle(feherStilus[0]).backgroundColor;
    document.getElementsByTagName("SPAN")[i].style.backgroundColor = feherSzin;
  }
}
