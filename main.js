document.addEventListener('DOMContentLoaded', () => {
    const loadHeader = async () => {
        try {
            const headerResponse = await fetch('header.html');
            if (!headerResponse.ok) return;
            const headerHTML = await headerResponse.text();
            const headerElement = document.querySelector('header');
            if (!headerElement) return;

            headerElement.innerHTML = headerHTML;

            const navResponse = await fetch('nav.html');
            if (!navResponse.ok) return;
            const navHTML = await navResponse.text();
            const navElement = headerElement.querySelector('nav');
            if (navElement) {
                navElement.innerHTML = navHTML;
            }

            // Re-initialize hamburger menu functionality
            const hamburgerMenu = document.querySelector('.hamburger-menu');
            const nav = document.querySelector('nav');
            if (hamburgerMenu && nav) {
                hamburgerMenu.addEventListener('click', () => {
                    nav.classList.toggle('show');
                });
            }
        } catch (error) {
            console.error('Error loading header:', error);
        }
    };

    loadHeader();
});