document.getElementById('contaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numeroPessoas = parseInt(document.getElementById('numeroPessoas').value);
    const valorTotal = parseFloat(document.getElementById('valorTotal').value);
    const taxaServico = parseFloat(document.getElementById('taxaServico').value);
    const metodoPagamento = document.getElementById('metodoPagamento').value;

    const valorComTaxa = valorTotal + (valorTotal * (taxaServico / 100));
    const valorFinal = calcularValorComDesconto(valorComTaxa, metodoPagamento);
    const valorPorPessoa = valorFinal / numeroPessoas;

    exibirResultado(numeroPessoas, valorTotal, taxaServico, metodoPagamento, valorFinal, valorPorPessoa);
});

function calcularValorComDesconto(valorTotal, metodoPagamento) {
    const desconto = 0.10; // 10% de desconto
    if (metodoPagamento.toLowerCase() === 'dinheiro' || metodoPagamento.toLowerCase() === 'pix') {
        return valorTotal * (1 - desconto); // Aplica desconto
    }
    return valorTotal; // Sem desconto
}

function exibirResultado(numeroPessoas, valorTotal, taxaServico, metodoPagamento, valorFinal, valorPorPessoa) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.remove('hidden');
    resultadoDiv.innerHTML = `
        <h2>Resultado</h2>
        <p>Número de pessoas na mesa: ${numeroPessoas}</p>
        <p>Valor total da conta: R$${valorTotal.toFixed(2)}</p>
        <p>Taxa de serviço: ${taxaServico.toFixed(2)}%</p>
        <p>Forma de pagamento: ${metodoPagamento}</p>
        <p>Valor total a ser pago (incluindo taxa): R$${valorFinal.toFixed(2)}</p>
        <p>Valor por pessoa: R$${valorPorPessoa.toFixed(2)}</p>
    `;
}