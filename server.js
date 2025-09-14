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

app.get('/profile', (req, res) => {
    res.sendFile(__dirname + '/profile.html');
});

// MongoDB Connection
const dbURI = process.env.DATABASE_URL || 'mongodb+srv://bolatan:Ogbogbo123@cluster0.vzjwn4g.mongodb.net/dataportal?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

const multer = require('multer');
const Survey = require('./models/Survey');
const User = require('./models/User');

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

// User API Routes
// Create a new user
app.post('/api/user', async (req, res) => {
    try {
        const { username, email, password, fullName, role } = req.body;
        const newUser = new User({ username, email, password, fullName, role });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error });
    }
});

// Get a user by ID
app.get('/api/user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching user', error });
    }
});

// Update a user by ID
app.put('/api/user/:id', async (req, res) => {
    try {
        const { username, email, password, fullName, role } = req.body;
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.username = username || user.username;
        user.email = email || user.email;
        user.fullName = fullName || user.fullName;
        user.role = role || user.role;

        if (password) {
            user.password = password;
        }

        const updatedUser = await user.save();
        const userObject = updatedUser.toObject();
        delete userObject.password;
        res.json(userObject);
    } catch (error) {
        res.status(400).json({ message: 'Error updating user', error });
    }
});

app.post('/api/survey', upload.array('photos', 10), (req, res) => {
    try {
        const surveyData = req.body;
        if (req.files) {
            surveyData.photos = req.files.map(file => file.path);
        }
        const newSurvey = new Survey(surveyData);
        newSurvey.save()
            .then(survey => {
                console.log('Survey saved successfully:', survey);
                res.json(survey);
            })
            .catch(err => {
                console.error('Error saving survey:', err);
                res.status(400).json('Error: ' + err);
            });
    } catch (error) {
        console.error('Error in /api/survey route:', error);
        res.status(500).json('Server error');
    }
});

app.get('/api/data', async (req, res) => {
    try {
        const surveys = await Survey.find();
        if (surveys.length === 0) {
            return res.json({ noData: true });
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
