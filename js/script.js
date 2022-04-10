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

  const kamienButton = document.getElementById("btn_rock");
  const papierButton = document.getElementById("btn_paper");
  const nozyczeButton = document.getElementById("btn_scissores");

  const kamienWynik = function () {
    playGame(1);
  };
  const papierWynik = function () {
    playGame(2);
  };
  const nozyceWynik = function () {
    playGame(3);
  };

  kamienButton.addEventListener("click", kamienWynik);
  papierButton.addEventListener("click", papierWynik);
  nozyczeButton.addEventListener("click", nozyceWynik);
}
