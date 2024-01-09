let playerOneInput = document.querySelector('.playeroneinput')
let playerOneButton = document.querySelector('.playeronebutton')
let playerOneError = document.querySelector('.playeroneerror')
let confirmationBox = document.querySelector('.confirmationbox')
let yes = document.querySelector('.yes')
let no = document.querySelector('.no')
let showButton = document.querySelector('.playeroneshowbutton')
let playerTwoContainer = document.querySelector('.playertwocontainer')
let playerTwoButton = document.querySelector('.playertwobutton')
let playerTwoInput = document.querySelector('.playertwoinput')
let chances = document.querySelector('.chancesleft')
let numbersPicked = document.querySelector('.numberspicked')


playerOneButton.addEventListener('click',()=>{
    if(playerOneInput.value > 10 || playerOneInput.value == ''){
        playerOneError.style.display = 'block'
    }else{
        playerOneError.style.display = 'none'
        confirmationBox.style.visibility = 'visible'

    }
})

no.addEventListener('click',()=>{
    confirmationBox.style.visibility = 'hidden'


})
let guess;
yes.addEventListener('click',()=>{
    confirmationBox.style.visibility = 'hidden'
    showButton.style.visibility = 'visible'
    playerTwoContainer.style.visibility = 'visible'


    guess = playerOneInput.value;
    playerOneInput.value = 'XXXX';
    playerOneButton.disabled = true;
    console.log(guess)
})
let show = true;
showButton.addEventListener('click',()=>{
    if(show){
    playerOneInput.value = guess;
    show = false;
    showButton.textContent = 'hide number'

    }else{
        playerOneInput.value = 'XXXX';
        showButton.textContent = 'show number'
        show = true;
    }
})
let arrayOfNumbersPicked = [];
playerTwoButton.addEventListener('click',()=>{
    if(playerTwoInput.value != guess){
        chances.textContent--;
        arrayOfNumbersPicked.push(playerTwoInput.value);
        console.log(arrayOfNumbersPicked)
        numbersPicked.textContent = arrayOfNumbersPicked.join(' ');

    }else{
        chances.textContent = 'You guessed correctly!!'
        chances.style.color = 'green'
        chances.style.fontSize = '15px'
        playerTwoButton.disabled = true;
    }
})