let isDragging = false;
let startX, startY, initialScrollLeft, initialScrollTop;

const mapContainer = document.querySelector('.map-container');

mapContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - mapContainer.offsetLeft;
    startY = e.pageY - mapContainer.offsetTop;
    initialScrollLeft = mapContainer.scrollLeft;
    initialScrollTop = mapContainer.scrollTop;
});

mapContainer.addEventListener('mouseleave', () => {
    isDragging = false;
});

mapContainer.addEventListener('mouseup', () => {
    isDragging = false;
});

mapContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - mapContainer.offsetLeft;
    const y = e.pageY - mapContainer.offsetTop;
    const walkX = x - startX;
    const walkY = y - startY;
    mapContainer.scrollLeft = initialScrollLeft - walkX;
    mapContainer.scrollTop = initialScrollTop - walkY;
});

mapContainer.addEventListener('touchstart', (e) => {
    isDragging = true;
    const touch = e.touches[0];
    startX = touch.pageX - mapContainer.offsetLeft;
    startY = touch.pageY - mapContainer.offsetTop;
    initialScrollLeft = mapContainer.scrollLeft;
    initialScrollTop = mapContainer.scrollTop;
});

mapContainer.addEventListener('touchend', () => {
    isDragging = false;
});

mapContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const touch = e.touches[0];
    const x = touch.pageX - mapContainer.offsetLeft;
    const y = touch.pageY - mapContainer.offsetTop;
    const walkX = x - startX;
    const walkY = y - startY;
    mapContainer.scrollLeft = initialScrollLeft - walkX;
    mapContainer.scrollTop = initialScrollTop - walkY;
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
