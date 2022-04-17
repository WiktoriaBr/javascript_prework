{
  function playGame(playerInput) {
    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerMoveName, playerMoveName;

    const computerMove = function (argMoveId) {
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {      
        return "papier";
      } else if (argMoveId == 3) {      
        return "nożyce";
      } else {
        return "nieznany ruch";
      }
    };

    const playerMove = function (argMoveId) {
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {
        return "papier";
      } else if (argMoveId == 3) {
        return "nożyce";
      } else {
        return "nieznany ruch";
      }
    };
 
    console.log("Gracz wpisał: " + playerInput);
    console.log("Wylosowana liczba to: " + randomNumber);

    computerMoveName = computerMove(randomNumber);
    playerMoveName = playerMove(playerInput);

    printMessage("(Komputer)  Mój ruch to: " + computerMoveName);
    printMessage("Twój ruch to: " + playerMoveName);

    const resultOfGame = function (argComputerMove, argPlayerMove) {
      if (
        (argComputerMove == "kamień" && argPlayerMove == "papier") ||
        (argComputerMove == "nożyce" && argPlayerMove == "kamień") ||
        (argComputerMove == "papier" && argPlayerMove == "nożyce")
      ) {
        return "Ty wygrywasz!";
      } else if (
        (argPlayerMove == "kamień" && argComputerMove == "papier") ||
        (argPlayerMove == "nożyce" && argComputerMove == "kamień") ||
        (argPlayerMove == "papier" && argComputerMove == "nożyce")
      ) {
        return "Komputer wygrywa!";
      } else if (argPlayerMove == argComputerMove) {
        return "Remis!";
      } else {
        return "Użyłeś nieznanego ruchu!";
      }
    };
    

    printMessage(resultOfGame(computerMoveName, playerMoveName));
  }

  const rockButton = document.getElementById("btn_rock");
  const paperButton = document.getElementById("btn_paper");
  const scissorsButton = document.getElementById("btn_scissores");

  const rockResult = function () {
    playGame(1);
  };
  const paperResult = function () {
    playGame(2);
  };
  const scissorsResult = function () {
    playGame(3);
  };

  rockButton.addEventListener("click", rockResult);
  paperButton.addEventListener("click", paperResult);
  scissorsButton.addEventListener("click", scissorsResult);
}
