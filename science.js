document.addEventListener('DOMContentLoaded', () => {
    const scienceForm = document.getElementById('scienceForm');

    // Helper function to set nested properties on an object
    function set(obj, path, value) {
        const keys = path.split('.');
        let current = obj;
        for (let i = 0; i < keys.length - 1; i++) {
            const key = keys[i];
            const nextKeyIsArray = isFinite(keys[i + 1]);
            if (!current[key]) {
                current[key] = nextKeyIsArray ? [] : {};
            }
            current = current[key];
        }
        current[keys[keys.length - 1]] = value;
    }

    // --- Dynamic & Pre-populated Row Generation ---

    function populateTable(tableBodyId, rows, namePrefix, useGenders = false) {
        const tableBody = document.getElementById(tableBodyId);
        if (!tableBody) return;

        rows.forEach(rowData => {
            const newRow = document.createElement('tr');
            let cells = `<td>${rowData.label}</td>`;
            const levels = rowData.levels || ['js1', 'js2', 'js3', 'ss1', 'ss2', 'ss3'];
            levels.forEach(level => {
                const name = `${namePrefix}.${rowData.key}.${level}`;
                if (useGenders) {
                    cells += `
                        <td><input type="number" name="${name}.m" min="0"></td>
                        <td><input type="number" name="${name}.f" min="0"></td>
                    `;
                } else {
                     cells += `<td><input type="number" name="${name}" min="0"></td>`;
                }
            });
            newRow.innerHTML = cells;
            tableBody.appendChild(newRow);
        });
    }

    // Data for tables
    const subjects = [
        { key: 'english', label: 'English' }, { key: 'mathematics', label: 'Mathematics' }, { key: 'basicScience', label: 'Basic Science' },
        { key: 'biology', label: 'Biology' }, { key: 'physics', label: 'Physics' }, { key: 'chemistry', label: 'Chemistry' },
        { key: 'healthScience', label: 'Health Science' }, { key: 'agricScience', label: 'Agric Science' }, { key: 'homeEconomics', label: 'Home Economics' },
        { key: 'basicTechnology', label: 'Basic Technology' }, { key: 'foodAndNutrition', label: 'Food and Nutrition' }, { key: 'history', label: 'History' },
        { key: 'geography', label: 'Geography' }, { key: 'economics', label: 'Economics' }, { key: 'technicalDrawing', label: 'Technical Drawing' },
        { key: 'businessStudies', label: 'Business Studies' }, { key: 'phe', label: 'PHE' }, { key: 'french', label: 'French' },
        { key: 'igbo', label: 'Igbo' }, { key: 'hausa', label: 'Hausa' }, { key: 'yoruba', label: 'Yoruba' }, { key: 'arabic', label: 'Arabic' },
        { key: 'electricalInstallation', label: 'Electrical installation' }, { key: 'computerOperation', label: 'Computer Operation' },
        { key: 'basicComputerElectronics', label: 'Basic Computer Electronics' }, { key: 'computerProgramming', label: 'Computer Programming' },
        { key: 'woodMetalFinishing', label: 'Wood Metal Finishing' }, { key: 'furnitureDesignAndConstruction', label: 'Furniture Design and Construction' },
        { key: 'automechics', label: 'Automechics' }, { key: 'buildingConstruction', label: 'Building Construction' }, { key: 'generalWoodwork', label: 'General Woodwork' },
        { key: 'electricalElectronics', label: 'Electrical/Electronics' }, { key: 'clothingAndTextileDesign', label: 'Clothing & Textile Design' },
        { key: 'upholstery', label: 'Upholstery' }, { key: 'introductionToBuilding', label: 'Introduction to Building' },
        { key: 'wallsFloorsAndCeilingFinishing', label: 'Walls, Floors and Ceiling Finishing' }, { key: 'concreting', label: 'Concreting' },
        { key: 'garmentConstruction', label: 'Garment Construction' }, { key: 'brickBlockLaying', label: 'Brick, Block Laying' },
        { key: 'refrigerationAndAirConditioning', label: 'Refrigeration And Air Conditioning' }, { key: 'fabricationAndWelding', label: 'Fabrication And Welding' },
        { key: 'plumbing', label: 'Plumbing' }, { key: 'other', label: 'Other- please specify' }
    ];
    populateTable('studentBySubjectTableBody', subjects, 'studentBySubject', true);

    const bookSubjects = [
        { key: 'english', label: 'English' }, { key: 'mathematics', label: 'Mathematics' }, { key: 'basicScienceAndTechnology', label: 'Basic Science & Technology' },
        { key: 'history', label: 'History' }, { key: 'nationalValues', label: 'National Values' }, { key: 'biology', label: 'Biology' },
        { key: 'physics', label: 'Physics' }, { key: 'chemistry', label: 'Chemistry' }, { key: 'economics', label: 'Economics' }
    ];
    populateTable('textbooksByGovtTableBody', bookSubjects, 'studentTeacherBook.textbooksProvidedByGovt');
    populateTable('textbooksByOtherTableBody', bookSubjects, 'studentTeacherBook.textbooksProvidedByOther');
    populateTable('teacherTextbooksByGovtTableBody', bookSubjects, 'studentTeacherBook.teacherTextbooksByGovt');
    populateTable('teacherTextbooksByOtherTableBody', bookSubjects, 'studentTeacherBook.teacherTextbooksByOther');
    populateTable('teacherGuidesByGovtTableBody', bookSubjects, 'studentTeacherBook.teacherGuidesByGovt');
    populateTable('teacherGuidesByOtherTableBody', bookSubjects, 'studentTeacherBook.teacherGuidesByOther');

    const qualifications = [
        { key: 'phd', label: 'Ph.D.' }, { key: 'mastersWithTeaching', label: 'Masters with Teaching Qualification' },
        { key: 'mastersWithoutTeaching', label: 'Masters without Teaching Qualification' }, { key: 'degreeWithTeaching', label: 'Degree with Teaching Qualification' },
        { key: 'degreeWithoutTeaching', label: 'Degree without Teaching Qualification' }, { key: 'hndWithTeaching', label: 'HND with Teaching Qualification' },
        { key: 'hndWithoutTeaching', label: 'HND without Teaching Qualification' }, { key: 'nce', label: 'NCE' },
        { key: 'ond', label: 'OND/Diploma/ND' }, { key: 'gradeII', label: 'Grade II' }, { key: 'ssce', label: 'SSCE/WASC/WASSC/GCE' },
        { key: 'belowSSCE', label: 'Below SSCE' }, { key: 'others', label: 'Others' }
    ];
    const teacherQualificationBody = document.getElementById('teacherQualificationTableBody');
    if(teacherQualificationBody) {
        qualifications.forEach(qual => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${qual.label}</td>
                <td><input type="number" name="teacherQualificationByLevel.jss.${qual.key}.male" min="0"></td>
                <td><input type="number" name="teacherQualificationByLevel.jss.${qual.key}.female" min="0"></td>
                <td><input type="number" name="teacherQualificationByLevel.jss.${qual.key}.total" readonly></td>
                <td><input type="number" name="teacherQualificationByLevel.sss.${qual.key}.male" min="0"></td>
                <td><input type="number" name="teacherQualificationByLevel.sss.${qual.key}.female" min="0"></td>
                <td><input type="number" name="teacherQualificationByLevel.sss.${qual.key}.total" readonly></td>
            `;
            teacherQualificationBody.appendChild(row);
        });
    }

    const studentFlowCategories = [ { key: 'dropout', label: 'Dropout' }, { key: 'transferIn', label: 'Transfer in' }, { key: 'transferOut', label: 'Transfer out' }, { key: 'repeaters', label: 'Repeaters' }, { key: 'promoted', label: 'Promoted' }];
    populateTable('studentFlowTableBody', studentFlowCategories, 'enrolment.studentFlow', true);

    const specialNeedsCategories = [ { key: 'blind', label: 'Blind / visually impaired' }, { key: 'hearingImpaired', label: 'Hearing / speech impaired' }, { key: 'physicallyChallenged', label: 'Physically challenged' }, { key: 'mentallyChallenged', label: 'Mentally challenged' }, { key: 'albinism', label: 'Albinism' }, { key: 'autism', label: 'Autism' }];
    populateTable('specialNeedsTableBody', specialNeedsCategories, 'enrolment.studentsWithSpecialNeeds', true);

    // --- User-added Dynamic Rows ---
    function addDynamicRow(buttonId, tableBodyId, rowHTMLGenerator) {
        const addRowBtn = document.getElementById(buttonId);
        const tableBody = document.getElementById(tableBodyId);
        let counter = -1;
        if (addRowBtn && tableBody) {
            addRowBtn.addEventListener('click', () => {
                counter++;
                const newRow = document.createElement('tr');
                newRow.innerHTML = rowHTMLGenerator(counter);
                tableBody.appendChild(newRow);
            });
        }
    }

    addDynamicRow('addStaffRow', 'staffInfoTableBody', (c) => `
        <td><input type="text" name="staff.staffInfo.${c}.staffFileNo"></td>
        <td><input type="text" name="staff.staffInfo.${c}.name"></td>
        <td><select name="staff.staffInfo.${c}.gender"><option value="M">M</option><option value="F">F</option></select></td>
        <td><input type="text" name="staff.staffInfo.${c}.type"></td>
        <td><input type="text" name="staff.staffInfo.${c}.sourceOfSalary"></td>
        <td><input type="number" name="staff.staffInfo.${c}.yearOfBirth"></td>
        <td><input type="number" name="staff.staffInfo.${c}.yearOfFirstAppointment"></td>
        <td><input type="number" name="staff.staffInfo.${c}.yearOfPresentAppointment"></td>
        <td><input type="number" name="staff.staffInfo.${c}.yearOfPosting"></td>
        <td><input type="text" name="staff.staffInfo.${c}.gradeLevelStep"></td>
        <td><input type="text" name="staff.staffInfo.${c}.present"></td>
        <td><input type="text" name="staff.staffInfo.${c}.academicQualification"></td>
        <td><input type="text" name="staff.staffInfo.${c}.teachingQualification"></td>
        <td><input type="text" name="staff.staffInfo.${c}.subjectOfQualification"></td>
        <td><input type="text" name="staff.staffInfo.${c}.mainSubjectTaught"></td>
        <td><input type="text" name="staff.staffInfo.${c}.teachingType"></td>
        <td><input type="checkbox" name="staff.staffInfo.${c}.teachesBothJnrSnr"></td>
        <td><input type="number" name="staff.staffInfo.${c}.trainingsLast12Months"></td>
    `);

    addDynamicRow('addClassroomRow', 'classroomsTableBody', (c) => `
        <td><input type="number" name="classrooms.classroomInfo.${c}.yearOfConstruction"></td>
        <td><input type="text" name="classrooms.classroomInfo.${c}.presentCondition"></td>
        <td><input type="number" name="classrooms.classroomInfo.${c}.length"></td>
        <td><input type="number" name="classrooms.classroomInfo.${c}.width"></td>
        <td><input type="text" name="classrooms.classroomInfo.${c}.floorMaterial"></td>
        <td><input type="text" name="classrooms.classroomInfo.${c}.wallMaterial"></td>
        <td><input type="text" name="classrooms.classroomInfo.${c}.roofMaterial"></td>
        <td><select name="classrooms.classroomInfo.${c}.seating"><option value="Yes">Yes</option><option value="No">No</option></select></td>
        <td><select name="classrooms.classroomInfo.${c}.goodBlackboard"><option value="Yes">Yes</option><option value="No">No</option></select></td>
    `);

    addDynamicRow('addWorkshopRow', 'workshopsTableBody', (c) => `
        <td><input type="text" name="classrooms.workshops.${c}.type"></td>
        <td><select name="classrooms.workshops.${c}.shared"><option value="Yes">Yes</option><option value="No">No</option></select></td>
        <td><input type="number" name="classrooms.workshops.${c}.yearOfConstruction"></td>
        <td><input type="text" name="classrooms.workshops.${c}.presentCondition"></td>
        <td><input type="number" name="classrooms.workshops.${c}.length"></td>
        <td><input type="number" name="classrooms.workshops.${c}.width"></td>
        <td><input type="text" name="classrooms.workshops.${c}.floorMaterial"></td>
        <td><input type="text" name="classrooms.workshops.${c}.wallMaterial"></td>
        <td><input type="text" name="classrooms.workshops.${c}.roofMaterial"></td>
        <td><select name="classrooms.workshops.${c}.seating"><option value="Yes">Yes</option><option value="No">No</option></select></td>
        <td><select name="classrooms.workshops.${c}.goodBlackboard"><option value="Yes">Yes</option><option value="No">No</option></select></td>
    `);

    // --- Unified Form Submission ---
    if (scienceForm) {
        scienceForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const data = {};
            const formElements = scienceForm.querySelectorAll('input, select, textarea');

            formElements.forEach(el => {
                const name = el.name;
                if (!name) return; // Skip elements without a name

                let value;
                if (el.type === 'radio') {
                    if (el.checked) {
                        value = el.value;
                        set(data, name, value);
                    }
                } else if (el.type === 'checkbox') {
                    // Initialize array if it doesn't exist
                    const path = name.replace(/\[\]$/, '');
                    if (!path.split('.').reduce((o, k) => o && o[k], data)) {
                        set(data, path, []);
                    }
                    if (el.checked) {
                        // Push value to array
                        let arr = path.split('.').reduce((o, k) => o[k], data);
                        arr.push(el.value);
                    }
                } else {
                    value = el.value;
                    set(data, name, value);
                }
            });

            // Submit the structured data
            fetch('/api/science', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-user-id': JSON.parse(sessionStorage.getItem('user'))?.id
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => {
                if (result.message && result.message.includes('Error')) {
                    console.error('Submission Error:', result.message, result.error);
                    alert('There was an error submitting the form. See console for details.');
                } else {
                    console.log('Success:', result);
                    alert('Form submitted successfully!');
                    scienceForm.reset();
                    // Clear user-added dynamic rows
                    document.getElementById('staffInfoTableBody').innerHTML = '';
                    document.getElementById('classroomsTableBody').innerHTML = '';
                    document.getElementById('workshopsTableBody').innerHTML = '';
                }
            })
            .catch(error => {
                console.error('Fetch Error:', error);
                alert('There was an error submitting the form.');
            });
        });
    }
});