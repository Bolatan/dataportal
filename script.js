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
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => nav.classList.toggle('show'));
    }

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('success')) {
        const successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    }

    const user = JSON.parse(sessionStorage.getItem('user'));
    if (!user || !user.id) {
        window.location.href = 'login.html';
        return;
    }

    fetch('/api/data', {
        headers: {
            'Content-Type': 'application/json',
            'x-user-id': user.id
        }
    })
    .then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
    })
    .then(data => {
        if (data.noData) {
            document.querySelector('.dashboard').innerHTML = '<p>No survey data available to display.</p>';
            return;
        }
        updateDashboard(data);
    })
    .catch(error => {
        console.error('Error fetching or processing dashboard data:', error);
        document.querySelector('.dashboard').innerHTML = `<p>Error loading dashboard data. Please try again later. Details: ${error.message}</p>`;
    });
});

function updateDashboard(data) {
    const brandColors = getBrandColors();

    // Key Metrics
    populateKeyMetrics(data);

    // Charts
    renderEnrolmentByLevelChart(data.enrolment.byLevel, brandColors);
    renderEnrolmentByGenderChart(data.enrolment, brandColors);
    renderSchoolTypesChart(data.charts.schoolTypes, brandColors);
    renderTeacherQualificationsChart(data.charts.teacherQualifications, brandColors);
    renderFacilitiesChart(data.charts.facilities, brandColors);
}

function populateKeyMetrics(data) {
    document.getElementById('total-schools').textContent = data.schoolCounts.total || '0';
    document.getElementById('total-students').textContent = data.enrolment.total || '0';
    document.getElementById('total-teachers').textContent = data.staff.teaching.total || '0';
    const ratio = data.staff.teaching.total > 0 ? (data.enrolment.total / data.staff.teaching.total).toFixed(1) : 'N/A';
    document.getElementById('student-teacher-ratio').textContent = ratio;
}

function renderEnrolmentByLevelChart(enrolmentByLevel, brandColors) {
    const ctx = document.getElementById('enrolment-by-level-chart')?.getContext('2d');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Pre-Primary', 'Primary', 'JSS', 'SSS'],
            datasets: [{
                label: 'Number of Students',
                data: [
                    enrolmentByLevel.prePrimary,
                    enrolmentByLevel.primary,
                    enrolmentByLevel.jss,
                    enrolmentByLevel.sss
                ],
                backgroundColor: brandColors[0],
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true } }
        }
    });
}

function renderEnrolmentByGenderChart(enrolment, brandColors) {
    const ctx = document.getElementById('enrolment-by-gender-chart')?.getContext('2d');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Male', 'Female'],
            datasets: [{
                data: [enrolment.male, enrolment.female],
                backgroundColor: [brandColors[1], brandColors[2]],
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'top' } }
        }
    });
}

function renderSchoolTypesChart(schoolTypesData, brandColors) {
    const ctx = document.getElementById('school-types-chart')?.getContext('2d');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: schoolTypesData.labels,
            datasets: [{
                data: schoolTypesData.data,
                backgroundColor: brandColors,
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'top' } }
        }
    });
}

function renderTeacherQualificationsChart(qualificationsData, brandColors) {
    const ctx = document.getElementById('teacher-qualifications-chart')?.getContext('2d');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: qualificationsData.labels,
            datasets: [{
                data: qualificationsData.data,
                backgroundColor: brandColors,
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'top' } }
        }
    });
}

function renderFacilitiesChart(facilitiesData, brandColors) {
    const ctx = document.getElementById('facilities-chart')?.getContext('2d');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: facilitiesData.labels,
            datasets: [{
                data: facilitiesData.data,
                backgroundColor: [brandColors[1], brandColors[3], brandColors[4]],
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });
}