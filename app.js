
function displayText(tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
}


displayText('h1', 'JOGO DO NUMERO SECRETO');
displayText('p', 'Escolha um número entre 1 e 10');

function checkAttempt(){
    console.log('O botão foi clicado');
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