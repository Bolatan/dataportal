const mongoose = require('mongoose');

const StringAndNumber = { type: mongoose.Schema.Types.Mixed }; // To allow dynamic keys

const EccdeSchema = new mongoose.Schema({
    // Section A: School Identification
    schoolCode: String,
    latitude: String,
    longitude: String,
    elevation: String,
    schoolName: String,
    streetName: String,
    villageTown: String,
    ward: String,
    lga: String,
    state: String,
    schoolTelephone: String,
    emailAddress: String,

    // Section B: School Characteristics
    yearOfEstablishment: Number,
    location: String,
    educationLevel: String,
    schoolType: String,
    shifts: String,
    sharedFacilities: String,
    howManySchoolsSharing: Number,
    multiGrade: String,
    distanceFromCatchment: Number,
    distanceFromLga: Number,
    pupilsDistance: Number,
    boardingMale: Number,
    boardingFemale: Number,
    sdp: String,
    sbmc: String,
    pta: String,
    lastInspectionDate: Date,
    inspectionsLastYear: Number,
    inspectionAuthority: String,
    conditionalCashTransfer: Number,
    grants: String,
    securityGuard: String,
    ownership: String,

    // Section C: Enrolment (Assuming this part is correct from previous steps)
    birthCertificates: StringAndNumber,
    prePrimaryStreams: StringAndNumber,
    prePrimaryMultigradeStreams: StringAndNumber,
    prePrimaryEnrolmentByAge: StringAndNumber,
    primaryEntrants: StringAndNumber,
    primaryStreams: StringAndNumber,
    primaryMultigradeStreams: StringAndNumber,
    primaryEnrolmentByAge: StringAndNumber,
    pupilFlow: StringAndNumber,

    // Section D: Staff
    staff: {
        nonTeaching: { male: Number, female: Number, total: Number },
        teaching: { male: Number, female: Number, total: Number },
        careGivers: { male: Number, female: Number, total: Number },
    },
    staffInfo: [mongoose.Schema.Types.Mixed],

    // Section E: Classrooms
    classrooms: {
        total: Number,
        classesOutside: String,
        classesOutsideNumber: Number,
        playRooms: Number,
    },
    classroomInfo: [mongoose.Schema.Types.Mixed],
    otherRooms: {
        staff: Number,
        office: Number,
        library: Number,
        lab: Number,
        store: Number,
        other: Number,
    },

    // Section F: Facilities
    facilities: {
        waterSource: [String],
        waterSourceOther: String,
        available: StringAndNumber,
        shared: [String],
        toilets: StringAndNumber,
        power: [String],
        healthFacility: String,
        healthPersonnel: String,
        safety: [String],
        playRoom: String,
        playFacilities: [String],
        instructionalMaterials: [String],
        agricFacilities: [String],
    },
    seating: StringAndNumber,

    // Section G: Pupil/Teacher Book
    books: {
        gov_pupil: StringAndNumber,
        other_pupil: StringAndNumber,
        gov_teacher: StringAndNumber,
        other_teacher: StringAndNumber,
        gov_teacher_guide: StringAndNumber,
        other_teacher_guide: StringAndNumber,
    },
    manuals: StringAndNumber,

    // Section H: Teacher's Qualification
    teacher_qualifications: StringAndNumber,

    // Section H: School Well-being
    well_being: {
        has_rules: String,
        rules: {
            physical_safety: {
                bullying: String,
                violence: String,
                corporal_punishment: String,
                security_personnel: String,
                perimeter_fence: String,
                attacked: String,
                attack_times: Number,
                other_specify: String,
            },
            stigma: {
                learners_hiv: String,
                learners_ethnicity: String,
                learners_harassed: String,
                staff_hiv: String,
                staff_ethnicity: String,
                staff_harassed: String,
            },
            grievance_procedures: String,
        },
        communication: {
            learners: String,
            teachers: String,
            parents: String,
        },
        education: {
            received_swb: String,
            topics: {
                generic_life_skills: String,
                reproductive_health: String,
                hiv_prevention: String,
                epidemics: String,
                pandemics: String,
            }
        },
        participants: {
            male: Number,
            female: Number,
        },
        orientation: {
            times: Number,
            fora: [String],
        },
        last_orientation_date: Date,
        teacher_training: {
            formal_male: Number,
            formal_female: Number,
            taught_male: Number,
            taught_female: Number,
        }
    },

    // Undertaking
    attestation: {
        head_teacher: { name: String, telephone: String, date: Date },
        sbmc_chairperson: { name: String, position: String, telephone: String, date: Date },
        supervisor: { name: String, position: String, telephone: String, date: Date },
    }
}, { timestamps: true, strict: false }); // Using strict: false to allow for dynamic keys in objects

module.exports = mongoose.model('Eccde', EccdeSchema);