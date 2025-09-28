document.addEventListener('DOMContentLoaded', () => {
    const sssForm = document.getElementById('sssForm');

    // --- Dynamic & Pre-populated Row Generation ---
    function populateTable(tableBodyId, rows, namePrefix, useGenders = false, levels = ['ss1', 'ss2', 'ss3']) {
        const tableBody = document.getElementById(tableBodyId);
        if (!tableBody) return;

        rows.forEach(rowData => {
            const newRow = document.createElement('tr');
            let cells = `<td>${rowData.label}</td>`;
            levels.forEach(level => {
                const name = `${namePrefix}.${rowData.key}.${level}`;
                if (useGenders) {
                    cells += `
                        <td><input type="number" name="${name}.male" min="0"></td>
                        <td><input type="number" name="${name}.female" min="0"></td>
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
    const studentFlowCategories = [ { key: 'dropout', label: 'Dropout' }, { key: 'transferIn', label: 'Transfer in' }, { key: 'transferOut', label: 'Transfer out' }, { key: 'repeaters', label: 'Repeaters' }, { key: 'promoted', label: 'Promoted' }];
    populateTable('studentFlowTableBody', studentFlowCategories, 'enrolment.studentFlow', true, ['ss1', 'ss2', 'ss3']);

    const specialNeedsCategories = [ { key: 'blind', label: 'Blind / visually impaired' }, { key: 'hearingImpaired', label: 'Hearing / speech impaired' }, { key: 'physicallyChallenged', label: 'Physically challenged (other than visual or hearing)' }, { key: 'mentallyChallenged', label: 'Mentally challenged' }, { key: 'albinism', label: 'Albinism' }, { key: 'autism', label: 'Autism' }];
    populateTable('specialNeedsTableBody', specialNeedsCategories, 'enrolment.studentsWithSpecialNeeds', true, ['ss1', 'ss2', 'ss3']);

    const subjects = [
        { key: 'accounting', label: 'Accounting' }, { key: 'commerce', label: 'Commerce' }, { key: 'financialAccounting', label: 'Financial Accounting' },
        { key: 'insurance', label: 'Insurance' }, { key: 'officePractice', label: 'Office Practice' }, { key: 'storeManagement', label: 'Store Management' },
        { key: 'autoMechanics', label: 'Auto Mechanics' }, { key: 'basicElectricity', label: 'Basic Electricity' }, { key: 'basicElectronics', label: 'Basic Electronics' },
        { key: 'buildingConstruction', label: 'Building Construction' }, { key: 'foodAndNutrition', label: 'Food & Nutrition' }, { key: 'homeManagement', label: 'Home Management' },
        { key: 'metalWork', label: 'Metal Work' }, { key: 'technicalDrawing', label: 'Technical Drawing' }, { key: 'woodWork', label: 'Wood Work' },
        { key: 'agriculturalScience', label: 'Agricultural Science' }, { key: 'biology', label: 'Biology' }, { key: 'chemistry', label: 'Chemistry' },
        { key: 'computer', label: 'Computer' }, { key: 'furtherMathematics', label: 'Further Mathematics' }, { key: 'healthEducation', label: 'Health Education' },
        { key: 'physicalEducation', label: 'Physical Education' }, { key: 'physics', label: 'Physics' }, { key: 'arabic', label: 'Arabic' },
        { key: 'economics', label: 'Economics' }, { key: 'frenchLanguage', label: 'French Language' }, { key: 'geography', label: 'Geography' },
        { key: 'government', label: 'Government' }, { key: 'history', label: 'History' }, { key: 'literatureInEnglish', label: 'Literature in English' },
        { key: 'music', label: 'Music' }, { key: 'igboLanguage', label: 'Igbo Language' }, { key: 'hausaLanguage', label: 'Hausa Language' },
        { key: 'yorubaLanguage', label: 'Yoruba Language' }, { key: 'visualArts', label: 'Visual Arts' }, { key: 'christianReligiousStudies', label: 'Christian Religious Studies' },
        { key: 'islamicReligiousStudies', label: 'Islamic Religious Studies' }, { key: 'airConditioningAndRefrigeration', label: 'Air Conditioning and Refrigeration' },
        { key: 'animalHusbandary', label: 'Animal Husbandary' }, { key: 'autoBodyRepairAndSprayPainting', label: 'Auto body repair And Spray painting' },
        { key: 'autoElectricalWorks', label: 'Auto Electrical Works' }, { key: 'autoMechanicalWorks', label: 'Auto Mechanical Works' },
        { key: 'automobilePartsMerchandising', label: 'Automobile Parts Merchandising' }, { key: 'autopartMerchandizing', label: 'Autopart Merchandizing' },
        { key: 'blockLayingBrickLayingAndConcreteWorks', label: 'Block laying, Brick laying & Concrete Works' }, { key: 'bookKeeping', label: 'Book Keeping' },
        { key: 'carpentaryAndJoinery', label: 'Carpentary And Joinery' }, { key: 'cosmetology', label: 'Cosmetology' },
        { key: 'cateringAndCraftPractice', label: 'Catering and Craft Practice' }, { key: 'dataProcessing', label: 'Data Processing' },
        { key: 'dyeingAndBleaching', label: 'Dyeing And Bleaching' }, { key: 'electricalInstallationAndMaintenanceWork', label: 'Electrical Installation and Maintenance Work' },
        { key: 'clothingAndTextiles', label: 'Clothing & Textiles' }, { key: 'fishery', label: 'Fishery' },
        { key: 'furnitureMaking', label: 'Furniture Making' }, { key: 'garmentMaking', label: 'Garment Making' },
        { key: 'gsmMaintenanceAndRepairs', label: 'GSM Maintenance and Repairs' }, { key: 'keyboarding', label: 'Keyboarding' },
        { key: 'leatherGoodsManufacturing', label: 'Leather Goods Manufacturing' }, { key: 'stenography', label: 'Stenography' },
        { key: 'machineWoodworking', label: 'Machine Woodworking' }, { key: 'marketing', label: 'Marketing' },
        { key: 'mining', label: 'Mining' }, { key: 'paintingAndDecoration', label: 'Painting And Decoration' },
        { key: 'photography', label: 'Photography' }, { key: 'plumbingAndPipeFitting', label: 'Plumbing And Pipe Fitting' },
        { key: 'printingCraftPractice', label: 'Printing Craft Practice' }, { key: 'radioTelevisionAndElectricalWork', label: 'Radio Television and Electrical Work' },
        { key: 'radioTelevisionAndRepairs', label: 'Radio Television And Repairs' }, { key: 'salesmanship', label: 'Salesmanship' },
        { key: 'storeKeeping', label: 'Store Keeping' }, { key: 'textileTrade', label: 'Textile Trade' },
        { key: 'tieAndDyeCraft', label: 'Tie And Dye Craft' }, { key: 'tourism', label: 'Tourism' },
        { key: 'upholstery', label: 'Upholstery' }, { key: 'weldingAndFabrication', label: 'Welding & Fabrication' }
    ];
    populateTable('studentBySubjectTableBody', subjects, 'studentBySubject', true, ['ss1', 'ss2', 'ss3']);

    const bookSubjects = [
        { key: 'englishLanguage', label: 'English Language' }, { key: 'mathematics', label: 'Mathematics' },
        { key: 'civicEducation', label: 'Civic Education' }, { key: 'tradeSubjects', label: 'Trade Subjects' }
    ];
    populateTable('textbooksByGovtTableBody', bookSubjects, 'studentTeacherBook.textbooksProvidedByGovt', false, ['sss1', 'sss2', 'sss3']);
    populateTable('textbooksByOtherTableBody', bookSubjects, 'studentTeacherBook.textbooksProvidedByOther', false, ['sss1', 'sss2', 'sss3']);
    populateTable('teacherTextbooksByGovtTableBody', bookSubjects, 'studentTeacherBook.teacherTextbooksByGovt', false, ['sss1', 'sss2', 'sss3']);
    populateTable('teacherTextbooksByOtherTableBody', bookSubjects, 'studentTeacherBook.teacherTextbooksByOther', false, ['sss1', 'sss2', 'sss3']);
    populateTable('teacherGuidesByGovtTableBody', bookSubjects, 'studentTeacherBook.teacherGuidesByGovt', false, ['sss1', 'sss2', 'sss3']);
    populateTable('teacherGuidesByOtherTableBody', bookSubjects, 'studentTeacherBook.teacherGuidesByOther', false, ['sss1', 'sss2', 'sss3']);

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
                <td><input type="number" name="teacherQualificationByLevel.sss.${qual.key}.male" min="0"></td>
                <td><input type="number" name="teacherQualificationByLevel.sss.${qual.key}.female" min="0"></td>
                <td><input type="number" name="teacherQualificationByLevel.sss.${qual.key}.total" readonly></td>
            `;
            teacherQualificationBody.appendChild(row);
        });
    }

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
        <td><input type="checkbox" name="staff.staffInfo.${c}.teachesJuniorSecondary"></td>
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

    if (sssForm) {
        sssForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const data = {};
            const formData = new FormData(sssForm);

            const set = (obj, path, value) => {
                const keys = path.split('.');
                let current = obj;
                for (let i = 0; i < keys.length - 1; i++) {
                    const key = keys[i];
                    const nextKey = keys[i + 1];
                    if (!current[key]) {
                        if (!isNaN(parseInt(nextKey, 10))) {
                            current[key] = [];
                        } else {
                            current[key] = {};
                        }
                    }
                    current = current[key];
                }
                const finalKey = keys[keys.length - 1];
                const finalValue = value === 'on' ? true : value;
                current[finalKey] = finalValue;
            };

            const get = (obj, path) => {
                return path.split('.').reduce((o, k) => (o || {})[k], obj);
            };

            for (const [key, value] of formData.entries()) {
                if (key.endsWith('[]')) {
                    const newKey = key.slice(0, -2);
                    const existing = get(data, newKey);
                    if (existing) {
                        existing.push(value);
                    } else {
                        set(data, newKey, [value]);
                    }
                } else {
                    set(data, key, value);
                }
            }

            sssForm.querySelectorAll('input[type=checkbox]:not(:checked)').forEach(el => {
                const name = el.name;
                if (!name.endsWith('[]')) {
                    if (get(data, name) === undefined) {
                        set(data, name, false);
                    }
                } else {
                    const newKey = name.slice(0, -2);
                    if (get(data, newKey) === undefined) {
                        set(data, newKey, []);
                    }
                }
            });

            const arrayPaths = ['staff.staffInfo', 'classrooms.classroomInfo'];
            arrayPaths.forEach(path => {
                const obj = get(data, path);
                if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
                    const arr = Object.values(obj);
                    set(data, path, arr);
                }
            });

            fetch('/api/sss', {
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
                    sssForm.reset();
                    document.getElementById('staffInfoTableBody').innerHTML = '';
                    document.getElementById('classroomsTableBody').innerHTML = '';
                }
            })
            .catch(error => {
                console.error('Fetch Error:', error);
                alert('There was an error submitting the form.');
            });
        });
    }
});