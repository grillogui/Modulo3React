let nome = window.document.getElementById("nome")
let endereço = document.querySelector("#endereço")
let pedido = document.querySelector("#pedido")
let nomeOK = false
let endereçoOK = false
let pedidoOK = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
endereço.style.width = "100%"

function validaNome() {
    let txt = document.querySelector("#txtNome")

    if (nome.value.length < 3){
        txt.innerHTML = "Nome Invalido"
        txt.style.color = 'red'
    }
    else {
        txt.innerHTML = "Nome valido"
        txt.style.color = "green"
        nomeOK = true
    }
}

function validaEndereço() {
    let txt = document.querySelector("#txtEndereço")

    if (endereço.value.length <= 10){
        txt.innerHTML = "Endereço Invalido"
        txt.style.color = 'red'
    }
    else {
        txt.innerHTML = "Endereço valido"
        txt.style.color = "green"
        endereçoOK = true
    }
}

function validaPedido() {
    let txt = document.querySelector("#txtPedido")

    if (pedido.value.length >= 100){
        txt.innerHTML = "Maximo 100 caracteres"
        txt.style.color = 'red'
        txt.style.display = "block"
    }
    else {
        txt.style.display = "none"
        pedidoOK = true
    }
}

function enviar(){
    if (nomeOK == true && endereçoOK == true && pedidoOK == true){
        alert ("Pedido enviado com sucesso!")
    }
    else {
        alert ("preencha o formulario corretamente!")
    }
}

function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height = "500px"
}

function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}