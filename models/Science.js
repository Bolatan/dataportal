const mongoose = require('mongoose');

const scienceSchema = new mongoose.Schema({
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
        levelsOfEducation: String, // Senior Secondary only, Junior and Senior Secondary
        typeOfSchool: String, // Regular, Nomadic, Islamiyya integrated, Special needs
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
        jss1WithBirthCertificatesAndNIN: {
            birthCertNPopC: { male: Number, female: Number },
            otherBirthCert: { male: Number, female: Number },
            nin: { male: Number, female: Number },
        },
        newEntrantsJSS1: {
            below12: { male: Number, female: Number },
            age12: { male: Number, female: Number },
            age13: { male: Number, female: Number },
            age14: { male: Number, female: Number },
            above14: { male: Number, female: Number },
        },
        juniorSecondaryEnrolment: {
            js1: { streams: Number, multigradeStreams: Number, below12: { male: Number, female: Number }, age12: { male: Number, female: Number }, age13: { male: Number, female: Number }, age14: { male: Number, female: Number }, above14: { male: Number, female: Number } },
            js2: { streams: Number, multigradeStreams: Number, below12: { male: Number, female: Number }, age12: { male: Number, female: Number }, age13: { male: Number, female: Number }, age14: { male: Number, female: Number }, above14: { male: Number, female: Number } },
            js3: { streams: Number, multigradeStreams: Number, below12: { male: Number, female: Number }, age12: { male: Number, female: Number }, age13: { male: Number, female: Number }, age14: { male: Number, female: Number }, above14: { male: Number, female: Number }, completedPreviousYear: { male: Number, female: Number } },
        },
        newEntrantsSS1: {
            below15: { male: Number, female: Number },
            age15: { male: Number, female: Number },
            age16: { male: Number, female: Number },
            age17: { male: Number, female: Number },
            above17: { male: Number, female: Number },
        },
        seniorSecondaryEnrolment: {
            ss1: { streams: Number, multigradeStreams: Number, below15: { male: Number, female: Number }, age15: { male: Number, female: Number }, age16: { male: Number, female: Number }, age17: { male: Number, female: Number }, above17: { male: Number, female: Number } },
            ss2: { streams: Number, multigradeStreams: Number, below15: { male: Number, female: Number }, age15: { male: Number, female: Number }, age16: { male: Number, female: Number }, age17: { male: Number, female: Number }, above17: { male: Number, female: Number } },
            ss3: { streams: Number, multigradeStreams: Number, below15: { male: Number, female: Number }, age15: { male: Number, female: Number }, age16: { male: Number, female: Number }, age17: { male: Number, female: Number }, above17: { male: Number, female: Number }, completedPreviousYear: { male: Number, female: Number } },
        },
        studentFlow: {
            js1: { dropout: { male: Number, female: Number }, transferIn: { male: Number, female: Number }, transferOut: { male: Number, female: Number }, repeaters: { male: Number, female: Number }, promoted: { male: Number, female: Number } },
            js2: { dropout: { male: Number, female: Number }, transferIn: { male: Number, female: Number }, transferOut: { male: Number, female: Number }, repeaters: { male: Number, female: Number }, promoted: { male: Number, female: Number } },
            js3: { dropout: { male: Number, female: Number }, transferIn: { male: Number, female: Number }, transferOut: { male: Number, female: Number }, repeaters: { male: Number, female: Number }, promoted: { male: Number, female: Number } },
            ss1: { dropout: { male: Number, female: Number }, transferIn: { male: Number, female: Number }, transferOut: { male: Number, female: Number }, repeaters: { male: Number, female: Number }, promoted: { male: Number, female: Number } },
            ss2: { dropout: { male: Number, female: Number }, transferIn: { male: Number, female: Number }, transferOut: { male: Number, female: Number }, repeaters: { male: Number, female: Number }, promoted: { male: Number, female: Number } },
            ss3: { dropout: { male: Number, female: Number }, transferIn: { male: Number, female: Number }, transferOut: { male: Number, female: Number }, repeaters: { male: Number, female: Number }, promoted: { male: Number, female: Number } },
        },
        studentsWithSpecialNeeds: {
            js1: { blind: { male: Number, female: Number }, hearingImpaired: { male: Number, female: Number }, physicallyChallenged: { male: Number, female: Number }, mentallyChallenged: { male: Number, female: Number }, albinism: { male: Number, female: Number }, autism: { male: Number, female: Number } },
            js2: { blind: { male: Number, female: Number }, hearingImpaired: { male: Number, female: Number }, physicallyChallenged: { male: Number, female: Number }, mentallyChallenged: { male: Number, female: Number }, albinism: { male: Number, female: Number }, autism: { male: Number, female: Number } },
            js3: { blind: { male: Number, female: Number }, hearingImpaired: { male: Number, female: Number }, physicallyChallenged: { male: Number, female: Number }, mentallyChallenged: { male: Number, female: Number }, albinism: { male: Number, female: Number }, autism: { male: Number, female: Number } },
            ss1: { blind: { male: Number, female: Number }, hearingImpaired: { male: Number, female: Number }, physicallyChallenged: { male: Number, female: Number }, mentallyChallenged: { male: Number, female: Number }, albinism: { male: Number, female: Number }, autism: { male: Number, female: Number } },
            ss2: { blind: { male: Number, female: Number }, hearingImpaired: { male: Number, female: Number }, physicallyChallenged: { male: Number, female: Number }, mentallyChallenged: { male: Number, female: Number }, albinism: { male: Number, female: Number }, autism: { male: Number, female: Number } },
            ss3: { blind: { male: Number, female: Number }, hearingImpaired: { male: Number, female: Number }, physicallyChallenged: { male: Number, female: Number }, mentallyChallenged: { male: Number, female: Number }, albinism: { male: Number, female: Number }, autism: { male: Number, female: Number } },
        },
        nabtebExams: {
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
            teachingQualification: String, // NCE, PGDE, B.Tech. or equivalent, M.Tech. or equivalent, Grade II or equivalent, None
            subjectOfQualification: String, // English, Mathematics, Science, Business, Humanities, Technology, Other, None
            mainSubjectTaught: String, // English, Mathematics, Science, Business, Humanities, Technology, Other, None
            teachingType: String, // Full-time, Part-time
            teachesBothJnrSnr: Boolean,
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
            safetyAndVentilation: [String], // Wooden doors, Iron doors, Wooden windows, Iron Windows, Aluminium windows / doors, No doors / windows
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
        workshops: [{
            type: String, // Electrical installation, Computer Operation, ...
            shared: String, // Yes, No
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
    },
    facilities: {
        safeDrinkingWater: [String], // Pipe borne Water, Borehole, Well, Other, No Source of Safe Water
        availableFacilities: {
            toilets: { useable: Number, notUseable: Number },
            computers: { useable: Number, notUseable: Number },
            waterSources: { useable: Number, notUseable: Number },
            laboratories: { useable: Number, notUseable: Number },
            classrooms: { useable: Number, notUseable: Number },
            library: { useable: Number, notUseable: Number },
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
        safetyFacilities: [String], // perimeter fence, school gate, Security guards, Security camera
        agriculturalFacilities: [String], // Poultry Farm, Fish Pond, Piggery Pen, School Farm, Others
        additionalClassroomsInfo: {
            js1: { oneSeater: Number, twoSeater: Number, threeSeater: Number },
            js2: { oneSeater: Number, twoSeater: Number, threeSeater: Number },
            js3: { oneSeater: Number, twoSeater: Number, threeSeater: Number },
            ss1: { oneSeater: Number, twoSeater: Number, threeSeater: Number },
            ss2: { oneSeater: Number, twoSeater: Number, threeSeater: Number },
            ss3: { oneSeater: Number, twoSeater: Number, threeSeater: Number },
        },
    },
    studentBySubject: {
        english: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        mathematics: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        basicScience: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        biology: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        physics: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        chemistry: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        healthScience: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        agricScience: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        homeEconomics: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        basicTechnology: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        foodAndNutrition: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        history: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        geography: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        economics: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        technicalDrawing: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        businessStudies: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        phe: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        french: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        igbo: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        hausa: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        yoruba: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        arabic: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        electricalInstallation: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        computerOperation: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        basicComputerElectronics: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        computerProgramming: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        woodMetalFinishing: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        furnitureDesignAndConstruction: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        automechics: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        buildingConstruction: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        generalWoodwork: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        electricalElectronics: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        clothingAndTextileDesign: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        upholstery: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        introductionToBuilding: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        wallsFloorsAndCeilingFinishing: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        concreting: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        garmentConstruction: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        brickBlockLaying: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        refrigerationAndAirConditioning: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        fabricationAndWelding: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        plumbing: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
        other: { js1: { m: Number, f: Number }, js2: { m: Number, f: Number }, js3: { m: Number, f: Number }, ss1: { m: Number, f: Number }, ss2: { m: Number, f: Number }, ss3: { m: Number, f: Number } },
    },
    studentTeacherBook: {
        textbooksProvidedByGovt: {
            english: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            mathematics: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            basicScienceAndTechnology: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            history: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            nationalValues: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            biology: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            physics: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            chemistry: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            economics: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
        },
        textbooksProvidedByOther: {
            english: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            mathematics: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            basicScienceAndTechnology: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            history: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            nationalValues: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            biology: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            physics: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            chemistry: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            economics: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
        },
        teacherTextbooksByGovt: {
            english: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            mathematics: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            basicScienceAndTechnology: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            history: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            nationalValues: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            biology: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            physics: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            chemistry: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            economics: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
        },
        teacherTextbooksByOther: {
            english: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            mathematics: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            basicScienceAndTechnology: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            history: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            nationalValues: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            biology: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            physics: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            chemistry: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            economics: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
        },
        teacherGuidesByGovt: {
            english: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            mathematics: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            basicScienceAndTechnology: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            history: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            nationalValues: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            biology: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            physics: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            chemistry: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            economics: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
        },
        teacherGuidesByOther: {
            english: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            mathematics: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            basicScienceAndTechnology: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            history: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            nationalValues: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            biology: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            physics: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            chemistry: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
            economics: { js1: Number, js2: Number, js3: Number, ss1: Number, ss2: Number, ss3: Number },
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

module.exports = mongoose.model('Science', scienceSchema);