const rainSound = new Audio("sounds/rain.mp3")
rainSound.volume = 0.3
const fireplaceSound = new Audio("sounds/fireplace.mp3")
const nightSound = new Audio("sounds/night.mp3")

document.getElementById("buttonRain").addEventListener("click", function() {
    console.log("hellooo")
    rainSound.loop = true;
    rainSound.play()
})
document.getElementById("buttonPauseRain").addEventListener("click", function(){
    console.log("pausee")
    rainSound.pause()
})

document.getElementById("buttonFireplace").addEventListener("click", function() {
    console.log("fireplace")
    fireplaceSound.loop = true;
    fireplaceSound.play()
})
document.getElementById("buttonPauseFireplace").addEventListener("click", function(){
    console.log("pausee")
    fireplaceSound.pause()
})

document.getElementById("buttonChillNight").addEventListener("click", function(){
    console.log("nighttt")
    nightSound.play()
    nightSound.loop = true
})

document.getElementById("buttonPauseChillNight").addEventListener("click", function(){
    console.log("pausee")
    nightSound.pause()
})

let volumeRain = document.getElementById('volume-slider');
volumeRain.addEventListener("change", function(e) {
    rainSound.volume = (e.currentTarget.value / 100)*0.3;
})

let volumeFireplace = document.getElementById('volume-slider-fireplace');
volumeFireplace.addEventListener("change", function(e) {
    fireplaceSound.volume = e.currentTarget.value / 100;
})

let volumeNight = document.getElementById("volume-slider-night")
volumeNight.addEventListener("change", function(e){
    nightSound.volume = e.currentTarget.value /100;
})


/// POMODORO LOGIC 

let timmer = document.getElementById("timmer")
const time25 = document.getElementById("25min")
const time45 = document.getElementById("45min")
const time5 = document.getElementById("5min")
const time15 = document.getElementById("15min")
let intervalId = null;
let seconds; 


document.getElementById("startPomodoro").addEventListener("click", function(){
    let secondsleft
    if (intervalId!= null){
        return
    }
    intervalId = setInterval(() => {
        secondsRemaining = seconds--
        secondsleft = String(secondsRemaining % 60).padStart(2,"0")
        minutes = Math.floor(secondsRemaining/60) 
        if(seconds<0){
            clearInterval(intervalId)
            intervalId = null
            return
        }
        timmer.textContent = `${minutes}:${(secondsleft)}`    
    }, 1000);
})


document.getElementById("pausePomodoro").addEventListener("click", () => {
    clearInterval(intervalId)
    intervalId = null
})
document.getElementById("resetPomodoro").addEventListener("click", () => {
    clearInterval(intervalId)
    intervalId = null
    seconds = 0
    timmer.textContent = `00:00`
})

time25.addEventListener("click", () => {
    updateTimmer("25:00")
    clearInterval(intervalId)
    intervalId = null
    seconds = (25*60)-1
})

time15.addEventListener("click", () => {
    updateTimmer("15:00")
    clearInterval(intervalId)
    intervalId = null
    seconds = 15*60
})
time5.addEventListener("click", () => {
    updateTimmer("05:00")
    clearInterval(intervalId)
    intervalId = null
    seconds = 5*60
})
time45.addEventListener("click", () => {
    updateTimmer("45:00")
    clearInterval(intervalId)
    intervalId = null
    seconds = 45*60
})

function updateTimmer (text){
    timmer.textContent = text
}


