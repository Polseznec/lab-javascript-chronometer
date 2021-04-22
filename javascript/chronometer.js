export class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) callback();
    }, 1000);
  }

  getMinutes() {
    //console.log(Number.isInteger(this.currentTime / 60))
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60; //new
  }
  twoDigitsNumber(number) {
    if (number < 10) {
      //new
      number = "0" + number; //new
    }
    return String(number);
  }
  stopClick() {
    clearInterval(this.intervalId); //new
  }
  resetClick() {
    this.currentTime = 0; //new
  }
  splitClick(min, sec) {
    min = this.getMinutes();
    sec = this.getSeconds();
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`;
  }
}

// if (min < 10 && sec < 10) {
//   return `${0}${min}:${0}${sec}`;
// }
// else if (min < 10 && sec > 10)
// {
//   return `0${min}:${sec}`;
// }
// else if (min > 10 && sec < 10)
// {
//   return `${min}:0${sec}`;
// }
// else
// {
//   return `${min}:${sec}`;
// }
