function trocarTitulo() {
    let title = document.getElementById("title");

    let summaryAcademico = document.getElementById("academico");
    let summaryPessoal = document.getElementById("pessoal");
    let summaryProfissional = document.getElementById("profissional");

    summaryAcademico.addEventListener('click', () => {
        title.innerHTML = "Acadêmico";
    })

    summaryPessoal.addEventListener('click', () => {
        title.innerHTML = "Pessoal"
    })

    summaryProfissional.addEventListener('click', () => {
        title.innerHTML - "Profissional"
    })
}

trocarTitulo();