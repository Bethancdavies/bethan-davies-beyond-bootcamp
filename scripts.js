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