document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formulario');
  const mensagem = document.getElementById('mensagem');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const arvoreSelecionada = document.querySelector('input[name="arvore"]:checked');
    const numero = parseInt(document.getElementById('numero').value.trim(), 10);
    const especie = document.getElementById('arvore').value;

    // Validações completas
    if (!usuario || !senha || !arvoreSelecionada) {
      mensagem.textContent = 'Preencha todos os dados do cadastro corretamente.';
      mensagem.style.color = 'red';
      return;
    }

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

    // Salva dados de usuário
    const dados = {
      usuario: usuario,
      senha: senha,
      arvore: arvoreSelecionada.value,
    };
    localStorage.setItem('usuarioLogado', JSON.stringify(dados));

    // Salva ação de reflorestamento
    const acaoReflorestamento = {
      usuario: usuario,
      quantidade: numero,
      especie: especie,
      dataHora: new Date().toLocaleString()
    };

    const acoesSalvas = JSON.parse(localStorage.getItem('acoesReflorestamento')) || [];
    acoesSalvas.push(acaoReflorestamento);
    localStorage.setItem('acoesReflorestamento', JSON.stringify(acoesSalvas));

    mensagem.textContent = `Registro completo feito com sucesso! ${numero} árvore(s) da espécie ${especie} plantadas por ${usuario}.`;
    mensagem.style.color = 'green';

    form.reset();
    document.getElementById('arvore').value = 'nenhum';

    setTimeout(() => {
      window.location.href = 'tela_de_login.html';
    }, 2000);
  });
});
