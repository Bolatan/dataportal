document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('jss-form');

    // Helper function to set up total calculations
    function setupTotalCalculation(sourceInputNames, totalInputName, isHorizontal = false) {
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

    // C.3 Junior Secondary Enrolment by age
    const enrolmentCalculations = [
        // JS1
        { sources: ['enrolment.juniorSecondaryEnrolment.js1.below12.male', 'enrolment.juniorSecondaryEnrolment.js1.age12.male', 'enrolment.juniorSecondaryEnrolment.js1.age13.male', 'enrolment.juniorSecondaryEnrolment.js1.age14.male', 'enrolment.juniorSecondaryEnrolment.js1.above14.male'], total: 'enrolment.juniorSecondaryEnrolment.js1.total.male' },
        { sources: ['enrolment.juniorSecondaryEnrolment.js1.below12.female', 'enrolment.juniorSecondaryEnrolment.js1.age12.female', 'enrolment.juniorSecondaryEnrolment.js1.age13.female', 'enrolment.juniorSecondaryEnrolment.js1.age14.female', 'enrolment.juniorSecondaryEnrolment.js1.above14.female'], total: 'enrolment.juniorSecondaryEnrolment.js1.total.female' },
        // JS2
        { sources: ['enrolment.juniorSecondaryEnrolment.js2.below12.male', 'enrolment.juniorSecondaryEnrolment.js2.age12.male', 'enrolment.juniorSecondaryEnrolment.js2.age13.male', 'enrolment.juniorSecondaryEnrolment.js2.age14.male', 'enrolment.juniorSecondaryEnrolment.js2.above14.male'], total: 'enrolment.juniorSecondaryEnrolment.js2.total.male' },
        { sources: ['enrolment.juniorSecondaryEnrolment.js2.below12.female', 'enrolment.juniorSecondaryEnrolment.js2.age12.female', 'enrolment.juniorSecondaryEnrolment.js2.age13.female', 'enrolment.juniorSecondaryEnrolment.js2.age14.female', 'enrolment.juniorSecondaryEnrolment.js2.above14.female'], total: 'enrolment.juniorSecondaryEnrolment.js2.total.female' },
        // JS3
        { sources: ['enrolment.juniorSecondaryEnrolment.js3.below12.male', 'enrolment.juniorSecondaryEnrolment.js3.age12.male', 'enrolment.juniorSecondaryEnrolment.js3.age13.male', 'enrolment.juniorSecondaryEnrolment.js3.age14.male', 'enrolment.juniorSecondaryEnrolment.js3.above14.male'], total: 'enrolment.juniorSecondaryEnrolment.js3.total.male' },
        { sources: ['enrolment.juniorSecondaryEnrolment.js3.below12.female', 'enrolment.juniorSecondaryEnrolment.js3.age12.female', 'enrolment.juniorSecondaryEnrolment.js3.age13.female', 'enrolment.juniorSecondaryEnrolment.js3.age14.female', 'enrolment.juniorSecondaryEnrolment.js3.above14.female'], total: 'enrolment.juniorSecondaryEnrolment.js3.total.female' },
    ];
    enrolmentCalculations.forEach(calc => setupTotalCalculation(calc.sources, calc.total));

    // C.6 JSCE examination for the previous Academic Year
    const jsceExamCalculations = [
        { male: 'enrolment.jsceExams.registered.male', female: 'enrolment.jsceExams.registered.female', total: 'enrolment.jsceExams.registered.total' },
        { male: 'enrolment.jsceExams.sat.male', female: 'enrolment.jsceExams.sat.female', total: 'enrolment.jsceExams.sat.total' },
        { male: 'enrolment.jsceExams.passed.male', female: 'enrolment.jsceExams.passed.female', total: 'enrolment.jsceExams.passed.total' },
    ];

    jsceExamCalculations.forEach(group => {
        const maleInput = document.querySelector(`[name="${group.male}"]`);
        const femaleInput = document.querySelector(`[name="${group.female}"]`);
        const totalInput = document.querySelector(`[name="${group.total}"]`);

        if (maleInput && femaleInput && totalInput) {
            const updateTotal = () => {
                totalInput.value = (parseInt(maleInput.value) || 0) + (parseInt(femaleInput.value) || 0);
                updateJsceColumnTotals();
            };
            maleInput.addEventListener('input', updateTotal);
            femaleInput.addEventListener('input', updateTotal);
        }
    });

    function updateJsceColumnTotals() {
        setupTotalCalculation(['enrolment.jsceExams.registered.male', 'enrolment.jsceExams.sat.male', 'enrolment.jsceExams.passed.male'], 'enrolment.jsceExams.total.male');
        setupTotalCalculation(['enrolment.jsceExams.registered.female', 'enrolment.jsceExams.sat.female', 'enrolment.jsceExams.passed.female'], 'enrolment.jsceExams.total.female');
        setupTotalCalculation(['enrolment.jsceExams.registered.total', 'enrolment.jsceExams.sat.total', 'enrolment.jsceExams.passed.total'], 'enrolment.jsceExams.total.total');
    }

    // D. Staff
    const staffCalculations = [
        { male: 'staff.nonTeaching.male', female: 'staff.nonTeaching.female', total: 'staff.nonTeaching.total' },
        { male: 'staff.teaching.male', female: 'staff.teaching.female', total: 'staff.teaching.total' }
    ];
    staffCalculations.forEach(group => {
        const maleInput = document.querySelector(`[name="${group.male}"]`);
        const femaleInput = document.querySelector(`[name="${group.female}"]`);
        const totalInput = document.querySelector(`[name="${group.total}"]`);

        if (maleInput && femaleInput && totalInput) {
            const updateTotal = () => {
                totalInput.value = (parseInt(maleInput.value) || 0) + (parseInt(femaleInput.value) || 0);
            };
            maleInput.addEventListener('input', updateTotal);
            femaleInput.addEventListener('input', updateTotal);
        }
    });

    // F.4 Toilets
    const toiletCalculations = [
        { sources: ['facilities.toilets.studentOnly.pit.male', 'facilities.toilets.studentOnly.pit.female', 'facilities.toilets.studentOnly.pit.mixed', 'facilities.toilets.teacherOnly.pit.male', 'facilities.toilets.teacherOnly.pit.female', 'facilities.toilets.teacherOnly.pit.mixed', 'facilities.toilets.studentAndTeacher.pit.male', 'facilities.toilets.studentAndTeacher.pit.female', 'facilities.toilets.studentAndTeacher.pit.mixed'], total: 'facilities.toilets.total.pit' },
        { sources: ['facilities.toilets.studentOnly.bucket.male', 'facilities.toilets.studentOnly.bucket.female', 'facilities.toilets.studentOnly.bucket.mixed', 'facilities.toilets.teacherOnly.bucket.male', 'facilities.toilets.teacherOnly.bucket.female', 'facilities.toilets.teacherOnly.bucket.mixed', 'facilities.toilets.studentAndTeacher.bucket.male', 'facilities.toilets.studentAndTeacher.bucket.female', 'facilities.toilets.studentAndTeacher.bucket.mixed'], total: 'facilities.toilets.total.bucket' },
        { sources: ['facilities.toilets.studentOnly.waterFlush.male', 'facilities.toilets.studentOnly.waterFlush.female', 'facilities.toilets.studentOnly.waterFlush.mixed', 'facilities.toilets.teacherOnly.waterFlush.male', 'facilities.toilets.teacherOnly.waterFlush.female', 'facilities.toilets.teacherOnly.waterFlush.mixed', 'facilities.toilets.studentAndTeacher.waterFlush.male', 'facilities.toilets.studentAndTeacher.waterFlush.female', 'facilities.toilets.studentAndTeacher.waterFlush.mixed'], total: 'facilities.toilets.total.waterFlush' },
        { sources: ['facilities.toilets.studentOnly.others.male', 'facilities.toilets.studentOnly.others.female', 'facilities.toilets.studentOnly.others.mixed', 'facilities.toilets.teacherOnly.others.male', 'facilities.toilets.teacherOnly.others.female', 'facilities.toilets.teacherOnly.others.mixed', 'facilities.toilets.studentAndTeacher.others.male', 'facilities.toilets.studentAndTeacher.others.female', 'facilities.toilets.studentAndTeacher.others.mixed'], total: 'facilities.toilets.total.others' }
    ];
    toiletCalculations.forEach(calc => setupTotalCalculation(calc.sources, calc.total));

    // I. Teacher Qualifications
    const qualificationRows = document.querySelectorAll('#jss-form fieldset:nth-of-type(8) tbody tr');
    qualificationRows.forEach(row => {
        const maleInput = row.querySelector('input[type="number"][name$="male"]');
        const femaleInput = row.querySelector('input[type="number"][name$="female"]');
        const totalInput = row.querySelector('input[type="number"][name$="total"]');

        if (maleInput && femaleInput && totalInput) {
            const updateTotal = () => {
                totalInput.value = (parseInt(maleInput.value) || 0) + (parseInt(femaleInput.value) || 0);
            };
            maleInput.addEventListener('input', updateTotal);
            femaleInput.addEventListener('input', updateTotal);
        }
    });


    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const data = {};
        const formData = new FormData(form);

        // Helper function to set nested properties
        const setProperty = (obj, path, value) => {
            const keys = path.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '').split('.');
            let current = obj;
            for (let i = 0; i < keys.length - 1; i++) {
                if (!current[keys[i]]) {
                    current[keys[i]] = isNaN(keys[i + 1]) ? {} : [];
                }
                current = current[keys[i]];
            }
            current[keys[keys.length - 1]] = value;
        };

        // Process all form fields
        for (const [key, value] of formData.entries()) {
            // Handle checkboxes
            if (form.elements[key].type === 'checkbox') {
                if (!data[key]) {
                    data[key] = [];
                }
                data[key].push(value);
            } else {
                setProperty(data, key, value);
            }
        }

        // The name attributes in the HTML are designed to match the schema,
        // so the data object should be correctly structured.

        try {
            const response = await fetch('/api/jss', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-user-id': localStorage.getItem('userId')
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                showSuccessPopup('Form submitted successfully!');
                form.reset();
            } else {
                const errorData = await response.json();
                alert(`Error submitting form: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form.');
        }
    });
});

function addStaff() {
    const container = document.getElementById('staff-info-container');
    const staffIndex = container.children.length;
    const staffHtml = `
        <div class="staff-member">
            <input type="text" name="staff.staffInfo[${staffIndex}].staffFileNo" placeholder="Staff File No">
            <input type="text" name="staff.staffInfo[${staffIndex}].name" placeholder="Name of staff">
            <select name="staff.staffInfo[${staffIndex}].gender">
                <option value="M">Male</option>
                <option value="F">Female</option>
            </select>
            <input type="text" name="staff.staffInfo[${staffIndex}].type" placeholder="Type of staff">
            <input type="text" name="staff.staffInfo[${staffIndex}].sourceOfSalary" placeholder="Source of salary">
            <input type="number" name="staff.staffInfo[${staffIndex}].yearOfBirth" placeholder="Year of birth">
            <input type="number" name="staff.staffInfo[${staffIndex}].yearOfFirstAppointment" placeholder="Year of first appointment">
            <input type="number" name="staff.staffInfo[${staffIndex}].yearOfPresentAppointment" placeholder="Year of present appointment">
            <input type="number" name="staff.staffInfo[${staffIndex}].yearOfPosting" placeholder="Year of posting to the school">
            <input type="text" name="staff.staffInfo[${staffIndex}].gradeLevelStep" placeholder="Grade level / Step">
            <input type="text" name="staff.staffInfo[${staffIndex}].present" placeholder="Present">
            <input type="text" name="staff.staffInfo[${staffIndex}].academicQualification" placeholder="Academic Qualification">
            <input type="text" name="staff.staffInfo[${staffIndex}].teachingQualification" placeholder="Teaching Qualification">
            <input type="text" name="staff.staffInfo[${staffIndex}].subjectOfQualification" placeholder="Subject of qualification">
            <input type="text" name="staff.staffInfo[${staffIndex}].mainSubjectTaught" placeholder="Main subject taught">
            <input type="text" name="staff.staffInfo[${staffIndex}].teachingType" placeholder="Teaching type">
            <input type="checkbox" name="staff.staffInfo[${staffIndex}].teachesSeniorSecondary" value="true"> Teaches senior secondary
            <input type="number" name="staff.staffInfo[${staffIndex}].trainingsLast12Months" placeholder="Trainings in last 12 months">
        </div>
    `;
    container.insertAdjacentHTML('beforeend', staffHtml);
}

function addClassroom() {
    const container = document.getElementById('classroom-info-container');
    const classroomIndex = container.children.length;
    const classroomHtml = `
        <div class="classroom">
            <input type="number" name="classrooms.classroomInfo[${classroomIndex}].yearOfConstruction" placeholder="Year of construction">
            <input type="text" name="classrooms.classroomInfo[${classroomIndex}].presentCondition" placeholder="Present condition">
            <input type="number" name="classrooms.classroomInfo[${classroomIndex}].length" placeholder="Length (m)">
            <input type="number" name="classrooms.classroomInfo[${classroomIndex}].width" placeholder="Width (m)">
            <input type="text" name="classrooms.classroomInfo[${classroomIndex}].floorMaterial" placeholder="Floor material">
            <input type="text" name="classrooms.classroomInfo[${classroomIndex}].wallMaterial" placeholder="Walls material">
            <input type="text" name="classrooms.classroomInfo[${classroomIndex}].roofMaterial" placeholder="Roof material">
            <select name="classrooms.classroomInfo[${classroomIndex}].seating">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            <select name="classrooms.classroomInfo[${classroomIndex}].goodBlackboard">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', classroomHtml);
}