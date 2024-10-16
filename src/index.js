document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const mesaSelecionada = document.getElementById('mesa').value;
    const numeroPessoas = parseInt(document.getElementById('numPessoas').value);
    const valorTotal = parseFloat(document.getElementById('valorConta').value);
    const metodoPagamento = document.getElementById('metodoPagamento').value;

    // Supondo 10% de taxa
    const valorComTaxa = valorTotal * 1.1; 
    const valorFinal = calcularValorComDesconto(valorComTaxa, metodoPagamento);
    const valorPorPessoa = valorFinal / numeroPessoas;

    exibirResultado(mesaSelecionada, numeroPessoas, valorTotal, valorComTaxa, valorFinal, valorPorPessoa);
});

function calcularValorComDesconto(valorTotal, metodoPagamento) {
    const desconto = 0.10; // 10% de desconto
    if (metodoPagamento.toLowerCase() === 'dinheiro' || metodoPagamento.toLowerCase() === 'pix') {
        return valorTotal * (1 - desconto); // Aplica desconto
    }
    return valorTotal; // Sem desconto
}

function exibirResultado(mesaSelecionada, numeroPessoas, valorTotal, valorComTaxa, valorFinal, valorPorPessoa) {
    document.getElementById('resultadoMesa').innerText = `Selecionada: ${mesaSelecionada} `;
    document.getElementById('resultadoPessoas').innerText = numeroPessoas;
    document.getElementById('resultadoTotal').innerText = valorTotal.toFixed(2);
    document.getElementById('resultadoTaxa').innerText = valorComTaxa.toFixed(2);
    document.getElementById('resultadoFinal').innerText = valorFinal.toFixed(2);
    document.getElementById('resultadoPorPessoa').innerText = valorPorPessoa.toFixed(2);
    
    const modal = document.getElementById('modal');
    modal.style.display = 'block'; // Mostra o modal
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Esconde o modal
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}