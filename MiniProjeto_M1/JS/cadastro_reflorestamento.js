document.addEventListener('DOMContentLoaded', function () {
    const botao = document.querySelector('button');
    const mensagem = document.getElementById('mensagem');

    botao.addEventListener('click', function () {
        const numero = parseInt(document.getElementById('numero').value.trim(), 10);
        const especie = document.getElementById('arvore').value;

        if (isNaN(numero) || numero <= 0) {
            mensagem.textContent = 'Digite um número válido de árvores plantadas.';
            mensagem.style.color = 'red';
            return;
        }

        if (especie === 'nenhum') {
            mensagem.textContent = 'Por favor, selecione uma espécie de árvore.';
            mensagem.style.color = 'red';
            return;
        }

        const acaoReflorestamento = {
            quantidade: numero,
            especie: especie,
        };

        const acoesSalvas = JSON.parse(localStorage.getItem('acoesReflorestamento')) || [];
        acoesSalvas.push(acaoReflorestamento);
        localStorage.setItem('acoesReflorestamento', JSON.stringify(acoesSalvas));

        mensagem.textContent = `Cadastro realizado: ${numero} árvore(s) da espécie ${especie} foram registradas.`;
        mensagem.style.color = 'green';

        document.getElementById('numero').value = '';
        document.getElementById('arvore').value = 'nenhum';
    });
});