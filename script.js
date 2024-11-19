document.getElementById("yes-btn").addEventListener("click", function() {
    // Adiciona flores na tela
    for (let i = 0; i < 30; i++) {
        createFlower();
    }

    // Redireciona após o efeito
    setTimeout(function() {
        window.location.href = "https://youtu.be/2WQqaMzbGsU"; // Substitua pelo link real do vídeo
    }, 3000); // Tempo de animação das flores (3 segundos)
});

document.getElementById("no-btn").addEventListener("click", function() {
    const noButton = this;
    const bodyWidth = window.innerWidth;
    const bodyHeight = window.innerHeight;

    // Gerar uma posição aleatória para o botão "Não"
    const randomX = Math.random() * (bodyWidth - noButton.offsetWidth);
    const randomY = Math.random() * (bodyHeight - noButton.offsetHeight);

    // Posicionar o botão aleatoriamente
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');

    // Posiciona a flor em um local aleatório
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    flower.style.left = `${x}px`;
    flower.style.top = `${y}px`;

    document.body.appendChild(flower);

    // Remove a flor após a animação
    setTimeout(() => {
        flower.remove();
    }, 3000); // Tempo da animação (3 segundos)
}
