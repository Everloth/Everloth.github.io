function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

function checkScreenWidth() {
    const screenWidth = window.innerWidth;
    const menu = document.querySelector('nav ul');

    if (screenWidth > 700) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', checkScreenWidth);

window.addEventListener('resize', checkScreenWidth);