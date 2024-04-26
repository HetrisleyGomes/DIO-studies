let nome = prompt("Nome?")
let xp = prompt("XP?")
let classe
if (xp < 1.000){
    classe = "Ferro"
} else
if (xp > 1.001 && xp < 2.000){
    classe = "Bronze"
} else
if (xp > 2.001 && xp < 5.000){
    classe = "Prata"
} else
if (xp > 5.001 && xp < 7.000){
    classe = "Ouro"
} else
if (xp > 7.001 && xp < 8.000){
    classe = "Platina"
} else
if (xp > 8.001 && xp < 9.000){
    classe = "Ascendente"
} else
if (xp > 9.001 && xp < 10.000){
    classe = "Imortal"
} else
if (xp >= 10.001){
    classe = "Radiante"
}

console.log(```O Herói de nome ${nome} está no nível de ${classe}```)