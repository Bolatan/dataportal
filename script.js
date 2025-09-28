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
    // Basic setup for hamburger menu and success messages
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    hamburgerMenu.addEventListener('click', () => nav.classList.toggle('show'));

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('success')) {
        const successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    }

    // Authentication check
    if (sessionStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    const brandColors = getBrandColors();

    fetch('/api/data')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.noData) {
                const dashboard = document.querySelector('.dashboard');
                dashboard.innerHTML = '<p>No data to display.</p>';
                return;
            }

            // Populate new dashboard elements
            populateKeyMetrics(data);
            renderSchoolTypesChart(data.charts.schoolTypes, data.schoolCounts.byType, brandColors);
            populateEnrolmentAndStaffingTables(data.enrolment, data.staff);
            renderTeacherQualificationsChart(data.charts.teacherQualifications, brandColors);
            renderFacilitiesChart(data.charts.facilities, brandColors);
        })
        .catch(error => {
            console.error('Error fetching or processing dashboard data:', error);
            const dashboard = document.querySelector('.dashboard');
            dashboard.innerHTML = `<p>Error loading dashboard data. Please try again later. Details: ${error.message}</p>`;
        });
});

function populateKeyMetrics(data) {
    document.getElementById('total-schools').textContent = data.schoolCounts.total || '0';
    document.getElementById('total-students').textContent = data.enrolment.total || '0';
    document.getElementById('total-staff').textContent = data.staff.total || '0';
}

function renderSchoolTypesChart(chartData, tableData, brandColors) {
    const ctx = document.getElementById('school-types-chart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: chartData.labels,
            datasets: [{
                data: chartData.data,
                backgroundColor: brandColors,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Distribution of School Types'
                }
            }
        }
    });

    const tableBody = document.querySelector('#school-types-table tbody');
    if (!tableBody) return;
    tableBody.innerHTML = '';
    for (const [type, count] of Object.entries(tableData)) {
        const row = `<tr><td>${type}</td><td>${count}</td></tr>`;
        tableBody.innerHTML += row;
    }
}

function populateEnrolmentAndStaffingTables(enrolmentData, staffData) {
    const enrolmentTableBody = document.querySelector('#enrolment-table tbody');
    if (enrolmentTableBody) {
        enrolmentTableBody.innerHTML = `
            <tr><td>Male</td><td>${enrolmentData.male}</td></tr>
            <tr><td>Female</td><td>${enrolmentData.female}</td></tr>
            <tr><td><strong>Total</strong></td><td><strong>${enrolmentData.total}</strong></td></tr>
        `;
    }

    const staffingTableBody = document.querySelector('#staffing-table tbody');
    if (staffingTableBody) {
        staffingTableBody.innerHTML = `
            <tr>
                <td>Teaching</td>
                <td>${staffData.teaching.male}</td>
                <td>${staffData.teaching.female}</td>
                <td>${staffData.teaching.total}</td>
            </tr>
            <tr>
                <td>Non-Teaching</td>
                <td>${staffData.nonTeaching.male}</td>
                <td>${staffData.nonTeaching.female}</td>
                <td>${staffData.nonTeaching.total}</td>
            </tr>
            <tr>
                <td><strong>Total</strong></td>
                <td><strong>${staffData.teaching.male + staffData.nonTeaching.male}</strong></td>
                <td><strong>${staffData.teaching.female + staffData.nonTeaching.female}</strong></td>
                <td><strong>${staffData.total}</strong></td>
            </tr>
        `;
    }
}

function renderTeacherQualificationsChart(chartData, brandColors) {
    const ctx = document.getElementById('teacher-qualifications-chart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: chartData.labels,
            datasets: [{
                label: 'Qualifications',
                data: chartData.data,
                backgroundColor: brandColors,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });
}

function renderFacilitiesChart(chartData, brandColors) {
    const ctx = document.getElementById('facilities-chart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: chartData.labels,
            datasets: [{
                label: '% of Schools',
                data: chartData.data,
                backgroundColor: brandColors[1],
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%'
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function showSuccessPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';
    const closeButton = document.createElement('span');
    closeButton.className = 'popup-close';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = () => document.body.removeChild(popup);
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    popupContent.appendChild(closeButton);
    popupContent.appendChild(messageElement);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);
}