let menu = document.getElementById('menu');
let jogo = document.getElementById('jogo');
let botao1 = document.getElementById('botao1');
let botao2 = document.getElementById('botao2');
let frase = document.getElementById('frase');

let botoes = document.getElementsByClassName('ppt');
let imagens = document.getElementsByClassName('img');
let placar = document.getElementsByClassName('placar');

// --------------- Mecânicas do Jogo
let userChoice;
let jollyChoice;
let userScore = 0;
let jollyScore = 0;

const getComputerChoice = function() {
  jollyChoice = Math.floor(Math.random() * 3);
  if (jollyChoice === 0) {
    jollyChoice = 'Pedra';
  } else if (jollyChoice === 1) {
    jollyChoice = 'Papel';
  } else {
    jollyChoice = 'Tesoura';
  }
}

const determineWinner = function(uChoice, jChoice) {
  if (uChoice === jChoice) {
    frase.innerHTML = `Eu e você escolhemos ${uChoice}, empatamos!`;
    imagens[0].hidden = true;
    imagens[1].hidden = false;
    return;
  }
  if (uChoice === 'Pedra') {
    if (jChoice === 'Papel') {
      frase.innerHTML = `Eu escolhi ${jChoice} e você ${uChoice}, +1 ponto pra mim!`;
      imagens[0].hidden = true;
      imagens[2].hidden = false;

      jollyScore++;
      placar[1].innerHTML = `Jolly - ${jollyScore}`;
    } else {
      frase.innerHTML = `Eu escolhi ${jChoice} e você ${uChoice}, +1 ponto pra você!`;
      imagens[0].hidden = true;
      imagens[1].hidden = false;

      userScore++;
      placar[0].innerHTML = `Você - ${userScore}`;
    }
  }
  if (uChoice === 'Papel') {
    if (jChoice === 'Tesoura') {
      frase.innerHTML = `Eu escolhi ${jChoice} e você ${uChoice}, +1 ponto pra mim!`;
      imagens[0].hidden = true;
      imagens[2].hidden = false;

      jollyScore++;
      placar[1].innerHTML = `Jolly - ${jollyScore}`;
    } else {
      frase.innerHTML = `Eu escolhi ${jChoice} e você ${uChoice}, +1 ponto pra você!`;
      imagens[0].hidden = true;
      imagens[1].hidden = false;

      userScore++;
      placar[0].innerHTML = `Você - ${userScore}`;
    }
  }
  if (uChoice === 'Tesoura') {
    if (jChoice === 'Pedra') {
      frase.innerHTML = `Eu escolhi ${jChoice} e você ${uChoice}, +1 ponto pra mim!`;
      imagens[0].hidden = true;
      imagens[2].hidden = false;

      jollyScore++;
      placar[1].innerHTML = `Jolly - ${jollyScore}`;
    } else {
      frase.innerHTML = `Eu escolhi ${jChoice} e você ${uChoice}, +1 ponto pra você!`;
      imagens[0].hidden = true;
      imagens[1].hidden = false;

      userScore++;
      placar[0].innerHTML = `Você - ${userScore}`;
    }
  }
}

const resetGame = function() {
  userScore = 0;
  placar[0].innerHTML = 'Você - 0';
  jollyScore = 0;
  placar[1].innerHTML = 'Jolly - 0';

  frase.innerHTML = 'Faça sua escolha:';

  imagens[0].hidden = false;
  imagens[1].hidden = true;
  imagens[2].hidden = true;
  imagens[3].hidden = true;
  imagens[4].hidden = true;

  botoes[0].hidden = false;
  botoes[1].hidden = false;
  botoes[2].hidden = false;
  botoes[3].hidden = true;
}

botoes[0].onclick = function() {
  botoes[0].hidden = true;
  botoes[1].hidden = true;
  botoes[2].hidden = true;
  botoes[3].hidden = false;

  userChoice = 'Pedra';

  getComputerChoice();
  determineWinner(userChoice, jollyChoice);
}

botoes[1].onclick = function() {
  botoes[0].hidden = true;
  botoes[1].hidden = true;
  botoes[2].hidden = true;
  botoes[3].hidden = false;

  userChoice = 'Papel';
  
  getComputerChoice();
  determineWinner(userChoice, jollyChoice);
}

botoes[2].onclick = function() {
  botoes[0].hidden = true;
  botoes[1].hidden = true;
  botoes[2].hidden = true;
  botoes[3].hidden = false;

  userChoice = 'Tesoura';
  
  getComputerChoice();
  determineWinner(userChoice, jollyChoice);
}

botoes[3].onclick = function() {
  if (userScore === 3) {
    frase.innerHTML = 'Fim de jogo. Parabéns, você me venceu!';

    imagens[1].hidden = true;
    imagens[3].hidden = false;

    botoes[3].hidden = true;
    botao1.hidden = false;
    return;
  } else if (jollyScore === 3) {
    frase.innerHTML = 'Fim de jogo. Ganhei de você!';

    imagens[2].hidden = true;
    imagens[4].hidden = false;

    botoes[3].hidden = true;
    botao1.hidden = false;
    return;
  }

  frase.innerHTML = 'Faça sua escolha:';

  imagens[0].hidden = false;
  imagens[1].hidden = true;
  imagens[2].hidden = true;

  botoes[0].hidden = false;
  botoes[1].hidden = false;
  botoes[2].hidden = false;
  botoes[3].hidden = true;
}

botao1.onclick = function() {
  resetGame();
  botao1.hidden = true;
}

botao2.onclick = function() {
  if (botao2.innerHTML === 'Retornar ao Menu') {
    menu.hidden = false;
    jogo.hidden = true;

    resetGame();
    botao1.hidden = true;
    botao2.innerHTML = 'Jogar';
  } else {
    menu.hidden = true;
    jogo.hidden = false;
    botao2.innerHTML = 'Retornar ao Menu';
  }
}