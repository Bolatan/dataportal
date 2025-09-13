const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

// MongoDB Connection
const dbURI = process.env.DATABASE_URL || 'mongodb+srv://bolatan:Ogbogbo123@cluster0.vzjwn4g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

const multer = require('multer');
const Survey = require('./models/Survey');

// Multer setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// API routes
app.post('/api/survey', upload.array('photos', 10), (req, res) => {
    const surveyData = req.body;
    if (req.files) {
        surveyData.photos = req.files.map(file => file.path);
    }
    const newSurvey = new Survey(surveyData);
    newSurvey.save()
        .then(survey => res.json(survey))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.get('/api/data', async (req, res) => {
    try {
        const surveys = await Survey.find();
        if (surveys.length === 0) {
            const defaultData = require('./data.json');
            return res.json(defaultData);
        }

        // Aggregate data
        const qualificationCounts = {};
        surveys.forEach(s => {
            qualificationCounts[s.highestQualification] = (qualificationCounts[s.highestQualification] || 0) + 1;
        });

        const electricityCounts = {};
        surveys.forEach(s => {
            electricityCounts[s.electricity] = (electricityCounts[s.electricity] || 0) + 1;
        });

        const genderCounts = { Male: 0, Female: 0 };
        surveys.forEach(s => {
            if (s.gender === 'male') genderCounts.Male++;
            if (s.gender === 'female') genderCounts.Female++;
        });

        const officeInfrastructure = {
            chart: {
                labels: surveys.map(s => s.lgea),
                datasets: [
                    { label: 'Good Condition', data: surveys.map(s => s.classroomsGood) },
                    { label: 'Needs Major Repairs', data: surveys.map(s => s.classroomsMajorRepair) },
                    { label: 'Needs Minor Repairs', data: surveys.map(s => s.classroomsMinorRepair) }
                ]
            }
        };

        const toiletFacilities = {
            chart: {
                labels: surveys.map(s => s.lgea),
                datasets: [{
                    label: 'Cubicle Toilets',
                    data: surveys.map(s => s.cubicleAvailable)
                }]
            }
        };

        const staffing = {
            chart: {
                labels: surveys.map(s => s.lgea),
                datasets: [
                    { label: 'Teachers (Male)', data: surveys.map(s => s.teachersMale) },
                    { label: 'Teachers (Female)', data: surveys.map(s => s.teachersFemale) },
                    { label: 'Non-teaching (Male)', data: surveys.map(s => s.nonTeachingMale) },
                    { label: 'Non-teaching (Female)', data: surveys.map(s => s.nonTeachingFemale) }
                ]
            }
        };

        const chartData = {
            officeInfrastructure,
            respondentsDemographics: {
                sexDistribution: {
                    labels: Object.keys(genderCounts),
                    datasets: [{ data: Object.values(genderCounts) }]
                },
                qualifications: {
                    labels: Object.keys(qualificationCounts),
                    datasets: [{ data: Object.values(qualificationCounts) }]
                }
            },
            sourceOfElectricity: {
                chart: {
                    labels: Object.keys(electricityCounts),
                    datasets: [{ data: Object.values(electricityCounts) }]
                }
            },
            toiletFacilities,
            staffing
        };

        res.json(chartData);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
