'use strict'

async function encontrarImagens() {
    const url=`https://api-json-server-8vpq.onrender.com/fotos`
    const response = await fetch(url)
    const date= await response.json()

    return date
}

function gerarSequencia(link){
    const arquivoFtos = document.getElementById('container')
    const novaImg = document.createElement('img')
    novaImg.src=link.imagem
    arquivoFtos.appendChild(novaImg)
}

async function determinarFiguras() {
    const imagens = await encontrarImagens()
    const arquivoFtos = document.getElementById('container')
    arquivoFtos.replaceChildren('')
    imagens.forEach(gerarSequencia)
    console.log(imagens)
}

determinarFiguras()

function gerarTexto(link){
    const arquivoDescricao = document.getElementById('texto')
    const descricao = document.createElement('h2')
    descricao.textContent = link.legenda
    arquivoDescricao.appendChild(descricao)
}

async function determinarTexto(){
    const texto = await encontrarTexto()
    const arquivoDescricao = document.getElementById('texto')
    arquivoDescricao.replaceChildren('')
    texto.forEach(gerarTexto)
    console.log(texto)
}