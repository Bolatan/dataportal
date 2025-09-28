function exportToPdf(tableId, filename) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.autoTable({ html: `#${tableId}` });
    doc.save(filename);
}

function exportToCsv(tableId, filename) {
    let csv = [];
    const rows = document.querySelectorAll(`#${tableId} tr`);
    for (const row of rows) {
        const rowData = [];
        for (const cell of row.querySelectorAll('th, td')) {
            rowData.push(`"${cell.innerText.replace(/"/g, '""')}"`);
        }
        csv.push(rowData.join(','));
    }
    const csvContent = 'data:text/csv;charset=utf-8,' + csv.join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}