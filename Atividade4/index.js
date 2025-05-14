document.getElementById("formAgendamento").addEventListener("submit", function (event) {
    event.preventDefault();

    const campos = [
        "nome", "sobrenome", "cpf", "nascimento",
        "telefone", "cep", "endereco", "clinica",
        "especialidade", "dataAgendamento", "horaAgendamento"
    ];

    let erro = "";
    const mensagemErro = document.getElementById("mensagemErro");
    const mensagemSucesso = document.getElementById("mensagemSucesso");

    // Limpa mensagens
    mensagemErro.textContent = "";
    mensagemSucesso.textContent = "";

    campos.forEach(id => {
        const valor = document.getElementById(id).value.trim();
        if (!valor && !erro) {
            erro = "Por favor, preencha todos os campos obrigatórios.";
        }
    });

    if (!erro) {
        const data = document.getElementById("dataAgendamento").value;
        const hora = document.getElementById("horaAgendamento").value;
        const dataHoraAgendada = new Date(`${data}T${hora}`);
        const agora = new Date();

        if (dataHoraAgendada <= agora) {
            erro = "A data e hora do agendamento devem ser futuras.";
        }
    }

    if (erro) {
        mensagemErro.textContent = erro;
    } else {
        mensagemSucesso.textContent = "Envio concluído com sucesso!";
        document.getElementById("formAgendamento").reset();
    }
});