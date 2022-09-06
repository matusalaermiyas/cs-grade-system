const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const departmentHeadSchema = require("../../common/departmentHeadSchema");

const schema = new mongoose.Schema(departmentHeadSchema);

schema.methods.generateAuthToken = function () {
  return jwt.sign(
    {
      name: this.name,
      departmentHeadOf: this.departmentHeadOf,
    },
    process.env.PRIVATEKEY
  );
};

const model = mongoose.model("csDepartmentHead", new mongoose.Schema(schema));

module.exports = model;
