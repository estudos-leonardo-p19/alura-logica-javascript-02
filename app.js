let secretNumber = generateSecretNumber();
console.log(secretNumber);
let attemps = 1;
function displayText(tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
}


displayText('h1', 'JOGO DO NUMERO SECRETO');
displayText('p', 'Escolha um número entre 1 e 10');

function checkAttempt(){
    if(attemps == secretNumber){
        displayText('h1', `YEAH! Você acertou!`);
        let attempPluralWord= attemps > 1 ? 'tentativas' : 'tentativa';
        let message = ` E você usou ${attemps} ${attempPluralWord}`;
        displayText('p', `O número Secreto é ${secretNumber}! ${message}`  );
    }else{
        if(attemps > secretNumber){
            displayText('p', 'o numero secreto é menor');
        }else{
            displayText('p', 'o numero secreto é menor');
        }
        attemps ++;
    }
}

function generateSecretNumber(){
    return parseInt(Math.random() * 10 + 1);
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