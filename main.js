document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    const logoutButton = document.getElementById('logout-button');

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            sessionStorage.clear();
            window.location.href = 'login.html';
        });
    }

    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
        const userName = document.getElementById('user-name');
        const userAvatar = document.getElementById('user-avatar');
        if (userName) {
            userName.textContent = user.fullName || user.username;
        }
        if (userAvatar) {
            userAvatar.src = user.profilePicture;
        }
    }
});