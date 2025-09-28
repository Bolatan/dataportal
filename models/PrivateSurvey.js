const mongoose = require('mongoose');

const privateSurveySchema = new mongoose.Schema({
  schoolIdentification: {
    schoolName: { type: String, required: true },
    schoolCode: String,
    address: String,
    lga: String,
    state: String
  },
  schoolEnrolment: {
    prePrimaryEnrolmentByAge: {
      type: Map,
      of: new mongoose.Schema({
        male: { type: Number, default: 0 },
        female: { type: Number, default: 0 }
      }, { _id: false })
    },
    primaryEnrolmentByAge: {
      type: Map,
      of: new mongoose.Schema({
        male: { type: Number, default: 0 },
        female: { type: Number, default: 0 }
      }, { _id: false })
    },
    juniorSecondaryEnrolmentByAge: {
      type: Map,
      of: new mongoose.Schema({
        male: { type: Number, default: 0 },
        female: { type: Number, default: 0 }
      }, { _id: false })
    },
    seniorSecondaryEnrolmentByAge: {
      type: Map,
      of: new mongoose.Schema({
        male: { type: Number, default: 0 },
        female: { type: Number, default: 0 }
      }, { _id: false })
    }
  },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('PrivateSurvey', privateSurveySchema);
