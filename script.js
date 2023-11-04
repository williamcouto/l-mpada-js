const lamp_on = document.getElementById('lamp_on')
const lamp_off = document.getElementById('lamp_off')
const lampada = document.querySelector('img#lampada')
let bodyColor = document.querySelector('body')

lamp_on.addEventListener('click', ligar)
lamp_off.addEventListener('click', desligar)
lampada.addEventListener('click', quebrar )

function ligar(){
    if( !verifica_lampada()){
        lampada.setAttribute('src', './imagens/lampada-ligada.png')
        bodyColor.style.backgroundColor = '#ffff'
        bodyColor.style.color = '#000000'
    }
}

function verifica_lampada(){ //Verifica se a lampada foi clicada
    return lampada.src.indexOf('quebrada') > -1
}

function desligar(){
    if(!verifica_lampada()){
        lampada.setAttribute('src', './imagens/lampada-desligada.png')
        bodyColor.style.backgroundColor = '#131515'
        bodyColor.style.color = '#F8E16C'
    }
}

function quebrar(){
    lampada.setAttribute('src', './imagens/lampada-quebrada.png')
}