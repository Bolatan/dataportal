document.addEventListener('DOMContentLoaded', function () {
    const schoolNameSelect = document.getElementById('schoolName');
    const lgaInput = document.getElementById('lga');
    const wardInput = document.getElementById('ward');
    const schoolCodeInput = document.getElementById('schoolCode');

    // Add a blank default option
    const defaultOption = document.createElement('option');
    schoolNameSelect.appendChild(defaultOption);

    // Populate the dropdown with school names
    schools.forEach(school => {
        const option = document.createElement('option');
        option.value = school.schoolName;
        option.textContent = school.schoolName;
        schoolNameSelect.appendChild(option);
    });

    // Initialize Select2
    const schoolSelect = $(schoolNameSelect).select2({
        placeholder: 'Select or type to search for a school',
        allowClear: true
    });

    // Add event listener for when a school is selected
    schoolSelect.on('change', function () {
        const selectedSchoolName = $(this).val();
        const selectedSchool = schools.find(school => school.schoolName === selectedSchoolName);

        if (selectedSchool) {
            lgaInput.value = selectedSchool.lga;
            wardInput.value = selectedSchool.ward;
            schoolCodeInput.value = selectedSchool.schoolCode;
        } else {
            lgaInput.value = '';
            wardInput.value = '';
            schoolCodeInput.value = '';
        }
    });
});