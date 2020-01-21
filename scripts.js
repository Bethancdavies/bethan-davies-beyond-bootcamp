// global variables 
const startButton = document.querySelector('.startButton');
const homeScreen = document.querySelector('.homeScreen'); 
const controls = document.querySelectorAll('.controls i')
const arrowLeftControl= document.querySelector('#left');
const arrowUpControl = document.querySelector('#up');
const arrowRightControl = document.querySelector('#right'); 
const arrowDownControl = document.querySelector('#down'); 
const keyButtonSound = document.querySelector('#keyButtonSound')
// pull functions up here once done for logical access

// start button functionality
startButton.addEventListener("click", hideMainMenu) 
// removes text from page before Starting game
function hideMainMenu (){ 
    homeScreen.classList.add('hidden') 
    const startMusic = document.querySelector('#startMusic'); 
    startMusic.play(); 
}  
// write basic keydown activities 
handleKeyClick = ({key}) => {   
    keyButtonSound.play(); 
    console.log(keyButtonSound)
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

  handleKeyUp = () => {
  controls.forEach(control =>{
      control.classList.remove('clicked') 
  })
  }
    





// 
document.addEventListener('keydown', handleKeyClick) 
document.addEventListener('keyup', handleKeyUp) 




// write basic keydown activities 
// left up right down 

// to do: pause button, mute button
// score counter 
// functionality, how do I want it to work 
// animate and generate falling buttons? icons easiest?