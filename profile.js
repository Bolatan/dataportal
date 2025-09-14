document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profile-form');
    // =================================================================================
    // IMPORTANT: Hardcoded User ID for Demonstration
    // =================================================================================
    // This script uses a hardcoded user ID to demonstrate the profile update
    // functionality. In a real-world application, this ID should be dynamically
    // obtained from the server after a user logs in. This is typically handled
    // by storing a session token or user ID in localStorage or a cookie.
    //
    // To make this functional, you would need to implement a login system that
    // provides the client with the logged-in user's ID.
    // =================================================================================
    const userId = '60d5ec49e0b3f8a8c8b45678'; // Replace with a dynamic user ID after implementing authentication

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

    profileForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(profileForm);
        const data = Object.fromEntries(formData.entries());

        // Remove password from data if it's empty
        if (!data.password) {
            delete data.password;
        }

        fetch(`/api/user/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(updatedUser => {
            alert('Profile updated successfully!');
            // Optionally, refresh the form with the new data
            document.getElementById('username').value = updatedUser.username;
            document.getElementById('email').value = updatedUser.email;
            document.getElementById('fullName').value = updatedUser.fullName;
            document.getElementById('role').value = updatedUser.role;
            document.getElementById('password').value = '';
        })
        .catch(error => {
            console.error('Error updating profile:', error);
            alert('Failed to update profile.');
        });
    });
});
