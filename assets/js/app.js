import "./components/heroComponent.js";
import "./components/aboutComponent.js";
import "./components/featuresComponent.js";
import "./components/interfaceComponent.js";
import "./components/donateComponent.js";
import "./components/downloadComponent.js";


const navLinks = document.querySelectorAll('.navlink');


// // Função para renderizar o conteúdo da home
// const homeLink = () => {
//     mainComponent.innerHTML = `
//         <hero-component></hero-component>
//         <about-component></about-component>
//         <interface-component></interface-component>
//         <features-component></features-component>
//         <donate-component></donate-component>
//         <download-component></download-component>
//     `;
// };

// // Configuração do evento para o botão Home
// document.getElementById('homeLink').addEventListener('click', homeLink);

// Adiciona a classe ativa nos links de navegação
const handleNavLinkActivation = () => {
    navLinks.forEach(navLink => {
        navLink.addEventListener('click', () => {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        });
    });
};
handleNavLinkActivation();

// Função para scroll suave
const smoothScroll = (target, duration) => {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = currentTime => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    };

    requestAnimationFrame(animation);
};

// Configuração de scroll suave para links âncora
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.getAttribute('href');
        smoothScroll(target, 200);
    });
});

// Scroll suave para o topo da página
const scrollToTop = () => {
    if (window.scrollTo) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        window.scroll(0, 0);
    }
};

document.getElementById("box-sharp").addEventListener("click", scrollToTop);
