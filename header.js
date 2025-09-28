document.addEventListener('DOMContentLoaded', () => {
    const headerHTML = `
        <header>
            <div class="header-top">
                <a href="/"><img src="surveylogo.jpeg" alt="Lagos State Logo"></a>
                <h1>Lagos State EDUCATION MANAGEMENT INFORMATION SYSTEM (EMIS)</h1>
                <button class="hamburger-menu">
                    &#9776;
                </button>
                <div id="user-profile">
                    <img id="user-avatar" src="" alt="User Avatar">
                    <span id="user-name"></span>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Dashboard</a></li>
                    <li><a href="/users">Users</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/reports">Reports</a></li>
                    <li><a href="/audit-log">Audit Log</a></li>
                    <li><a href="/forms">School Census Forms</a></li>
                    <li><button id="logout-button">Logout</button></li>
                </ul>
            </nav>
        </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);

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
            // userAvatar.src = user.profilePicture || 'default-avatar.png';
        }

        // Role-based access control for navigation
        if (user.role === 'enumerator') {
            const navLinks = document.querySelectorAll('nav ul li a');
            const allowedHrefs = ['/profile', '/forms', '/']; // Enumerators should see profile and forms
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href && !allowedHrefs.includes(href)) {
                    link.parentElement.style.display = 'none';
                }
            });
             const usersLink = document.querySelector('a[href="/users"]');
            if(usersLink) usersLink.parentElement.style.display = 'none';
            const reportsLink = document.querySelector('a[href="/reports"]');
            if(reportsLink) reportsLink.parentElement.style.display = 'none';
            const auditLink = document.querySelector('a[href="/audit-log"]');
            if(auditLink) auditLink.parentElement.style.display = 'none';
        }
    }
});