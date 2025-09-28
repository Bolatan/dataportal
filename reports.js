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

    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        loadingDiv.innerText = 'Failed to load dashboard data. Please try again later.';
    }
});