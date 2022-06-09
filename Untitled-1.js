const getUserChoice = (userInput) => {
    switch (userInput.toLowerCase()) {
      case "rock":
        return "rock";
      case "paper":
        return "paper";
      case "scissor":
        return "scissor";
      default:
        return "invalido";
        break;
    }
  };
  
   const getComputerChoice = () => {
    let computerChoice = Math.random() * (3 - 0)
  
    
    computerChoice = Math.floor(computerChoice);
  
    switch (computerChoice) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissor";
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "o jogo está empatado";
    }
  
    if (userChoice === "invalido") {
      return "você inseriu uma opção invalida";
    }
  
    if (userChoice === "rock" && computerChoice === "scissor") {
      return "você venceu";
    } else if (userChoice === "scissor" && computerChoice === "paper") {
      return "você venceu";
    } else if (userChoice === "paper" && computerChoice === "rock") {
      return "você venceu";
    } else {
      return "o computador ganhou";
    }
  };
  
  const playGame = () => {
    let userChoice = getUserChoice("scissor");
    let computerChoice = getComputerChoice();
  
    console.log("você: ", userChoice);
    console.log("computador: ", computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  