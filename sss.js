document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sss-form');

    // Helper function to set up total calculations
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

    // C.3 Senior Secondary Enrolment by age
    const enrolmentCalculations = [
        // SS1
        { sources: ['enrolment.seniorSecondaryEnrolment.ss1.below15.male', 'enrolment.seniorSecondaryEnrolment.ss1.age15.male', 'enrolment.seniorSecondaryEnrolment.ss1.age16.male', 'enrolment.seniorSecondaryEnrolment.ss1.age17.male', 'enrolment.seniorSecondaryEnrolment.ss1.above17.male'], total: 'enrolment.seniorSecondaryEnrolment.ss1.total.male' },
        { sources: ['enrolment.seniorSecondaryEnrolment.ss1.below15.female', 'enrolment.seniorSecondaryEnrolment.ss1.age15.female', 'enrolment.seniorSecondaryEnrolment.ss1.age16.female', 'enrolment.seniorSecondaryEnrolment.ss1.age17.female', 'enrolment.seniorSecondaryEnrolment.ss1.above17.female'], total: 'enrolment.seniorSecondaryEnrolment.ss1.total.female' },
        // SS2
        { sources: ['enrolment.seniorSecondaryEnrolment.ss2.below15.male', 'enrolment.seniorSecondaryEnrolment.ss2.age15.male', 'enrolment.seniorSecondaryEnrolment.ss2.age16.male', 'enrolment.seniorSecondaryEnrolment.ss2.age17.male', 'enrolment.seniorSecondaryEnrolment.ss2.above17.male'], total: 'enrolment.seniorSecondaryEnrolment.ss2.total.male' },
        { sources: ['enrolment.seniorSecondaryEnrolment.ss2.below15.female', 'enrolment.seniorSecondaryEnrolment.ss2.age15.female', 'enrolment.seniorSecondaryEnrolment.ss2.age16.female', 'enrolment.seniorSecondaryEnrolment.ss2.age17.female', 'enrolment.seniorSecondaryEnrolment.ss2.above17.female'], total: 'enrolment.seniorSecondaryEnrolment.ss2.total.female' },
        // SS3
        { sources: ['enrolment.seniorSecondaryEnrolment.ss3.below15.male', 'enrolment.seniorSecondaryEnrolment.ss3.age15.male', 'enrolment.seniorSecondaryEnrolment.ss3.age16.male', 'enrolment.seniorSecondaryEnrolment.ss3.age17.male', 'enrolment.seniorSecondaryEnrolment.ss3.above17.male'], total: 'enrolment.seniorSecondaryEnrolment.ss3.total.male' },
        { sources: ['enrolment.seniorSecondaryEnrolment.ss3.below15.female', 'enrolment.seniorSecondaryEnrolment.ss3.age15.female', 'enrolment.seniorSecondaryEnrolment.ss3.age16.female', 'enrolment.seniorSecondaryEnrolment.ss3.age17.female', 'enrolment.seniorSecondaryEnrolment.ss3.above17.female'], total: 'enrolment.seniorSecondaryEnrolment.ss3.total.female' },
    ];
    enrolmentCalculations.forEach(calc => setupTotalCalculation(calc.sources, calc.total));

    // C.6 SSCE examination for the previous Academic Year
    const ssceExams = ['waec', 'neco'];
    const examCategories = ['registered', 'sat', 'passed'];

    ssceExams.forEach(exam => {
        examCategories.forEach(category => {
            const maleInput = `enrolment.ssceExams.${exam}.${category}.male`;
            const femaleInput = `enrolment.ssceExams.${exam}.${category}.female`;
            const totalInput = `enrolment.ssceExams.${exam}.${category}.total`;
            setupTotalCalculation([`[name="${maleInput}"]`, `[name="${femaleInput}"]`], `[name="${totalInput}"]`);
        });

        // Column totals
        const maleSources = examCategories.map(cat => `[name="enrolment.ssceExams.${exam}.${cat}.male"]`);
        const femaleSources = examCategories.map(cat => `[name="enrolment.ssceExams.${exam}.${cat}.female"]`);
        const totalSources = examCategories.map(cat => `[name="enrolment.ssceExams.${exam}.${cat}.total"]`);
        setupTotalCalculation(maleSources, `[name="enrolment.ssceExams.${exam}.total.male"]`);
        setupTotalCalculation(femaleSources, `[name="enrolment.ssceExams.${exam}.total.female"]`);
        setupTotalCalculation(totalSources, `[name="enrolment.ssceExams.${exam}.total.total"]`);
    });


    // Staff Totals
    setupTotalCalculation(['[name="staff.nonTeaching.male"]', '[name="staff.nonTeaching.female"]'], '[name="staff.nonTeaching.total"]');
    setupTotalCalculation(['[name="staff.teaching.male"]', '[name="staff.teaching.female"]'], '[name="staff.teaching.total"]');

    // F.4 Toilets
    const toiletTypes = ['pit', 'bucket', 'waterFlush', 'others'];
    toiletTypes.forEach(type => {
        const sources = [
            `facilities.toilets.studentOnly.${type}.male`, `facilities.toilets.studentOnly.${type}.female`, `facilities.toilets.studentOnly.${type}.mixed`,
            `facilities.toilets.teacherOnly.${type}.male`, `facilities.toilets.teacherOnly.${type}.female`, `facilities.toilets.teacherOnly.${type}.mixed`,
            `facilities.toilets.studentAndTeacher.${type}.male`, `facilities.toilets.studentAndTeacher.${type}.female`, `facilities.toilets.studentAndTeacher.${type}.mixed`
        ];
        setupTotalCalculation(sources.map(s => `[name="${s}"]`), `[name="facilities.toilets.total.${type}"]`);
    });

    // I. Teacher Qualifications
    const teacherQualificationBody = document.getElementById('teacherQualificationTableBody');
    if (teacherQualificationBody) {
        const qualifications = [
            'phd', 'mastersWithTeaching', 'mastersWithoutTeaching', 'degreeWithTeaching', 'degreeWithoutTeaching',
            'hndWithTeaching', 'hndWithoutTeaching', 'nce', 'ond', 'gradeII', 'ssce', 'belowSSCE', 'others'
        ];

        // Add a total row dynamically
        const totalRow = document.createElement('tr');
        totalRow.innerHTML = `
            <td><strong>Total</strong></td>
            <td><input type="number" name="teacherQualificationByLevel.sss.total.male" readonly></td>
            <td><input type="number" name="teacherQualificationByLevel.sss.total.female" readonly></td>
            <td><input type="number" name="teacherQualificationByLevel.sss.total.total" readonly></td>
        `;
        teacherQualificationBody.appendChild(totalRow);

        // Set up row totals
        qualifications.forEach(qual => {
            setupTotalCalculation(
                [`[name="teacherQualificationByLevel.sss.${qual}.male"]`, `[name="teacherQualificationByLevel.sss.${qual}.female"]`],
                `[name="teacherQualificationByLevel.sss.${qual}.total"]`
            );
        });

        // Set up column totals
        setupTotalCalculation(qualifications.map(q => `[name="teacherQualificationByLevel.sss.${q}.male"]`), `[name="teacherQualificationByLevel.sss.total.male"]`);
        setupTotalCalculation(qualifications.map(q => `[name="teacherQualificationByLevel.sss.${q}.female"]`), `[name="teacherQualificationByLevel.sss.total.female"]`);
        setupTotalCalculation(qualifications.map(q => `[name="teacherQualificationByLevel.sss.${q}.total"]`), `[name="teacherQualificationByLevel.sss.total.total"]`);
    }

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

        try {
            const response = await fetch('/api/sss', {
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
            <input type="number" name="staff.staffInfo[${staffIndex}].yearOfPosting" placeholder="Year of posting to this school">
            <input type="text" name="staff.staffInfo[${staffIndex}].gradeLevelStep" placeholder="Grade level / Step">
            <input type="text" name="staff.staffInfo[${staffIndex}].present" placeholder="Present">
            <input type="text" name="staff.staffInfo[${staffIndex}].academicQualification" placeholder="Academic Qualification">
            <input type="text" name="staff.staffInfo[${staffIndex}].teachingQualification" placeholder="Teaching Qualification">
            <input type="text" name="staff.staffInfo[${staffIndex}].subjectOfQualification" placeholder="Subject of qualification">
            <input type="text" name="staff.staffInfo[${staffIndex}].mainSubjectTaught" placeholder="Main subject taught">
            <input type="text" name="staff.staffInfo[${staffIndex}].teachingType" placeholder="Teaching type">
            <input type="checkbox" name="staff.staffInfo[${staffIndex}].teachesJuniorSecondary" value="true"> Teaches junior secondary
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

function addSubjectEnrolment() {
    const container = document.getElementById('subject-enrolment-container');
    const subjectIndex = container.children.length;
    const subjectHtml = `
        <div class="subject-enrolment">
            <input type="text" name="subjectEnrolment[${subjectIndex}].subject" placeholder="Subject">
            <input type="number" name="subjectEnrolment[${subjectIndex}].ss1.male" placeholder="SS1 Male">
            <input type="number" name="subjectEnrolment[${subjectIndex}].ss1.female" placeholder="SS1 Female">
            <input type="number" name="subjectEnrolment[${subjectIndex}].ss2.male" placeholder="SS2 Male">
            <input type="number" name="subjectEnrolment[${subjectIndex}].ss2.female" placeholder="SS2 Female">
            <input type="number" name="subjectEnrolment[${subjectIndex}].ss3.male" placeholder="SS3 Male">
            <input type="number" name="subjectEnrolment[${subjectIndex}].ss3.female" placeholder="SS3 Female">
        </div>
    `;
    container.insertAdjacentHTML('beforeend', subjectHtml);
}