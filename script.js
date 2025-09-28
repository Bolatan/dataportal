function getBrandColors() {
    const rootStyles = getComputedStyle(document.documentElement);
    return [
        rootStyles.getPropertyValue('--brand-gold').trim(),
        rootStyles.getPropertyValue('--brand-blue').trim(),
        rootStyles.getPropertyValue('--brand-red').trim(),
        rootStyles.getPropertyValue('--brand-green').trim(),
        rootStyles.getPropertyValue('--brand-black').trim(),
    ];
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');

    hamburgerMenu.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
    // Check for success message
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('success')) {
        const successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    }

    if (sessionStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    const brandColors = getBrandColors();

    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            if (data.noData) {
                const chartContainers = document.querySelectorAll('.chart-container');
                chartContainers.forEach(container => {
                    const elementsToRemove = container.querySelectorAll('canvas, table');
                    elementsToRemove.forEach(el => el.remove());

                    const noDataMessage = document.createElement('p');
                    noDataMessage.textContent = 'No data to display';
                    container.appendChild(noDataMessage);
                });
                return;
            }
            renderOfficeInfrastructureChart(data.officeInfrastructure, brandColors);
            renderRespondentsDemographicsCharts(data.respondentsDemographics, brandColors);
            renderSourceOfElectricityChart(data.sourceOfElectricity, brandColors);
            renderToiletFacilitiesChart(data.toiletFacilities, brandColors);
            renderStaffingChart(data.staffing, brandColors);

            // Populate tables
            populateOfficeInfrastructureTable(data.officeInfrastructure);
            populateToiletFacilitiesTable(data.toiletFacilities);
            populateStaffingTable(data.staffing);

            populatePrivateSchoolTable(data.privateSchoolData);

            // Render ECCDE charts and tables
            if (data.eccdeData) {
                renderEccdeEnrolmentChart(data.eccdeData.enrolment, brandColors);
                populateEccdeEnrolmentTable(data.eccdeData.enrolment);
                renderEccdeStaffingChart(data.eccdeData.staffing, brandColors);
                populateEccdeStaffingTable(data.eccdeData.staffing);
            }
        });
});

function renderEccdeEnrolmentChart(data, brandColors) {
    const ctx = document.getElementById('eccdeEnrolmentChart');
    if (!ctx) return;
    const chartData = {
        labels: ['Pre-Primary', 'Primary'],
        datasets: [
            {
                label: 'Male',
                data: [data.prePrimary.male, data.primary.male],
                backgroundColor: brandColors[0],
            },
            {
                label: 'Female',
                data: [data.prePrimary.female, data.primary.female],
                backgroundColor: brandColors[1],
            },
        ],
    };
    new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function populateEccdeEnrolmentTable(data) {
    const tableBody = document.getElementById('eccdeEnrolmentTableBody');
    if (!tableBody) return;
    tableBody.innerHTML = ''; // Clear existing rows

    const prePrimaryTotal = data.prePrimary.male + data.prePrimary.female;
    const primaryTotal = data.primary.male + data.primary.female;

    const rows = [
        { level: 'Pre-Primary', male: data.prePrimary.male, female: data.prePrimary.female, total: prePrimaryTotal },
        { level: 'Primary', male: data.primary.male, female: data.primary.female, total: primaryTotal },
    ];

    rows.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${row.level}</td><td>${row.male}</td><td>${row.female}</td><td>${row.total}</td>`;
        tableBody.appendChild(tr);
    });
}

function renderEccdeStaffingChart(data, brandColors) {
    const ctx = document.getElementById('eccdeStaffingChart');
    if (!ctx) return;
    const chartData = {
        labels: ['Teachers', 'Non-Teaching'],
        datasets: [{
            data: [data.teachers, data.nonTeaching],
            backgroundColor: brandColors,
        }],
    };
    new Chart(ctx, {
        type: 'pie',
        data: chartData,
    });
}

function populateEccdeStaffingTable(data) {
    const tableBody = document.getElementById('eccdeStaffingTableBody');
    if (!tableBody) return;
    tableBody.innerHTML = ''; // Clear existing rows

    const rows = [
        { category: 'Teachers', count: data.teachers },
        { category: 'Non-Teaching Staff', count: data.nonTeaching },
    ];

    rows.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${row.category}</td><td>${row.count}</td>`;
        tableBody.appendChild(tr);
    });
}

function populatePrivateSchoolTable(data) {
    if (!data) return;
    const tableBody = document.getElementById('privateSchoolTableBody');
    tableBody.innerHTML = ''; // Clear existing rows

    const rows = [
        { metric: 'Number of Private Schools', value: data.count },
        { metric: 'Total Students in Private Schools', value: data.totalStudents }
    ];

    rows.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${row.metric}</td><td>${row.value}</td>`;
        tableBody.appendChild(tr);
    });
}

function populateOfficeInfrastructureTable(data) {
    const tableBody = document.getElementById('officeInfrastructureTableBody');
    tableBody.innerHTML = ''; // Clear existing rows

    const rows = [
        { condition: 'Available (Good)', count: data.goodCondition },
        { condition: 'Needed', count: data.needed },
        { condition: 'Major Repairs', count: data.majorRepairs },
        { condition: 'Renovation Required', count: data.renovationRequired },
        { condition: 'Additional Offices Needed', count: data.additionalNeeded }
    ];

    rows.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${row.condition}</td><td>${row.count}</td>`;
        tableBody.appendChild(tr);
    });
}

function populateToiletFacilitiesTable(data) {
    const tableBody = document.getElementById('toiletFacilitiesTableBody');
    tableBody.innerHTML = ''; // Clear existing rows

    const rows = [
        { metric: 'Cubicle Toilets', count: data.cubicleToilets },
        { metric: 'Minor Repairs Needed', count: data.minorRepairs },
        { metric: 'Major Repairs Needed', count: data.majorRepairs },
        { metric: 'Additional Toilets Needed', count: data.additionalNeeded }
    ];

    rows.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${row.metric}</td><td>${row.count}</td>`;
        tableBody.appendChild(tr);
    });
}

function populateStaffingTable(data) {
    const tableBody = document.getElementById('staffingTableBody');
    tableBody.innerHTML = ''; // Clear existing rows

    const teachersMale = data.teachersMale || 0;
    const teachersFemale = data.teachersFemale || 0;
    const nonTeachingMale = data.nonTeachingMale || 0;
    const nonTeachingFemale = data.nonTeachingFemale || 0;
    const totalMale = teachersMale + nonTeachingMale;
    const totalFemale = teachersFemale + nonTeachingFemale;
    const teachersTotal = teachersMale + teachersFemale;
    const nonTeachingTotal = nonTeachingMale + nonTeachingFemale;
    const grandTotal = totalMale + totalFemale;


    tableBody.innerHTML = `
        <tr>
            <td>Teachers</td>
            <td>${teachersMale}</td>
            <td>${teachersFemale}</td>
            <td>${teachersTotal}</td>
        </tr>
        <tr>
            <td>Non-teaching</td>
            <td>${nonTeachingMale}</td>
            <td>${nonTeachingFemale}</td>
            <td>${nonTeachingTotal}</td>
        </tr>
        <tr>
            <td>Total Staff</td>
            <td>${totalMale}</td>
            <td>${totalFemale}</td>
            <td>${grandTotal}</td>
        </tr>
    `;
}


function renderOfficeInfrastructureChart(data, brandColors) {
    const ctx = document.getElementById('officeInfrastructureChart');
    data.chart.datasets.forEach((dataset, index) => {
        dataset.backgroundColor = brandColors[index % brandColors.length];
    });
    new Chart(ctx, {
        type: 'bar',
        data: data.chart,
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        callback: function(value) {
                            return value + '%'
                        }
                    }
                },
                y: {
                    stacked: true
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.x !== null) {
                                label += context.parsed.x + '%';
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

function renderRespondentsDemographicsCharts(data, brandColors) {
    const sexDistributionCtx = document.getElementById('sexDistributionChart');
    data.sexDistribution.datasets.forEach(dataset => {
        dataset.backgroundColor = brandColors;
    });
    new Chart(sexDistributionCtx, {
        type: 'doughnut',
        data: data.sexDistribution
    });

    const qualificationsCtx = document.getElementById('qualificationsChart');
    data.qualifications.datasets.forEach(dataset => {
        dataset.backgroundColor = brandColors;
    });
    new Chart(qualificationsCtx, {
        type: 'pie',
        data: data.qualifications
    });
}

function renderSourceOfElectricityChart(data, brandColors) {
    const ctx = document.getElementById('electricitySourceChart');
    data.chart.datasets.forEach(dataset => {
        dataset.backgroundColor = brandColors;
    });
    new Chart(ctx, {
        type: 'pie',
        data: data.chart,
        options: {}
    });
}

function showSuccessPopup(message) {
    // Create the popup container
    const popup = document.createElement('div');
    popup.className = 'popup';

    // Create the popup content
    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';

    // Create the close button
    const closeButton = document.createElement('span');
    closeButton.className = 'popup-close';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = () => {
        document.body.removeChild(popup);
    };

    // Create the message element
    const messageElement = document.createElement('p');
    messageElement.textContent = message;

    // Append elements
    popupContent.appendChild(closeButton);
    popupContent.appendChild(messageElement);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);
}

function renderToiletFacilitiesChart(data, brandColors) {
    const ctx = document.getElementById('toiletFacilitiesChart');
    data.chart.datasets.forEach((dataset, index) => {
        dataset.backgroundColor = brandColors[index % brandColors.length];
    });
    new Chart(ctx, {
        type: 'bar',
        data: data.chart,
        options: {}
    });
}

function renderStaffingChart(data, brandColors) {
    const ctx = document.getElementById('staffingChart');
    data.chart.datasets.forEach((dataset, index) => {
        dataset.backgroundColor = brandColors[index % brandColors.length];
    });
    new Chart(ctx, {
        type: 'bar',
        data: data.chart,
        options: {}
    });
}
