document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(sessionStorage.getItem('user'));

    if (!user || user.role !== 'admin') {
        alert('You do not have permission to view this page.');
        window.location.href = '/';
        return;
    }

    fetch('/api/audit-log', {
        headers: {
            'x-user-id': user.id
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch audit logs');
        }
        return response.json();
    })
    .then(logs => {
        const tableBody = document.querySelector('#audit-log-table tbody');
        tableBody.innerHTML = ''; // Clear existing rows
        logs.forEach(log => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${log.user ? log.user.fullName || log.user.username : 'System'}</td>
                <td>${log.action}</td>
                <td>${new Date(log.timestamp).toLocaleString()}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error fetching audit logs:', error);
        alert('Could not load audit logs.');
    });
});