document.querySelectorAll('.map-point').forEach(point => {
    point.addEventListener('click', function() {
        const descriptionBox = document.getElementById('description');
        descriptionBox.textContent = this.getAttribute('data-description');
        descriptionBox.classList.add('active');

        setTimeout(() => {
            descriptionBox.classList.remove('active');
        }, 5000); // Hide the description after 5 seconds
    });
});
