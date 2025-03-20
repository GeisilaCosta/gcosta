document.addEventListener("DOMContentLoaded", function () {
    // Animação de carregamento
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
        heroSection.classList.add("fade-in");
        setTimeout(() => {
            heroSection.classList.add("loaded");
        }, 500);
    }

    // Inicializa EmailJS e configura o formulário
    emailjs.init("3t_K6GvSa5r8242g7");

    const form = document.getElementById("contactForm");
    const statusMsg = document.getElementById("status-message");

    if (form && statusMsg) {
        form.addEventListener("submit", async function (event) {
            event.preventDefault();

            try {
                const response = await emailjs.sendForm(
                    "service_fkc1i6a",
                    "template_c4mc5up",
                    form
                );

                statusMsg.textContent = "E-mail enviado com sucesso!";
                statusMsg.style.color = "black";
                console.log("E-mail enviado:", response);
                form.reset();
            } catch (error) {
                statusMsg.textContent = "Erro ao enviar o e-mail. Tente novamente mais tarde.";
                statusMsg.style.color = "red";
                console.error("Erro ao enviar:", error);
            }
        });
    } else {
        console.error("Erro: Formulário ou elemento de status não encontrado!");
    }
});

// Função para alternar descrição
function toggleDescription(id, button) {
    const desc = document.getElementById(id);
    if (!desc) return;

    desc.classList.toggle("visible");
    button.innerText = desc.classList.contains("visible") ? "Ler menos" : "Ler mais";
}