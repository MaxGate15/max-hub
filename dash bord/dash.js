document.addEventListener('DOMContentLoaded', () => {
    console.log('Dashboard UI is ready!');

    // Example: Handle sidebar menu active state
    const menuLinks = document.querySelectorAll('.menu li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
