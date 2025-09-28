document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#reportsTable tbody');
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (!user || !user.id) {
        console.error('User not found in session storage. Redirecting to login.');
        window.location.href = 'login.html';
        return;
    }

    fetch('/api/sss-reports', {
        headers: {
            'Content-Type': 'application/json',
            'x-user-id': user.id
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                tableBody.innerHTML = `<tr><td colspan="4">${data.message}</td></tr>`;
                return;
            }
            if (data && data.length > 0) {
                data.forEach(report => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${report.schoolIdentification?.schoolName || 'N/A'}</td>
                        <td>${report.schoolIdentification?.lga || 'N/A'}</td>
                        <td>${report.schoolIdentification?.state || 'N/A'}</td>
                        <td>${new Date(report.createdAt).toLocaleDateString()}</td>
                    `;
                    tableBody.appendChild(row);
                });
            } else {
                tableBody.innerHTML = '<tr><td colspan="4">No reports found.</td></tr>';
            }
        })
        .catch(error => {
            console.error('Error fetching reports:', error);
            tableBody.innerHTML = '<tr><td colspan="4">Error loading reports.</td></tr>';
        });

    const exportPdfBtn = document.getElementById('exportPdf');
    exportPdfBtn.addEventListener('click', () => {
        exportToPdf('reportsTable', 'sss-reports.pdf');
    });

    const exportCsvBtn = document.getElementById('exportCsv');
    exportCsvBtn.addEventListener('click', () => {
        exportToCsv('reportsTable', 'sss-reports.csv');
    });
});