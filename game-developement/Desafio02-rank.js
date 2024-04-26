// Objetivo: Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getNivel(win, loses) {
  let saldoVitorias = win - loses;
  let classe;

  if (saldoVitorias <= 10) {
    classe = "Ferro";
  } else if (saldoVitorias <= 20) {
    classe = "Bronze";
  } else if (saldoVitorias <= 50) {
    classe = "Prata";
  } else if (saldoVitorias <= 80) {
    classe = "Ouro";
  } else if (saldoVitorias <= 90) {
    classe = "Diamante";
  } else if (saldoVitorias <= 100) {
    classe = "Lendário";
  } else {
    classe = "Imortal";
  }

  console.log("O Herói tem um saldo de " + saldoVitorias + " e está no nível " + classe);
}

function perguntarNivel() {
  rl.question("Quantas vitórias? ", (win) => {
    if (isNaN(win)) {
      console.log("Por favor, insira um número válido para vitórias.");
      perguntarNivel();
      return;
    }

    rl.question("Quantas derrotas? ", (loses) => {
      if (isNaN(loses)) {
        console.log("Por favor, insira um número válido para derrotas.");
        perguntarNivel();
        return;
      }

      getNivel(parseInt(win), parseInt(loses));

      rl.question("Calcular novamente? (S/N) ", (resposta) => {
        if (resposta.toLowerCase() === 's') {
          perguntarNivel(); 
        } else {
          rl.close();
        }
      });
    });
  });
}

// Iniciar a interação com o usuário
perguntarNivel();
