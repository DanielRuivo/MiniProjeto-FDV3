document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const usuario = document.getElementById('usuario').value.trim();
        const senha = document.getElementById('senha').value.trim();
        const arvoreSelecionada = document.querySelector('input[name="arvore"]:checked');

        if (!usuario || !senha || !arvoreSelecionada) {
            alert('Preencha todos os campos e selecione uma árvore.');
            return;
        }

        const dados = {
            usuario: usuario,
            senha: senha,
            arvore: arvoreSelecionada.value,
        };

        // Armazenando localmente (simulação de cadastro)
        localStorage.setItem('usuarioCadastro', JSON.stringify(dados));

        alert(`Cadastro realizado com sucesso!\nÁrvore escolhida: ${arvoreSelecionada.value}`);

        window.location.href = 'cadastro_reflorestamento.html';

        form.reset();
    });
});     