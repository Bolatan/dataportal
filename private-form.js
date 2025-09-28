document.addEventListener('DOMContentLoaded', () => {
    // Dynamically populate all the tables
    populateBirthCertTable('birthCertNINPrePrimaryTable', ['kg1', 'kg2', 'n1', 'n2', 'n3', 'pry1'], 'enrolment.birthCertNINPrePrimary');
    populateBirthCertTable('birthCertNINSecondaryTable', ['jss1', 'ss1'], 'enrolment.birthCertNINSecondary');
    populateEnrolmentByAgeTable('prePrimaryEnrolmentTable', ['Below 3 Years', '3 Years', '4 Years', '5 Years', 'Above 5 Years', 'Total'], ['kg1', 'kg2', 'n1', 'n2', 'n3'], 'enrolment.prePrimaryByAge');
    populateNewEntrantsPrimary1Table();
    populateEnrolmentByAgeTable('primaryEnrolmentTable', ['Below 6 Years', '6 Years', '7 Years', '8 Years', '9 Years', '10 Years', '11 Years', 'Above 11 Years', 'Total'], ['pry1', 'pry2', 'pry3', 'pry4', 'pry5', 'pry6'], 'enrolment.primaryByAge');
    populateSpecialNeedsPrimaryTable();
    populateOrphansTable();
    populatePupilFlowPrimaryTable();
    populateNewEntrantsTable('newEntrantsJSS1Table', ['Below 12 years', '12 Years', '13 Years', '14 Years', 'Above 14 years', 'Total'], 'enrolment.newEntrantsJSS1');
    populateEnrolmentByAgeTable('jssEnrolmentTable', ['Below 12 Years', '12 Years', '13 Years', '14 Years', 'Above 14 years', 'Total'], ['js1', 'js2', 'js3'], 'enrolment.jssByAge');
    populateNewEntrantsTable('newEntrantsSS1Table', ['Below 15 years', '15 Years', '16 Years', '17 Years', 'Above 17 years', 'Total'], 'enrolment.newEntrantsSS1');
    populateEnrolmentByAgeTable('sssEnrolmentTable', ['Below 15 years', '15 Years', '16 Years', '17 Years', 'Above 17 years', 'Total'], ['ss1', 'ss2', 'ss3'], 'enrolment.sssByAge');
    populateStudentFlowSecondaryTable();
    populateSpecialNeedsSecondaryTable();
    populateTextbooksTable('textbooksPupilAvgTable', 'textbooks.pupilAverage');
    populateTextbooksTable('textbooksTeacherAvgTable', 'textbooks.teacherAverage');
    populateTextbooksTable('textbooksTeacherGuidesAvgTable', 'textbooks.teacherGuidesAverage');
    populateTeacherQualsTable();

    const form = document.getElementById('privateSchoolForm');
    form.addEventListener('submit', handleFormSubmission);
});

// Helper function to set up auto-calculation for a total field
function setupTotalCalculation(sourceInputSelectors, totalInputSelector) {
    const totalInput = document.querySelector(totalInputSelector);
    if (!totalInput) {
        // console.error(`Total input not found: ${totalInputSelector}`);
        return;
    }

    const sourceInputs = sourceInputSelectors.map(selector => document.querySelector(selector)).filter(Boolean);

    const updateTotal = () => {
        const sum = sourceInputs.reduce((acc, input) => acc + (parseInt(input.value) || 0), 0);
        totalInput.value = sum;
    };

    sourceInputs.forEach(input => {
        input.addEventListener('input', updateTotal);
    });
}


// Generic helper to create an input element
function createInput(type, name, readOnly = false) {
    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    if (readOnly) input.readOnly = true;
    return input;
}

// Generic populator for tables with Male/Female columns
function createGenderCells(row, namePrefix, isTotal = false) {
    const maleCell = row.insertCell();
    maleCell.appendChild(createInput('number', `${namePrefix}.male`, isTotal));
    const femaleCell = row.insertCell();
    femaleCell.appendChild(createInput('number', `${namePrefix}.female`, isTotal));
}

function populateBirthCertTable(tableId, levels, namePrefix) {
    const tableBody = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    const certTypes = ['National Population Commission', 'Others', 'NIN', 'Total'];
    certTypes.forEach((type, index) => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = type;
        const typeKey = type.toLowerCase().replace(/[^a-z0-9]+/g, '');
        const isTotalRow = index === certTypes.length - 1;
        levels.forEach(level => {
            createGenderCells(row, `${namePrefix}.${typeKey}.${level}`, isTotalRow);
        });
    });

    // Add calculations
    levels.forEach(level => {
        // Male total
        setupTotalCalculation(
            ['nationalpopulationcommission', 'others', 'nin'].map(type => `[name="${namePrefix}.${type}.${level}.male"]`),
            `[name="${namePrefix}.total.${level}.male"]`
        );
        // Female total
        setupTotalCalculation(
            ['nationalpopulationcommission', 'others', 'nin'].map(type => `[name="${namePrefix}.${type}.${level}.female"]`),
            `[name="${namePrefix}.total.${level}.female"]`
        );
    });
}

function populateEnrolmentByAgeTable(tableId, ageGroups, levels, namePrefix) {
    const tableBody = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    ageGroups.forEach(age => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = age;
        const ageKey = age.toLowerCase().replace(/[^a-z0-9]+/g, '');
        const isTotalRow = age === 'Total';
        levels.forEach(level => {
            createGenderCells(row, `${namePrefix}.${ageKey}.${level}`, isTotalRow);
        });
    });

    // Add calculations
    const ageKeys = ageGroups.slice(0, -1).map(age => age.toLowerCase().replace(/[^a-z0-9]+/g, ''));
    levels.forEach(level => {
        // Male total
        setupTotalCalculation(
            ageKeys.map(ageKey => `[name="${namePrefix}.${ageKey}.${level}.male"]`),
            `[name="${namePrefix}.total.${level}.male"]`
        );
        // Female total
        setupTotalCalculation(
            ageKeys.map(ageKey => `[name="${namePrefix}.${ageKey}.${level}.female"]`),
            `[name="${namePrefix}.total.${level}.female"]`
        );
    });
}

function populateNewEntrantsPrimary1Table() {
    const tableBody = document.getElementById('newEntrantsPrimary1Table').getElementsByTagName('tbody')[0];
    const ageGroups = ['Below 6 Years', '6 Years', '7 Years', '8 Years', '9 Years', '10 Years', '11 Years', 'Above 11 Years', 'Total'];
    ageGroups.forEach(age => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = age;
        const ageKey = age.toLowerCase().replace(/[^a-z0-9]+/g, '');
        const isTotalRow = age === 'Total';
        createGenderCells(row, `enrolment.newEntrantsPrimary1.${ageKey}.primary1`, isTotalRow);
        createGenderCells(row, `enrolment.newEntrantsPrimary1.${ageKey}.attendedEccde`, isTotalRow);
    });
    // Add calculations
    const ageKeys = ageGroups.slice(0, -1).map(age => age.toLowerCase().replace(/[^a-z0-9]+/g, ''));
    ['primary1', 'attendedEccde'].forEach(category => {
        // Male total
        setupTotalCalculation(
            ageKeys.map(ageKey => `[name="enrolment.newEntrantsPrimary1.${ageKey}.${category}.male"]`),
            `[name="enrolment.newEntrantsPrimary1.total.${category}.male"]`
        );
        // Female total
        setupTotalCalculation(
            ageKeys.map(ageKey => `[name="enrolment.newEntrantsPrimary1.${ageKey}.${category}.female"]`),
            `[name="enrolment.newEntrantsPrimary1.total.${category}.female"]`
        );
    });
}

function populateSpecialNeedsPrimaryTable() {
    const tableBody = document.getElementById('specialNeedsPrimaryTable').getElementsByTagName('tbody')[0];
    const challenges = ['Blind / visually impaired', 'Hearing / speech impaired', 'Physically challenged', 'Mentally challenged', 'Albinism', 'Autism'];
    const levels = ['eccd', 'nurs', 'nr3', 'pry1', 'pry2', 'pry3', 'pry4', 'pry5', 'pry6'];
    challenges.forEach(challenge => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = challenge;
        const challengeKey = challenge.toLowerCase().replace(/[^a-z0-9]+/g, '');
        levels.forEach(level => {
            createGenderCells(row, `enrolment.specialNeedsPrimary.${challengeKey}.${level}`);
        });
    });
}

function populateOrphansTable() {
    const tableBody = document.getElementById('orphansByGradeTable').getElementsByTagName('tbody')[0];
    const vulnerabilities = ['Lost Mother', 'Lost Father', 'Lost Both'];
    const levels = ['eccd', 'nurs', 'nr3', 'pry1', 'pry2', 'pry3', 'pry4', 'pry5', 'pry6'];
    vulnerabilities.forEach(vuln => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = vuln;
        const vulnKey = vuln.toLowerCase().replace(/[^a-z0-9]+/g, '');
        levels.forEach(level => {
            createGenderCells(row, `enrolment.orphansByGrade.${vulnKey}.${level}`);
        });
    });
}

function populatePupilFlowPrimaryTable() {
    const tableBody = document.getElementById('pupilFlowPrimaryTable').getElementsByTagName('tbody')[0];
    const flows = ['Dropout', 'Transfer in', 'Transfer out', 'Repeaters', 'Promoted'];
    const levels = ['pry1', 'pry2', 'pry3', 'pry4', 'pry5', 'pry6'];
    flows.forEach(flow => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = flow;
        const flowKey = flow.toLowerCase().replace(/[^a-z0-9]+/g, '');
        levels.forEach(level => {
            createGenderCells(row, `enrolment.pupilFlowPrimary.${flowKey}.${level}`);
        });
    });
}

function populateNewEntrantsTable(tableId, ageGroups, namePrefix) {
    const tableBody = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    ageGroups.forEach(age => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = age;
        const ageKey = age.toLowerCase().replace(/[^a-z0-9]+/g, '');
        const isTotalRow = age === 'Total';
        createGenderCells(row, `${namePrefix}.${ageKey}`, isTotalRow);
    });

    // Add calculations
    const ageKeys = ageGroups.slice(0, -1).map(age => age.toLowerCase().replace(/[^a-z0-9]+/g, ''));
    // Male total
    setupTotalCalculation(
        ageKeys.map(ageKey => `[name="${namePrefix}.${ageKey}.male"]`),
        `[name="${namePrefix}.total.male"]`
    );
    // Female total
    setupTotalCalculation(
        ageKeys.map(ageKey => `[name="${namePrefix}.${ageKey}.female"]`),
        `[name="${namePrefix}.total.female"]`
    );
}

function populateStudentFlowSecondaryTable() {
    const tableBody = document.getElementById('studentFlowSecondaryTable').getElementsByTagName('tbody')[0];
    const flows = ['Dropout', 'Transfer in', 'Transfer out', 'Repeaters', 'Promoted'];
    const levels = ['js1', 'js2', 'js3', 'ss1', 'ss2', 'ss3'];
    flows.forEach(flow => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = flow;
        const flowKey = flow.toLowerCase().replace(/[^a-z0-9]+/g, '');
        levels.forEach(level => {
            createGenderCells(row, `enrolment.studentFlowSecondary.${flowKey}.${level}`);
        });
    });
}

function populateSpecialNeedsSecondaryTable() {
    const tableBody = document.getElementById('specialNeedsSecondaryTable').getElementsByTagName('tbody')[0];
    const challenges = ['Blind / visually impaired', 'Hearing / speech impaired', 'Physically challenged', 'Mentally challenged', 'Albinism', 'Autism'];
    const levels = ['js1', 'js2', 'js3', 'ss1', 'ss2', 'ss3'];
    challenges.forEach(challenge => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = challenge;
        const challengeKey = challenge.toLowerCase().replace(/[^a-z0-9]+/g, '');
        levels.forEach(level => {
            createGenderCells(row, `enrolment.specialNeedsSecondary.${challengeKey}.${level}`);
        });
    });
}

function populateTextbooksTable(tableId, namePrefix) {
    const tableBody = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    const levels = ['PRY1', 'PRY2', 'PRY3', 'PRY4', 'PRY5', 'PRY6', 'JS1', 'JS2', 'JS3', 'SS1', 'SS2', 'SS3'];
    levels.forEach(level => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = level;
        const cell = row.insertCell();
        cell.appendChild(createInput('number', `${namePrefix}.${level.toLowerCase()}`));
    });
}

function populateTeacherQualsTable() {
    const tableBody = document.getElementById('teacherQualsTable').getElementsByTagName('tbody')[0];
    const qualifications = ["Ph.D.", "Masters with Teaching Qualification", "Masters without Teaching Qualification", "Degree with Teaching Qualification", "Degree without Teaching Qualification", "HND with Teaching Qualification", "HND without Teaching Qualification", "NCE", "OND/Diploma/ND", "Grade II", "SSCE/WASC/WASSC/GCE", "Below SSCE", "Others", "TOTAL"];
    const levels = ['prePry', 'pry', 'jss', 'sss'];
    qualifications.forEach(qual => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = qual;
        const qualKey = qual.toLowerCase().replace(/[^a-z0-9]+/g, '');
        const isTotalRow = qual === 'TOTAL';

        levels.forEach(level => {
            const maleInput = createInput('number', `teacherQualifications.${qualKey}.${level}.male`, isTotalRow);
            const femaleInput = createInput('number', `teacherQualifications.${qualKey}.${level}.female`, isTotalRow);
            const totalInput = createInput('number', `teacherQualifications.${qualKey}.${level}.total`, true);

            row.insertCell().appendChild(maleInput);
            row.insertCell().appendChild(femaleInput);
            row.insertCell().appendChild(totalInput);

            // Row-wise total calculation (Male + Female)
            if (!isTotalRow) {
                const updateTotal = () => {
                    totalInput.value = (parseInt(maleInput.value) || 0) + (parseInt(femaleInput.value) || 0);
                    updateOverallTotal(qualKey, level);
                };
                maleInput.addEventListener('input', updateTotal);
                femaleInput.addEventListener('input', updateTotal);
            }
        });
    });
    // Column-wise total calculation (Sum of all qualifications)
    const qualKeys = qualifications.slice(0, -1).map(q => q.toLowerCase().replace(/[^a-z0-9]+/g, ''));
    levels.forEach(level => {
        // Male total
        setupTotalCalculation(
            qualKeys.map(qualKey => `[name="teacherQualifications.${qualKey}.${level}.male"]`),
            `[name="teacherQualifications.total.${level}.male"]`
        );
        // Female total
        setupTotalCalculation(
            qualKeys.map(qualKey => `[name="teacherQualifications.${qualKey}.${level}.female"]`),
            `[name="teacherQualifications.total.${level}.female"]`
        );
        // Grand total
        setupTotalCalculation(
            qualKeys.map(qualKey => `[name="teacherQualifications.${qualKey}.${level}.total"]`),
            `[name="teacherQualifications.total.${level}.total"]`
        );
    });
}

// Main submission handler
async function handleFormSubmission(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {};

    for (const [key, value] of formData.entries()) {
        const keys = key.split(/(?=\.)/).map(k => k.replace('.', ''));
        let current = data;
        keys.forEach((k, i) => {
            const isArray = k.includes('[]');
            const cleanKey = k.replace('[]', '');
            if (i === keys.length - 1) {
                if (isArray) {
                    if (!current[cleanKey]) {
                        current[cleanKey] = [];
                    }
                    current[cleanKey].push(value);
                } else {
                    current[cleanKey] = value;
                }
            } else {
                if (!current[cleanKey]) {
                    current[cleanKey] = {};
                }
                current = current[cleanKey];
            }
        });
    }
     // A special adjustment for levelsOffered checkboxes
    if (data.schoolCharacteristics && data.schoolCharacteristics.levelsOffered) {
        const levels = formData.getAll('schoolCharacteristics.levelsOffered');
        data.schoolCharacteristics.levelsOffered = levels;
    }
     if (data.wellBeing && data.wellBeing.orientation && data.wellBeing.orientation.fora) {
        const fora = formData.getAll('wellBeing.orientation.fora');
        data.wellBeing.orientation.fora = fora;
    }


    try {
        const response = await fetch('/api/private-survey', {
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
            alert(`Error submitting form: ${errorData.message || 'Unknown error'}`);
            console.error('Error details:', errorData);
        }
    } catch (error) {
        console.error('Submission error:', error);
        alert('An error occurred while submitting the form.');
    }
}