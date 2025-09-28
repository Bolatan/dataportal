document.addEventListener('DOMContentLoaded', () => {
    const eccdeForm = document.getElementById('eccdeForm');

    // Helper function for setting up auto-calculation
    function setupTotalCalculation(sourceInputNames, totalInputName) {
        const totalInput = document.querySelector(`[name="${totalInputName}"]`);
        if (!totalInput) {
            // console.error(`Total input not found: ${totalInputName}`);
            return;
        }

        const sourceInputs = sourceInputNames.map(name => document.querySelector(`[name="${name}"]`)).filter(Boolean);

        if (sourceInputs.length !== sourceInputNames.length) {
            // console.error(`One or more source inputs not found for ${totalInputName}`);
            return;
        }

        const updateTotal = () => {
            const sum = sourceInputs.reduce((acc, input) => acc + (parseInt(input.value) || 0), 0);
            totalInput.value = sum;
        };

        sourceInputs.forEach(input => {
            input.addEventListener('input', updateTotal);
        });
    }

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

    // C.2b Pre-primary enrolment by age
    const enrolmentByAgeCalculations = [
        // KG1
        { sources: ['enrolment_age_kg1_m_below3', 'enrolment_age_kg1_m_3', 'enrolment_age_kg1_m_4', 'enrolment_age_kg1_m_5', 'enrolment_age_kg1_m_above5'], total: 'enrolment_age_kg1_m_total' },
        { sources: ['enrolment_age_kg1_f_below3', 'enrolment_age_kg1_f_3', 'enrolment_age_kg1_f_4', 'enrolment_age_kg1_f_5', 'enrolment_age_kg1_f_above5'], total: 'enrolment_age_kg1_f_total' },
        // KG2
        { sources: ['enrolment_age_kg2_m_below3', 'enrolment_age_kg2_m_3', 'enrolment_age_kg2_m_4', 'enrolment_age_kg2_m_5', 'enrolment_age_kg2_m_above5'], total: 'enrolment_age_kg2_m_total' },
        { sources: ['enrolment_age_kg2_f_below3', 'enrolment_age_kg2_f_3', 'enrolment_age_kg2_f_4', 'enrolment_age_kg2_f_5', 'enrolment_age_kg2_f_above5'], total: 'enrolment_age_kg2_f_total' },
        // N1
        { sources: ['enrolment_age_n1_m_below3', 'enrolment_age_n1_m_3', 'enrolment_age_n1_m_4', 'enrolment_age_n1_m_5', 'enrolment_age_n1_m_above5'], total: 'enrolment_age_n1_m_total' },
        { sources: ['enrolment_age_n1_f_below3', 'enrolment_age_n1_f_3', 'enrolment_age_n1_f_4', 'enrolment_age_n1_f_5', 'enrolment_age_n1_f_above5'], total: 'enrolment_age_n1_f_total' },
        // N2
        { sources: ['enrolment_age_n2_m_below3', 'enrolment_age_n2_m_3', 'enrolment_age_n2_m_4', 'enrolment_age_n2_m_5', 'enrolment_age_n2_m_above5'], total: 'enrolment_age_n2_m_total' },
        { sources: ['enrolment_age_n2_f_below3', 'enrolment_age_n2_f_3', 'enrolment_age_n2_f_4', 'enrolment_age_n2_f_5', 'enrolment_age_n2_f_above5'], total: 'enrolment_age_n2_f_total' },
        // N3
        { sources: ['enrolment_age_n3_m_below3', 'enrolment_age_n3_m_3', 'enrolment_age_n3_m_4', 'enrolment_age_n3_m_5', 'enrolment_age_n3_m_above5'], total: 'enrolment_age_n3_m_total' },
        { sources: ['enrolment_age_n3_f_below3', 'enrolment_age_n3_f_3', 'enrolment_age_n3_f_4', 'enrolment_age_n3_f_5', 'enrolment_age_n3_f_above5'], total: 'enrolment_age_n3_f_total' }
    ];
    enrolmentByAgeCalculations.forEach(calc => setupTotalCalculation(calc.sources, calc.total));

    // C.3 New entrants into primary 1 and those that attended ECCDE
    const newEntrantsCalculations = [
        { sources: ['entrants_p1_m_below6', 'entrants_p1_m_6', 'entrants_p1_m_7', 'entrants_p1_m_8', 'entrants_p1_m_9', 'entrants_p1_m_10', 'entrants_p1_m_11', 'entrants_p1_m_above11'], total: 'entrants_p1_m_total' },
        { sources: ['entrants_p1_f_below6', 'entrants_p1_f_6', 'entrants_p1_f_7', 'entrants_p1_f_8', 'entrants_p1_f_9', 'entrants_p1_f_10', 'entrants_p1_f_11', 'entrants_p1_f_above11'], total: 'entrants_p1_f_total' },
        { sources: ['entrants_eccde_m_below6', 'entrants_eccde_m_6', 'entrants_eccde_m_7', 'entrants_eccde_m_8', 'entrants_eccde_m_9', 'entrants_eccde_m_10', 'entrants_eccde_m_11', 'entrants_eccde_m_above11'], total: 'entrants_eccde_m_total' },
        { sources: ['entrants_eccde_f_below6', 'entrants_eccde_f_6', 'entrants_eccde_f_7', 'entrants_eccde_f_8', 'entrants_eccde_f_9', 'entrants_eccde_f_10', 'entrants_eccde_f_11', 'entrants_eccde_f_above11'], total: 'entrants_eccde_f_total' }
    ];
    newEntrantsCalculations.forEach(calc => setupTotalCalculation(calc.sources, calc.total));

    // C.4b Primary enrolment by age for the current school year
    const primaryEnrolmentCalculations = [
        // P1
        { sources: ['primary_enrolment_p1_m_below6', 'primary_enrolment_p1_m_6', 'primary_enrolment_p1_m_7', 'primary_enrolment_p1_m_8', 'primary_enrolment_p1_m_9', 'primary_enrolment_p1_m_10', 'primary_enrolment_p1_m_11', 'primary_enrolment_p1_m_above11'], total: 'primary_enrolment_p1_m_total' },
        { sources: ['primary_enrolment_p1_f_below6', 'primary_enrolment_p1_f_6', 'primary_enrolment_p1_f_7', 'primary_enrolment_p1_f_8', 'primary_enrolment_p1_f_9', 'primary_enrolment_p1_f_10', 'primary_enrolment_p1_f_11', 'primary_enrolment_p1_f_above11'], total: 'primary_enrolment_p1_f_total' },
        // P2
        { sources: ['primary_enrolment_p2_m_below6', 'primary_enrolment_p2_m_6', 'primary_enrolment_p2_m_7', 'primary_enrolment_p2_m_8', 'primary_enrolment_p2_m_9', 'primary_enrolment_p2_m_10', 'primary_enrolment_p2_m_11', 'primary_enrolment_p2_m_above11'], total: 'primary_enrolment_p2_m_total' },
        { sources: ['primary_enrolment_p2_f_below6', 'primary_enrolment_p2_f_6', 'primary_enrolment_p2_f_7', 'primary_enrolment_p2_f_8', 'primary_enrolment_p2_f_9', 'primary_enrolment_p2_f_10', 'primary_enrolment_p2_f_11', 'primary_enrolment_p2_f_above11'], total: 'primary_enrolment_p2_f_total' },
        // P3
        { sources: ['primary_enrolment_p3_m_below6', 'primary_enrolment_p3_m_6', 'primary_enrolment_p3_m_7', 'primary_enrolment_p3_m_8', 'primary_enrolment_p3_m_9', 'primary_enrolment_p3_m_10', 'primary_enrolment_p3_m_11', 'primary_enrolment_p3_m_above11'], total: 'primary_enrolment_p3_m_total' },
        { sources: ['primary_enrolment_p3_f_below6', 'primary_enrolment_p3_f_6', 'primary_enrolment_p3_f_7', 'primary_enrolment_p3_f_8', 'primary_enrolment_p3_f_9', 'primary_enrolment_p3_f_10', 'primary_enrolment_p3_f_11', 'primary_enrolment_p3_f_above11'], total: 'primary_enrolment_p3_f_total' },
        // P4
        { sources: ['primary_enrolment_p4_m_below6', 'primary_enrolment_p4_m_6', 'primary_enrolment_p4_m_7', 'primary_enrolment_p4_m_8', 'primary_enrolment_p4_m_9', 'primary_enrolment_p4_m_10', 'primary_enrolment_p4_m_11', 'primary_enrolment_p4_m_above11'], total: 'primary_enrolment_p4_m_total' },
        { sources: ['primary_enrolment_p4_f_below6', 'primary_enrolment_p4_f_6', 'primary_enrolment_p4_f_7', 'primary_enrolment_p4_f_8', 'primary_enrolment_p4_f_9', 'primary_enrolment_p4_f_10', 'primary_enrolment_p4_f_11', 'primary_enrolment_p4_f_above11'], total: 'primary_enrolment_p4_f_total' },
        // P5
        { sources: ['primary_enrolment_p5_m_below6', 'primary_enrolment_p5_m_6', 'primary_enrolment_p5_m_7', 'primary_enrolment_p5_m_8', 'primary_enrolment_p5_m_9', 'primary_enrolment_p5_m_10', 'primary_enrolment_p5_m_11', 'primary_enrolment_p5_m_above11'], total: 'primary_enrolment_p5_m_total' },
        { sources: ['primary_enrolment_p5_f_below6', 'primary_enrolment_p5_f_6', 'primary_enrolment_p5_f_7', 'primary_enrolment_p5_f_8', 'primary_enrolment_p5_f_9', 'primary_enrolment_p5_f_10', 'primary_enrolment_p5_f_11', 'primary_enrolment_p5_f_above11'], total: 'primary_enrolment_p5_f_total' },
        // P6
        { sources: ['primary_enrolment_p6_m_below6', 'primary_enrolment_p6_m_6', 'primary_enrolment_p6_m_7', 'primary_enrolment_p6_m_8', 'primary_enrolment_p6_m_9', 'primary_enrolment_p6_m_10', 'primary_enrolment_p6_m_11', 'primary_enrolment_p6_m_above11'], total: 'primary_enrolment_p6_m_total' },
        { sources: ['primary_enrolment_p6_f_below6', 'primary_enrolment_p6_f_6', 'primary_enrolment_p6_f_7', 'primary_enrolment_p6_f_8', 'primary_enrolment_p6_f_9', 'primary_enrolment_p6_f_10', 'primary_enrolment_p6_f_11', 'primary_enrolment_p6_f_above11'], total: 'primary_enrolment_p6_f_total' }
    ];
    primaryEnrolmentCalculations.forEach(calc => setupTotalCalculation(calc.sources, calc.total));

    // F.4 Number of useable toilets units by each type of toilet
    const toiletCalculations = [
        { sources: ['toilets_pit_pupil_male', 'toilets_pit_pupil_female', 'toilets_pit_pupil_mixed', 'toilets_pit_teacher_male', 'toilets_pit_teacher_female', 'toilets_pit_teacher_mixed', 'toilets_pit_both_male', 'toilets_pit_both_female', 'toilets_pit_both_mixed'], total: 'toilets_pit_total' },
        { sources: ['toilets_bucket_pupil_male', 'toilets_bucket_pupil_female', 'toilets_bucket_pupil_mixed', 'toilets_bucket_teacher_male', 'toilets_bucket_teacher_female', 'toilets_bucket_teacher_mixed', 'toilets_bucket_both_male', 'toilets_bucket_both_female', 'toilets_bucket_both_mixed'], total: 'toilets_bucket_total' },
        { sources: ['toilets_flush_pupil_male', 'toilets_flush_pupil_female', 'toilets_flush_pupil_mixed', 'toilets_flush_teacher_male', 'toilets_flush_teacher_female', 'toilets_flush_teacher_mixed', 'toilets_flush_both_male', 'toilets_flush_both_female', 'toilets_flush_both_mixed'], total: 'toilets_flush_total' },
        { sources: ['toilets_other_pupil_male', 'toilets_other_pupil_female', 'toilets_other_pupil_mixed', 'toilets_other_teacher_male', 'toilets_other_teacher_female', 'toilets_other_teacher_mixed', 'toilets_other_both_male', 'toilets_other_both_female', 'toilets_other_both_mixed'], total: 'toilets_other_total' }
    ];
    toiletCalculations.forEach(calc => setupTotalCalculation(calc.sources, calc.total));

    // H. TEACHERS QUALIFICATION BY LEVEL OF EDUCATION IN THE CURRENT ACADEMIC YEAR
    const qualificationsTable = document.getElementById('qualificationsTable');
    if (qualificationsTable) {
        qualificationsTable.addEventListener('input', (e) => {
            if (e.target.tagName === 'INPUT' && e.target.type === 'number') {
                const row = e.target.closest('tr');
                if (row) {
                    // Pre-Pry total
                    const prePryMale = row.querySelector('input[name*="[pre_pry][male]"]');
                    const prePryFemale = row.querySelector('input[name*="[pre_pry][female]"]');
                    const prePryTotal = row.querySelector('input[name*="[pre_pry][total]"]');
                    if (prePryMale && prePryFemale && prePryTotal) {
                        prePryTotal.value = (parseInt(prePryMale.value) || 0) + (parseInt(prePryFemale.value) || 0);
                    }

                    // Pry total
                    const pryMale = row.querySelector('input[name*="[pry][male]"]');
                    const pryFemale = row.querySelector('input[name*="[pry][female]"]');
                    const pryTotal = row.querySelector('input[name*="[pry][total]"]');
                    if (pryMale && pryFemale && pryTotal) {
                        pryTotal.value = (parseInt(pryMale.value) || 0) + (parseInt(pryFemale.value) || 0);
                    }
                }
            }
        });
    }

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

        const user = JSON.parse(sessionStorage.getItem('user'));
        if (!user || !user.id) {
            alert('You must be logged in to submit this form.');
            return;
        }

        fetch('/api/eccde-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-user-id': user.id,
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