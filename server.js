const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
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

const isAdminOrEnumerator = async (req, res, next) => {
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
            res.status(403).json({ message: 'Forbidden: Enumerator or Admin access required' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error verifying access rights', error });
    }
};

const isEnumeratorOnly = async (req, res, next) => {
    const userId = req.headers['x-user-id'];
    if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const user = await User.findById(userId);
        if (user && user.role === 'enumerator') {
            req.user = user;
            next();
        } else {
            res.status(403).json({ message: 'Forbidden: Enumerator-only access required' });
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
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
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
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
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
            res.json({ message: 'Login successful', user: { id: user._id, username: user.username, role: user.role, fullName: user.fullName, profilePicture: user.profilePicture } });
        });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});

app.post('/api/survey', isAdmin, upload.array('photos', 10), (req, res) => {
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

app.post('/api/science', isAdminOrEnumerator, (req, res) => {
    try {
        const scienceData = req.body;
        scienceData.submittedBy = req.user.id;
        const newScience = new Science(scienceData);
        newScience.save()
            .then(science => {
                logAction(req.user.id, `submitted science form for school ${science.schoolIdentification.schoolName}`);
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

app.post('/api/jss', isAdminOrEnumerator, (req, res) => {
    try {
        const jssData = req.body;
        jssData.submittedBy = req.user.id;
        const newJss = new Jss(jssData);
        newJss.save()
            .then(jss => {
                logAction(req.user.id, `submitted JSS form for school ${jss.schoolIdentification.schoolName}`);
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

app.post('/api/sss', isAdminOrEnumerator, (req, res) => {
    try {
        const sssData = req.body;
        sssData.submittedBy = req.user.id;
        const newSss = new Sss(sssData);
        newSss.save()
            .then(sss => {
                logAction(req.user.id, `submitted SSS form for school ${sss.schoolIdentification.schoolName}`);
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

app.post('/api/private-survey', isAdminOrEnumerator, (req, res) => {
    try {
        const surveyData = req.body;
        surveyData.submittedBy = req.user.id;
        const newPrivateSurvey = new PrivateSurvey(surveyData);
        newPrivateSurvey.save()
            .then(survey => {
                logAction(req.user.id, `submitted private survey for school ${survey.schoolIdentification.schoolName}`);
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

app.post('/api/eccde-form', isAdminOrEnumerator, (req, res) => {
    try {
        const eccdeData = req.body;
        eccdeData.submittedBy = req.user.id;
        const newEccde = new Eccde(eccdeData);
        newEccde.save()
            .then(eccde => {
                if (eccde.schoolIdentification && eccde.schoolIdentification.schoolName) {
                    logAction(req.user.id, `submitted ECCDE form for school ${eccde.schoolIdentification.schoolName}`);
                } else {
                    logAction(req.user.id, 'submitted ECCDE form');
                }
                console.log('ECCDE form saved successfully:', eccde);
                res.json(eccde);
            })
            .catch(err => {
                console.error('Error saving ECCDE form:', err);
                res.status(400).json({ message: 'Error: ' + err, error: err });
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

app.get('/api/jss-reports', isAdminOrEnumerator, async (req, res) => {
    try {
        const query = {};
        if (req.user.role === 'enumerator') {
            query.submittedBy = new mongoose.Types.ObjectId(req.user.id);
        }
        const reports = await Jss.find(query).sort({ createdAt: -1 });
        res.json(reports);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching JSS reports', error });
    }
});

app.get('/api/private-reports', isAdminOrEnumerator, async (req, res) => {
    try {
        const query = {};
        if (req.user.role === 'enumerator') {
            query.submittedBy = new mongoose.Types.ObjectId(req.user.id);
        }
        const reports = await PrivateSurvey.find(query).sort({ createdAt: -1 });
        res.json(reports);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching Private School reports', error });
    }
});

app.get('/api/sss-reports', isAdminOrEnumerator, async (req, res) => {
    try {
        const query = {};
        if (req.user.role === 'enumerator') {
            query.submittedBy = new mongoose.Types.ObjectId(req.user.id);
        }
        const reports = await Sss.find(query).sort({ createdAt: -1 });
        res.json(reports);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching SSS reports', error });
    }
});

app.get('/api/eccde-reports', isAdminOrEnumerator, async (req, res) => {
    try {
        const query = {};
        if (req.user.role === 'enumerator') {
            query.submittedBy = new mongoose.Types.ObjectId(req.user.id);
        }
        const reports = await Eccde.find(query).sort({ createdAt: -1 });
        res.json(reports);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching ECCDE reports', error });
    }
});

app.get('/api/eccde-reports-all', isAdminOrEnumerator, async (req, res) => {
    try {
        const query = {};
        if (req.user.role === 'enumerator') {
            query.submittedBy = new mongoose.Types.ObjectId(req.user.id);
        }
        const reports = await Eccde.find(query).sort({ createdAt: -1 });
        res.json(reports);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching all ECCDE reports', error });
    }
});

app.get('/api/science-reports', isAdminOrEnumerator, async (req, res) => {
    try {
        const query = {};
        if (req.user.role === 'enumerator') {
            query.submittedBy = new mongoose.Types.ObjectId(req.user.id);
        }
        const reports = await Science.find(query).sort({ createdAt: -1 });
        res.json(reports);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching science reports', error });
    }
});

app.get('/api/data', isAdminOrEnumerator, async (req, res) => {
    try {
        const scienceForms = await Science.find().lean();
        const privateForms = await PrivateSurvey.find().lean();
        const eccdeForms = await Eccde.find().lean();
        const jssForms = await Jss.find().lean();
        const sssForms = await Sss.find().lean();

        const allForms = [
            ...scienceForms.map(d => ({ ...d, formType: 'Science' })),
            ...privateForms.map(d => ({ ...d, formType: 'Private' })),
            ...eccdeForms.map(d => ({ ...d, formType: 'ECCDE' })),
            ...jssForms.map(d => ({ ...d, formType: 'JSS' })),
            ...sssForms.map(d => ({ ...d, formType: 'SSS' }))
        ];

        if (allForms.length === 0) {
            return res.json({ noData: true });
        }

        // Initialize aggregators
        const schoolCounts = {
            total: allForms.length,
            byType: {
                'Science & Tech': scienceForms.length,
                'Private School': privateForms.length,
                'ECCDE/Primary': eccdeForms.length,
                'JSS': jssForms.length,
                'SSS': sssForms.length
            }
        };

        let enrolment = { male: 0, female: 0, byLevel: { prePrimary: 0, primary: 0, jss: 0, sss: 0 } };
        let staff = { teaching: 0, nonTeaching: 0 };
        let teacherQualifications = {};
        let facilities = { usableToilets: 0, safeWater: 0, power: 0 };

        const sumEnrolment = (section) => {
            let male = 0, female = 0;
            if (!section) return { male, female };
            Object.values(section).forEach(classData => {
                if (typeof classData === 'object' && classData !== null) {
                    Object.values(classData).forEach(ageGroup => {
                        if (typeof ageGroup === 'object' && ageGroup !== null) {
                            male += Number(ageGroup.male) || 0;
                            female += Number(ageGroup.female) || 0;
                        }
                    });
                }
            });
            return { male, female, total: male + female };
        };

        for (const form of allForms) {
            // --- Enrolment ---
            let formEnrolment = { male: 0, female: 0 };
            const jssEnrolment = sumEnrolment(form.enrolment?.juniorSecondaryEnrolment || form.enrolment?.jssByAge);
            const sssEnrolment = sumEnrolment(form.enrolment?.seniorSecondaryEnrolment || form.enrolment?.sssByAge);
            const prePrimaryEnrolment = sumEnrolment(form.enrolment?.prePrimaryByAge);
            const primaryEnrolment = sumEnrolment(form.enrolment?.primaryByAge);

            formEnrolment.male += jssEnrolment.male + sssEnrolment.male + prePrimaryEnrolment.male + primaryEnrolment.male;
            formEnrolment.female += jssEnrolment.female + sssEnrolment.female + prePrimaryEnrolment.female + primaryEnrolment.female;

            enrolment.byLevel.jss += jssEnrolment.total;
            enrolment.byLevel.sss += sssEnrolment.total;
            enrolment.byLevel.prePrimary += prePrimaryEnrolment.total;
            enrolment.byLevel.primary += primaryEnrolment.total;

            enrolment.male += formEnrolment.male;
            enrolment.female += formEnrolment.female;

            // --- Staff ---
            staff.teaching += (Number(form.staff?.teaching?.male) || 0) + (Number(form.staff?.teaching?.female) || 0);
            staff.nonTeaching += (Number(form.staff?.nonTeaching?.male) || 0) + (Number(form.staff?.nonTeaching?.female) || 0);

            // --- Teacher Qualifications ---
            const staffList = form.staff?.staffInfo || form.staffInfo || [];
            if (Array.isArray(staffList)) {
                staffList.forEach(s => {
                    if (s.academicQualification) {
                        const qual = s.academicQualification.trim();
                        teacherQualifications[qual] = (teacherQualifications[qual] || 0) + 1;
                    }
                });
            }

            // --- Facilities ---
            const toilets = form.facilities?.availableFacilities?.toilets?.useable || form.facilities?.toilets?.useable || form.facilities?.toilets;
            if (Number(toilets) > 0) facilities.usableToilets++;

            const waterSources = form.facilities?.safeDrinkingWater || form.facilities?.waterSource;
            if (Array.isArray(waterSources) && (waterSources.includes('Pipe borne Water') || waterSources.includes('Borehole'))) {
                facilities.safeWater++;
            } else if (form.facilities?.water === true) {
                facilities.safeWater++;
            }

            const powerSources = form.facilities?.powerSources;
            if (Array.isArray(powerSources) && powerSources.length > 0 && !powerSources.includes('No source of Power')) {
                facilities.power++;
            } else if (form.facilities?.power === true) {
                facilities.power++;
            }
        }

        // Format the response
        const responseData = {
            schoolCounts,
            enrolment: {
                total: enrolment.male + enrolment.female,
                male: enrolment.male,
                female: enrolment.female,
                byLevel: enrolment.byLevel
            },
            staff: {
                teaching: { total: staff.teaching },
                nonTeaching: { total: staff.nonTeaching },
                total: staff.teaching + staff.nonTeaching
            },
            charts: {
                schoolTypes: {
                    labels: Object.keys(schoolCounts.byType),
                    data: Object.values(schoolCounts.byType)
                },
                teacherQualifications: {
                    labels: Object.keys(teacherQualifications),
                    data: Object.values(teacherQualifications)
                },
                facilities: {
                    labels: ['Usable Toilets', 'Safe Water', 'Power'],
                    data: [
                        (facilities.usableToilets / allForms.length) * 100,
                        (facilities.safeWater / allForms.length) * 100,
                        (facilities.power / allForms.length) * 100
                    ]
                }
            }
        };

        res.json(responseData);
    } catch (err) {
        console.error('Error fetching dashboard data:', err);
        res.status(500).json({ message: 'Error fetching dashboard data', error: err });
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
                password: 'AdminPass123@',
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