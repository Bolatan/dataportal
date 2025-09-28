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
    res.sendFile(__dirname + '/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.get('/profile', (req, res) => {
    res.sendFile(__dirname + '/profile.html');
});

app.get('/users', (req, res) => {
    res.sendFile(__dirname + '/users.html');
});

app.get('/survey', (req, res) => {
    res.sendFile(__dirname + '/survey.html');
});

app.get('/reports', (req, res) => {
    res.sendFile(__dirname + '/reports.html');
});

app.get('/audit-log', (req, res) => {
    res.sendFile(__dirname + '/audit-log.html');
});

app.get('/forms', (req, res) => {
    res.sendFile(__dirname + '/forms.html');
});

app.get('/science', (req, res) => {
    res.sendFile(__dirname + '/science.html');
});

app.get('/science-report', (req, res) => {
    res.sendFile(__dirname + '/science-report.html');
});

app.get('/private-form', (req, res) => {
    res.sendFile(__dirname + '/private_form.html');
});

app.get('/eccde-form', (req, res) => {
    res.sendFile(__dirname + '/eccde-form.html');
});

app.get('/jss', (req, res) => {
    res.sendFile(__dirname + '/jss.html');
});

// MongoDB Connection
const dbURI = process.env.DATABASE_URL;
if (!dbURI) {
    console.error('CRITICAL ERROR: DATABASE_URL environment variable is not set.');
    process.exit(1);
}
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    });

const multer = require('multer');
const Survey = require('./models/Survey');
const Science = require('./models/Science');
const PrivateSurvey = require('./models/PrivateSurvey');
const Eccde = require('./models/Eccde');
const Jss = require('./models/jss');

const User = require('./models/User');
const AuditLog = require('./models/AuditLog');

// Middleware to log user actions
const logAction = async (userId, action) => {
    if (!userId) return;
    try {
        const user = await User.findById(userId);
        if (user) {
            const newLog = new AuditLog({ user: userId, action });
            await newLog.save();
        }
    } catch (error) {
        console.error('Failed to log action:', error);
    }
};

const isAdmin = async (req, res, next) => {
    const userId = req.headers['x-user-id'];
    if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const user = await User.findById(userId);
        if (user && user.role === 'admin') {
            req.user = user;
            next();
        } else {
            res.status(403).json({ message: 'Forbidden: Admin access required' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error verifying admin status', error });
    }
};

const isEnumerator = async (req, res, next) => {
    const userId = req.headers['x-user-id'];
    if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const user = await User.findById(userId);
        if (user && (user.role === 'enumerator' || user.role === 'admin')) {
            req.user = user;
            next();
        } else {
            res.status(403).json({ message: 'Forbidden: Enumerator access required' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error verifying enumerator status', error });
    }
};

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

// Audit Log API
app.get('/api/audit-log', isAdmin, async (req, res) => {
    try {
        const logs = await AuditLog.find().sort({ timestamp: -1 }).populate('user', 'username fullName');
        res.json(logs);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching audit logs', error });
    }
});

// User API Routes
// Create a new user
app.post('/api/user', async (req, res) => {
    try {
        const { username, email, password, fullName, role } = req.body;
        const newUser = new User({ username, email, password, fullName, role });
        await newUser.save();
        const actorId = req.headers['x-user-id'];
        logAction(actorId, `created user ${username}`);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error });
    }
});

// Get all users
app.get('/api/users', isAdmin, async (req, res) => {
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
app.put('/api/user/:id', isAdmin, async (req, res) => {
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

        const actorId = req.headers['x-user-id'];
        logAction(actorId, `updated user ${user.username}`);

        res.json(userObject);
    } catch (error) {
        res.status(400).json({ message: 'Error updating user', error });
    }
});

// Delete a user by ID
app.delete('/api/user/:id', isAdmin, async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const actorId = req.headers['x-user-id'];
        logAction(actorId, `deleted user ${user.username}`);
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

app.post('/api/survey', isEnumerator, upload.array('photos', 10), (req, res) => {
    try {
        const surveyData = req.body;
        if (req.files) {
            surveyData.photos = req.files.map(file => file.path);
        }
        const newSurvey = new Survey(surveyData);
        newSurvey.save()
            .then(survey => {
                const actorId = req.headers['x-user-id'];
                logAction(actorId, `submitted survey for LGEA ${survey.lgea}`);
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

app.post('/api/science', isEnumerator, (req, res) => {
    try {
        const scienceData = req.body;
        const newScience = new Science(scienceData);
        newScience.save()
            .then(science => {
                const actorId = req.headers['x-user-id'];
                logAction(actorId, `submitted science form for school ${science.schoolIdentification.schoolName}`);
                console.log('Science form saved successfully:', science);
                res.json(science);
            })
            .catch(err => {
                console.error('Error saving science form:', err);
                res.status(400).json({ message: 'Error: ' + err, error: err });
            });
    } catch (error) {
        console.error('Error in /api/science route:', error);
        res.status(500).json('Server error');
    }
});

app.post('/api/jss', isEnumerator, (req, res) => {
    try {
        const jssData = req.body;
        const newJss = new Jss(jssData);
        newJss.save()
            .then(jss => {
                const actorId = req.headers['x-user-id'];
                logAction(actorId, `submitted JSS form for school ${jss.schoolIdentification.schoolName}`);
                console.log('JSS form saved successfully:', jss);
                res.json(jss);
            })
            .catch(err => {
                console.error('Error saving JSS form:', err);
                res.status(400).json({ message: 'Error: ' + err, error: err });
            });
    } catch (error) {
        console.error('Error in /api/jss route:', error);
        res.status(500).json('Server error');
    }
});

app.post('/api/private-survey', isEnumerator, (req, res) => {
    try {
        const surveyData = req.body;
        const newPrivateSurvey = new PrivateSurvey(surveyData);
        newPrivateSurvey.save()
            .then(survey => {
                const actorId = req.headers['x-user-id'];
                logAction(actorId, `submitted private survey for school ${survey.schoolIdentification.schoolName}`);
                console.log('Private Survey saved successfully:', survey);
                res.json(survey);
            })
            .catch(err => {
                console.error('Error saving private survey:', err);
                res.status(400).json('Error: ' + err);
            });
    } catch (error) {
        console.error('Error in /api/private-survey route:', error);
        res.status(500).json('Server error');
    }
});

app.post('/api/eccde-form', (req, res) => {
    try {
        const eccdeData = req.body;
        const newEccde = new Eccde(eccdeData);
        newEccde.save()
            .then(eccde => {
                console.log('ECCDE form saved successfully:', eccde);
                res.json(eccde);
            })
            .catch(err => {
                console.error('Error saving ECCDE form:', err);
                res.status(400).json('Error: ' + err);
            });
    } catch (error) {
        console.error('Error in /api/eccde-form route:', error);
        res.status(500).json('Server error');
    }
});

app.get('/eccde-reports', (req, res) => {
    res.sendFile(__dirname + '/eccde-reports.html');
});

app.get('/api/eccde-reports', async (req, res) => {
    try {
        const reports = await Eccde.find().sort({ createdAt: -1 });
        res.json(reports);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching ECCDE reports', error });
    }
});

app.get('/api/science-reports', async (req, res) => {
    try {
        const reports = await Science.find().sort({ createdAt: -1 });
        res.json(reports);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching science reports', error });
    }
});

app.get('/api/data', async (req, res) => {
    try {
        const surveys = await Survey.find();
        const scienceForms = await Science.find();
        const privateSurveys = await PrivateSurvey.find();
        const eccdeForms = await Eccde.find();
        const jssForms = await Jss.find();

        if (surveys.length === 0 && scienceForms.length === 0 && privateSurveys.length === 0 && eccdeForms.length === 0 && jssForms.length === 0) {
            return res.json({ noData: true });
        }

        // Aggregate public survey data
        const qualificationCounts = {};
        surveys.forEach(s => {
            if(s.highestQualification) {
                qualificationCounts[s.highestQualification] = (qualificationCounts[s.highestQualification] || 0) + 1;
            }
        });
        scienceForms.forEach(s => {
            s.staff?.staffInfo?.forEach(staff => {
                if (staff.academicQualification) {
                    qualificationCounts[staff.academicQualification] = (qualificationCounts[staff.academicQualification] || 0) + 1;
                }
            });
        });
        jssForms.forEach(s => {
            s.staff?.staffInfo?.forEach(staff => {
                if (staff.academicQualification) {
                    qualificationCounts[staff.academicQualification] = (qualificationCounts[staff.academicQualification] || 0) + 1;
                }
            });
        });

        const electricityCounts = {};
        surveys.forEach(s => {
            if (s.electricity) {
                electricityCounts[s.electricity] = (electricityCounts[s.electricity] || 0) + 1;
            }
        });
        scienceForms.forEach(s => {
            s.facilities?.powerSources?.forEach(source => {
                if (source) {
                    electricityCounts[source] = (electricityCounts[source] || 0) + 1;
                }
            });
        });
        jssForms.forEach(s => {
            s.facilities?.powerSources?.forEach(source => {
                if (source) {
                    electricityCounts[source] = (electricityCounts[source] || 0) + 1;
                }
            });
        });

        const genderCounts = { Male: 0, Female: 0 };
        surveys.forEach(s => {
            const gender = s.gender?.toLowerCase();
            if (gender === 'male') {
                genderCounts.Male++;
            } else if (gender === 'female') {
                genderCounts.Female++;
            }
        });
        scienceForms.forEach(s => {
            s.staff?.staffInfo?.forEach(staff => {
                const gender = staff.gender?.toUpperCase();
                if (gender === 'M') {
                    genderCounts.Male++;
                } else if (gender === 'F') {
                    genderCounts.Female++;
                }
            });
        });
        jssForms.forEach(s => {
            s.staff?.staffInfo?.forEach(staff => {
                const gender = staff.gender?.toUpperCase();
                if (gender === 'M') {
                    genderCounts.Male++;
                } else if (gender === 'F') {
                    genderCounts.Female++;
                }
            });
        });

        const schoolTypeCounts = {};
        scienceForms.forEach(s => {
            const type = s.schoolCharacteristics?.typeOfSchool;
            if (type) {
                schoolTypeCounts[type] = (schoolTypeCounts[type] || 0) + 1;
            }
        });
        jssForms.forEach(s => {
            const type = s.schoolCharacteristics?.typeOfSchool;
            if (type) {
                schoolTypeCounts[type] = (schoolTypeCounts[type] || 0) + 1;
            }
        });

        const locationCounts = {};
        scienceForms.forEach(s => {
            const location = s.schoolCharacteristics?.location;
            if(location) {
                locationCounts[location] = (locationCounts[location] || 0) + 1;
            }
        });
        jssForms.forEach(s => {
            const location = s.schoolCharacteristics?.location;
            if(location) {
                locationCounts[location] = (locationCounts[location] || 0) + 1;
            }
        });

        let totalStudents = 0;
        scienceForms.forEach(s => {
            const jssEnrolment = s.enrolment?.juniorSecondaryEnrolment;
            if (jssEnrolment) {
                for (const level in jssEnrolment) {
                    const enrolment = jssEnrolment[level];
                    totalStudents += (enrolment?.below12?.male || 0) + (enrolment?.below12?.female || 0);
                    totalStudents += (enrolment?.age12?.male || 0) + (enrolment?.age12?.female || 0);
                    totalStudents += (enrolment?.age13?.male || 0) + (enrolment?.age13?.female || 0);
                    totalStudents += (enrolment?.age14?.male || 0) + (enrolment?.age14?.female || 0);
                    totalStudents += (enrolment?.above14?.male || 0) + (enrolment?.above14?.female || 0);
                }
            }
            const sssEnrolment = s.enrolment?.seniorSecondaryEnrolment;
            if (sssEnrolment) {
                for (const level in sssEnrolment) {
                    const enrolment = sssEnrolment[level];
                    totalStudents += (enrolment?.below15?.male || 0) + (enrolment?.below15?.female || 0);
                    totalStudents += (enrolment?.age15?.male || 0) + (enrolment?.age15?.female || 0);
                    totalStudents += (enrolment?.age16?.male || 0) + (enrolment?.age16?.female || 0);
                    totalStudents += (enrolment?.age17?.male || 0) + (enrolment?.age17?.female || 0);
                    totalStudents += (enrolment?.above17?.male || 0) + (enrolment?.above17?.female || 0);
                }
            }
        });
        jssForms.forEach(s => {
            const jssEnrolment = s.enrolment?.juniorSecondaryEnrolment;
            if (jssEnrolment) {
                for (const level in jssEnrolment) {
                    const enrolment = jssEnrolment[level];
                    totalStudents += (enrolment?.below12?.male || 0) + (enrolment?.below12?.female || 0);
                    totalStudents += (enrolment?.age12?.male || 0) + (enrolment?.age12?.female || 0);
                    totalStudents += (enrolment?.age13?.male || 0) + (enrolment?.age13?.female || 0);
                    totalStudents += (enrolment?.age14?.male || 0) + (enrolment?.age14?.female || 0);
                    totalStudents += (enrolment?.above14?.male || 0) + (enrolment?.above14?.female || 0);
                }
            }
        });

        const officeInfrastructure = {
            goodCondition: surveys.reduce((acc, s) => acc + (s.classroomsGood || 0), 0),
            needed: surveys.reduce((acc, s) => acc + (s.classroomsRequired || 0), 0),
            majorRepairs: surveys.reduce((acc, s) => acc + (s.classroomsMajorRepair || 0), 0),
            renovationRequired: surveys.reduce((acc, s) => acc + (s.classroomsMajorRepair || 0), 0),
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

        // Aggregate private survey data
        const totalPrivateStudents = privateSurveys.reduce((total, survey) => {
            let surveyTotal = 0;
            const enrolment = survey.schoolEnrolment;
            if (!enrolment) return total;

            const sumLevel = (level) => {
                let levelTotal = 0;
                if (level) {
                    for (const grade in level) {
                        if (level[grade] && typeof level[grade] === 'object' && 'male' in level[grade] && 'female' in level[grade]) {
                            levelTotal += (level[grade].male || 0);
                            levelTotal += (level[grade].female || 0);
                        }
                    }
                }
                return levelTotal;
            };

            surveyTotal += sumLevel(enrolment.prePrimaryEnrolmentByAge);
            surveyTotal += sumLevel(enrolment.primaryEnrolmentByAge);
            surveyTotal += sumLevel(enrolment.juniorSecondaryEnrolmentByAge);
            surveyTotal += sumLevel(enrolment.seniorSecondaryEnrolmentByAge);

            return total + surveyTotal;
        }, 0);

        const privateSchoolData = {
            count: privateSurveys.length,
            totalStudents: totalPrivateStudents,
        };

        const eccdeData = {
            enrolment: {
                prePrimary: { male: 0, female: 0 },
                primary: { male: 0, female: 0 },
            },
            staffing: {
                teachers: 0,
                nonTeaching: 0,
            },
        };

        eccdeForms.forEach(form => {
            // Safely aggregate enrolment data
            if (form.prePrimaryEnrolmentByAge) {
                Object.values(form.prePrimaryEnrolmentByAge).forEach(ageGroup => {
                    Object.values(ageGroup).forEach(level => {
                        eccdeData.enrolment.prePrimary.male += Number(level.male) || 0;
                        eccdeData.enrolment.prePrimary.female += Number(level.female) || 0;
                    });
                });
            }
            if (form.primaryEnrolmentByAge) {
                Object.values(form.primaryEnrolmentByAge).forEach(ageGroup => {
                    Object.values(ageGroup).forEach(level => {
                        eccdeData.enrolment.primary.male += Number(level.male) || 0;
                        eccdeData.enrolment.primary.female += Number(level.female) || 0;
                    });
                });
            }

            // Correctly aggregate staffing data
            eccdeData.staffing.teachers += Number(form.staff?.teaching?.total) || 0;
            eccdeData.staffing.nonTeaching += Number(form.staff?.nonTeaching?.total) || 0;
        });

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
            schoolTypes: {
                chart: {
                    labels: Object.keys(schoolTypeCounts),
                    datasets: [{ data: Object.values(schoolTypeCounts) }]
                }
            },
            schoolLocations: {
                chart: {
                    labels: Object.keys(locationCounts),
                    datasets: [{ data: Object.values(locationCounts) }]
                }
            },
            totalStudents,
            toiletFacilities: toiletFacilities,
            staffing: staffing,
            privateSchoolData: privateSchoolData,
            eccdeData: eccdeData
        };

        res.json(responseData);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
