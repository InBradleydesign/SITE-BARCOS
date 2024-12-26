const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#imagens-do-barco");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // Remove a classe 'selected' de todos os botões
        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });

        // Adiciona a classe 'selected' no botão clicado
        const button = e.currentTarget;
        button.querySelector(".color").classList.add("selected");

        // Obtém o ID do botão para alterar a imagem
        const id = button.getAttribute("id");

        // Adiciona a classe 'changing' apenas na imagem
        image.classList.add("changing");

        // Atualiza o background-image
        image.style.backgroundImage = `url('Imagens/Personaliza/barco_${id}.png')`;

        // Remove a classe 'changing' após a animação
        setTimeout(() => {
            image.classList.remove("changing");
        }, 500); // Tempo em milissegundos (compatível com o CSS)
    });
});
