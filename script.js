let isDragging = false;
let startX, startY, initialX, initialY;

const mapContainer = document.querySelector('.map-container');
const mapImage = document.querySelector('.map-image');

mapContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initialX = mapImage.offsetLeft;
    initialY = mapImage.offsetTop;
    mapContainer.style.cursor = 'grabbing';
});

mapContainer.addEventListener('mouseleave', () => {
    isDragging = false;
    mapContainer.style.cursor = 'grab';
});

mapContainer.addEventListener('mouseup', () => {
    isDragging = false;
    mapContainer.style.cursor = 'grab';
});

mapContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.clientX - startX;
    const y = e.clientY - startY;
    mapImage.style.left = `${initialX + x}px`;
    mapImage.style.top = `${initialY + y}px`;
});

mapContainer.addEventListener('touchstart', (e) => {
    isDragging = true;
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    initialX = mapImage.offsetLeft;
    initialY = mapImage.offsetTop;
});

mapContainer.addEventListener('touchend', () => {
    isDragging = false;
});

mapContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const x = touch.clientX - startX;
    const y = touch.clientY - startY;
    mapImage.style.left = `${initialX + x}px`;
    mapImage.style.top = `${initialY + y}px`;
});

document.querySelectorAll('.map-point').forEach(point => {
    point.addEventListener('click', function () {
        const descriptionBox = document.getElementById('description');
        descriptionBox.textContent = this.getAttribute('data-description');
        descriptionBox.classList.add('active');

        setTimeout(() => {
            descriptionBox.classList.remove('active');
        }, 5000); // Hide the description after 5 seconds
    });
});
