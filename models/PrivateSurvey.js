const mongoose = require('mongoose');

// Sub-schema for male/female counts
const genderCountSchema = new mongoose.Schema({
    male: { type: Number, default: 0 },
    female: { type: Number, default: 0 }
}, { _id: false });

// Sub-schema for attestation
const attestationSchema = new mongoose.Schema({
    name: String,
    position: String,
    telephone: String
}, { _id: false });

const privateSurveySchema = new mongoose.Schema({
    schoolIdentification: {
        schoolName: String,
        proprietorName: String,
        address: String,
        villageTown: String,
        ward: String,
        lga: String,
        state: String,
        schoolTelephone: String,
        emailAddress: String
    },
    schoolCharacteristics: {
        yearOfEstablishment: {
            prePrimary: Number,
            primary: Number,
            jss: Number,
            sss: Number
        },
        location: String,
        ownershipStatus: String,
        recognitionStatus: String,
        levelsOffered: [String],
        shifts: String,
        sharedFacilities: String,
        schoolType: String,
        isMemberOfAssociation: String,
        associationName: String,
        distanceFromCatchment: Number,
        boarding: genderCountSchema,
        sdp: String,
        sbmc: String,
        pta: String,
        lastInspectionDate: Date,
        inspectionsLastYear: Number,
        inspectionAuthority: String,
        securityGuards: Number
    },
    enrolment: {
        birthCertNINPrePrimary: mongoose.Schema.Types.Mixed,
        birthCertNINSecondary: mongoose.Schema.Types.Mixed,
        prePrimaryByAge: mongoose.Schema.Types.Mixed,
        newEntrantsPrimary1: mongoose.Schema.Types.Mixed,
        primaryByAge: mongoose.Schema.Types.Mixed,
        specialNeedsPrimary: mongoose.Schema.Types.Mixed,
        orphansByGrade: mongoose.Schema.Types.Mixed,
        pupilFlowPrimary: mongoose.Schema.Types.Mixed,
        newEntrantsJSS1: mongoose.Schema.Types.Mixed,
        jssByAge: mongoose.Schema.Types.Mixed,
        newEntrantsSS1: mongoose.Schema.Types.Mixed,
        sssByAge: mongoose.Schema.Types.Mixed,
        studentFlowSecondary: mongoose.Schema.Types.Mixed,
        specialNeedsSecondary: mongoose.Schema.Types.Mixed
    },
    facilities: {
        totalClassrooms: Number,
        classesOutside: String,
        classesOutsideNumber: Number
    },
    textbooks: {
        pupilAverage: mongoose.Schema.Types.Mixed,
        teacherAverage: mongoose.Schema.Types.Mixed,
        teacherGuidesAverage: mongoose.Schema.Types.Mixed
    },
    teacherQualifications: mongoose.Schema.Types.Mixed,
    wellBeing: {
        hasRules: String,
        rules: {
            bullying: String,
            violence: String,
            corporalPunishment: String,
            securityPersonnel: String,
            perimeterFence: String,
            attacked: String,
            attackTimes: Number,
            otherSpecify: String
        },
        stigma: {
            learnersHiv: String,
            learnersEthnicity: String,
            learnersHarassed: String,
            staffHiv: String,
            staffEthnicity: String,
            staffHarassed: String
        },
        grievanceProcedures: String,
        communication: {
            learners: String,
            teachers: String,
            parents: String
        },
        education: {
            receivedSwb: String,
            topics: {
                generic: String,
                reproductive: String,
                hiv: String,
                epidemics: String,
                pandemics: String
            }
        },
        participants: genderCountSchema,
        orientation: {
            times: Number,
            fora: [String]
        },
        lastOrientationDate: Date,
        teacherTraining: {
            formal: genderCountSchema,
            taught: genderCountSchema
        }
    },
    undertaking: {
        headTeacher: attestationSchema,
        sbmc: attestationSchema,
        supervisor: attestationSchema
    },
    createdAt: { type: Date, default: Date.now },
    submittedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('PrivateSurvey', privateSurveySchema);