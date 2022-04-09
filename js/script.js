{
  function playGame(playerInput) {
    clearMessages();

    function getMoveName(argMoveId) {
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {
        return "papier";
      } else if (argMoveId == 3) {
        return "nożyce";
      } else {
        return "nieznany ruch";
      }
    }
    function displayResult(argComputerMove, argPlayerMove) {
      if (
        (argComputerMove == "kamień" && argPlayerMove == "papier") ||
        (argComputerMove == "nożyce" && argPlayerMove == "kamień") ||
        (argComputerMove == "papier" && argPlayerMove == "nożyce")
      ) {
        printMessage("Ty wygrywasz!");
      } else if (
        (argPlayerMove == "kamień" && argComputerMove == "papier") ||
        (argPlayerMove == "nożyce" && argComputerMove == "kamień") ||
        (argPlayerMove == "papier" && argComputerMove == "nożyce")
      ) {
        printMessage("Komputer wygrywa!");
      } else if (argPlayerMove == argComputerMove) {
        printMessage("Remis!");
      } else {
        printMessage("Użyłeś nieznanego ruchu!");
      }
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    const playerMove = getMoveName(playerInput);

    console.log("Gracz wpisał: " + playerInput);
    console.log("Wylosowana liczba to: " + randomNumber);

    printMessage("(Komputer)  Mój ruch to: " + computerMove);
    printMessage("Twój ruch to: " + playerMove);
    displayResult(computerMove, playerMove);
  }

  const kamienButton = document.getElementById("btn_rock");
  const papierButton = document.getElementById("btn_paper");
  const nozyczeButton = document.getElementById("btn_scissores");

  kamienButton.addEventListener("click", function () {
    playGame(1);
  });
  papierButton.addEventListener("click", function () {
    playGame(2);
  });
  nozyczeButton.addEventListener("click", function () {
    playGame(3);
  });
}
