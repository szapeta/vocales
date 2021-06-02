let bot1 = document.getElementById("bot1");
let bot2 = document.getElementById("bot2");
let bot3 = document.getElementById("bot3");
let labC = document.getElementById("labcorrectas");
let labI = document.getElementById("labincorrectas");
let tiempo = document.getElementById('time');

let botMaster = document.getElementById("botMaster");

const urlParams = new URLSearchParams(window.location.search);
const consonante = urlParams.get('letra');
const tiempoParam = urlParams.get('seg');

let letras;
let tiempoMax;

if(consonante){
    letras = [consonante];
}else{
    letras = ["m", "p", "l", "s", "t", "d", "n", "f", "v", "b", "r", "j", "ñ", "c"];
}

if(tiempoParam){
    tiempoMax = tiempoParam;
}else{
    tiempoMax = 300;
}


let vocales = ["a", "e", "i", "o", "u"];
let botones = [bot1, bot2, bot3];
let audio;

let numCorrectas = 0;
let numIncorrectas = 0;
let contador = 0;
let silabaMaster = "";

//

class Timer {
    constructor () {
      this.isRunning = false;
      this.startTime = 0;
      this.overallTime = 0;
    }
  
    _getTimeElapsedSinceLastStart () {
      if (!this.startTime) {
        return 0;
      }
    
      return Date.now() - this.startTime;
    }
  
    start () {
      if (this.isRunning) {
        return console.error('Timer is already running');
      }
  
      this.isRunning = true;
  
      this.startTime = Date.now();
    }
  
    stop () {
      if (!this.isRunning) {
        return console.error('Timer is already stopped');
      }
  
      this.isRunning = false;
  
      this.overallTime = this.overallTime + this._getTimeElapsedSinceLastStart();
    }
  
    reset () {
      this.overallTime = 0;
  
      if (this.isRunning) {
        this.startTime = Date.now();
        return;
      }
  
      this.startTime = 0;
    }
  
    getTime () {
      if (!this.startTime) {
        return 0;
      }
  
      if (this.isRunning) {
        return this.overallTime + this._getTimeElapsedSinceLastStart();
      }
  
      return this.overallTime;
    }
  }
  
  const timer = new Timer();
  //timer.start();
  setInterval(() => {
    const timeInSeconds = Math.round(timer.getTime() / 1000);
    document.getElementById('time').innerText = timeInSeconds;
  }, 100)
//
const funcambiar = () =>{
    
    let tiemposeg = parseInt(tiempo.innerText)
    let tiemposegMax = parseInt(tiempoMax);

    if(tiemposeg >= tiemposegMax)
    {   
        timer.stop();
        document.getElementById('time').innerText = tiempoMax
        return;
    }

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

    
    timer.start();
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