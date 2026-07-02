// Se a lista de ideias não existir na memória do navegador, cria uma vazia
if (!window.top.listaCompartilhada) {
    window.top.listaCompartilhada = [];
}

// Se o resultado do sorteio não existir, cria um vazio
if (!window.top.resultadoCompartilhado) {
    window.top.resultadoCompartilhado = "";
}