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
    if (sessionStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    const brandColors = getBrandColors();

    fetch('http://localhost:3000/api/data')
        .then(response => response.json())
        .then(data => {
            renderOfficeInfrastructureChart(data.officeInfrastructure, brandColors);
            renderRespondentsDemographicsCharts(data.respondentsDemographics, brandColors);
            renderSourceOfElectricityChart(data.sourceOfElectricity, brandColors);
            renderToiletFacilitiesChart(data.toiletFacilities, brandColors);
            renderStaffingChart(data.staffing, brandColors);
        });
});

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
