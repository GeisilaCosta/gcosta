// Animação de carregamento
document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.querySelector(".hero-section");
    heroSection.style.opacity = "0";
    setTimeout(() => {
      heroSection.style.transition = "opacity 1s";
      heroSection.style.opacity = "1";
    }, 500);
});

// Inicializa EmailJS e configura o formulário
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("3t_K6GvSa5r8242g7"); // Inicializa EmailJS

    let form = document.getElementById("contactForm");

    if (!form) {
        console.error("Erro: Formulário não encontrado!");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm("service_fkc1i6a", "template_c4mc5up", form)
            .then(function (response) {
                let statusMsg = document.getElementById("status-message");
                if (statusMsg) {
                    statusMsg.textContent = "E-mail enviado com sucesso!";
                    statusMsg.style.color = "black";
                }
                console.log("E-mail enviado:", response);
                
                // Limpa os campos do formulário após o envio
                form.reset();

            }, function (error) {
                let statusMsg = document.getElementById("status-message");
                if (statusMsg) {
                    statusMsg.textContent = "Erro ao enviar o e-mail. Tente novamente mais tarde.";
                    statusMsg.style.color = "red";
                }
                console.error("Erro ao enviar:", error);
            });
    });
});

function toggleDescription(id, button) {
    var desc = document.getElementById(id);
    if (desc.style.display === "none") {
      desc.style.display = "block";
      button.innerText = "Ler menos"; 
    } else {
      desc.style.display = "none";
      button.innerText = "Ler mais";
    }
  }