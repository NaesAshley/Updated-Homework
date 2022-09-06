///////////////////////////////button for timer count down start!///////////////////////////////////
// const player1Button = document.getElementById("Player1");
// player1Button.addEventListener("click", function timer321() {});

// const timeH1 = document.querySelector("h5");
// let timesecond = 3;
// timeH1.innerHTML = `${timesecond}`;
// const countDown = setInterval(() => {
//   timesecond--; //countdown
//   timeH1.innerHTML = `${timesecond}`;
//   if (timesecond <= 0 || timesecond < 1) {
//     clearInterval(countDown);
//
//   }
// }, 1000);

/////// time spans //////
// let min = document.querySelector(".minutes");a
// let sec = document.querySelector(".seconds");

// //import buttons//
// let player1Button = document.getElementById("player1");
// let player2Button = document.getElementById("player2");

// // timer functionality //
// let time = 0; //time in seconds
// let timer = setInterval(() => {
//   //set minutes
//   min.innerHTML = parseInt(time / 60, 10);
//   //set seconds
//   sec.innerHTML = parseInt(time % 60, 10);
//   time++; //counting up
//   if (times >= 10 || timesecond < 0) {
//     clearInterval(timer);
//   }
// });

// //now add even't listener to the buttons
// player1Button.addEventListener("click", e);
///////////////////////////////////////////////////trial 2////////////////////////
const timer1 = document.querySelector(".watch0 .time0");
const player1_btn = document.getElementById("Player1");
const player1_stopbtn = document.getElementById("stop0");
const player1_resetbtn = document.getElementById("reset0");

const timer2 = document.querySelector(".watch1 .time1");
const player2_btn = document.getElementById("Player2");
const player2_stopbtn = document.getElementById("stop1");
const player2_resetbtn = document.getElementById("reset1");

let seconds = -1;
let Interval = null;

//evenet listeners
player1_btn.addEventListener("click", start0);
player1_stopbtn.addEventListener("click", stop0);
player1_resetbtn.addEventListener("click", reset0);

player2_btn.addEventListener("click", start1);
player2_stopbtn.addEventListener("click", stop1);
player2_resetbtn.addEventListener("click", reset1);

//function every second it ticks up and display correct time
function timerClock0() {
  seconds++; //everytime it runs it goes to one+
  //now format the time
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60); //
  let secs = seconds % 60; //modular --

  if (secs < 10) secs = "0" + secs; // place a zero before the numbers
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  timer1.innerText = `${hrs}:${mins}:${secs}`;
}

timerClock0(); //called the timer

function start0() {
  if (Interval) {
    return; //if already running you don't need to start again!
  }

  Interval = setInterval(timerClock0, 1000); //call timer every 1 second
}
function stop0() {
  clearInterval(Interval); //clear interval
  Interval = null; // sets it back to 0
}

function reset0() {
  stop0(); //calls the stop function
  seconds = 0;
  timer1.innerText = `00:00:00`; // tells it to display again how to start at 0
}

/// part 2 ////

function timerClock1() {
  seconds++; //everytime it runs it goes to one+
  //now format the time
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60); //
  let secs = seconds % 60; //modular --

  if (secs < 10) secs = "0" + secs; // place a zero before the numbers
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  timer2.innerText = `${hrs}:${mins}:${secs}`;
}
function start1() {
  if (Interval) {
    return; //if already running you don't need to start again!
  }

  Interval = setInterval(timerClock1, 1000); //call timer every 1 second
}
function stop1() {
  clearInterval(Interval); //clear interval
  Interval = null; // sets it back to 0
}

function reset1() {
  stop0(); //calls the stop function
  seconds = 0;
  timer2.innerText = `00:00:00`; // tells it to display again how to start at 0
}
/////////////////////////need to
