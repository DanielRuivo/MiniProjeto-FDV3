document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  const mensagem = document.getElementById('mensagem');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const usuarioLogin = document.getElementById('usuarioLogin').value.trim();
    const senhaLogin = document.getElementById('senhaLogin').value.trim();
    const usuarioSalvo = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (!usuarioSalvo) {
      mensagem.textContent = 'Nenhum usuário cadastrado ainda.';
      mensagem.style.color = 'red';
      return;
    }

    if (usuarioLogin !== usuarioSalvo.usuario || senhaLogin !== usuarioSalvo.senha) {
      mensagem.textContent = 'Usuário ou senha incorretos.';
      mensagem.style.color = 'red';
      return;
    }

    mensagem.textContent = 'Login realizado com sucesso!';
    mensagem.style.color = 'green';

    // Redirecionar com base na árvore cadastrada
    const arvore = usuarioSalvo.arvore;

    setTimeout(() => {
      if (arvore === 'pau-brasil') {
        window.location.href = 'pagina_pau_brasil.html';
      } else if (arvore === 'castanheira') {
        window.location.href = 'pagina_castanheira.html';
      } else if (arvore === 'peroba-rosa') {
        window.location.href = 'pagina_peroba_rosa.html';
      } else {
        window.location.href = 'pagina_reflorestamento_confirmado.html'; // fallback
      }
    }, 1500);
  });
});