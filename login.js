document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = this.username.value;
    const password = this.password.value;
    const errorMessage = document.getElementById('error-message');

    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Login successful') {
            sessionStorage.setItem('loggedIn', 'true');
            sessionStorage.setItem('user', JSON.stringify(data.user));
            window.location.href = 'index.html';
        } else {
            errorMessage.textContent = data.message || 'Invalid username or password';
        }
    })
    .catch(error => {
        console.error('Error logging in:', error);
        errorMessage.textContent = 'An error occurred. Please try again later.';
    });
});
