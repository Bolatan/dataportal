document.addEventListener('DOMContentLoaded', () => {
    const usersTable = document.getElementById('users-table').getElementsByTagName('tbody')[0];
    const addUserBtn = document.getElementById('add-user-btn');
    const user = JSON.parse(sessionStorage.getItem('user'));
    const userId = user ? user.id : null;

    if (!userId) {
        alert('You must be logged in as an admin to view this page.');
        window.location.href = 'login.html';
        return;
    }

    // Fetch users and populate the table
    fetch('/api/users', {
        headers: {
            'x-user-id': userId
        }
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => { throw new Error(err.message || 'Failed to fetch users'); });
            }
            return response.json();
        })
        .then(users => {
            if (!Array.isArray(users)) {
                console.error('Error: Expected an array of users, but received:', users);
                alert('There was an error fetching the list of users.');
                return;
            }
            users.forEach(user => {
                const row = usersTable.insertRow();
                row.innerHTML = `
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.fullName || ''}</td>
                    <td>${user.role}</td>
                    <td>
                        <button onclick="editUser('${user._id}')">Edit</button>
                        <button onclick="deleteUser('${user._id}')">Delete</button>
                    </td>
                `;
            });
        })
        .catch(error => {
            console.error('Error fetching users:', error);
            alert(error.message);
        });

    // "Add User" button event listener
    addUserBtn.addEventListener('click', () => {
        window.location.href = 'profile.html';
    });
});

// Edit user function
function editUser(userId) {
    window.location.href = `profile.html?userId=${userId}`;
}

// Delete user function
function deleteUser(userId) {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const actorId = user ? user.id : null;

    if (!actorId) {
        alert('Authentication error. Please log in again.');
        return;
    }

    if (confirm('Are you sure you want to delete this user?')) {
        fetch(`/api/user/${userId}`, {
            method: 'DELETE',
            headers: {
                'x-user-id': actorId
            }
        })
        .then(response => {
            if (response.ok) {
                alert('User deleted successfully!');
                window.location.reload();
            } else {
                response.json().then(err => {
                    alert(`Failed to delete user: ${err.message}`);
                });
            }
        })
        .catch(error => {
            console.error('Error deleting user:', error);
            alert('An error occurred while trying to delete the user.');
        });
    }
}