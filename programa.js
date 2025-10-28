function getComputerChoice() {
    let random_skaicius = getRandomInt(0,3);
    let sign = "";
    if(random_skaicius == 0)
    {
        sign = "rock"
    } else if (random_skaicius == 1)
    {
        sign = "paper"
    } else if(random_skaicius == 2)
        {sign = "scissors"
        }

    return sign;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function getHumanChoice() {
    let choice = prompt("Choose your sign");
    choice = choice.toLowerCase();

    if (choice == "rock") {
        console.log(`You chose: ${choice}`);
        return choice;

    } else if (choice == "paper")
        {
            console.log(`You chose: ${choice}`);
            return choice;

        } else if (choice == "scissors")
            {
            console.log(`You chose: ${choice}`);
            return choice;
            } else {
        alert("Invalid choice! Please enter Rock, Paper, or Scissors.");

        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`Computer chose: ${computerChoice}`);

    if(humanChoice == computerChoice) {
        console.log("It's a tie!");
        console.log(`Score → You: ${humanScore} | Computer: ${computerScore}`);
        return;
    }
    
    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
        )
        {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        console.log(`Score → You: ${humanScore} | Computer: ${computerScore}`);
        return;
    } else {
        computerScore++;     
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        console.log(`Score → You: ${humanScore} | Computer: ${computerScore}`);
        return;
    }

}

function playGame()
{
     for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
     console.log(`Final Score → You: ${humanScore} | Computer: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("The game is a tie!");
    }
}
playGame();