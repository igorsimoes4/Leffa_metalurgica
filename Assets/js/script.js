//JS para menu Mobile
// JavaScript para alternar a visibilidade do menu mobile ao clicar no botão de alternância
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileNavbar = document.getElementById('mobile-navbar');

mobileMenuToggle.addEventListener('click', () => {
    mobileNavbar.style.display = mobileNavbar.style.display === 'block' ? 'none' : 'block';
});

// Obtém o URL atual da página
var currentUrl = window.location.pathname;

// Obtém todos os links no menu
var menuLinks = document.querySelectorAll('#mobile-menu .mobile-nav-link');

// Itera sobre os links do menu
menuLinks.forEach(function (link) {
    // Verifica se o URL do link corresponde ao URL atual da página
    if (link.getAttribute('href') === currentUrl) {
        // Adiciona a classe 'active' ao link da página atual
        link.classList.add('active');
    }
});

// <!-- Js para menu normal -->

// Obtém o URL atual da página
var currentUrl = window.location.pathname;

// Obtém todos os links no menu
var menuLinks = document.querySelectorAll('#navbar .nav-link');

// Itera sobre os links do menu
menuLinks.forEach(function(link) {
    // Verifica se o URL do link corresponde ao URL atual da página
    if (link.getAttribute('href') === currentUrl) {
        // Adiciona a classe 'active' ao link da página atual
        link.classList.add('active');
    }
});