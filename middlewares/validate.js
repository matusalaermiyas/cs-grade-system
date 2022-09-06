const _ = require("lodash");

module.exports.validateAcademicYear = (req, res, next) => {
  const academicYear = req.params.year;

  if (_.isEmpty(academicYear) || academicYear > 4)
    return res.status(400).send("Invalid data");

  next();
};

module.exports.validateYearAndSemester = (req, res, next) => {
  const { year, semester } = req.params;

  if (_.isEmpty(year) || _.isEmpty(semester) || year > 4 || semester > 3)
    return res.status(400).send("Invalid data");

  next();
};
