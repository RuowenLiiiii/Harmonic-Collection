document.querySelectorAll('.grid-item img').forEach(img => {
    const originalSrc = img.src;
    const hoverSrc = img.getAttribute('data-hover');

    img.addEventListener('mouseover', () => {
        img.src = hoverSrc;
    });

    img.addEventListener('mouseout', () => {
        img.src = originalSrc;
    });
});