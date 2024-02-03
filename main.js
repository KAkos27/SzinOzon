let spanIndex = 4;

const szinez = (classNev) => {
  document.querySelectorAll("span")[spanIndex].classList.add(classNev);
  spanIndex++;
};

const ujJatek = () => {
  spanIndex = 4;
  let gepTipp = [];
  for (let i = 0; gepTipp.length != 4; i++) {
    let velSzin = Math.floor(Math.random() * 6 + 1);
    if (!gepTipp.includes(velSzin)) {
      gepTipp.push(velSzin);
    }
  }

  for (let i = 0; i < gepTipp.length; i++) {
    document.querySelectorAll("span")[i].className = "";
    const szinClass = document.querySelectorAll("button")[gepTipp[i]].className;
    document.querySelectorAll("span")[i].classList.add(szinClass);
  }

  document
    .querySelector(".tarolo")
    .querySelectorAll("span")
    .forEach((aktSpan) => {
      aktSpan.className = "";
    });
  console.log(gepTipp);
};

// function szinez(gomb) {
//   let gombStilus = getComputedStyle(gomb);
//   let gombSzin = gombStilus.backgroundColor;
//   document.getElementsByTagName("SPAN")[spanIndex].style.backgroundColor =
//     gombSzin;
//   spanIndex++;
// }

// function ujJatek() {
//   spanIndex = 4;
//   let gepTipp = new Array();
//   for (let i = 0; gepTipp.length != 4; i++) {
//     let velSzin = Math.floor(Math.random() * 6 + 1);
//     if (!gepTipp.includes(velSzin)) {
//       gepTipp.push(velSzin);
//     }
//   }

//for (let i = 4; i < 41; i++) {
//document.querySelectorAll('span')[i].className = "";
// let feherStilus = document.getElementsByTagName("BODY");
// let feherSzin = getComputedStyle(feherStilus[0]).backgroundColor;
//document.getElementsByTagName("SPAN")[i].style.backgroundColor = feherSzin;
//}
