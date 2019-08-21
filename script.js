let user = 0;
let bot = 0;

let user_span = document.getElementById("user-score");
let bot_span = document.getElementById("bot-score");

let scoreboard_div = document.querySelector(".score-board");

let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");

function botChoiceGenerator() {
    let options = ['rock','paper','scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

function win(userChoice, botChoice){
    let userChoice_div = document.getElementById(userChoice);
    user++;
    user_span.innerHTML = user;
    bot_span.innerHTML = bot;
    userChoice_div.classList.add("win");
    setTimeout(() => { userChoice_div.classList.remove("win") }, 400);
}

function lose(userChoice, botChoice){
    let userChoice_div = document.getElementById(userChoice);
    bot++;
    user_span.innerHTML = user;
    bot_span.innerHTML = bot;
    userChoice_div.classList.add("lose");
    setTimeout(() => { userChoice_div.classList.remove("lose") }, 400);
}

function draw(userChoice, botChoice){
    let userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add("draw");
    setTimeout(() => { userChoice_div.classList.remove("draw") }, 400);
}

function game(userChoice) {
    const botChoice = botChoiceGenerator();
    if (
        userChoice + botChoice === "rockscissors" ||
        userChoice + botChoice === "paperrock" ||
        userChoice + botChoice === "scissorspaper"
    ) {
        win(userChoice, botChoice);
    } else if (
        userChoice + botChoice === "rockpaper" ||
        userChoice + botChoice === "paperscissors" ||
        userChoice + botChoice === "scissorsrock"
    ) {
        lose(userChoice, botChoice);
    } else {
        draw(userChoice, botChoice);
    }
}

(function main(){
    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click', () => game("paper"));
    scissors_div.addEventListener('click', () => game("scissors"));
})();