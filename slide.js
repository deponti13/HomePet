


document.addEventListener("DOMContentLoaded", () => {
    const serviceBoxes = document.querySelectorAll(".servicos-box");

    serviceBoxes.forEach(box => {
        box.addEventListener("click", () => {
            const isActive = box.classList.contains("active");

            // Fecha todos os cards antes de abrir o clicado
            serviceBoxes.forEach(b => b.classList.remove("active"));

            // Abre apenas o card clicado (se ainda não estiver ativo)
            if (!isActive) {
                box.classList.add("active");
            }
        });
    });
});





const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Vai para a próxima imagem
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Volta para a imagem anterior
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Troca automaticamente a imagem a cada 5 segundos
setInterval(showNextImage, 5000);

// Botões de navegação (se necessário)
const nextButton = document.querySelector('.carousel-button-next');
const prevButton = document.querySelector('.carousel-button-prev');

if (nextButton && prevButton) {
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
}




