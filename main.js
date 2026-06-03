const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Abre e fecha o menu ao clicar nas três barras
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Fecha o menu automaticamente quando clica em qualquer link interno
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});
