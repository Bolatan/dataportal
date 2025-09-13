document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = this.username.value;
    const password = this.password.value;
    const errorMessage = document.getElementById('error-message');

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const user = data.users.find(u => u.username === username && u.password === password);
            if (user) {
                sessionStorage.setItem('loggedIn', 'true');
                window.location.href = 'index.html';
            } else {
                errorMessage.textContent = 'Invalid username or password';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            errorMessage.textContent = 'An error occurred. Please try again later.';
        });
});
