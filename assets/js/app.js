let bot1 = document.getElementById("bot1");
let bot2 = document.getElementById("bot2");
let bot3 = document.getElementById("bot3");
let botMaster = document.getElementById("botMaster");

let letras = ["m", "p", "l"];
let vocales = ["a", "e", "i", "o", "u"];
let botones = [bot1, bot2, bot3];
let audio;

const funcambiar = () =>{

    let i = 0;
    let max = botones.length;
    let silaba;

    while(i<max){

        let indice = Math.floor(Math.random()*letras.length);
        let indiceVocal = Math.floor(Math.random() * vocales.length);

        silaba = letras[indice] + vocales[indiceVocal];
        botones[i].firstChild.data = silaba;
        i = i+1;
    }

    let indiceMaster = Math.floor(Math.random()*botones.length);
    let silabaMaster = botones[indiceMaster].firstChild.data;
    console.log(silabaMaster);
    buscarSilaba(silabaMaster)
}

const buscarSilaba=(silaba)=>{
    audio = new Audio("assets/sounds/silabas/"+silaba +'.mp3');
    audio.play();
}

const playVocal=()=>{
    audio.play();
}

bot1.addEventListener('click',funcambiar);
bot2.addEventListener('click',funcambiar);
bot3.addEventListener('click',funcambiar);
botMaster.addEventListener('click', playVocal);