const szinHozzaRendeles = (kapottSzin) => {
  if (kapottSzin == "piros") {
    jatekosTipp.push(1);
  } else if (kapottSzin == "kek") {
    jatekosTipp.push(2);
  } else if (kapottSzin == "zold") {
    jatekosTipp.push(3);
  } else if (kapottSzin == "sarga") {
    jatekosTipp.push(4);
  } else if (kapottSzin == "narancs") {
    jatekosTipp.push(5);
  } else if (kapottSzin == "lila") {
    jatekosTipp.push(6);
  }
};

const osszeHasonlit = () => {
  for (let i = 0; i < 4; i++) {
    if (jatekosTipp[i] == gepTipp[i]) {
      document
        .querySelectorAll(".sdiv")
        [divIndex].querySelectorAll("div")
        [i].classList.add("fekete");
    } else if (gepTipp.includes(jatekosTipp[i])) {
      document
        .querySelectorAll(".sdiv")
        [divIndex].querySelectorAll("div")
        [i].classList.add("szurke");
    }
  }
};

let spanIndex = 4;
let limit = 0;
let divIndex = 0;
let jatekosTipp = [];
let gepTipp = [];

const szinez = (classNev) => {
  document.querySelectorAll("span")[spanIndex].classList.add(classNev);
  const szin = document.querySelectorAll("span")[spanIndex].className;
  limit++;
  if (limit == 4) {
    szinHozzaRendeles(szin);
    osszeHasonlit();
    limit = 0;
    jatekosTipp.length = 0;
    divIndex++;
  } else {
    szinHozzaRendeles(szin);
  }
  spanIndex++;
};

const ujJatek = () => {
  spanIndex = 4;
  gepTipp.length = 0;
  jatekosTipp.length = 0;
  for (let i = 0; gepTipp.length != 4; i++) {
    const velSzin = Math.floor(Math.random() * 6 + 1);
    if (!gepTipp.includes(velSzin)) {
      gepTipp.push(velSzin);
    }
  }
  for (let i = 0; i < gepTipp.length; i++) {
    const szinClass = document.querySelectorAll("button")[gepTipp[i]].className;
    document.querySelectorAll("span")[i].className = "";
    document.querySelectorAll("span")[i].classList.add(szinClass);
    document.querySelectorAll("span")[i].classList.add("lathatatlan");
  }

  document
    .querySelector("#tarolo")
    .querySelectorAll("span")
    .forEach((aktSpan) => {
      aktSpan.className = "";
    });

  for (let i = 0; i <= divIndex; i++) {
    document
      .querySelectorAll(".sdiv")
      [i].querySelectorAll("div")
      .forEach((aktDiv) => {
        aktDiv.className = "";
      });
  }

  divIndex = 0;
};
