document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/sss-reports')
        .then(response => response.json())
        .then(reports => {
            const tableBody = document.getElementById('sssReportsTableBody');
            if (reports.length === 0) {
                const row = document.createElement('tr');
                const cell = document.createElement('td');
                cell.colSpan = 4;
                cell.textContent = 'No SSS reports found.';
                row.appendChild(cell);
                tableBody.appendChild(row);
                return;
            }

            reports.forEach(report => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${report.schoolIdentification.schoolName}</td>
                    <td>${report.schoolIdentification.lga}</td>
                    <td>${report.schoolIdentification.state}</td>
                    <td>${new Date(report.createdAt).toLocaleDateString()}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching SSS reports:', error);
            const tableBody = document.getElementById('sssReportsTableBody');
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.colSpan = 4;
            cell.textContent = 'Error loading reports.';
            row.appendChild(cell);
            tableBody.appendChild(row);
        });
});