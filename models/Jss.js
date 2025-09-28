const mongoose = require('mongoose');

const jssSchema = new mongoose.Schema({
    schoolCode: String,
    schoolCoordinates: {
        elevation: Number,
        latitudeNorth: String,
        longitudeEast: String,
    },
    schoolIdentification: {
        schoolName: String,
        numberAndStreet: String,
        villageOrTown: String,
        ward: String,
        lga: String,
        state: String,
        schoolTelephone: String,
        emailAddress: String,
    },
    schoolCharacteristics: {
        yearOfEstablishment: Number,
        location: String, // Urban, Rural
        levelsOfEducation: String, // Junior Secondary Only, Junior and Senior Secondary
        typeOfSchool: String, // Regular, Islamiyya integrated
        shifts: String, // Yes, No
        sharedFacilities: {
            shares: String, // Yes, No
            numberOfSchools: Number,
        },
        multiGradeTeaching: String, // Yes, No
        distanceFromCatchment: Number,
        distanceFromLGA: Number,
        studentsFurtherThan3km: Number,
        boardingStudents: {
            male: Number,
            female: Number,
        },
        sdpLastYear: String, // Yes, No
        sbmcLastYear: String, // Yes, No
        ptaLastYear: String, // Yes, No
        lastInspectionDate: Date,
        numberOfInspections: Number,
        lastInspectionAuthority: String, // Federal, State, LGEA
        conditionalCashTransferBeneficiaries: Number,
        grantsLastYear: String, // Yes, No
        securityGuard: String, // Yes, No
        ownership: String, // Federal, State, LGEA, Community
    },
    enrolment: {
        studentsWithBirthCertificatesJSS1: Number,
        newEntrantsJSS1: Number,
        juniorSecondaryEnrolment: {
            js1: { streams: Number, multigradeStreams: Number, below12: { male: Number, female: Number }, age12: { male: Number, female: Number }, age13: { male: Number, female: Number }, age14: { male: Number, female: Number }, above14: { male: Number, female: Number } },
            js2: { streams: Number, multigradeStreams: Number, below12: { male: Number, female: Number }, age12: { male: Number, female: Number }, age13: { male: Number, female: Number }, age14: { male: Number, female: Number }, above14: { male: Number, female: Number } },
            js3: { streams: Number, multigradeStreams: Number, below12: { male: Number, female: Number }, age12: { male: Number, female: Number }, age13: { male: Number, female: Number }, age14: { male: Number, female: Number }, above14: { male: Number, female: Number }, completedPreviousYear: { male: Number, female: Number } },
        },
        studentFlow: {
            js1: { dropout: { male: Number, female: Number }, transferIn: { male: Number, female: Number }, transferOut: { male: Number, female: Number }, repeaters: { male: Number, female: Number }, promoted: { male: Number, female: Number } },
            js2: { dropout: { male: Number, female: Number }, transferIn: { male: Number, female: Number }, transferOut: { male: Number, female: Number }, repeaters: { male: Number, female: Number }, promoted: { male: Number, female: Number } },
            js3: { dropout: { male: Number, female: Number }, transferIn: { male: Number, female: Number }, transferOut: { male: Number, female: Number }, repeaters: { male: Number, female: Number }, promoted: { male: Number, female: Number } },
        },
        studentsWithSpecialNeeds: {
            js1: { blind: { male: Number, female: Number }, hearingImpaired: { male: Number, female: Number }, physicallyChallenged: { male: Number, female: Number }, mentallyChallenged: { male: Number, female: Number }, albinism: { male: Number, female: Number }, autism: { male: Number, female: Number } },
            js2: { blind: { male: Number, female: Number }, hearingImpaired: { male: Number, female: Number }, physicallyChallenged: { male: Number, female: Number }, mentallyChallenged: { male: Number, female: Number }, albinism: { male: Number, female: Number }, autism: { male: Number, female: Number } },
            js3: { blind: { male: Number, female: Number }, hearingImpaired: { male: Number, female: Number }, physicallyChallenged: { male: Number, female: Number }, mentallyChallenged: { male: Number, female: Number }, albinism: { male: Number, female: Number }, autism: { male: Number, female: Number } },
        },
        jsceExams: {
            registered: { male: Number, female: Number, total: Number },
            sat: { male: Number, female: Number, total: Number },
            passed: { male: Number, female: Number, total: Number },
        },
    },
    staff: {
        nonTeaching: { male: Number, female: Number, total: Number },
        teaching: { male: Number, female: Number, total: Number },
        staffInfo: [{
            staffFileNo: String,
            name: String,
            gender: String, // M, F
            type: String, // Principal, Vice principal, Teacher, Other non-teaching staff
            sourceOfSalary: String, // Federal Government - FTS, State Government - On this school's payroll, State Government - On another school's payroll, Other, No salary
            yearOfBirth: Number,
            yearOfFirstAppointment: Number,
            yearOfPresentAppointment: Number,
            yearOfPosting: Number,
            gradeLevelStep: String,
            present: String, // Present or temporarily absent, Absent for more than 1 month - Maternity / Paternity leave, Absent for more than 1 month - Sick leave, Absent for more than 1 month - Training, Absent for more than 1 month - Unauthorised
            academicQualification: String, // Below SSCE, SSCE/WASC, ND, NCE, Degree / HND / Graduate, Masters degree, PhD
            teachingQualification: String, // NCE, PGDE, B.Ed. or equivalent, M.Ed. or equivalent, Grade II or equivalent, None
            subjectOfQualification: String, // English, Mathematics, Social studies, Basic science, Hausa/Igbo/Yoruba, Other, None
            mainSubjectTaught: String, // English, Mathematics, Social studies, Basic science, Hausa/Igbo/Yoruba, Other, None
            teachingType: String, // Full-time, Part-time
            teachesSeniorSecondary: Boolean,
            trainingsLast12Months: Number,
        }],
    },
    classrooms: {
        numberOfClassrooms: Number,
        classesHeldOutside: {
            held: String, // Yes, No
            number: Number,
        },
        classroomInfo: [{
            yearOfConstruction: Number,
            presentCondition: String, // Good, Needs minor repairs, Needs major repairs, Under construction, Unusable
            length: Number,
            width: Number,
            floorMaterial: String, // Mud/Earth, Concrete, Wood, Tile/Terrazzo
            wallMaterial: String, // Mud, Cement/Concrete, Wood/Bamboo, Burnt bricks, Iron sheets, Stone, No walls / dwarf walls
            roofMaterial: String, // Mud, Cement/Concrete, Wood/Bamboo, Ceramic tiles, Iron sheets, Asbestos, No roof
            seating: String, // Yes, No
            goodBlackboard: String, // Yes, No
        }],
        otherRooms: {
            staffRooms: Number,
            office: Number,
            library: Number,
            laboratories: Number,
            storeRoom: Number,
            others: Number,
        },
    },
    facilities: {
        safeDrinkingWater: [String], // Pipe- borne Water, Borehole, Well, Other, No Source of Safe Water
        availableFacilities: {
            toilets: { useable: Number, notUseable: Number },
            computers: { useable: Number, notUseable: Number },
            waterSources: { useable: Number, notUseable: Number },
            laboratories: { useable: Number, notUseable: Number },
            classrooms: { useable: Number, notUseable: Number },
            library: { useable: Number, notUseable: Number },
            readingCorner: { useable: Number, notUseable: Number },
            playgrounds: { useable: Number, notUseable: Number },
            washHandFacility: { useable: Number, notUseable: Number },
            others: { useable: Number, notUseable: Number },
        },
        sharedFacilities: {
            toilets: Boolean,
            classrooms: Boolean,
            computers: Boolean,
            library: Boolean,
            waterSources: Boolean,
            playgrounds: Boolean,
            laboratories: Boolean,
            washHandFacility: Boolean,
            others: Boolean,
        },
        toilets: {
            studentOnly: {
                pit: { male: Number, female: Number, mixed: Number },
                bucket: { male: Number, female: Number, mixed: Number },
                waterFlush: { male: Number, female: Number, mixed: Number },
                others: { male: Number, female: Number, mixed: Number },
            },
            teacherOnly: {
                pit: { male: Number, female: Number, mixed: Number },
                bucket: { male: Number, female: Number, mixed: Number },
                waterFlush: { male: Number, female: Number, mixed: Number },
                others: { male: Number, female: Number, mixed: Number },
            },
            studentAndTeacher: {
                pit: { male: Number, female: Number, mixed: Number },
                bucket: { male: Number, female: Number, mixed: Number },
                waterFlush: { male: Number, female: Number, mixed: Number },
                others: { male: Number, female: Number, mixed: Number },
            },
        },
        powerSources: [String], // PHCN/NEPA, Generator, Solar, No source of Power
        healthFacility: {
            type: [String], // Health Clinic/Sick Bay, First Aid Kit, No Health facility
            hasPersonnel: String, // Yes, No
        },
        safetyFacilities: [String], // perimeter fence
        agriculturalFacilities: [String], // Poultry Farm, Fish Pond, Piggery Pen, School Farm, Others
        additionalClassInfo: {
            jss1: { oneSeater: Number, twoSeater: Number, threeSeater: Number },
            jss2: { oneSeater: Number, twoSeater: Number, threeSeater: Number },
            jss3: { oneSeater: Number, twoSeater: Number, threeSeater: Number },
        },
    },
    studentBySubject: {
        english: { js1: { male: Number, female: Number }, js2: { male: Number, female: Number }, js3: { male: Number, female: Number } },
        mathematics: { js1: { male: Number, female: Number }, js2: { male: Number, female: Number }, js3: { male: Number, female: Number } },
        nationalValues: { js1: { male: Number, female: Number }, js2: { male: Number, female: Number }, js3: { male: Number, female: Number } },
        culturalAndCreativeArts: { js1: { male: Number, female: Number }, js2: { male: Number, female: Number }, js3: { male: Number, female: Number } },
        basicScienceAndTechnology: { js1: { male: Number, female: Number }, js2: { male: Number, female: Number }, js3: { male: Number, female: Number } },
        prevocationalStudies: { js1: { male: Number, female: Number }, js2: { male: Number, female: Number }, js3: { male: Number, female: Number } },
        businessStudies: { js1: { male: Number, female: Number }, js2: { male: Number, female: Number }, js3: { male: Number, female: Number } },
        history: { js1: { male: Number, female: Number }, js2: { male: Number, female: Number }, js3: { male: Number, female: Number } },
        french: { js1: { male: Number, female: Number }, js2: { male: Number, female: Number }, js3: { male: Number, female: Number } },
        arabic: { js1: { male: Number, female: Number }, js2: { male: Number, female: Number }, js3: { male: Number, female: Number } },
        christianReligiousStudies: { js1: { male: Number, female: Number }, js2: { male: Number, female: Number }, js3: { male: Number, female: Number } },
        islamicReligiousStudies: { js1: { male: Number, female: Number }, js2: { male: Number, female: Number }, js3: { male: Number, female: Number } },
        igbo: { js1: { male: Number, female: Number }, js2: { male: Number, female: Number }, js3: { male: Number, female: Number } },
        hausa: { js1: { male: Number, female: Number }, js2: { male: Number, female: Number }, js3: { male: Number, female: Number } },
        yoruba: { js1: { male: Number, female: Number }, js2: { male: Number, female: Number }, js3: { male: Number, female: Number } },
    },
    studentTeacherBook: {
        textbooksByGovt: {
            english: { js1: Number, js2: Number, js3: Number },
            mathematics: { js1: Number, js2: Number, js3: Number },
            nationalValues: { js1: Number, js2: Number, js3: Number },
            basicScienceAndTechnology: { js1: Number, js2: Number, js3: Number },
            history: { js1: Number, js2: Number, js3: Number },
            christianReligiousStudies: { js1: Number, js2: Number, js3: Number },
            islamicReligiousStudies: { js1: Number, js2: Number, js3: Number },
            french: { js1: Number, js2: Number, js3: Number },
            prevocationalStudies: { js1: Number, js2: Number, js3: Number },
            businessStudies: { js1: Number, js2: Number, js3: Number },
            igbo: { js1: Number, js2: Number, js3: Number },
            hausa: { js1: Number, js2: Number, js3: Number },
            yoruba: { js1: Number, js2: Number, js3: Number },
            culturalAndCreativeArts: { js1: Number, js2: Number, js3: Number },
        },
        textbooksByOther: {
            english: { js1: Number, js2: Number, js3: Number },
            mathematics: { js1: Number, js2: Number, js3: Number },
            nationalValues: { js1: Number, js2: Number, js3: Number },
            basicScienceAndTechnology: { js1: Number, js2: Number, js3: Number },
            history: { js1: Number, js2: Number, js3: Number },
            christianReligiousStudies: { js1: Number, js2: Number, js3: Number },
            islamicReligiousStudies: { js1: Number, js2: Number, js3: Number },
            french: { js1: Number, js2: Number, js3: Number },
            prevocationalStudies: { js1: Number, js2: Number, js3: Number },
            businessStudies: { js1: Number, js2: Number, js3: Number },
            igbo: { js1: Number, js2: Number, js3: Number },
            hausa: { js1: Number, js2: Number, js3: Number },
            yoruba: { js1: Number, js2: Number, js3: Number },
            culturalAndCreativeArts: { js1: Number, js2: Number, js3: Number },
        },
        teacherTextbooksByGovt: {
            english: { js1: Number, js2: Number, js3: Number },
            mathematics: { js1: Number, js2: Number, js3: Number },
            nationalValues: { js1: Number, js2: Number, js3: Number },
            basicScienceAndTechnology: { js1: Number, js2: Number, js3: Number },
            history: { js1: Number, js2: Number, js3: Number },
            christianReligiousStudies: { js1: Number, js2: Number, js3: Number },
            islamicReligiousStudies: { js1: Number, js2: Number, js3: Number },
            french: { js1: Number, js2: Number, js3: Number },
            prevocationalStudies: { js1: Number, js2: Number, js3: Number },
            businessStudies: { js1: Number, js2: Number, js3: Number },
            igbo: { js1: Number, js2: Number, js3: Number },
            hausa: { js1: Number, js2: Number, js3: Number },
            yoruba: { js1: Number, js2: Number, js3: Number },
            culturalAndCreativeArts: { js1: Number, js2: Number, js3: Number },
        },
        teacherTextbooksByOther: {
            english: { js1: Number, js2: Number, js3: Number },
            mathematics: { js1: Number, js2: Number, js3: Number },
            nationalValues: { js1: Number, js2: Number, js3: Number },
            basicScienceAndTechnology: { js1: Number, js2: Number, js3: Number },
            history: { js1: Number, js2: Number, js3: Number },
            christianReligiousStudies: { js1: Number, js2: Number, js3: Number },
            islamicReligiousStudies: { js1: Number, js2: Number, js3: Number },
            french: { js1: Number, js2: Number, js3: Number },
            prevocationalStudies: { js1: Number, js2: Number, js3: Number },
            businessStudies: { js1: Number, js2: Number, js3: Number },
            igbo: { js1: Number, js2: Number, js3: Number },
            hausa: { js1: Number, js2: Number, js3: Number },
            yoruba: { js1: Number, js2: Number, js3: Number },
            culturalAndCreativeArts: { js1: Number, js2: Number, js3: Number },
        },
        teacherGuidesByGovt: {
            english: { js1: Number, js2: Number, js3: Number },
            mathematics: { js1: Number, js2: Number, js3: Number },
            nationalValues: { js1: Number, js2: Number, js3: Number },
            basicScienceAndTechnology: { js1: Number, js2: Number, js3: Number },
            history: { js1: Number, js2: Number, js3: Number },
            christianReligiousStudies: { js1: Number, js2: Number, js3: Number },
            islamicReligiousStudies: { js1: Number, js2: Number, js3: Number },
            french: { js1: Number, js2: Number, js3: Number },
            prevocationalStudies: { js1: Number, js2: Number, js3: Number },
            businessStudies: { js1: Number, js2: Number, js3: Number },
            igbo: { js1: Number, js2: Number, js3: Number },
            hausa: { js1: Number, js2: Number, js3: Number },
            yoruba: { js1: Number, js2: Number, js3: Number },
            culturalAndCreativeArts: { js1: Number, js2: Number, js3: Number },
        },
        teacherGuidesByOther: {
            english: { js1: Number, js2: Number, js3: Number },
            mathematics: { js1: Number, js2: Number, js3: Number },
            nationalValues: { js1: Number, js2: Number, js3: Number },
            basicScienceAndTechnology: { js1: Number, js2: Number, js3: Number },
            history: { js1: Number, js2: Number, js3: Number },
            christianReligiousStudies: { js1: Number, js2: Number, js3: Number },
            islamicReligiousStudies: { js1: Number, js2: Number, js3: Number },
            french: { js1: Number, js2: Number, js3: Number },
            prevocationalStudies: { js1: Number, js2: Number, js3: Number },
            businessStudies: { js1: Number, js2: Number, js3: Number },
            igbo: { js1: Number, js2: Number, js3: Number },
            hausa: { js1: Number, js2: Number, js3: Number },
            yoruba: { js1: Number, js2: Number, js3: Number },
            culturalAndCreativeArts: { js1: Number, js2: Number, js3: Number },
        },
    },
    teacherQualificationByLevel: {
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
        },
    },
    schoolWellBeing: {
        hasRules: String, // YES, NO
        rulesCover: {
            physicalSafety: {
                bullying: String, // YES, NO
                physicalViolence: String, // YES, NO
                corporalPunishment: String, // YES, NO
                hasSecurityPersonnel: String, // YES, NO
                hasPerimeterFence: String, // YES, NO
                hasBeenAttacked: String, // YES, NO
                timesAttackedLast3Years: Number,
                others: String,
            },
            stigmaAndDiscrimination: {
                learnersHIV: String, // YES, NO
                learnersEthnicity: String, // YES, NO
                learnersHarassed: String, // YES, NO
                staffHIV: String, // YES, NO
                staffEthnicity: String, // YES, NO
                staffHarassed: String, // YES, NO
            },
            grievanceProcedures: String, // YES, NO
        },
        communicationOfRules: {
            toLearners: String, // YES, NO
            toTeachers: String, // YES, NO
            toParents: String, // YES, NO
        },
        wellBeingEducation: {
            receivedLifeSkills: String, // YES, NO
            topicsCovered: {
                genericLifeSkills: String, // YES, NO
                reproductiveHealth: String, // YES, NO
                hivPrevention: String, // YES, NO
                epidemics: String, // YES, NO
                pandemics: String, // YES, NO
            },
        },
        learnersReceivedSWB: { male: Number, female: Number },
        parentOrientation: {
            timesOrganized: Number,
            fora: [String], // PTA, Open Day, Special Session(s)
        },
        lastOrientationDate: Date,
        teacherTraining: {
            receivedFormalTraining: { male: Number, female: Number },
            taughtRelatedTopics: { male: Number, female: Number },
        },
    },
    undertaking: {
        principal: {
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
        default: Date.now
    }
});

module.exports = mongoose.model('Jss', jssSchema);