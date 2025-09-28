document.addEventListener('DOMContentLoaded', () => {
    const eccdeForm = document.getElementById('eccdeForm');

    // Auto-calculation for staff totals
    const staffInputs = [
        { male: 'nonTeachingStaffMale', female: 'nonTeachingStaffFemale', total: 'nonTeachingStaffTotal' },
        { male: 'teachingStaffMale', female: 'teachingStaffFemale', total: 'teachingStaffTotal' },
        { male: 'careGiversMale', female: 'careGiversFemale', total: 'careGiversTotal' },
    ];

    staffInputs.forEach(group => {
        const maleInput = document.getElementById(group.male);
        const femaleInput = document.getElementById(group.female);
        const totalInput = document.getElementById(group.total);

        if (maleInput && femaleInput && totalInput) {
            const updateTotal = () => {
                const maleValue = parseInt(maleInput.value) || 0;
                const femaleValue = parseInt(femaleInput.value) || 0;
                totalInput.value = maleValue + femaleValue;
            };
            maleInput.addEventListener('input', updateTotal);
            femaleInput.addEventListener('input', updateTotal);
        }
    });

    // Add staff row
    const addStaffRowBtn = document.getElementById('addStaffRowBtn');
    const staffInfoTableBody = document.querySelector('#staffInfoTable tbody');
    let staffRowCounter = 0;

    if (addStaffRowBtn && staffInfoTableBody) {
        addStaffRowBtn.addEventListener('click', () => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td><input type="text" name="staffInfo[${staffRowCounter}][fileNo]"></td>
                <td><input type="text" name="staffInfo[${staffRowCounter}][name]"></td>
                <td><input type="text" name="staffInfo[${staffRowCounter}][gender]"></td>
                <td><input type="text" name="staffInfo[${staffRowCounter}][type]"></td>
                <td><input type="text" name="staffInfo[${staffRowCounter}][salarySource]"></td>
                <td><input type="number" name="staffInfo[${staffRowCounter}][birthYear]"></td>
                <td><input type="number" name="staffInfo[${staffRowCounter}][firstAppointmentYear]"></td>
                <td><input type="number" name="staffInfo[${staffRowCounter}][presentAppointmentYear]"></td>
                <td><input type="number" name="staffInfo[${staffRowCounter}][postingYear]"></td>
                <td><input type="text" name="staffInfo[${staffRowCounter}][gradeLevel]"></td>
                <td><input type="text" name="staffInfo[${staffRowCounter}][present]"></td>
                <td><input type="text" name="staffInfo[${staffRowCounter}][academicQualification]"></td>
                <td><input type="text" name="staffInfo[${staffRowCounter}][teachingQualification]"></td>
                <td><input type="text" name="staffInfo[${staffRowCounter}][subjectQualification]"></td>
                <td><input type="text" name="staffInfo[${staffRowCounter}][mainSubjectTaught]"></td>
                <td><input type="text" name="staffInfo[${staffRowCounter}][teachingType]"></td>
                <td><input type="number" name="staffInfo[${staffRowCounter}][trainingsLast12Months]"></td>
            `;
            staffInfoTableBody.appendChild(newRow);
            staffRowCounter++;
        });
    }

    // Add classroom row
    const addClassroomRowBtn = document.getElementById('addClassroomRowBtn');
    const classroomInfoTableBody = document.querySelector('#classroomInfoTable tbody');
    let classroomRowCounter = 0;

    if (addClassroomRowBtn && classroomInfoTableBody) {
        addClassroomRowBtn.addEventListener('click', () => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td><input type="number" name="classroomInfo[${classroomRowCounter}][constructionYear]"></td>
                <td><input type="text" name="classroomInfo[${classroomRowCounter}][condition]"></td>
                <td><input type="number" name="classroomInfo[${classroomRowCounter}][length]"></td>
                <td><input type="number" name="classroomInfo[${classroomRowCounter}][width]"></td>
                <td><input type="text" name="classroomInfo[${classroomRowCounter}][floorMaterial]"></td>
                <td><input type="text" name="classroomInfo[${classroomRowCounter}][wallMaterial]"></td>
                <td><input type="text" name="classroomInfo[${classroomRowCounter}][roofMaterial]"></td>
                <td><input type="text" name="classroomInfo[${classroomRowCounter}][seating]"></td>
                <td><input type="text" name="classroomInfo[${classroomRowCounter}][writingBoard]"></td>
            `;
            classroomInfoTableBody.appendChild(newRow);
            classroomRowCounter++;
        });
    }

    eccdeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(eccdeForm);
        const structuredData = {};

        const setProperty = (obj, path, value) => {
            const keys = path.match(/[^[\]]+/g);
            if (!keys) return;

            let current = obj;
            for (let i = 0; i < keys.length - 1; i++) {
                const key = keys[i];
                const nextKey = keys[i + 1];
                if (!current[key]) {
                    current[key] = /^\d+$/.test(nextKey) ? [] : {};
                }
                current = current[key];
            }
            current[keys[keys.length - 1]] = value;
        };

        const keys = new Set(Array.from(formData.keys()));

        for (const key of keys) {
            const values = formData.getAll(key);
            const value = values.length > 1 ? values : values[0];
            setProperty(structuredData, key, value);
        }

        fetch('/api/eccde-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(structuredData),
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => { throw new Error(err.message || 'Server error') });
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            showSuccessPopup('Form submitted successfully!');
            eccdeForm.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while submitting the form: ' + error.message);
        });
    });
});