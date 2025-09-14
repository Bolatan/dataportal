document.addEventListener('DOMContentLoaded', () => {
    const usersTable = document.getElementById('users-table').getElementsByTagName('tbody')[0];
    const addUserBtn = document.getElementById('add-user-btn');

    // Fetch users and populate the table
    fetch('/api/users')
        .then(response => response.json())
        .then(users => {
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
        .catch(error => console.error('Error fetching users:', error));

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
    if (confirm('Are you sure you want to delete this user?')) {
        fetch(`/api/user/${userId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                alert('User deleted successfully!');
                window.location.reload();
            } else {
                alert('Failed to delete user.');
            }
        })
        .catch(error => {
            console.error('Error deleting user:', error);
            alert('Failed to delete user.');
        });
    }
}
