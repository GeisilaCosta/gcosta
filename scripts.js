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

    // Inicializa AOS com configurações personalizadas
    AOS.init({
        duration: 800,
        easing: 'ease-out-quart',
        once: true,
        offset: 120
    });

    // Efeito 3D para a imagem na seção "Sobre Mim"
    const img3d = document.querySelector('.img-3d');
    if (img3d) {
        img3d.addEventListener('mousemove', (e) => {
            if (img3d.closest('.aos-animate')) { // Só ativa após animação AOS
                const container = img3d.getBoundingClientRect();
                const xAxis = (container.width / 2 - (e.clientX - container.left)) / 15;
                const yAxis = (container.height / 2 - (e.clientY - container.top)) / 15;
                img3d.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${-yAxis}deg) scale(1.05)`;
            }
        });

        img3d.addEventListener('mouseleave', () => {
            img3d.style.transform = '';
        });
    }
});

// Função para alternar descrição (mantida igual)
function toggleDescription(id, button) {
    const desc = document.getElementById(id);
    if (!desc) return;

    desc.classList.toggle("visible");
    button.innerText = desc.classList.contains("visible") ? "Ler menos" : "Ler mais";
}