const mongoose = require('mongoose');

const sssSchema = new mongoose.Schema({
    schoolCode: String,
    schoolCoordinates: {
        elevation: Number,
        latitudeNorth: String,
        longitudeEast: String
    },
    schoolIdentification: {
        schoolName: String,
        numberAndStreet: String,
        villageOrTown: String,
        ward: String,
        lga: String,
        state: String,
        schoolTelephone: String,
        emailAddress: String
    },
    schoolCharacteristics: {
        yearOfEstablishment: Number,
        location: String,
        levelsOfEducation: String,
        typeOfSchool: String,
        shifts: String,
        sharedFacilities: {
            shares: String,
            numberOfSchools: Number
        },
        multiGradeTeaching: String,
        distanceFromCatchment: Number,
        distanceFromLGA: Number,
        studentsFurtherThan3km: Number,
        boardingStudents: {
            male: Number,
            female: Number
        },
        sdpLastYear: String,
        sbmcLastYear: String,
        ptaLastYear: String,
        lastInspectionDate: Date,
        numberOfInspections: Number,
        lastInspectionAuthority: String,
        conditionalCashTransferBeneficiaries: Number,
        grantsLastYear: String,
        securityGuard: String,
        ownership: String
    },
    enrolment: {
        studentsWithBirthCertificatesSSS1: {
            male: Number,
            female: Number
        },
        newEntrantsSSS1: {
            male: Number,
            female: Number
        },
        seniorSecondaryEnrolment: {
            ss1: {
                streams: Number,
                multigradeStreams: Number,
                below15: { male: Number, female: Number },
                age15: { male: Number, female: Number },
                age16: { male: Number, female: Number },
                age17: { male: Number, female: Number },
                above17: { male: Number, female: Number }
            },
            ss2: {
                streams: Number,
                multigradeStreams: Number,
                below15: { male: Number, female: Number },
                age15: { male: Number, female: Number },
                age16: { male: Number, female: Number },
                age17: { male: Number, female: Number },
                above17: { male: Number, female: Number }
            },
            ss3: {
                streams: Number,
                multigradeStreams: Number,
                below15: { male: Number, female: Number },
                age15: { male: Number, female: Number },
                age16: { male: Number, female: Number },
                age17: { male: Number, female: Number },
                above17: { male: Number, female: Number },
                completedPreviousYear: { male: Number, female: Number }
            }
        },
        studentFlow: {
            ss1: {
                dropout: { male: Number, female: Number },
                transferIn: { male: Number, female: Number },
                transferOut: { male: Number, female: Number },
                repeaters: { male: Number, female: Number },
                promoted: { male: Number, female: Number }
            },
            ss2: {
                dropout: { male: Number, female: Number },
                transferIn: { male: Number, female: Number },
                transferOut: { male: Number, female: Number },
                repeaters: { male: Number, female: Number },
                promoted: { male: Number, female: Number }
            },
            ss3: {
                dropout: { male: Number, female: Number },
                transferIn: { male: Number, female: Number },
                transferOut: { male: Number, female: Number },
                repeaters: { male: Number, female: Number },
                promoted: { male: Number, female: Number }
            }
        },
        studentsWithSpecialNeeds: {
            ss1: {
                blind: { male: Number, female: Number },
                hearingImpaired: { male: Number, female: Number },
                physicallyChallenged: { male: Number, female: Number },
                mentallyChallenged: { male: Number, female: Number },
                albinism: { male: Number, female: Number },
                autism: { male: Number, female: Number }
            },
            ss2: {
                blind: { male: Number, female: Number },
                hearingImpaired: { male: Number, female: Number },
                physicallyChallenged: { male: Number, female: Number },
                mentallyChallenged: { male: Number, female: Number },
                albinism: { male: Number, female: Number },
                autism: { male: Number, female: Number }
            },
            ss3: {
                blind: { male: Number, female: Number },
                hearingImpaired: { male: Number, female: Number },
                physicallyChallenged: { male: Number, female: Number },
                mentallyChallenged: { male: Number, female: Number },
                albinism: { male: Number, female: Number },
                autism: { male: Number, female: Number }
            }
        },
        ssceExams: {
            waec: {
                registered: { male: Number, female: Number, total: Number },
                sat: { male: Number, female: Number, total: Number },
                passed: { male: Number, female: Number, total: Number }
            },
            neco: {
                registered: { male: Number, female: Number, total: Number },
                sat: { male: Number, female: Number, total: Number },
                passed: { male: Number, female: Number, total: Number }
            }
        }
    },
    staff: {
        nonTeaching: {
            male: Number,
            female: Number,
            total: Number
        },
        teaching: {
            male: Number,
            female: Number,
            total: Number
        },
        staffInfo: [{
            staffFileNo: String,
            name: String,
            gender: String,
            type: String,
            sourceOfSalary: String,
            yearOfBirth: Number,
            yearOfFirstAppointment: Number,
            yearOfPresentAppointment: Number,
            yearOfPosting: Number,
            gradeLevelStep: String,
            present: String,
            academicQualification: String,
            teachingQualification: String,
            subjectOfQualification: String,
            mainSubjectTaught: String,
            teachingType: String,
            teachesJuniorSecondary: Boolean,
            trainingsLast12Months: Number
        }]
    },
    classrooms: {
        numberOfClassrooms: Number,
        classesHeldOutside: {
            held: String,
            number: Number
        },
        classroomInfo: [{
            yearOfConstruction: Number,
            presentCondition: String,
            length: Number,
            width: Number,
            floorMaterial: String,
            wallMaterial: String,
            roofMaterial: String,
            seating: String,
            goodBlackboard: String
        }],
        otherRooms: {
            staffRooms: Number,
            office: Number,
            library: Number,
            laboratories: Number,
            storeRoom: Number,
            others: Number
        }
    },
    facilities: {
        safeDrinkingWater: [String],
        availableFacilities: {
            toilets: { useable: Number, notUseable: Number },
            computers: { useable: Number, notUseable: Number },
            waterSources: { useable: Number, notUseable: Number },
            laboratories: { useable: Number, notUseable: Number },
            classrooms: { useable: Number, notUseable: Number },
            library: { useable: Number, notUseable: Number },
            playgrounds: { useable: Number, notUseable: Number },
            washHandFacility: { useable: Number, notUseable: Number },
            others: { useable: Number, notUseable: Number }
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
            others: Boolean
        },
        toilets: {
            studentOnly: {
                pit: { male: Number, female: Number, mixed: Number },
                bucket: { male: Number, female: Number, mixed: Number },
                waterFlush: { male: Number, female: Number, mixed: Number },
                others: { male: Number, female: Number, mixed: Number }
            },
            teacherOnly: {
                pit: { male: Number, female: Number, mixed: Number },
                bucket: { male: Number, female: Number, mixed: Number },
                waterFlush: { male: Number, female: Number, mixed: Number },
                others: { male: Number, female: Number, mixed: Number }
            },
            studentAndTeacher: {
                pit: { male: Number, female: Number, mixed: Number },
                bucket: { male: Number, female: Number, mixed: Number },
                waterFlush: { male: Number, female: Number, mixed: Number },
                others: { male: Number, female: Number, mixed: Number }
            }
        },
        powerSources: [String],
        healthFacility: {
            type: [String],
            hasPersonnel: String
        },
        safetyFacilities: [String],
        agriculturalFacilities: [String],
        additionalClassroomsInfo: {
            ss1: { oneSeater: Number, twoSeater: Number, threeSeater: Number },
            ss2: { oneSeater: Number, twoSeater: Number, threeSeater: Number },
            ss3: { oneSeater: Number, twoSeater: Number, threeSeater: Number }
        }
    },
    studentBySubject: {
        type: Map,
        of: {
            ss1: { male: Number, female: Number },
            ss2: { male: Number, female: Number },
            ss3: { male: Number, female: Number }
        }
    },
    studentTeacherBook: {
        textbooksProvidedByGovt: {
            type: Map,
            of: {
                sss1: Number,
                sss2: Number,
                sss3: Number
            }
        },
        textbooksProvidedByOther: {
            type: Map,
            of: {
                sss1: Number,
                sss2: Number,
                sss3: Number
            }
        },
        teacherTextbooksByGovt: {
            type: Map,
            of: {
                sss1: Number,
                sss2: Number,
                sss3: Number
            }
        },
        teacherTextbooksByOther: {
            type: Map,
            of: {
                sss1: Number,
                sss2: Number,
                sss3: Number
            }
        },
        teacherGuidesByGovt: {
            type: Map,
            of: {
                sss1: Number,
                sss2: Number,
                sss3: Number
            }
        },
        teacherGuidesByOther: {
            type: Map,
            of: {
                sss1: Number,
                sss2: Number,
                sss3: Number
            }
        }
    },
    teacherQualificationByLevel: {
        sss: {
            type: Map,
            of: {
                male: Number,
                female: Number,
                total: Number
            }
        }
    },
    schoolWellBeing: {
        hasRules: String,
        rulesCover: {
            physicalSafety: {
                bullying: String,
                physicalViolence: String,
                corporalPunishment: String,
                hasSecurityPersonnel: String,
                hasPerimeterFence: String,
                hasBeenAttacked: String,
                timesAttackedLast3Years: Number,
                others: String
            },
            stigmaAndDiscrimination: {
                learnersHIV: String,
                learnersEthnicity: String,
                learnersHarassed: String,
                staffHIV: String,
                staffEthnicity: String,
                staffHarassed: String
            },
            grievanceProcedures: String
        },
        communicationOfRules: {
            toLearners: String,
            toTeachers: String,
            toParents: String
        },
        wellBeingEducation: {
            receivedLifeSkills: String,
            topicsCovered: {
                genericLifeSkills: String,
                reproductiveHealth: String,
                hivPrevention: String,
                epidemics: String,
                pandemics: String
            }
        },
        learnersReceivedSWB: {
            male: Number,
            female: Number
        },
        parentOrientation: {
            timesOrganized: Number,
            fora: [String]
        },
        lastOrientationDate: Date,
        teacherTraining: {
            receivedFormalTraining: {
                male: Number,
                female: Number
            },
            taughtRelatedTopics: {
                male: Number,
                female: Number
            }
        }
    },
    undertaking: {
        principal: {
            name: String,
            telephone: String,
            signature: String,
            date: Date
        },
        sbmcChairperson: {
            name: String,
            position: String,
            telephone: String,
signature: String,
            date: Date
        },
        supervisor: {
            name: String,
            position: String,
            telephone: String,
            signature: String,
            date: Date
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('SSS', sssSchema);