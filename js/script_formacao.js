const botoes = document.querySelectorAll(".btn-toggle");

// Adiciona evento de clique a cada botão
botoes.forEach(function(botao) {

    botao.addEventListener("click", function() {
        const conteudo =
            botao.parentElement.nextElementSibling;

        conteudo.classList.toggle("ativo");
    });

});     