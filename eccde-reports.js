document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/eccde-reports')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#reportsTable tbody');
            data.forEach(report => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${report.schoolName}</td>
                    <td>${report.lga}</td>
                    <td>${report.state}</td>
                    <td>${new Date(report.createdAt).toLocaleDateString()}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching reports:', error));
});