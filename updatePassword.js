const mongoose = require('mongoose');
const User = require('./models/User');

const dbURI = process.env.DATABASE_URL;
const newPassword = 'temporaryPassword123';
const usernameToUpdate = 'bolatan2';

async function updatePassword() {
    if (!dbURI) {
        console.error('CRITICAL ERROR: DATABASE_URL environment variable is not set.');
        process.exit(1);
    }

    try {
        await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected...');

        const user = await User.findOne({ username: usernameToUpdate });

        if (!user) {
            console.log(`User '${usernameToUpdate}' not found.`);
            return;
        }

        console.log(`Found user: ${user.username}. Updating password.`);

        user.password = newPassword;
        await user.save();

        console.log(`Password for user '${usernameToUpdate}' has been updated successfully.`);

    } catch (error) {
        console.error('Error updating password:', error);
    } finally {
        await mongoose.disconnect();
        console.log('MongoDB disconnected.');
    }
}

updatePassword();