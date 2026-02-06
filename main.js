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

time25.addEventListener("click", () => {
    timmer.textContent = "25:00";
})
time15.addEventListener("click", () => {
    timmer.textContent = "15:00";
})
time5.addEventListener("click", () => {
    timmer.textContent = "05:00";
})
time45.addEventListener("click", () => {
    timmer.textContent = "45:00";
})