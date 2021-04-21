//import {startClick, getMinutes, getSeconds,twoDigitsNumber, stopClick, resetClick, splitClick} from"./chronometer";
import { Chronometer } from "./chronometer.js";

const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime(evt) {
  btnLeft(evt) = chronometer.getMinutes; 
  
  
 
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.className === "btn start") {
    btnRight.textContent = "SPLIT";
    btnLeft.textContent = "STOP";
    btnRight.className = "btn split";
    btnLeft.className = "btn stop";
    chronometer.startClick();
  } else {
    btnRight.textContent = "RESET";
    btnRight.className = "btn reset";
    btnLeft.textContent = "START";
    btnLeft.className = "btn start";
    chronometer.splitClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.className === "btn reset"){
    btnRight.textContent = "SPLIT";
    btnLeft.textContent = "STOP";
    btnRight.className = "btn split";
    btnLeft.className = "btn stop";
    chronometer.startClick();
  }else {
    btnRight.textContent = "RESET";
    btnRight.className = "btn reset";
    btnLeft.textContent = "START";
    btnLeft.className = "btn start";
    chronometer.splitClick();
  }
});
