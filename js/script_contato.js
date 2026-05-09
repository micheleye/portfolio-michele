
// selectores dos elementos do formulário
const formulario = document.getElementById("formContato");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoMensagem = document.getElementById("mensagem");
const mensagemStatus = document.getElementById("mensagem-status");


// Evento de envio do formulário
formulario.addEventListener("submit", function(event) {
    // Impede o recarregamento da página
    event.preventDefault();

    // Remove espaços vazios
    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const mensagem = campoMensagem.value.trim();

    // Verifica se algum campo está vazio
    if(nome === "" || email === "" || mensagem === "") {
        mensagemStatus.textContent = "Preencha todos os campos.";

        // define a classe de erro (remove sucesso se existir)
        mensagemStatus.classList.remove("sucesso");
        mensagemStatus.classList.add("erro");

        return;
    }

    // Validação simples de e-mail
    if(!email.includes("@") || !email.includes(".")) {
        mensagemStatus.textContent = "Digite um e-mail válido.";

        return;
    }


    // SIMULAÇÃO DE ENVIO
    mensagemStatus.textContent = "Mensagem enviada com sucesso!";

    // define a classe de sucesso 
    mensagemStatus.classList.remove("erro");
    mensagemStatus.classList.add("sucesso");
    
    // Limpa os campos
    formulario.reset();

});