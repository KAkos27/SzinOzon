let spanIndex = 4;

const szinez = (classNev) => {
  document.querySelectorAll("span")[spanIndex].classList.add(classNev);
  spanIndex++;
};

const ujJatek = () => {
  spanIndex = 4;
  let gepTipp = [];
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
    //document.querySelectorAll("span")[i].classList.add("asd");
  }

  document
    .querySelector("#tarolo")
    .querySelectorAll("span")
    .forEach((aktSpan) => {
      aktSpan.className = "";
    });
  console.log(gepTipp);
};
