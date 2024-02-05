const szinEldontes = (kapottSzin) => {
  if (kapottSzin == "piros") {
    jatekosTipp.push(1);
  }
  if (kapottSzin == "kek") {
    jatekosTipp.push(2);
  }
  if (kapottSzin == "zold") {
    jatekosTipp.push(3);
  }
  if (kapottSzin == "sarga") {
    jatekosTipp.push(4);
  }
  if (kapottSzin == "narancs") {
    jatekosTipp.push(5);
  }
  if (kapottSzin == "lila") {
    jatekosTipp.push(6);
  }
};

const osszeHasonlit = (tippSzin) => {
  const gepTippSzin = document
    .querySelector("#geptipptarolo")
    .querySelectorAll("span")[limit].className;
  console.log(gepTippSzin);
  console.log(tippSzin)
  if (tippSzin == gepTippSzin) {
    alert("y");
  } else {
    alert("n");
  }
};

let spanIndex = 4;
let limit = 0;
let jatekosTipp = [];

const szinez = (classNev) => {
  document.querySelectorAll("span")[spanIndex].classList.add(classNev);
  const szin = document.querySelectorAll("span")[spanIndex].className;
  if (limit != 4) {
    szinEldontes(szin);
    osszeHasonlit(szin);
  } else {
    jatekosTipp.length = 0;
    limit = 0;
    szinEldontes(szin);
    osszeHasonlit(szin);
  }
  limit++;
  spanIndex++;
  console.log(jatekosTipp);
};

const ujJatek = () => {
  spanIndex = 4;
  let gepSzin = [];
  for (let i = 0; gepSzin.length != 4; i++) {
    const velSzin = Math.floor(Math.random() * 6 + 1);
    if (!gepSzin.includes(velSzin)) {
      gepSzin.push(velSzin);
    }
  }
  for (let i = 0; i < gepSzin.length; i++) {
    const szinClass = document.querySelectorAll("button")[gepSzin[i]].className;
    document.querySelectorAll("span")[i].className = "";
    document.querySelectorAll("span")[i].classList.add(szinClass);
    //document.querySelectorAll("span")[i].classList.add("lathatatlan");
  }

  document
    .querySelector("#tarolo")
    .querySelectorAll("span")
    .forEach((aktSpan) => {
      aktSpan.className = "";
    });
  jatekosTipp.length = 0;
  console.log(gepSzin);
};
