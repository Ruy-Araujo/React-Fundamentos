import React from 'react'

export default function Primeiro() {
    // Esse é o elemento que sera renderizado na tela.
    // ele pode conter diversas variaveis para ficar dinamico.

    const mensagem = "Minha mensagem"

    // È preciso usar {} para declarar a variavel como string
    return <h1>{ mensagem }</h1>
}