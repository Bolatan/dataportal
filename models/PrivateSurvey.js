const mongoose = require('mongoose');

const PrivateSurveySchema = new mongoose.Schema({
    // Level
    level: String,
    schoolCode: String,
    jssSchoolCode: String,
    sssSchoolCode: String,
    schoolCoordinates: {
        elevation: Number,
        latitude: Number,
        longitude: Number,
    },

    // A. School Identification
    schoolIdentification: {
        schoolName: String,
        proprietorName: String,
        address: String,
        villageOrTown: String,
        ward: String,
        lga: String,
        state: String,
        schoolTelephone: String,
        emailAddress: String,
    },

    // B. School Characteristics
    schoolCharacteristics: {
        yearOfEstablishment: {
            prePrimary: Number,
            primary: Number,
            juniorSecondary: Number,
            seniorSecondary: Number,
        },
        location: String, // Urban or Rural
        ownershipStatus: String,
        recognitionStatus: String,
        levelsOfEducationOffered: {
            prePrimary: Boolean,
            primary: Boolean,
            juniorSecondary: Boolean,
            seniorSecondary: Boolean,
        },
        shifts: String, // Yes or No
        sharedFacilities: String, // Yes or No
        typeOfSchool: String,
        isMemberOfPrivateSchoolsAssociation: {
            member: String, // Yes or No
            name: String,
        },
        averageDistanceFromCatchment: Number,
        pupilsBoarding: {
            male: Number,
            female: Number,
        },
        hasSDP: String, // Yes or No
        hasSBMC: String, // Yes or No
        hasPTA: String, // Yes or No
        lastInspectionDate: Date,
        numberOfInspections: Number,
        lastInspectionAuthority: String,
        securityGuards: Number,
    },

    // C. School Enrolment
    schoolEnrolment: {
        birthCertificatesNIN: {
            prePrimary: {
                kindergarten1: { male: Number, female: Number },
                kindergarten2: { male: Number, female: Number },
                nursery1: { male: Number, female: Number },
                nursery2: { male: Number, female: Number },
                nursery3: { male: Number, female: Number },
            },
            primary1: {
                nationalPopulationCommission: { male: Number, female: Number },
                others: { male: Number, female: Number },
                nin: { male: Number, female: Number },
                total: { male: Number, female: Number },
            },
            jss1: {
                nationalPopulationCommission: { male: Number, female: Number },
                others: { male: Number, female: Number },
                nin: { male: Number, female: Number },
                total: { male: Number, female: Number },
            },
            sss1: {
                nationalPopulationCommission: { male: Number, female: Number },
                others: { male: Number, female: Number },
                nin: { male: Number, female: Number },
                total: { male: Number, female: Number },
            },
        },
        prePrimaryEnrolmentByAge: {
            kindergarten1: { male: Number, female: Number },
            kindergarten2: { male: Number, female: Number },
            nursery1: { male: Number, female: Number },
            nursery2: { male: Number, female: Number },
            nursery3: { male: Number, female: Number },
        },
        primaryEnrolmentByAge: {
            pry1: { male: Number, female: Number },
            pry2: { male: Number, female: Number },
            pry3: { male: Number, female: Number },
            pry4: { male: Number, female: Number },
            pry5: { male: Number, female: Number },
            pry6: { male: Number, female: Number },
        },
        specialNeedsPrePrimaryPrimary: {
            blind: { male: Number, female: Number },
            hearingImpaired: { male: Number, female: Number },
            physicallyChallenged: { male: Number, female: Number },
            mentallyChallenged: { male: Number, female: Number },
            albinism: { male: Number, female: Number },
            autism: { male: Number, female: Number },
        },
        orphansByGrade: {
            lostMother: { male: Number, female: Number },
            lostFather: { male: Number, female: Number },
            lostBoth: { male: Number, female: Number },
        },
        pupilFlowPrimary: {
            dropout: { male: Number, female: Number },
            transferIn: { male: Number, female: Number },
            transferOut: { male: Number, female: Number },
            repeaters: { male: Number, female: Number },
            promoted: { male: Number, female: Number },
        },
        newEntrantsJSS1: {
            below12: { male: Number, female: Number },
            age12: { male: Number, female: Number },
            age13: { male: Number, female: Number },
            age14: { male: Number, female: Number },
            above14: { male: Number, female: Number },
            total: { male: Number, female: Number },
        },
        juniorSecondaryEnrolmentByAge: {
            js1: { male: Number, female: Number },
            js2: { male: Number, female: Number },
            js3: { male: Number, female: Number },
        },
        newEntrantsSS1: {
            below15: { male: Number, female: Number },
            age15: { male: Number, female: Number },
            age16: { male: Number, female: Number },
            age17: { male: Number, female: Number },
            above17: { male: Number, female: Number },
            total: { male: Number, female: Number },
        },
        seniorSecondaryEnrolmentByAge: {
            ss1: { male: Number, female: Number },
            ss2: { male: Number, female: Number },
            ss3: { male: Number, female: Number },
        },
        studentFlowJssSss: {
            dropout: { male: Number, female: Number },
            transferIn: { male: Number, female: Number },
            transferOut: { male: Number, female: Number },
            repeaters: { male: Number, female: Number },
            promoted: { male: Number, female: Number },
        },
        specialNeedsSecondary: {
            blind: { male: Number, female: Number },
            hearingImpaired: { male: Number, female: Number },
            physicallyChallenged: { male: Number, female: Number },
            mentallyChallenged: { male: Number, female: Number },
            albinism: { male: Number, female: Number },
            autism: { male: Number, female: Number },
        },
    },

    // D. CLASSROOMS/FACILITIES (Assuming this will be detailed later)
    classroomsFacilities: {
        // Define structure based on expected data
    },

    // E. TEXTBOOKS
    textbooks: {
        pupilsTextbooks: {
            pry1: Number, pry2: Number, pry3: Number, pry4: Number, pry5: Number, pry6: Number,
            js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number,
        },
        teachersTextbooks: {
            pry1: Number, pry2: Number, pry3: Number, pry4: Number, pry5: Number, pry6: Number,
            js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number,
        },
        teachersGuides: {
            pry1: Number, pry2: Number, pry3: Number, pry4: Number, pry5: Number, pry6: Number,
            js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number,
        },
    },

    // F. TEACHERS QUALIFICATION
    teachersQualification: {
        prePry: {
            phd: { male: Number, female: Number, total: Number },
            mastersWithTeaching: { male: Number, female: Number, total: Number },
            mastersWithoutTeaching: { male: Number, female: Number, total: Number },
            degreeWithTeaching: { male: Number, female: Number, total: Number },
            degreeWithoutTeaching: { male: Number, female: Number, total: Number },
            hndWithTeaching: { male: Number, female: Number, total: Number },
            hndWithoutTeaching: { male: Number, female: Number, total: Number },
            nce: { male: Number, female: Number, total: Number },
            ond: { male: Number, female: Number, total: Number },
            gradeII: { male: Number, female: Number, total: Number },
            ssce: { male: Number, female: Number, total: Number },
            belowSSCE: { male: Number, female: Number, total: Number },
            others: { male: Number, female: Number, total: Number },
            total: { male: Number, female: Number, total: Number },
        },
        pry: {
            phd: { male: Number, female: Number, total: Number },
            mastersWithTeaching: { male: Number, female: Number, total: Number },
            mastersWithoutTeaching: { male: Number, female: Number, total: Number },
            degreeWithTeaching: { male: Number, female: Number, total: Number },
            degreeWithoutTeaching: { male: Number, female: Number, total: Number },
            hndWithTeaching: { male: Number, female: Number, total: Number },
            hndWithoutTeaching: { male: Number, female: Number, total: Number },
            nce: { male: Number, female: Number, total: Number },
            ond: { male: Number, female: Number, total: Number },
            gradeII: { male: Number, female: Number, total: Number },
            ssce: { male: Number, female: Number, total: Number },
            belowSSCE: { male: Number, female: Number, total: Number },
            others: { male: Number, female: Number, total: Number },
            total: { male: Number, female: Number, total: Number },
        },
        jss: {
            phd: { male: Number, female: Number, total: Number },
            mastersWithTeaching: { male: Number, female: Number, total: Number },
            mastersWithoutTeaching: { male: Number, female: Number, total: Number },
            degreeWithTeaching: { male: Number, female: Number, total: Number },
            degreeWithoutTeaching: { male: Number, female: Number, total: Number },
            hndWithTeaching: { male: Number, female: Number, total: Number },
            hndWithoutTeaching: { male: Number, female: Number, total: Number },
            nce: { male: Number, female: Number, total: Number },
            ond: { male: Number, female: Number, total: Number },
            gradeII: { male: Number, female: Number, total: Number },
            ssce: { male: Number, female: Number, total: Number },
            belowSSCE: { male: Number, female: Number, total: Number },
            others: { male: Number, female: Number, total: Number },
            total: { male: Number, female: Number, total: Number },
        },
        sss: {
            phd: { male: Number, female: Number, total: Number },
            mastersWithTeaching: { male: Number, female: Number, total: Number },
            mastersWithoutTeaching: { male: Number, female: Number, total: Number },
            degreeWithTeaching: { male: Number, female: Number, total: Number },
            degreeWithoutTeaching: { male: Number, female: Number, total: Number },
            hndWithTeaching: { male: Number, female: Number, total: Number },
            hndWithoutTeaching: { male: Number, female: Number, total: Number },
            nce: { male: Number, female: Number, total: Number },
            ond: { male: Number, female: Number, total: Number },
            gradeII: { male: Number, female: Number, total: Number },
            ssce: { male: Number, female: Number, total: Number },
            belowSSCE: { male: Number, female: Number, total: Number },
            others: { male: Number, female: Number, total: Number },
            total: { male: Number, female: Number, total: Number },
        },
    },

    // G. SCHOOL WELL-BEING
    schoolWellBeing: {
        hasRules: String, // YES or NO
        rulesCover: {
            physicalSafety: {
                bullying: String, // YES or NO
                physicalViolence: String, // YES or NO
                corporalPunishment: String, // YES or NO
                hasSecurityPersonnel: String, // YES or NO
                hasPerimeterFence: String, // YES or NO
                hasBeenAttacked: String, // YES or NO
                timesAttacked: Number,
                others: String,
            },
            stigmaAndDiscrimination: {
                learnersHIV: String, // YES or NO
                learnersEthnicity: String, // YES or NO
                learnersHarassed: String, // YES or NO
                staffHIV: String, // YES or NO
                staffEthnicity: String, // YES or NO
                staffHarassed: String, // YES or NO
            },
            grievanceProcedures: String, // YES or NO
        },
        communicationOfRules: {
            toLearners: String, // YES or NO
            toTeachers: String, // YES or NO
            toParents: String, // YES or NO
        },
        schoolWellBeingEducation: {
            receivedLifeSkills: String, // YES or NO
            topicsCovered: {
                genericLifeSkills: String, // YES or NO
                reproductiveHealth: String, // YES or NO
                hivPrevention: String, // YES or NO
                epidemics: String, // YES or NO
                pandemics: String, // YES or NO
            },
        },
        learnersReceivedSWB: {
            male: Number,
            female: Number,
        },
        orientationForParents: {
            timesOrganized: Number,
            fora: {
                pta: Boolean,
                openDay: Boolean,
                specialSessions: Boolean,
            },
        },
        lastOrientationDate: Date,
        teacherTraining: {
            receivedTraining: { male: Number, female: Number },
            taughtTopics: { male: Number, female: Number },
        },
    },

    // H. UNDERTAKING
    undertaking: {
        headTeacher: {
            name: String,
            telephone: String,
            signature: String,
            date: Date,
        },
        sbmcChairperson: {
            name: String,
            position: String,
            telephone: String,
            signature: String,
            date: Date,
        },
        supervisor: {
            name: String,
            position: String,
            telephone: String,
            signature: String,
            date: Date,
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('PrivateSurvey', PrivateSurveySchema);