document.addEventListener('DOMContentLoaded', async () => {
    const loadingDiv = document.getElementById('loading');
    const dashboardContent = document.getElementById('dashboard-content');
    const user = JSON.parse(sessionStorage.getItem('user'));

    if (!user || !user.id) {
        window.location.href = '/login.html';
        return;
    }

    try {
        const response = await fetch('/api/data', {
            headers: {
                'x-user-id': user.id
            }
        });

        if (!response.ok) {
            if (response.status === 403) {
                loadingDiv.innerHTML = 'You do not have permission to view this data. <a href="/profile.html">Go back</a>';
            } else {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return;
        }

        const data = await response.json();

        if (data.noData) {
            loadingDiv.innerHTML = 'No data has been submitted yet. The dashboard will populate once forms are completed.';
            return;
        }

        loadingDiv.style.display = 'none';
        dashboardContent.style.display = 'block';

        // Populate Key Metrics
        document.getElementById('total-students').textContent = data.totalStudents?.toLocaleString() || '0';
        document.getElementById('private-schools-count').textContent = data.privateSchoolData?.count?.toLocaleString() || '0';
        document.getElementById('private-students-total').textContent = data.privateSchoolData?.totalStudents?.toLocaleString() || '0';

        // Render Charts
        renderBarChart('officeInfrastructureChart', 'Office Infrastructure Condition by LGEA', data.officeInfrastructure.chart);
        renderDoughnutChart('staffQualificationsChart', 'Staff Qualifications', data.respondentsDemographics.qualifications);
        renderPieChart('electricitySourceChart', 'Source of Electricity', data.sourceOfElectricity.chart);
        renderBarChart('toiletFacilitiesChart', 'Toilet Facilities by LGEA', data.toiletFacilities.chart);
        renderPieChart('schoolTypesChart', 'School Types', data.schoolTypes.chart);
        renderDoughnutChart('schoolLocationsChart', 'School Locations', data.schoolLocations.chart);

    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        loadingDiv.innerText = 'Failed to load dashboard data. Please try again later.';
    }
});

function renderBarChart(canvasId, label, chartData) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: chartData.labels,
            datasets: chartData.datasets.map(dataset => ({
                label: dataset.label,
                data: dataset.data,
                backgroundColor: getRandomColor(),
                borderColor: getRandomColor(),
                borderWidth: 1
            }))
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function renderPieChart(canvasId, label, chartData) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: chartData.labels,
            datasets: [{
                label: label,
                data: chartData.datasets[0].data,
                backgroundColor: chartData.labels.map(() => getRandomColor()),
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });
}

function renderDoughnutChart(canvasId, label, chartData) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: chartData.labels,
            datasets: [{
                label: label,
                data: chartData.datasets[0].data,
                backgroundColor: chartData.labels.map(() => getRandomColor()),
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b}, 0.5)`;
}