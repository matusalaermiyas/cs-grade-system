const mongoose = require('mongoose');

const gradeSchema = require('../../../../common/gradeSchema');

const model = mongoose.model('cssecondyearfirstsemestergrade', new mongoose.Schema(gradeSchema));

module.exports = model;