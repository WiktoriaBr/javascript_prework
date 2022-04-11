{
  function playGame(playerInput) {
    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    const computerMove = (function (argMoveId) {
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {
        return "papier";
      } else if (argMoveId == 3) {
        return "nożyce";
      } else {
        return "nieznany ruch";
      }
    })(randomNumber);

    const playerMove = (function (argMoveId) {
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {
        return "papier";
      } else if (argMoveId == 3) {
        return "nożyce";
      } else {
        return "nieznany ruch";
      }
    })(playerInput);

    console.log("Gracz wpisał: " + playerInput);
    console.log("Wylosowana liczba to: " + randomNumber);

    printMessage("(Komputer)  Mój ruch to: " + computerMove);
    printMessage("Twój ruch to: " + playerMove);

    const resultOfGame = (function (argComputerMove, argPlayerMove) {
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
    })(computerMove, playerMove);

    printMessage(resultOfGame);
  }

  const rockButton = document.getElementById("btn_rock");
  const paperButton = document.getElementById("btn_paper");
  const scissorsButton = document.getElementById("btn_scissores");

  const kamienResult = function () {
    playGame(1);
  };
  const papierResult = function () {
    playGame(2);
  };
  const nozyceResult = function () {
    playGame(3);
  };

  rockButton.addEventListener("click", kamienResult);
  paperButton.addEventListener("click", papierResult);
  scissorsButton.addEventListener("click", nozyceResult);
}
