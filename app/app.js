let listaNum = []
let EleValor = pegandoElemento("#InputNum")
//Evento para quando precionar "Enter" o numero ser adicionado.
EleValor.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        adicionar()
    }
})
function adicionar() {
    limpartela()

    if (isaNumber(EleValor.value)){
        listaNum.push(Number(EleValor.value))
        mostrandoLista(listaNum)
        criandobotao("#htmlInput", "botaoApagar", "Apagar", "Apagar()")
        reiniciarInput()
    } else {
        
    }
}
function isaNumber(number){
    if (number == "" || number < 0 || number > 10){
        return false
    } else {
        return true
    }
}
function reiniciarInput() {
    EleValor.value = ''
    EleValor.focus()
}
function Apagar() {
    limpartela()
    let indexNum = listaNum.indexOf(Number(EleValor.value))
    if (EleValor.value == '') {
        listaNum.splice(-1, 1)
        mostrandoLista(listaNum)
    } else if (indexNum > -1) {
        listaNum.splice(indexNum, 1)
        mostrandoLista(listaNum)
    } else {
        mostrandoLista(listaNum)
        altereandoResultado("<br>Valor não encontrado na lista!")
    }
    if (listaNum.length == 0) {
        Reiniciar()
    }
    reiniciarInput()
}
function Calcular() {
    limpartela()
    mostrandoLista(listaNum)
    altereandoResultado(`<br>Foram cadastrados ${listaNum.length} números.`)
    let soma = 0
    for (let valor of listaNum) {
        soma += valor
    }
    altereandoResultado(`<br>A soma de todos os valores é ${soma}`)
    let media = soma / listaNum.length
    altereandoResultado(`<br>A media dos valores é ${media.toFixed(2)}`)
    //Procurando maior valor em listaNum
    let maiorValor = 0
    for (let i = 0; i < listaNum.length; i++) {//Ultilizei for para treinar lógiaca.
        if (listaNum[i] > maiorValor) {
            maiorValor = listaNum[i]
        }
    }
    altereandoResultado(`<br>O maior valor é ${maiorValor}`)
    let menorValor = Math.min(...listaNum)
    altereandoResultado(`<br>O menor valor é ${menorValor}`)
    criandobotao("#divBotao", "botaoReiniciar", "Reiniciar", "Reiniciar()")
    reiniciarInput()
}
function Reiniciar() {
    limpartela()
    listaNum = []
    apagandoEle("#botaoReiniciar")
    apagandoEle("#botaoApagar")
    apagandoEle("#botaoCalcular")
    reiniciarInput()
}
function apagandoEle(id) {
    if (pegandoElemento(id)) {
        let elemento = pegandoElemento(id)
        elemento.remove()
    }

}
function mostrandoLista(Lista) {
    altereandoResultado(`Lista: `)
    for (let indice in Lista) {
        if (Number(indice) == 0) {
            altereandoResultado(` ${Lista[indice]} `)
        } else {
            altereandoResultado(`| ${Lista[indice]} `)
        }
    }
    criandobotao("#divBotao", "botaoCalcular", "Calcular", "Calcular()")
}
function criandobotao(idEle, idbotao, nomeBotao, execute) {
    if (!document.querySelector("#" + idbotao)) {
        let botao = document.createElement("input")
        let EleRes = pegandoElemento(idEle)
        botao.setAttribute("id", idbotao)
        botao.setAttribute("onclick", execute)
        botao.setAttribute("value", nomeBotao)
        botao.setAttribute("type", "button")
        botao.setAttribute("class", "botao")
        EleRes.appendChild(botao)
    }

}
function pegandoElemento(id) {
    let i = document.querySelector(id)
    return i
}
function altereandoResultado(texto) {
    let EleRes = pegandoElemento("#Resultado")
    EleRes.innerHTML += texto
}
function limpartela() {
    let EleRes = pegandoElemento("#Resultado")
    EleRes.innerHTML = ""

}

