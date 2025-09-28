document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('jss-form');

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
                alert('Form submitted successfully!');
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