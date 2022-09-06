const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const schemaObject = require("../../common/instructorsSchema");

const schema = new mongoose.Schema(schemaObject);

schema.methods.generateAuthToken = function () {
  return jwt.sign(
    {
      department: this.department,
      name: this.name,
      teachingDepartment: this.teachingDepartment,
      teachingYear: this.teachingYear,
    },
    process.env.PRIVATEKEY
  );
};

const model = mongoose.model("csinstructor", schema);

module.exports = model;
