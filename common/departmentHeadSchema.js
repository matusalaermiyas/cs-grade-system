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
  departmentHeadOf: {
    type: String,
    required: true,
    max: 255,
  },
};
