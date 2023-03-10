const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const earthEl = document.getElementById("earth-icon");
let frames = 0; //change emoji "earth" 
function spinAround(){
//let frames = 0;
  switch(frames){
    case 0:
      earthEl.innerText = "🌎"; //1F30E
      break;
    case 1:
      earthEl.innerText = "🌏"; //1F30F
      break;
    default:
      earthEl.innerText = "🌍"; //1F30D
      frames = -1;
  }
  frames += 1;
}

function updateClock() {
  spinAround();
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  
  
  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  setTimeout(() => {
    updateClock();
  }, 1000);
}
updateClock();


// window.onload = function () {
//   const hourEl = document.getElementById("hour");
//   const minuteEl = document.getElementById("minute");
//   const secondEl = document.getElementById("second");

//   let h = new Date().getHours();
//   let m = new Date().getMinutes();
//   let s = new Date().getSeconds();
  
//   h = h < 10 ? "0" + h : h;
//   m = m < 10 ? "0" + m : m;
//   s = s < 10 ? "0" + s : s;

//   hourEl.innerText = h;
//   minuteEl.innerText = m;
//   secondEl.innerText = s;
//   setTimeout(() => {
//     window.onload();
//   }, 1000);
// };