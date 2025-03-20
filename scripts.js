document.addEventListener("DOMContentLoaded", function () {
    // Animação de carregamento
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
        heroSection.style.opacity = "0";
        setTimeout(() => {
            heroSection.style.transition = "opacity 1s";
            heroSection.style.opacity = "1";
        }, 500);
    }

    // Inicializa EmailJS e configura o formulário
    emailjs.init("3t_K6GvSa5r8242g7");

    const form = document.getElementById("contactForm");
    const statusMsg = document.getElementById("status-message");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            emailjs.sendForm("service_fkc1i6a", "template_c4mc5up", form)
                .then((response) => {
                    if (statusMsg) {
                        statusMsg.textContent = "E-mail enviado com sucesso!";
                        statusMsg.style.color = "black";
                    }
                    console.log("E-mail enviado:", response);
                    form.reset();
                })
                .catch((error) => {
                    if (statusMsg) {
                        statusMsg.textContent = "Erro ao enviar o e-mail. Tente novamente mais tarde.";
                        statusMsg.style.color = "red";
                    }
                    console.error("Erro ao enviar:", error);
                });
        });
    } else {
        console.error("Erro: Formulário não encontrado!");
    }
});

// Função para alternar descrição
function toggleDescription(id, button) {
    const desc = document.getElementById(id);
    if (!desc) return;

    if (desc.style.display === "none" || desc.style.display === "") {
        desc.style.display = "block";
        button.innerText = "Ler menos"; 
    } else {
        desc.style.display = "none";
        button.innerText = "Ler mais";
    }
}
