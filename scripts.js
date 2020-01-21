// global variables 
const startButton = document.querySelector('.startButton');
const homeScreen = document.querySelector('.homeScreen');
const arrowLeftControl= document.querySelector('#left');
const arrowUpControl = document.querySelector('#up');
const arrowRightControl = document.querySelector('#right'); 
const arrowDownControl = document.querySelector('#down'); 

// pull functions up here once done for logical access

// start button functionality
startButton.addEventListener("click", hideMainMenu) 
// removes text from page before Starting game
function hideMainMenu (){ 
    homeScreen.classList.add('hidden') 
}  

handleKeyClick = ({key}) => {  
    switch (key){ 
 case 'ArrowUp':
     arrowUpControl.classList.toggle('clicked')
      break;
    case 'ArrowRight':
      arrowRightControl.classList.toggle('clicked')
      break;
    case 'ArrowDown':
      arrowDownControl.classList.toggle('clicked')
      break;
    case 'ArrowLeft':
      arrowLeftControl.classList.toggle('clicked')
      break;
    default:
      break;
  } }
    





// 
document.addEventListener('keydown', handleKeyClick)




// write basic keydown activities 
// left up right down 

// to do: pause button, mute button
// score counter 
// functionality, how do I want it to work 
// animate and generate falling buttons? icons easiest?