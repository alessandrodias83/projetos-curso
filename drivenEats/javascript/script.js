let pratoSelecionado = false;
let bebidaSelecionada = false;
let sobremesaSelecionada = false;

let pratoSelecionadoTexto = "";
let bebidaSelecionadaTexto = "";
let sobremesaSelecionadaTexto = "";

let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;

function selecionar(tipo, elemento) {
    const botoes = document.querySelectorAll(`#${tipo}s .opcao`);

    botoes.forEach(botao => botao.classList.remove('selecionado'));

    elemento.classList.add('selecionado');

    if (tipo === 'prato') {
        pratoSelecionado = true;
        pratoSelecionadoTexto = elemento.textContent;
        precoPrato = parseFloat(elemento.getAttribute("data-preco"));
    }

    if (tipo === 'bebida') {
        bebidaSelecionada = true;
        bebidaSelecionadaTexto = elemento.textContent;
        precoBebida = parseFloat(elemento.getAttribute("data-preco"));
    }

    if (tipo === 'sobremesa') {
        sobremesaSelecionada = true;
        sobremesaSelecionadaTexto = elemento.textContent;
        precoSobremesa = parseFloat(elemento.getAttribute("data-preco"));
    }

    ativarBotao()

}

function ativarBotao() {
    const botao = document.getElementById('fechar-pedido');

    if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
        botao.disabled = false;
        botao.classList.add('ativo');
        botao.textContent = "Fechar pedido"
    } else {
        botao.disabled = true;
        botao.classList.remove('ativo');
    }
}

function mostrarResumo() {
    const overlay = document.getElementById('resumo-overlay');

    document.getElementById('resumo-prato').textContent = `Prato: ${pratoSelecionadoTexto}`;
    document.getElementById('resumo-bebida').textContent = `Bebida: ${bebidaSelecionadaTexto}`;
    document.getElementById('resumo-sobremesa').textContent = `Sobremesa: ${sobremesaSelecionadaTexto}`;
}