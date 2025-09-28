document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(sessionStorage.getItem('user'));

    // Redirect to login if not logged in (and not on login page)
    if (!user && !window.location.pathname.endsWith('login.html')) {
        window.location.href = 'login.html';
        return; // Stop execution
    }

    if (user) {
        // Role-based access control
        if (user.role === 'enumerator') {
            // Redirect if on an unauthorized page
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