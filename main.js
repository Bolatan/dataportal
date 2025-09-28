document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');

    hamburgerMenu.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
        document.getElementById('user-name').textContent = user.fullName || user.username;
        document.getElementById('user-avatar').src = user.profilePicture;
    }
});