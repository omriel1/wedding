document.querySelectorAll('.map-point').forEach(point => {
    point.addEventListener('click', function() {
        const descriptionBox = document.getElementById('description');
        descriptionBox.textContent = this.getAttribute('data-description');
        descriptionBox.style.display = 'block';
    });
});
