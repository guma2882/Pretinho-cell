// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.getElementById('navbar');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Altera o ícone do botão
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Fecha o menu quando clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Adiciona efeito de rolagem suave para todos os links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Verifica se é um link âncora interno
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Adiciona classe ativa ao menu conforme a rolagem
    function highlightMenuOnScroll() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.id;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
            if (href && href.includes(currentSectionId)) {
                link.classList.add('active');
            }
        });
    }
    
    // Executa a função quando a página carrega e na rolagem
    window.addEventListener('scroll', highlightMenuOnScroll);
    window.addEventListener('load', highlightMenuOnScroll);
    
    // Botão do WhatsApp - adiciona mensagem padrão
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
    whatsappButtons.forEach(button => {
        // Remove o evento padrão se já tiver um texto personalizado
        const currentHref = button.getAttribute('href');
        if (!currentHref.includes('text=')) {
            const productName = button.closest('.produto-info').querySelector('h3').textContent;
            const whatsappMessage = `Olá! Gostaria de mais informações sobre o produto: ${productName}`;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            button.setAttribute('href', `https://wa.me/5521983947129?text=${encodedMessage}`);
        }
    });
});