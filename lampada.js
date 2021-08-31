"use strict"

const lampada = document.getElementById("lampada")

function lampadaInteira(){
    return lampada.src.includes("ligada")
}

function ligarLampada(){
    if(lampadaInteira()){

        lampada.src = "img/ligada.jpg"
    }
}

function desligarLampada(){
    if(lampadaInteira()){
      
    lampada.src = "img/desligada.jpg"
      
    }
}
function quebrarLampada(){
    lampada.src = "img/quebrada.jpg"
}

// eventos

document.getElementById("ligar").addEventListener("click", ligarLampada)
document.getElementById("desligar").addEventListener("click", desligarLampada)

lampada.addEventListener("mouseover",ligarLampada)
lampada.addEventListener("mouseout",desligarLampada)

lampada.addEventListener("dblclick",quebrarLampada)

