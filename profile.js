document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profile-form');
    const pageTitle = document.querySelector('h1');
    const submitButton = document.querySelector('button[type="submit"]');

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    let isEditMode = userId !== null;

    if (isEditMode) {
        pageTitle.textContent = 'Edit User';
        submitButton.textContent = 'Update Profile';

        // Fetch user data and populate the form
        fetch(`/api/user/${userId}`)
            .then(response => response.json())
            .then(user => {
                document.getElementById('username').value = user.username;
                document.getElementById('email').value = user.email;
                document.getElementById('fullName').value = user.fullName;
                document.getElementById('role').value = user.role;
            })
            .catch(error => console.error('Error fetching user data:', error));
    } else {
        pageTitle.textContent = 'Create User';
        submitButton.textContent = 'Create Profile';
    }

    profileForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const user = JSON.parse(sessionStorage.getItem('user'));
        const actorId = user ? user.id : null;

        if (!actorId) {
            alert('Authentication error. Please log in again.');
            return;
        }

        const formData = new FormData(profileForm);
        const data = Object.fromEntries(formData.entries());

        // Remove password from data if it's empty
        if (!data.password) {
            delete data.password;
        }

        const method = isEditMode ? 'PUT' : 'POST';
        const url = isEditMode ? `/api/user/${userId}` : '/api/user';

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'x-user-id': actorId
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.message || `HTTP error! status: ${response.status}`);
                });
            }
            return response.json();
        })
        .then(responseData => {
            alert(`Profile ${isEditMode ? 'updated' : 'created'} successfully!`);
            window.location.href = 'users.html';

        })
        .catch(error => {
            console.error(`Error ${isEditMode ? 'updating' : 'creating'} profile:`, error);
            alert(`Failed to ${isEditMode ? 'update' : 'create'} profile: ${error.message}`);
        });
    });
});
