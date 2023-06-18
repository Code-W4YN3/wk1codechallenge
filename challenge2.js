// Speed Detector algorithm
function speedDetector(speed){
  speed;
  if(speed < 70){
    return "Ok"
  } else if(speed >= 70){
    let difference = speed - 70
    let demeritPoints = Math.floor(difference / 5)
    let total = `${demeritPoints} Demerit Points`
    if(demeritPoints >=0 && demeritPoints <= 12){
      judgement= "Warning Issued"
    } else if(demeritPoints > 12){
      judgement = "License suspended"
    }
    console.log(total)
    return judgement
  }
}
//Prompts user to input speed
const prompt = require('prompt-sync')();
const speed = prompt('Enter car speed: ')
// Returns vehicle speed, Demerit Points(if any), and a Judgement
console.log(`${Number(speed)} km/s`);
console.log(speedDetector(Number(speed)));