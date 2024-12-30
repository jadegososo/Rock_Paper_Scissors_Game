const startBtn = document.querySelector(`.startBtn`);
const quitBtn = document.querySelector(`.quitBtn`);
const choices = document.querySelector(`.choices`);
let display = document.querySelector(`.status`);
let score_display = document.querySelector(`#score_display`);
let tries_display = document.querySelector(`#tries_display`);

let score = 0;
let tries = 0;
let computerChoice = null;

function play(){
    computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice === 3){
        computerChoice = 2;
    }
}

function fight(choice){
    let status = ``;
    
    let playerChoice = choice;
    play();

    if(computerChoice === playerChoice){
        status = `Draw`;

    }
    else if(
        computerChoice === 0 && playerChoice === 2 ||
        computerChoice === 1 && playerChoice === 0 ||
        computerChoice === 2 && playerChoice === 1
    ){
        status = `You lose`;

    }
    else{
        status = `You win`;

        score++;
    }

    tries++;

    display.textContent = status;
    score_display.textContent = score;
    tries_display.textContent = tries;
}

function startGame(){
    startBtn.style.cssText = `display: none;`;
    quitBtn.style.cssText = `display: flex;`;
    display.textContent = `Choose Your Pick`;
    choices.style.cssText = `display: flex;`;
}

startBtn.addEventListener(`click`, startGame);

function quitGame(){
    startBtn.style.cssText = `display: block;`;
    quitBtn.style.cssText = `display: none;`;
    display.textContent = `Rock, Paper, Scissors Game`;
    choices.style.cssText = `display: none;`;

    score = 0;
    tries = 0;
    computerChoice = null;

    score_display.textContent = score;
    tries_display.textContent = tries;
}

quitBtn.addEventListener(`click`, quitGame);