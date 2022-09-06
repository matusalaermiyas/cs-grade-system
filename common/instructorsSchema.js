const mongoose = require("mongoose");

module.exports = {
  name: {
    type: String,
    required: true,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    max: 255,
  },
  department: {
    type: String,
    required: true,
    max: 255,
  },

  teachingDepartment: {
    type: String,
    required: true
  },
  teachingYear: {
    type: [Number],
    required: true
  }
};
