startButton = document.querySelector('.startButton');
homeScreen = document.querySelector('.homeScreen');
leftArrow = document.querySelector('#left');
upArrow = document.querySelector('#up');
rightArrow = document.querySelector('#right'); 
downArrow = document.querySelector('#down');




startButton.addEventListener("click", hidden) 
// removes text from page before Starting game
function hidden (){ 
    homeScreen.classList.add('hidden') 
} 


// write basic keydown activities 
// left up right down 

// to do: pause button, mute button
// score counter 
// functionality, how do I want it to work 
// animate and generate falling buttons? icons easiest?