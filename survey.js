document.addEventListener('DOMContentLoaded', () => {
    const surveyForm = document.getElementById('surveyForm');

    // Auto-calculation logic
    const inputsToCalculate = [
        { male: 'teachersMale', female: 'teachersFemale', total: 'teachersTotal' },
        { male: 'nonTeachingMale', female: 'nonTeachingFemale', total: 'nonTeachingTotal' },
    ];

    inputsToCalculate.forEach(group => {
        const maleInput = document.getElementById(group.male);
        const femaleInput = document.getElementById(group.female);
        const totalInput = document.getElementById(group.total);

        const updateTotal = () => {
            const maleValue = parseInt(maleInput.value) || 0;
            const femaleValue = parseInt(femaleInput.value) || 0;
            totalInput.value = maleValue + femaleValue;
            updatePupilTotals();
        };

        maleInput.addEventListener('input', updateTotal);
        femaleInput.addEventListener('input', updateTotal);
    });

    function setupTableCalculation(tableId) {
        const table = document.getElementById(tableId);
        if (!table) return;

        const tbody = table.querySelector('tbody');

        const updateRowTotal = (row) => {
            const maleInput = row.querySelector('input[name*="_male"]');
            const femaleInput = row.querySelector('input[name*="_female"]');
            const totalInput = row.querySelector('input[name*="_total"]');

            if (maleInput && femaleInput && totalInput) {
                const maleValue = parseInt(maleInput.value) || 0;
                const femaleValue = parseInt(femaleInput.value) || 0;
                totalInput.value = maleValue + femaleValue;
            }
        };

        tbody.addEventListener('input', (event) => {
            if (event.target.tagName === 'INPUT' && (event.target.name.includes('_male') || event.target.name.includes('_female'))) {
                const row = event.target.closest('tr');
                updateRowTotal(row);
                updatePupilTotals();
            }
        });

        // Initial calculation for all rows
        tbody.querySelectorAll('tr').forEach(row => {
            updateRowTotal(row);
        });
    }

    const addStaffRowBtn = document.getElementById('addStaffRow');
    if (addStaffRowBtn) {
        let staffRowCounter = 1;
        const staffProfileTableBody = document.getElementById('staffProfileTableBody');

        addStaffRowBtn.addEventListener('click', () => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td><input type="text" name="staff_name_${staffRowCounter}"></td>
                <td><input type="text" name="staff_qualification_${staffRowCounter}"></td>
                <td><input type="text" name="staff_specialization_${staffRowCounter}"></td>
                <td><input type="number" name="staff_experience_${staffRowCounter}"></td>
                <td><input type="text" name="staff_trcn_${staffRowCounter}"></td>
            `;
            staffProfileTableBody.appendChild(newRow);
            staffRowCounter++;
        });
    }

    setupTableCalculation('prePrimarySchool');
    setupTableCalculation('juniorSecondarySchool');
    setupTableCalculation('seniorSecondarySchool');
    setupTableCalculation('specialLearners');

    const addSpecialLearnerRowBtn = document.getElementById('addSpecialLearnerRow');
    if (addSpecialLearnerRowBtn) {
        let specialLearnerRowCounter = 2;
        const specialLearnersTable = document.getElementById('specialLearners').querySelector('tbody');

        addSpecialLearnerRowBtn.addEventListener('click', () => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>
                    <select name="specialLearners_class_${specialLearnerRowCounter}">
                        <option value="">Select Class</option>
                        <option value="NURSERY 1">NURSERY 1</option>
                        <option value="NURSERY 2">NURSERY 2</option>
                        <option value="KINDERGARTIN">KINDERGARTIN</option>
                        <option value="PRIMARY 1">PRIMARY 1</option>
                        <option value="PRIMARY 2">PRIMARY 2</option>
                        <option value="PRIMARY 3">PRIMARY 3</option>
                        <option value="PRIMARY 4">PRIMARY 4</option>
                        <option value="PRIMARY 5">PRIMARY 5</option>
                        <option value="PRIMARY 6">PRIMARY 6</option>
                        <option value="JSS1">JSS1</option>
                        <option value="JSS2">JSS2</option>
                        <option value="JSS3">JSS3</option>
                        <option value="SSS1">SSS1</option>
                        <option value="SSS2">SSS2</option>
                        <option value="SSS3">SSS3</option>
                    </select>
                </td>
                <td><input type="number" name="specialLearners_male_${specialLearnerRowCounter}"></td>
                <td><input type="number" name="specialLearners_female_${specialLearnerRowCounter}"></td>
                <td><input type="number" name="specialLearners_total_${specialLearnerRowCounter}" readonly></td>
            `;
            specialLearnersTable.appendChild(newRow);
            specialLearnerRowCounter++;
        });
    }

    function updatePupilTotals() {
        let totalMale = 0;
        let totalFemale = 0;

        document.querySelectorAll('#prePrimarySchool input[name*="_male"], #juniorSecondarySchool input[name*="_male"], #seniorSecondarySchool input[name*="_male"], #specialLearners input[name*="_male"]').forEach(input => {
            totalMale += parseInt(input.value) || 0;
        });

        document.querySelectorAll('#prePrimarySchool input[name*="_female"], #juniorSecondarySchool input[name*="_female"], #seniorSecondarySchool input[name*="_female"], #specialLearners input[name*="_female"]').forEach(input => {
            totalFemale += parseInt(input.value) || 0;
        });

        document.getElementById('totalPupilsMale').value = totalMale;
        document.getElementById('totalPupilsFemale').value = totalFemale;
        document.getElementById('totalPupils').value = totalMale + totalFemale;

        updateTeacherPupilRatio();
    }

    function updateTeacherPupilRatio() {
        const totalTeachers = parseInt(document.getElementById('teachersTotal').value) || 0;
        const totalPupils = parseInt(document.getElementById('totalPupils').value) || 0;
        const ratioInput = document.getElementById('teacherPupilRatio');

        if (totalTeachers > 0 && totalPupils > 0) {
            const ratio = totalPupils / totalTeachers;
            ratioInput.value = `1 : ${ratio.toFixed(2)}`;
        } else {
            ratioInput.value = 'N/A';
        }
    }

    surveyForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(surveyForm);

        fetch('/api/survey', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            console.log('Response status:', response.status);
            return response.json();
        })
        .then(result => {
            // Form successfully submitted, redirecting to home.
            console.log('Success:', result);
            window.location.href = 'index.html?success=true';
        })
        .catch(error => {
            console.error('Fetch Error:', error);
            // alert('There was an error submitting the survey.');
        });
    });

    window.getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                document.getElementById('latitude').value = position.coords.latitude;
                document.getElementById('longitude').value = position.coords.longitude;
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };
});
