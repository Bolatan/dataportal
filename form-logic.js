function initializeSchoolDropdown() {
    const schoolSelect = document.getElementById('schoolName');
    const lgaInput = document.getElementById('lga');
    const wardInput = document.getElementById('ward');
    const schoolCodeInput = document.getElementById('schoolCode');

    if (schoolSelect) {
        // Populate school dropdown
        if (typeof schools !== 'undefined') {
            schools.forEach(school => {
                const option = document.createElement('option');
                option.value = school.schoolname;
                option.textContent = school.schoolname;
                schoolSelect.appendChild(option);
            });
        }

        // Add event listener to school dropdown
        schoolSelect.addEventListener('change', function() {
            const selectedSchoolName = this.value;
            const selectedSchool = schools.find(school => school.schoolname === selectedSchoolName);

            if (selectedSchool) {
                if (lgaInput) lgaInput.value = selectedSchool.lga;
                if (wardInput) wardInput.value = selectedSchool.ward;
                if (schoolCodeInput) schoolCodeInput.value = selectedSchool.schoolcode;
            } else {
                if (lgaInput) lgaInput.value = '';
                if (wardInput) wardInput.value = '';
                if (schoolCodeInput) schoolCodeInput.value = '';
            }
        });
    }
}