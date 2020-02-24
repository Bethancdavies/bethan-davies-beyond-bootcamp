// global variables 
const startButton = document.querySelector('.startButton');
const homeScreen = document.querySelector('.homeScreen'); 
const controls = document.querySelectorAll('.controls i');
const arrowLeftControl= document.querySelector('#left');
const arrowUpControl = document.querySelector('#up');
const arrowRightControl = document.querySelector('#right'); 
const arrowDownControl = document.querySelector('#down'); 
const keyButtonSound = document.querySelector('#keyButtonSound');
const muteButton = document.querySelector('#muteButton i');
const allSounds = document.querySelectorAll('audio');
// pull functions up here once done for logical access 

// start button functionality
startButton.addEventListener("click", hideMainMenu) 
// removes text from page before Starting game
function hideMainMenu (){ 
    homeScreen.classList.add('hidden') 
    const startMusic = document.querySelector('#startMusic'); 
    startMusic.play(); 
    
}  
// basic key down functionality, when key pressed fires class and plays sound, depending on which arrow is clicked on keyboard it will correspond to arrow on screen.  
const handleKeyClick = ({key}) => {    
    keyButtonSound.play(); 
    switch (key){ 
 case 'ArrowUp':
     arrowUpControl.classList.add('clicked')  
      break;
    case 'ArrowRight':
      arrowRightControl.classList.add('clicked')
      break;
    case 'ArrowDown':
      arrowDownControl.classList.add('clicked')
      break;
    case 'ArrowLeft':
      arrowLeftControl.classList.add('clicked')
      break;
    default:
      break;
  } } 
// keyup functionality quickly adds and removes class vs toggle which requires you to click again to revert to original class
  const handleKeyUp = () => {
  controls.forEach(control =>{
      control.classList.remove('clicked') 
  })
  }
    
document.addEventListener('keydown', handleKeyClick) 
document.addEventListener('keyup', handleKeyUp) 

// handle mute function, toggle between two icons using class List
const handleMute = () =>{
    muteButton.classList.toggle('fa-volume-mute');
    muteButton.classList.toggle('fa-volume-up'); 
  
// class list returns an object used [1] to represent the second class listed which contains the toggled mute or volume up.  IF class is mute, all sounds stop, ELSE the sounds will play 
    if (muteButton.classList[1] === 'fa-volume-mute'){
        allSounds.forEach(sound =>{
            sound.muted = true; 
        }) 
    } 
    else {
        allSounds.forEach(sound=>{
            sound.muted = false;
        })
    }
}


// pause button
muteButton.addEventListener('click', handleMute)

// score counter 
// functionality, how do I want it to work 
// animate and generate falling buttons? icons easiest? 
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations this is a good resource 
// most likely a canvas element  

// canvas grabbing/manipulate 

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const lx = 200 
const ux = 400
const rx = 600
const dx = 800
let y = 50
let dy = 2; 
let random = [8,10,12,14,10.2,6,9]

function drawBall() {
    ctx.beginPath();
    ctx.arc(lx, y, 30, 0, Math.PI*2); 
    ctx.arc(ux, y, 30, 0, Math.PI*2); 
    ctx.arc(rx, y, 30, 0, Math.PI*2); 
    ctx.arc(dx, y, 30, 0, Math.PI*2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
} 

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    y += dy; 
    if (y === canvas.height){
       y = 50;
    }
} 

function dropTheBall (){
  setInterval(draw,8)
} 


startButton.addEventListener('click', dropTheBall) 
console.log(startButton)
 








 
