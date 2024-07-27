let secretNumber = generateSecretNumber();
attemps = 1;

function displayText(tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
}


function initialMessage() {
    displayText('h1', 'JOGO DO NUMERO SECRETO');
    displayText('p', 'Escolha um número entre 1 e 10');
}

initialMessage();

function checkAttempt(){
    let guess = document.querySelector('input').value;
    if(guess == secretNumber){
        displayText('h1', `YEAH! Você acertou!`);
        let guessPluralWord= guess > 1 ? 'tentativas' : 'tentativa';
        let message = ` E você usou ${guess} ${guessPluralWord}`;
        displayText('p', `O número Secreto é ${secretNumber}! ${message}`  );

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(guess > secretNumber){
            displayText('p', 'o numero secreto é menor');
        }else{
            displayText('p', 'o numero secreto é maior');
        }
        attemps++;
        clearField();
    }
}

function generateSecretNumber(){
    return parseInt(Math.random() * 10 + 1);
}

function clearField() {
    guess = document.querySelector('input');
    guess.value = '';
}

function restartGame() {
    secretNumber = generateSecretNumber();
    guess.value = '';
    attemps = 1;
    initialMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



















/*
let tittle = document.querySelector('h1');
tittle.innerHTML = 'Hora do Desafio';



function loveJS (){
    alert('Eu amo JS');
}

function city(){
    let city = prompt('Qual sua cidade favorita?');
    alert(`A sua cidade favorita é ${city}`);
}
*/