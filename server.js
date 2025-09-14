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

app.get('/users', (req, res) => {
    res.sendFile(__dirname + '/users.html');
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

// Get all users
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching users', error });
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

// Delete a user by ID
app.delete('/api/user/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting user', error });
    }
});

// User login
app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        user.comparePassword(password, (err, isMatch) => {
            if (err) {
                return res.status(500).json({ message: 'Error logging in', error: err });
            }
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            res.json({ message: 'Login successful', user: { id: user._id, username: user.username, role: user.role } });
        });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
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
            goodCondition: surveys.reduce((acc, s) => acc + (s.classroomsGood || 0), 0),
            needed: surveys.reduce((acc, s) => acc + (s.classroomsRequired || 0), 0),
            majorRepairs: surveys.reduce((acc, s) => acc + (s.classroomsMajorRepair || 0), 0),
            renovationRequired: surveys.reduce((acc, s) => acc + (s.cubicleRenovation || 0), 0), // Assuming cubicleRenovation is for offices
            additionalNeeded: surveys.reduce((acc, s) => acc + (s.classroomsRequired || 0), 0),
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
            cubicleToilets: surveys.reduce((acc, s) => acc + (s.cubicleAvailable || 0), 0),
            minorRepairs: surveys.reduce((acc, s) => acc + (s.cubicleMinorRepair || 0), 0),
            majorRepairs: surveys.reduce((acc, s) => acc + (s.cubicleMajorRepair || 0), 0),
            additionalNeeded: surveys.reduce((acc, s) => acc + (s.cubicleRequired || 0), 0),
            chart: {
                labels: surveys.map(s => s.lgea),
                datasets: [{
                    label: 'Cubicle Toilets',
                    data: surveys.map(s => s.cubicleAvailable)
                }]
            }
        };

        const staffing = {
            teachersMale: surveys.reduce((acc, s) => acc + (s.teachersMale || 0), 0),
            teachersFemale: surveys.reduce((acc, s) => acc + (s.teachersFemale || 0), 0),
            nonTeachingMale: surveys.reduce((acc, s) => acc + (s.nonTeachingMale || 0), 0),
            nonTeachingFemale: surveys.reduce((acc, s) => acc + (s.nonTeachingFemale || 0), 0),
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

        const responseData = {
            officeInfrastructure: officeInfrastructure,
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
            toiletFacilities: toiletFacilities,
            staffing: staffing
        };

        res.json(responseData);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
