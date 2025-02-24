// Posição do mouse
const coords = { x: 0, y: 0 };

// Criando as bolinhas do rastro dinamicamente
const numCircles = 8; // Reduzi o número de bolinhas
const circles = [];
const baseSize = 35; // Diminuí o tamanho base do cursor

for (let i = 0; i < numCircles; i++) {
    let circle = document.createElement("div");
    circle.classList.add("circle");

    // Tamanhos decrescentes para suavizar o rastro
    let size = baseSize * (1 - i * 0.1);
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    document.body.appendChild(circle);
    circles.push(circle);
}

// Evento de movimento do mouse
window.addEventListener("mousemove", (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;
    animateCircles();
});

// Função para suavizar o rastro
function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach((circle, index) => {
        setTimeout(() => {
            circle.style.transform = `translate(${x - baseSize / 2}px, ${y - baseSize / 2}px)`;
        }, index * 18); // Pequeno delay para o efeito de rastro
    });
}
