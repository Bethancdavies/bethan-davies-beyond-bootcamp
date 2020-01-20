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
handleKeyClick = event => {
    let keyClick = event.key;
    console.log(keyClick); 
}
// must listen to entire document? makes most sense, rethink later
document.addEventListener('keydown', handleKeyClick)




// write basic keydown activities 
// left up right down 

// to do: pause button, mute button
// score counter 
// functionality, how do I want it to work 
// animate and generate falling buttons? icons easiest?