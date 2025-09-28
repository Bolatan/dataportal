function exportToPdf(tableId, filename) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.autoTable({ html: `#${tableId}` });
    doc.save(filename);
}

const flattenObject = (obj, prefix = '') => {
    let res = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = prefix ? `${prefix}.${key}` : key;
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                if (key !== '_id' && key !== '__v' && key !== 'submittedBy' && key !== 'createdAt' && key !== 'updatedAt') {
                    Object.assign(res, flattenObject(obj[key], newKey));
                }
            } else if (key !== '_id' && key !== '__v' && key !== 'submittedBy' && key !== 'createdAt' && key !== 'updatedAt') {
                res[newKey] = obj[key];
            }
        }
    }
    return res;
};

function exportToCsv(data, filename, labels) {
    if (!data || data.length === 0) {
        console.error("No data to export.");
        return;
    }

    const headerKeys = Object.keys(labels);

    const headerRow = headerKeys.map(key => `"${labels[key]}"`).join(',');

    const rows = data.map(report => {
        const flatReport = flattenObject(report);

        return headerKeys.map(key => {
            const value = flatReport[key];

            if (value === null || typeof value === 'undefined') {
                return '""';
            }

            const stringValue = String(value);
            return `"${stringValue.replace(/"/g, '""')}"`;
        }).join(',');
    });

    const csvContent = [headerRow, ...rows].join('\n');
    const encodedUri = encodeURI('data:text/csv;charset=utf-8,' + csvContent);

    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}