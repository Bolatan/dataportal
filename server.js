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

app.get('/sss', (req, res) => {
    res.sendFile(__dirname + '/sss.html');
});

// MongoDB Connection
const dbURI = process.env.DATABASE_URL;
if (!dbURI) {
    console.error('CRITICAL ERROR: DATABASE_URL environment variable is not set.');
    process.exit(1);
}

const multer = require('multer');
const Survey = require('./models/Survey');
const Science = require('./models/Science');
const PrivateSurvey = require('./models/PrivateSurvey');
const Eccde = require('./models/Eccde');
const Jss = require('./models/Jss');
const Sss = require('./models/Sss');

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

        // Process staff profile data
        const staffProfile = [];
        let i = 1;
        while (surveyData[`staff_name_${i}`]) {
            staffProfile.push({
                name: surveyData[`staff_name_${i}`],
                qualification: surveyData[`staff_qualification_${i}`],
                specialization: surveyData[`staff_specialization_${i}`],
                experience: surveyData[`staff_experience_${i}`],
                trcn: surveyData[`staff_trcn_${i}`]
            });
            // Clean up the surveyData object
            delete surveyData[`staff_name_${i}`];
            delete surveyData[`staff_qualification_${i}`];
            delete surveyData[`staff_specialization_${i}`];
            delete surveyData[`staff_experience_${i}`];
            delete surveyData[`staff_trcn_${i}`];
            i++;
        }
        surveyData.staffProfile = staffProfile;

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

app.post('/api/sss', isEnumerator, (req, res) => {
    try {
        const sssData = req.body;
        const newSss = new Sss(sssData);
        newSss.save()
            .then(sss => {
                const actorId = req.headers['x-user-id'];
                logAction(actorId, `submitted SSS form for school ${sss.schoolIdentification.schoolName}`);
                console.log('SSS form saved successfully:', sss);
                res.json(sss);
            })
            .catch(err => {
                console.error('Error saving SSS form:', err);
                res.status(400).json({ message: 'Error: ' + err, error: err });
            });
    } catch (error) {
        console.error('Error in /api/sss route:', error);
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

app.get('/jss-reports', (req, res) => {
    res.sendFile(__dirname + '/jss-reports.html');
});

app.get('/private-reports', (req, res) => {
    res.sendFile(__dirname + '/private-reports.html');
});

app.get('/sss-reports', (req, res) => {
    res.sendFile(__dirname + '/sss-reports.html');
});

app.get('/api/jss-reports', async (req, res) => {
    try {
        const reports = await Jss.find().sort({ createdAt: -1 });
        res.json(reports);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching JSS reports', error });
    }
});

app.get('/api/private-reports', async (req, res) => {
    try {
        const reports = await PrivateSurvey.find().sort({ createdAt: -1 });
        res.json(reports);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching Private School reports', error });
    }
});

app.get('/api/sss-reports', async (req, res) => {
    try {
        const reports = await Sss.find().sort({ createdAt: -1 });
        res.json(reports);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching SSS reports', error });
    }
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
        const surveys = await Survey.find().lean();
        const scienceForms = await Science.find().lean();
        const privateSurveys = await PrivateSurvey.find().lean();
        const eccdeForms = await Eccde.find().lean();
        const jssForms = await Jss.find().lean();
        const sssForms = await Sss.find().lean();

        const allButSurveyForms = [
            ...scienceForms.map(d => ({ ...d, formType: 'Science' })),
            ...eccdeForms.map(d => ({ ...d, formType: 'Eccde' })),
            ...jssForms.map(d => ({ ...d, formType: 'Jss' })),
            ...sssForms.map(d => ({ ...d, formType: 'Sss' })),
            ...privateSurveys.map(d => ({ ...d, formType: 'Private' }))
        ];

        if (surveys.length === 0 && allButSurveyForms.length === 0 && privateSurveys.length === 0) {
            return res.json({ noData: true });
        }

        const qualificationCounts = {};
        const electricityCounts = {};
        const genderCounts = { Male: 0, Female: 0 };
        const officeInfrastructure = { goodCondition: 0, majorRepairs: 0, minorRepairs: 0, byLgea: {} };
        const toiletFacilities = { cubicleToilets: 0, byLgea: {} };
        const schoolTypeCounts = {};
        const locationCounts = {};
        let totalStudents = 0;

        // Aggregate data from all forms EXCEPT the legacy survey
        for (const s of allButSurveyForms) {
            const lgea = s.schoolIdentification?.lga || s.lga;

            // Qualifications
            const staffInfo = s.staff?.staffInfo || s.staffInfo || [];
            for (const staff of staffInfo) {
                if (staff.academicQualification) {
                    qualificationCounts[staff.academicQualification] = (qualificationCounts[staff.academicQualification] || 0) + 1;
                }
            }

            // Electricity
            const powerSources = s.facilities?.powerSources || s.facilities?.power || [];
            for (const source of powerSources) {
                if (source) electricityCounts[source] = (electricityCounts[source] || 0) + 1;
            }

            // Gender
            for (const staff of staffInfo) {
                const gender = staff.gender?.toUpperCase();
                if (gender === 'M' || gender === 'MALE') genderCounts.Male++;
                if (gender === 'F' || gender === 'FEMALE') genderCounts.Female++;
            }

            // Office Infrastructure
            const classroomInfo = s.classrooms?.classroomInfo || s.classroomInfo || [];
            if (lgea && !officeInfrastructure.byLgea[lgea]) officeInfrastructure.byLgea[lgea] = { good: 0, major: 0, minor: 0 };
            for (const c of classroomInfo) {
                if (c.presentCondition === 'Good') {
                    officeInfrastructure.goodCondition++;
                    if (lgea) officeInfrastructure.byLgea[lgea].good++;
                } else if (c.presentCondition === 'Needs major repairs') {
                    officeInfrastructure.majorRepairs++;
                    if (lgea) officeInfrastructure.byLgea[lgea].major++;
                } else if (c.presentCondition === 'Needs minor repairs') {
                    officeInfrastructure.minorRepairs++;
                    if (lgea) officeInfrastructure.byLgea[lgea].minor++;
                }
            }

            // Toilet Facilities
            if (lgea && !toiletFacilities.byLgea[lgea]) toiletFacilities.byLgea[lgea] = 0;
            const formToilets = s.facilities?.toilets;
            if (formToilets) {
                const addToilet = (t) => {
                    if (t) {
                        const count = (t.male || 0) + (t.female || 0) + (t.mixed || 0);
                        toiletFacilities.cubicleToilets += count;
                        if (lgea) toiletFacilities.byLgea[lgea] += count;
                    }
                };
                ['studentOnly', 'teacherOnly', 'studentAndTeacher'].forEach(userType => {
                    ['pit', 'bucket', 'waterFlush', 'others'].forEach(toiletType => addToilet(formToilets[userType]?.[toiletType]));
                });
            }
            if (s.facilities?.available?.toilets) { // ECCDE specific path
                const count = s.facilities.available.toilets.useable || 0;
                toiletFacilities.cubicleToilets += count;
                if (lgea) toiletFacilities.byLgea[lgea] += count;
            }

            // School Type & Location
            if (s.schoolCharacteristics?.typeOfSchool) schoolTypeCounts[s.schoolCharacteristics.typeOfSchool] = (schoolTypeCounts[s.schoolCharacteristics.typeOfSchool] || 0) + 1;
            if (s.schoolCharacteristics?.location) locationCounts[s.schoolCharacteristics.location] = (locationCounts[s.schoolCharacteristics.location] || 0) + 1;

            // Total Students
            const jssEnrolment = s.enrolment?.juniorSecondaryEnrolment;
            if (jssEnrolment) for (const level of Object.values(jssEnrolment)) {
                totalStudents += Object.values(level).filter(v => typeof v === 'object').reduce((acc, age) => acc + (age.male || 0) + (age.female || 0), 0);
            }
            const sssEnrolment = s.enrolment?.seniorSecondaryEnrolment;
            if (sssEnrolment) for (const level of Object.values(sssEnrolment)) {
                totalStudents += Object.values(level).filter(v => typeof v === 'object').reduce((acc, age) => acc + (age.male || 0) + (age.female || 0), 0);
            }
        }

        // Process legacy survey data for its specific metrics
        const officeLgeas = Object.keys(officeInfrastructure.byLgea);
        const officeChart = {
            labels: officeLgeas,
            datasets: [
                { label: 'Good Condition', data: officeLgeas.map(l => officeInfrastructure.byLgea[l].good) },
                { label: 'Needs Major Repairs', data: officeLgeas.map(l => officeInfrastructure.byLgea[l].major) },
                { label: 'Needs Minor Repairs', data: officeLgeas.map(l => officeInfrastructure.byLgea[l].minor) }
            ]
        };

        const toiletLgeas = Object.keys(toiletFacilities.byLgea);
        const toiletChart = {
            labels: toiletLgeas,
            datasets: [{ label: 'Cubicle Toilets', data: toiletLgeas.map(l => toiletFacilities.byLgea[l]) }]
        };

        const qualificationLabels = Object.keys(qualificationCounts).sort((a, b) => qualificationCounts[b] - qualificationCounts[a]);
        const qualificationData = qualificationLabels.map(k => qualificationCounts[k]);

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
        const totalPrivateStudents = privateSurveys.reduce((total, survey) => {
            let surveyTotal = 0;
            const enrolment = survey.schoolEnrolment;
            if (!enrolment) return total;
            const sumLevel = (level) => Object.values(level || {}).reduce((acc, grade) => acc + (grade.male || 0) + (grade.female || 0), 0);
            surveyTotal += sumLevel(enrolment.prePrimaryEnrolmentByAge);
            surveyTotal += sumLevel(enrolment.primaryEnrolmentByAge);
            surveyTotal += sumLevel(enrolment.juniorSecondaryEnrolmentByAge);
            surveyTotal += sumLevel(enrolment.seniorSecondaryEnrolmentByAge);
            return total + surveyTotal;
        }, 0);
        const privateSchoolData = { count: privateSurveys.length, totalStudents: totalPrivateStudents };

        const eccdeData = {
            enrolment: { prePrimary: { male: 0, female: 0 }, primary: { male: 0, female: 0 } },
            staffing: { teachers: 0, nonTeaching: 0 },
        };
        eccdeForms.forEach(form => {
            if (form.prePrimaryEnrolmentByAge) Object.values(form.prePrimaryEnrolmentByAge).forEach(ageGroup => Object.values(ageGroup).forEach(level => {
                eccdeData.enrolment.prePrimary.male += Number(level.male) || 0;
                eccdeData.enrolment.prePrimary.female += Number(level.female) || 0;
            }));
            if (form.primaryEnrolmentByAge) Object.values(form.primaryEnrolmentByAge).forEach(ageGroup => Object.values(ageGroup).forEach(level => {
                eccdeData.enrolment.primary.male += Number(level.male) || 0;
                eccdeData.enrolment.primary.female += Number(level.female) || 0;
            }));
            eccdeData.staffing.teachers += Number(form.staff?.teaching?.total) || 0;
            eccdeData.staffing.nonTeaching += Number(form.staff?.nonTeaching?.total) || 0;
        });

        const responseData = {
            officeInfrastructure: { ...officeInfrastructure, chart: officeChart },
            respondentsDemographics: {
                sexDistribution: {
                    labels: Object.keys(genderCounts),
                    datasets: [{ data: Object.values(genderCounts) }]
                },
                qualifications: {
                    labels: qualificationLabels,
                    datasets: [{ data: qualificationData }]
                }
            },
            sourceOfElectricity: {
                chart: {
                    labels: Object.keys(electricityCounts),
                    datasets: [{ data: Object.values(electricityCounts) }]
                }
            },
            toiletFacilities: { ...toiletFacilities, chart: toiletChart },
            schoolTypes: { chart: { labels: Object.keys(schoolTypeCounts), datasets: [{ data: Object.values(schoolTypeCounts) }]}},
            schoolLocations: { chart: { labels: Object.keys(locationCounts), datasets: [{ data: Object.values(locationCounts) }]}},
            totalStudents,
            staffing,
            privateSchoolData,
            eccdeData
        };

        res.json(responseData);
    } catch (err) {
        console.error('Error fetching dashboard data:', err);
        res.status(400).json('Error: ' + err);
    }
});

// --- ONE-TIME ADMIN CREATION ---
// This function runs on startup to ensure an admin user exists in the database.
// This is a temporary measure and should be removed after the admin user is created.
const ensureAdminUserExists = async () => {
    try {
        const adminUser = await User.findOne({ username: 'admin' });
        if (!adminUser) {
            console.log('[STARTUP] Admin user not found, creating one...');
            const newAdmin = new User({
                username: 'admin',
                email: 'admin@example.com',
                password: 'temporaryPassword123',
                fullName: 'Administrator',
                role: 'admin'
            });
            await newAdmin.save();
            console.log('[STARTUP] Admin user created successfully.');
        } else {
            console.log('[STARTUP] Admin user already exists.');
        }
    } catch (error) {
        console.error('[STARTUP] Error during one-time admin creation:', error);
    }
};
// --- END ONE-TIME ADMIN CREATION ---

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('MongoDB connected...');
        await ensureAdminUserExists(); // Ensure admin user exists before starting the server
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
        });
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    });