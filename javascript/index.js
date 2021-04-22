import { Chronometer } from "./chronometer.js";

const chronometer = new Chronometer();

console.log(chronometer);

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  printMinutes(), printSeconds();
}

function printMinutes() {
  minUni.textContent = chronometer
    .twoDigitsNumber(chronometer.getMinutes())
    .charAt(1);
  minDec.textContent = chronometer
    .twoDigitsNumber(chronometer.getMinutes())
    .charAt(0);
}

function printSeconds() {
  secUni.textContent = chronometer
    .twoDigitsNumber(chronometer.getSeconds())
    .charAt(1);
  secDec.textContent = chronometer
    .twoDigitsNumber(chronometer.getSeconds())
    .charAt(0);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  splits.innerHTML += `<li>${minDec.textContent}${minUni.textContent}:${secDec.textContent}${secUni.textContent}</li>`;
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.textContent = "STOP";
  btnLeft.className = "btn stop";
}

function setSplitBtn() {
  btnRight.textContent = "SPLIT";
  btnRight.className = "btn split";
}

function setStartBtn() {
  btnLeft.textContent = "START";
  btnLeft.className = "btn start";
}

function setResetBtn() {
  (minDec.textContent = "0"),
    (minUni.textContent = "0"),
    (secDec.textContent = "0"),
    (secUni.textContent = "0");
  splits.innerHTML += `<li>${minDec.textContent}${minUni.textContent}:${secDec.textContent}${secUni.textContent}</li>`;
  chronometer.resetClick(); // bug = print Reset
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.className === "btn start") {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);
  } else {
    setStartBtn();
    btnRight.textContent = "RESET";
    btnRight.className = "btn reset";

    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.className === "btn split") {
    printSplit();
  } else {
    setResetBtn();
    clearSplits();
  }
});

//   if (btnRight.className === "btn reset"){
//     btnRight.textContent = "SPLIT";
//     btnLeft.textContent = "STOP";
//     btnRight.className = "btn split";
//     btnLeft.className = "btn stop";
//     chronometer.startClick();
//   }else {
//     btnRight.textContent = "RESET";
//     btnRight.className = "btn reset";
//     btnLeft.textContent = "START";
//     btnLeft.className = "btn start";
//     chronometer.splitClick();
//   }
// });
