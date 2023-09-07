let wins = 0;
let losses = 0
let ties = 0;

let tieAlert = (computerChoice)=>`Computer chose ${computerChoice}. It's a tie!`;
let winAlert = (computerChoice)=>`Computer chose ${computerChoice}. You WIN yay!`;
let loseAlert = (computerChoice)=>`Computer chose ${computerChoice}. You lost, better luck next time!`;
let gameStats = (wins,losses,ties)=>`Game stats: \nwins: ${wins} \nlosses: ${losses} \nties: ${ties}`

function playGame() {

    let options = ["R", "P", "S"];

    var userChoice = window.prompt("Please enter R, P, or S:").toUpperCase();

    console.log(userChoice);

    var randomIndex = Math.floor(Math.random() * options.length);
    var computerChoice = options[randomIndex];

    console.log(computerChoice);

    if (userChoice == computerChoice) {
        ties++;
        //window.alert(`Computer chose ${computerChoice}. It's a tie!`);
        window.alert(tieAlert(computerChoice));
    } else if (userChoice == "R" && computerChoice == "S"
            || userChoice == "P" && computerChoice == "R"
            || userChoice == "S" && computerChoice == "P") {
        wins++;
        //window.alert(`Computer chose ${computerChoice}. You WIN yay!`);
        window.alert(winAlert(computerChoice));
    } else {
        losses++;
        //window.alert(`Computer chose ${computerChoice}. You lose, better luck next time!`);
        window.alert(loseAlert(computerChoice));
    }

    if (window.confirm("Play again?")) {
        playGame();
    }
    else {
        window.alert(gameStats(wins,losses,ties));
        wins = 0;
        losses = 0
        ties = 0;
    }


}

playGame();