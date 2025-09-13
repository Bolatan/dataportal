document.addEventListener('DOMContentLoaded', () => {
    const surveyForm = document.getElementById('surveyForm');

    // Auto-calculation logic
    const inputsToCalculate = [
        { male: 'teachersMale', female: 'teachersFemale', total: 'teachersTotal' },
        { male: 'nonTeachingMale', female: 'nonTeachingFemale', total: 'nonTeachingTotal' },
        { male: 'eccdeMale', female: 'eccdeFemale', total: 'eccdeTotal' },
        { male: 'primaryMale', female: 'primaryFemale', total: 'primaryTotal' },
        { male: 'specialMale', female: 'specialFemale', total: 'specialTotal' }
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

    function updatePupilTotals() {
        const eccdeMale = parseInt(document.getElementById('eccdeMale').value) || 0;
        const eccdeFemale = parseInt(document.getElementById('eccdeFemale').value) || 0;
        const primaryMale = parseInt(document.getElementById('primaryMale').value) || 0;
        const primaryFemale = parseInt(document.getElementById('primaryFemale').value) || 0;
        const specialMale = parseInt(document.getElementById('specialMale').value) || 0;
        const specialFemale = parseInt(document.getElementById('specialFemale').value) || 0;

        const totalMale = eccdeMale + primaryMale + specialMale;
        const totalFemale = eccdeFemale + primaryFemale + specialFemale;

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

        fetch('http://localhost:3000/api/survey', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
            alert('Survey submitted successfully!');
            window.location.href = 'index.html';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the survey.');
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
