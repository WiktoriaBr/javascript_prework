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

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/
    let playerMove = getMoveName(playerInput);

    console.log("Gracz wpisał: " + playerInput);
    console.log("Wylosowana liczba to: " + randomNumber);

    printMessage("(Komputer)  Mój ruch to: " + computerMove);
    printMessage("Twój ruch to: " + playerMove);
    displayResult(computerMove, playerMove);
  }

  let kamienButton = document.getElementById("btn_rock");
  let papierButton = document.getElementById("btn_paper");
  let nozyczeButton = document.getElementById("btn_scissores");


  function buttonClicked() {
    playGame(1);
  }

  kamienButton.addEventListener("click", buttonClicked);
  papierButton.addEventListener("click", buttonClicked);
  nozyczeButton.addEventListener("click", buttonClicked);


  /*.addEventListener("click", function () {
    playGame(2);
  });
  document
    .getElementById("btn_scissores")
    .addEventListener("click", function () {
      playGame(3);
    });*/
}
