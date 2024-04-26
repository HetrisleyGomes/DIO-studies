const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual seu nome? ", (nome) => {
    rl.question("Qual seu xp? ", (xp) => {
        xp = parseInt(xp)
        calcularClasse(nome, xp)
        rl.close()
    })
})

function calcularClasse(nome, xp) {
    let classe;
    if (xp <= 1000) {
        classe = "Ferro";
    } else if (xp <= 2000) {
        classe = "Bronze";
    } else if (xp <= 5000) {
        classe = "Prata";
    } else if (xp <= 7000) {
        classe = "Ouro";
    } else if (xp <= 8000) {
        classe = "Platina";
    } else if (xp <= 9000) {
        classe = "Ascendente";
    } else if (xp <= 10000) {
        classe = "Imortal";
    } else {
        classe = "Radiante";
    }

    console.log(`O Herói de nome ${nome} está no nível de ${classe}`);
}