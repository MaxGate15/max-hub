// Handle "Learn More" button click
document.getElementById('learn-more').addEventListener('click', () => {
    alert('Thank you for your interest! Learn more about Starbucks.');
});

// Add hover effect to product images dynamically
const products = document.querySelectorAll('.product');

products.forEach(product => {
    product.addEventListener('mouseenter', () => {
        product.style.transform = 'scale(1.2)';
        product.style.transition = 'transform 0.3s';
    });

    product.addEventListener('mouseleave', () => {
        product.style.transform = 'scale(1)';
    });
});
