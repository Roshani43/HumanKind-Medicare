document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar ul');

    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });
});
