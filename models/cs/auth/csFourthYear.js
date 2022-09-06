const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const authSchema = require('../../../common/authSchema')

const schema = new mongoose.Schema(authSchema)
schema.methods.generateAuthToken = function() {
    return jwt.sign({ year: this.year, studentId: this.studentId, department: this.department, duration: this.duration  }, process.env.PRIVATEKEY);
}

const model = mongoose.model('csfourthyearstudent', schema);

module.exports = model;