function getComputerChoice() {
    const rps = ['rock', 'paper', 'scissors'];
    let computerchoice = rps[Math.floor(Math.random() * (rps.length))];
    return computerchoice;
}

function getPlayerChoice() {
    let playerchoice = prompt("Please type rock, paper or scissors:");
    return playerchoice;
}

function playRound(computerchoice, playerchoice) {
    if (computerchoice === playerchoice) {
        window.alert('TIE');
    } else if (computerchoice === 'rock' && playerchoice === 'scissors') {
        window.alert('COMPUTER WINS!');
    } else if (computerchoice === 'rock' && playerchoice === 'paper') {
        window.alert('YOU WIN!');
    } else if (computerchoice === 'paper' && playerchoice === 'scissors') {
        window.alert('YOU WIN!');
    } else if (computerchoice === 'paper' && playerchoice === 'rock') {
        window.alert('COMPUTER WINS!');
    } else if (computerchoice === 'scissors' && playerchoice === 'paper') {
        window.alert('COMPUTER WINS!');
    } else if (computerchoice === 'scissors' && playerchoice === 'rock') {
        window.alert('YOU WIN!');
    } else {
        console.log('null')
    }
}

function game() {
    for (let i = 0; i<5; i++){
        let computerchoice = getComputerChoice();
        let playerchoice = getPlayerChoice();
        playRound(computerchoice, playerchoice)
    }
}