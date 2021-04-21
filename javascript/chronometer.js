class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++;
      if (callback) callback(counter);
    },1000); 
  }
  
  getMinutes() {
    //console.log(Number.isInteger(this.currentTime / 60))
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60; //new
  }
  twoDigitsNumber(number) {
    if (number < 10){//new
      return 'O' + number;//new
    }else {//new
      number.toString()//new
    };//new
  }
  stopClick() {
    clearInterval(this.intervalId);//new
  }
  resetClick() {
    this.currentTime = 0; //new
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();

    if (min < 10 && sec < 10) {
      return `${0}${min}:${0}${sec}`;
    } 
    else if (min < 10 && sec > 10) 
    {
      return `0${min}:${sec}`;
    } 
    else if (min > 10 && sec < 10) 
    {
      return `${min}:0${sec}`;
    } 
    else 
    {
      return `${min}:${sec}`;
    }
  }
}
