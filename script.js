document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            renderOfficeInfrastructureChart(data.officeInfrastructure);
            renderRespondentsDemographicsCharts(data.respondentsDemographics);
            renderSourceOfElectricityChart(data.sourceOfElectricity);
            renderToiletFacilitiesChart(data.toiletFacilities);
            renderStaffingChart(data.staffing);
        });
});

function renderOfficeInfrastructureChart(data) {
    const ctx = document.getElementById('officeInfrastructureChart');
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

function renderRespondentsDemographicsCharts(data) {
    const sexDistributionCtx = document.getElementById('sexDistributionChart');
    new Chart(sexDistributionCtx, {
        type: 'doughnut',
        data: data.sexDistribution
    });

    const qualificationsCtx = document.getElementById('qualificationsChart');
    new Chart(qualificationsCtx, {
        type: 'pie',
        data: data.qualifications
    });
}

function renderSourceOfElectricityChart(data) {
    const ctx = document.getElementById('electricitySourceChart');
    new Chart(ctx, {
        type: 'pie',
        data: data.chart
    });
}

function renderToiletFacilitiesChart(data) {
    const ctx = document.getElementById('toiletFacilitiesChart');
    new Chart(ctx, {
        type: 'bar',
        data: data.chart
    });
}

function renderStaffingChart(data) {
    const ctx = document.getElementById('staffingChart');
    new Chart(ctx, {
        type: 'bar',
        data: data.chart
    });
}
