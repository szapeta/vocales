let bot1 = document.getElementById("bot1");
let bot2 = document.getElementById("bot2");
let bot3 = document.getElementById("bot3");
let labC = document.getElementById("labcorrectas");
let labI = document.getElementById("labincorrectas");

let botMaster = document.getElementById("botMaster");

let letras = ["m", "p", "l", "s", "t", "d", "n"];
let vocales = ["a", "e", "i", "o", "u"];
let botones = [bot1, bot2, bot3];
let audio;

let numCorrectas = 0;
let numIncorrectas = 0;
let contador = 0;
let silabaMaster = "";

const funcambiar = () =>{

    let i = 0;
    let max = botones.length;
    let silaba;


    if(contador > 0){

        let idSelected = event.srcElement.id;
        silabaSelected = document.getElementById(idSelected).firstChild.data;
        
        if(silabaSelected == silabaMaster){
            numCorrectas = numCorrectas +1;
        }else{
            numIncorrectas = numIncorrectas +1;
        }

        labC.firstChild.data = numCorrectas;
        labI.firstChild.data = numIncorrectas;
        
    }

    contador = contador +1;

    while(i<max){

        let indiceConsonante = Math.floor(Math.random() * letras.length);
        let indiceVocal = Math.floor(Math.random() * vocales.length);
        silaba = letras[indiceConsonante] + vocales[indiceVocal];
        
        botones[i].firstChild.data = silaba;
        i = i+1;
    }

    let indiceMaster = Math.floor(Math.random() * max);
    silabaMaster = botones[indiceMaster].firstChild.data;
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