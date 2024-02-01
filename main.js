let i = 0;

function szinez(gomb) { 
  var gombStilus = getComputedStyle(gomb);
  var gombSzin = gombStilus.backgroundColor;
  document.getElementsByTagName("SPAN")[i].style.backgroundColor = gombSzin;
  i++;
}
