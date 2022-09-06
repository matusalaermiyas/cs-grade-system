const mongoose = require('mongoose');

const gradeSchema = require('../../../../common/gradeSchema');

const model = mongoose.model('csfirstyearsecondsemestergrade', new mongoose.Schema(gradeSchema));

module.exports = model;