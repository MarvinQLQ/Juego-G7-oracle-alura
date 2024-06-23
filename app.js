let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];


condicionesIniciales();


function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroUsuario === numeroSecreto){
        asignarTexto('p',`Acertaste el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}` );
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else {
          if (numeroUsuario < numeroSecreto){
            asignarTexto('p','El numero es mayor' )
          }else{
            asignarTexto('p','El numero es menor')
          } 
          intentos++; 
          limpiarCampo();
    }

    return
}

function asignarTexto (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = (texto);
    return;
}

function generarNumeroSecreto() {
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTexto('p','Haz realizado todos los sorteos posibles');
    }else{

        if(listaNumerosSorteados.includes(numeroGenerado)){
        
            return generarNumeroSecreto();
        
        }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function limpiarCampo(){
    document.querySelector('#valorUsuario').value = '';
    
}
function condicionesIniciales(){
    asignarTexto('h1','Juego Del Numero Secreto');
    asignarTexto('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    
    intentos = 1;
    
}

function reiniciarJuego(){

    limpiarCampo();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
    
    


}
