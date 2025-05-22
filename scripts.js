 document.addEventListener("DOMContentLoaded", function () {
    // Animação de carregamento
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
        heroSection.classList.add("fade-in");
        setTimeout(() => {
            heroSection.classList.add("loaded");
        }, 200);
    }

    // Alternar entre frente e verso dos diplomas
document.querySelectorAll('.diploma-carousel').forEach(carousel => {
  const images = carousel.querySelectorAll('img');
  if (images.length > 1) {
    images[1].style.display = 'none';
    
    carousel.addEventListener('click', () => {
      images.forEach(img => {
        img.style.display = img.style.display === 'none' ? 'block' : 'none';
      });
    });
    
    // Adiciona indicação de que é clicável
    carousel.style.cursor = 'pointer';
    carousel.title = 'Clique para ver o verso';
  }
});

    // Texto rotativo para as profissões
class TxtRotate {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  }
  tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(() => this.tick(), delta);
  }
}

// Inicialização quando o DOM estiver carregado
window.onload = function() {
  const elements = document.getElementsByClassName('txt-rotate');
  for (let i=0; i<elements.length; i++) {
    const toRotate = elements[i].getAttribute('data-rotate');
    const period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
};

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