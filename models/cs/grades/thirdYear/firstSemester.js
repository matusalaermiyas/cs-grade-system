const mongoose = require('mongoose');

const gradeSchema = require('../../../../common/gradeSchema');

const model = mongoose.model('csthirdyearfirstsemestergrade', new mongoose.Schema(gradeSchema));

module.exports = model;