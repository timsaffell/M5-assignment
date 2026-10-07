let userChoice = prompt("Choose rock, paper, or scissors:");
userChoice = userChoice.toLowerCase();

let computerChoice = Math.floor(Math.random() * 3) + 1;
if (computerChoice === 1) {
    computerChoice = "rock";
} else if (computerChoice === 2) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

if (
    userChoice !== "rock" &&
    userChoice !== "paper" &&
    userChoice !== "scissors"
) {
    alert("You must enter rock, paper, or scissors.");
} else if (userChoice === computerChoice) {
    alert("It's a tie! You both chose " + userChoice + ".");
}
else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
) {
    alert("You win! You chose " + userChoice +
          " and the computer chose " + computerChoice + ".");
}
else {
    alert("Computer wins! You chose " + userChoice +
          " and the computer chose " + computerChoice + ".");
}