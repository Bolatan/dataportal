document.addEventListener('DOMContentLoaded', () => {
    const reportsTableBody = document.getElementById('reportsTableBody');

    fetch('/api/science-reports')
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                data.forEach(report => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${report.schoolIdentification?.schoolName || 'N/A'}</td>
                        <td>${report.schoolIdentification?.lga || 'N/A'}</td>
                        <td>${report.schoolIdentification?.state || 'N/A'}</td>
                        <td>${new Date(report.createdAt).toLocaleDateString()}</td>
                        <td><button onclick="viewDetails('${report._id}')">View Details</button></td>
                    `;
                    reportsTableBody.appendChild(row);
                });
            } else {
                reportsTableBody.innerHTML = '<tr><td colspan="5">No reports found.</td></tr>';
            }
        })
        .catch(error => {
            console.error('Error fetching reports:', error);
            reportsTableBody.innerHTML = '<tr><td colspan="5">Error loading reports.</td></tr>';
        });
});

function viewDetails(reportId) {
    // In a real application, this would likely navigate to a new page
    // or open a modal with the full report details.
    alert(`Details for report ID: ${reportId}`);
}