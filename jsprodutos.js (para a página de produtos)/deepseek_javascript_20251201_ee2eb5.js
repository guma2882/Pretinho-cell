// Dados dos produtos
const produtos = [
    {
        id: 1,
        nome: "iPhone 14 128GB",
        categoria: "telefones",
        descricao: "Smartphone Apple com tela Super Retina XDR, câmera dupla de 12MP, chip A15 Bionic.",
        preco: "R$ 4.899,00",
        imagem: "https://via.placeholder.com/300x300/1a365d/FFFFFF?text=iPhone+14"
    },
    {
        id: 2,
        nome: "Samsung Galaxy S23",
        categoria: "telefones",
        descricao: "Processador Snapdragon 8 Gen 2, câmera de 50MP, tela Dynamic AMOLED 2X de 6.1''.",
        preco: "R$ 3.799,00",
        imagem: "https://via.placeholder.com/300x300/1a365d/FFFFFF?text=Samsung+S23"
    },
    {
        id: 3,
        nome: "Motorola Edge 30",
        categoria: "telefones",
        descricao: "Tela OLED de 144Hz, câmera de 50MP, processador Snapdragon 778G+.",
        preco: "R$ 2.199,00",
        imagem: "https://via.placeholder.com/300x300/1a365d/FFFFFF?text=Motorola+Edge+30"
    },
    {
        id: 4,
        nome: "Capinha iPhone 14 Pro",
        categoria: "acessorios",
        descricao: "Capinha protetora para iPhone 14 Pro, material silicone, diversas cores.",
        preco: "R$ 89,90",
        imagem: "https://via.placeholder.com/300x300/1a365d/FFFFFF?text=Capinha+iPhone"
    },
    {
        id: 5,
        nome: "Película Vidro Temperado",
        categoria: "acessorios",
        descricao: "Película de vidro temperado 9H, compatível com diversos modelos de celular.",
        preco: "R$ 29,90",
        imagem: "https://via.placeholder.com/300x300/1a365d/FFFFFF?text=Película+Vidro"
    },
    {
        id: 6,
        nome: "Carregador Turbo 65W",
        categoria: "carregadores",
        descricao: "Carregamento rápido, compatível com múltiplos dispositivos, entrada USB-C.",
        preco: "R$ 89,90",
        imagem: "https://via.placeholder.com/300x300/1a365d/FFFFFF?text=Carregador+65W"
    },
    {
        id: 7,
        nome: "Carregador V8 Original",
        categoria: "carregadores",
        descricao: "Carregador V8 original Samsung, rápido e seguro para seu dispositivo.",
        preco: "R$ 79,90",
        imagem: "https://via.placeholder.com/300x300/1a365d/FFFFFF?text=Carregador+V8"
    },
    {
        id: 8,
        nome: "Cabo USB-C 2m",
        categoria: "cabos",
        descricao: "Cabo USB-C 2 metros, alta velocidade de transferência e carregamento.",
        preco: "R$ 39,90",
        imagem: "https://via.placeholder.com/300x300/1a365d/FFFFFF?text=Cabo+USB-C"
    },
    {
        id: 9,
        nome: "Cabo Lightning Original",
        categoria: "cabos",
        descricao: "Cabo Lightning original Apple, 1 metro, carregamento rápido e seguro.",
        preco: "R$ 99,90",
        imagem: "https://via.placeholder.com/300x300/1a365d/FFFFFF?text=Cabo+Lightning"
    },
    {
        id: 10,
        nome: "Fone JBL Tune 510BT",
        categoria: "fones",
        descricao: "Bluetooth, 40mm drivers, até 40h de bateria, design over-ear.",
        preco: "R$ 249,90",
        imagem: "https://via.placeholder.com/300x300/1a365d/FFFFFF?text=Fone+JBL"
    },
    {
        id: 11,
        nome: "Fone TWS Bluetooth 5.3",
        categoria: "fones",
        descricao: "Fones sem fio True Wireless, Bluetooth 5.3, estojo de carregamento.",
        preco: "R$ 149,90",
        imagem: "https://via.placeholder.com/300x300/1a365d/FFFFFF?text=Fone+TWS"
    },
    {
        id: 12,
        nome: "Pendrive 64GB USB 3.0",
        categoria: "diversos",
        descricao: "Pendrive 64GB, USB 3.0, alta velocidade de transferência.",
        preco: "R$ 59,90",
        imagem: "https://via.placeholder.com/300x300/1a365d/FFFFFF?text=Pendrive+64GB"
    },
    {
        id: 13,
        nome: "Cabo de Rede Cat6 5m",
        categoria: "diversos",
        descricao: "Cabo de rede Cat6, 5 metros, blindado, para internet de alta velocidade.",
        preco: "R$ 34,90",
        imagem: "https://via.placeholder.com/300x300/1a365d/FFFFFF?text=Cabo+Rede"
    },
    {
        id: 14,
        nome: "Suporte para Celular Carro",
        categoria: "acessorios",
        descricao: "Suporte magnético para celular no carro, ajustável, fixação no ar condicionado.",
        preco: "R$ 49,90",
        imagem: "https://via.placeholder.com/300x300/1a365d/FFFFFF?text=Suporte+Carro"
    },
    {
        id: 15,
        nome: "Antena Wi-Fi Externa",
        categoria: "diversos",
        descricao: "Antena Wi-Fi externa 9dBi, para aumentar o alcance da rede sem fio.",
        preco: "R$ 89,90",
        imagem: "https://via.placeholder.com/300x300/1a365d/FFFFFF?text=Antena+WiFi"
    }
];

// Função para renderizar os produtos
function renderProdutos(categoria = 'todos') {
    const container = document.getElementById('produtosContainer');
    
    if (!container) return;
    
    // Limpa o container
    container.innerHTML = '';
    
    // Filtra os produtos pela categoria selecionada
    let produtosFiltrados = produtos;
    if (categoria !== 'todos') {
        produtosFiltrados = produtos.filter(produto => produto.categoria === categoria);
    }
    
    // Renderiza os produtos filtrados
    produtosFiltrados.forEach(produto => {
        const produtoHTML = `
            <div class="produto-card" data-categoria="${produto.categoria}">
                <div class="produto-img">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                </div>
                <div class="produto-info">
                    <h3>${produto.nome}</h3>
                    <p class="produto-desc">${produto.descricao}</p>
                    <p class="produto-preco">${produto.preco}</p>
                    <a href="https://wa.me/5521983947129?text=Olá! Tenho interesse no produto: ${encodeURIComponent(produto.nome)}" class="btn-whatsapp" target="_blank">
                        <i class="fab fa-whatsapp"></i> Comprar pelo WhatsApp
                    </a>
                </div>
            </div>
        `;
        
        container.innerHTML += produtoHTML;
    });
    
    // Se não houver produtos na categoria
    if (produtosFiltrados.length === 0) {
        container.innerHTML = `
            <div class="no-products">
                <h3>Nenhum produto encontrado nesta categoria.</h3>
                <p>Tente selecionar outra categoria ou volte mais tarde.</p>
            </div>
        `;
    }
}

// Filtragem de produtos por categoria
document.addEventListener('DOMContentLoaded', function() {
    const filtroButtons = document.querySelectorAll('.filtro-btn');
    const produtosContainer = document.getElementById('produtosContainer');
    
    if (produtosContainer) {
        // Renderiza todos os produtos inicialmente
        renderProdutos();
        
        // Adiciona evento de clique nos botões de filtro
        filtroButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove a classe 'active' de todos os botões
                filtroButtons.forEach(btn => btn.classList.remove('active'));
                
                // Adiciona a classe 'active' ao botão clicado
                this.classList.add('active');
                
                // Obtém a categoria do botão clicado
                const categoria = this.getAttribute('data-categoria');
                
                // Renderiza os produtos da categoria selecionada
                renderProdutos(categoria);
            });
        });
    }
    
    // Menu mobile toggle (caso não esteja no main.js)
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
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
    }
});