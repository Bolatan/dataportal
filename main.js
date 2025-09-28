document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }

    const user = JSON.parse(sessionStorage.getItem('user'));

    // Redirect to login if not logged in (and not on login page)
    if (!user && !window.location.pathname.endsWith('login.html')) {
        window.location.href = 'login.html';
        return; // Stop execution
    }

    if (user) {
        const userName = document.getElementById('user-name');
        const userAvatar = document.getElementById('user-avatar');
        if (userName) {
            userName.textContent = user.fullName || user.username;
        }
        if (userAvatar) {
            // Assuming user.profilePicture will be a valid path or URL
            // userAvatar.src = user.profilePicture;
        }

        // Role-based access control
        if (user.role === 'enumerator') {
            // 1. Hide unauthorized nav links
            const navLinks = document.querySelectorAll('nav ul li a');
            const allowedHrefs = ['/profile', '/forms'];
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href && !allowedHrefs.includes(href)) {
                    link.parentElement.style.display = 'none';
                }
            });

            // 2. Redirect if on an unauthorized page
            const currentPage = window.location.pathname;
            const allowedPages = [
                '/forms.html', '/forms',
                '/profile.html', '/profile',
                '/science.html', '/science',
                '/private_form.html', '/private-form',
                '/eccde-form.html', '/eccde-form',
                '/jss.html', '/jss',
                '/sss.html', '/sss'
            ];

            if (!allowedPages.includes(currentPage)) {
                // If they land on a page like '/' (index.html) or '/users.html', redirect
                window.location.href = 'forms.html';
            }
        }
    }
});