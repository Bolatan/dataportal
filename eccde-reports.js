document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/eccde-reports')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.querySelector('#reportsTable tbody');
            if (data && Array.isArray(data)) {
                data.forEach(report => {
                    const row = document.createElement('tr');
                    const schoolName = report.schoolIdentification ? report.schoolIdentification.schoolName : 'N/A';
                    const lga = report.schoolIdentification ? report.schoolIdentification.lga : 'N/A';
                    const state = report.schoolIdentification ? report.schoolIdentification.state : 'N/A';
                    const submissionDate = report.createdAt ? new Date(report.createdAt).toLocaleDateString() : 'N/A';

                    row.innerHTML = `
                        <td>${schoolName}</td>
                        <td>${lga}</td>
                        <td>${state}</td>
                        <td>${submissionDate}</td>
                    `;
                    tableBody.appendChild(row);
                });
            } else {
                console.error('Data is not in the expected format:', data);
            }
        })
        .catch(error => console.error('Error fetching reports:', error));

    const exportPdfBtn = document.getElementById('exportPdf');
    exportPdfBtn.addEventListener('click', () => {
        exportToPdf('reportsTable', 'eccde-reports.pdf');
    });

    const exportCsvBtn = document.getElementById('exportCsv');
    exportCsvBtn.addEventListener('click', () => {
        exportToCsv('reportsTable', 'eccde-reports.csv');
    });
});