document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(sessionStorage.getItem('user'));

    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    // Role-based access control for form cards
    if (user.role === 'enumerator') {
        const formCards = document.querySelectorAll('.card');
        formCards.forEach(card => {
            const title = card.querySelector('h3').textContent;
            if (title !== 'Science Form') {
                card.style.display = 'none';
            }
        });
    }
});