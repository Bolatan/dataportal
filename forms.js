document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(sessionStorage.getItem('user'));

    if (!user || (user.role !== 'enumerator' && user.role !== 'admin')) {
        alert('You do not have permission to view this page.');
        window.location.href = '/';
        return;
    }

    console.log('Forms page loaded successfully for user:', user.username);
});