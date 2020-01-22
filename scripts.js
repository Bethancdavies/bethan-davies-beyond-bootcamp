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
// basic key down functionality, when key pressed fires class and plays sound
handleKeyClick = ({key}) => {    
    keyButtonSound.play(); 
    console.log(key)
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
  handleKeyUp = () => {
  controls.forEach(control =>{
      control.classList.remove('clicked') 
  })
  }
    
document.addEventListener('keydown', handleKeyClick) 
document.addEventListener('keyup', handleKeyUp) 

// handle mute function, toggle between two icons using class List
handleMute = () =>{
    muteButton.classList.toggle('fa-volume-mute');
    muteButton.classList.toggle('fa-volume-up'); 
    console.log (allSounds);  
    // get this to apply just once, returns false every time ?
    allSounds.forEach(sound =>{
        sound.muted = true ;
    })
}
// to do: pause button, mute button 
muteButton.addEventListener('click', handleMute)

// score counter 
// functionality, how do I want it to work 
// animate and generate falling buttons? icons easiest?