let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = 'nieznany ruch';

console.log('Wylosowana liczba to: ' + randomNumber);

if(randomNumber == 1)
{
  computerMove = 'kamień';
}
else if (randomNumber == 2)
{
    computerMove = 'papier';
}
else if (randomNumber == 3)
{
    computerMove = 'nożyce';
}
else
{
    computerMove = 'nieznany ruch';
}

printMessage('Mój ruch to: ' + computerMove);

