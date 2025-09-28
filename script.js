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

    document.getElementById('logout-button').addEventListener('click', logout);

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
            renderSssData(data.sssData, brandColors);
        });
});

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

function logout() {
    sessionStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
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

function renderSssData(data, brandColors) {
    if (!data) return;

    // Render Teacher Qualifications Chart
    const teacherQualificationsCtx = document.getElementById('sssTeacherQualificationsChart');
    if (teacherQualificationsCtx && data.teacherQualifications) {
        data.teacherQualifications.datasets.forEach((dataset, index) => {
            dataset.backgroundColor = brandColors;
        });
        new Chart(teacherQualificationsCtx, {
            type: 'pie',
            data: data.teacherQualifications,
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'SSS Teacher Qualifications'
                    }
                }
            }
        });
    }

    // Render SSCE Stats Chart
    const ssceStatsCtx = document.getElementById('ssceStatsChart');
    if (ssceStatsCtx && data.ssceStats) {
        new Chart(ssceStatsCtx, {
            type: 'bar',
            data: {
                labels: ['WAEC', 'NECO'],
                datasets: [
                    {
                        label: 'Registered',
                        data: [data.ssceStats.waec.registered, data.ssceStats.neco.registered],
                        backgroundColor: brandColors[0],
                    },
                    {
                        label: 'Sat',
                        data: [data.ssceStats.waec.sat, data.ssceStats.neco.sat],
                        backgroundColor: brandColors[1],
                    },
                    {
                        label: 'Passed',
                        data: [data.ssceStats.waec.passed, data.ssceStats.neco.passed],
                        backgroundColor: brandColors[2],
                    }
                ]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'SSCE Statistics (WAEC vs NECO)'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Populate SSS Data Table
    const tableBody = document.getElementById('sssDataTableBody');
    if (tableBody) {
        tableBody.innerHTML = ''; // Clear existing rows
        const rows = [
            { metric: 'Number of SSS Schools Surveyed', value: data.count },
            { metric: 'Total SSS Students', value: data.totalStudents }
        ];
        rows.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${row.metric}</td><td>${row.value}</td>`;
            tableBody.appendChild(tr);
        });
    }
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
