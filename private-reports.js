document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/private-reports')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#reportsTable tbody');
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
        })
        .catch(error => console.error('Error fetching reports:', error));

    const exportPdfBtn = document.getElementById('exportPdf');
    exportPdfBtn.addEventListener('click', () => {
        exportToPdf('reportsTable', 'private-reports.pdf');
    });

    const exportCsvBtn = document.getElementById('exportCsv');
    exportCsvBtn.addEventListener('click', () => {
        exportToCsv('reportsTable', 'private-reports.csv');
    });
});