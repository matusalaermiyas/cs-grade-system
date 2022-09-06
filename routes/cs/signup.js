const router = require("express").Router();
const _ = require("lodash");

const firstYearStudents = require("../../models/cs/auth/csFirstYear");
const secondYearStudents = require("../../models/cs/auth/csSecondYear");
const thirdYearStudents = require("../../models/cs/auth/csThirdYear");
const fourthYearStudents = require("../../models/cs/auth/csFourthYear");

const loadStudents = require("../../middlewares/loadStudents");
const auth = require("../../middlewares/authenticate");
const { validateAcademicYear } = require("../../middlewares/validate");

router.post(
  "/:year",
  [loadStudents, validateAcademicYear, auth],
  async (req, res) => {
    let result;

    console.log("Kicking here");

    console.log(req.students);

    switch (parseInt(req.params.year)) {
      case 1:
        result = await firstYearStudents.insertMany(req.students);
        return res.status(200).send();

      case 2:
        result = await secondYearStudents.insertMany(req.students);
        return res.status(200).send();

      case 3:
        result = await thirdYearStudents.insertMany(req.students);
        return res.status(200).send();

      case 4:
        result = await fourthYearStudents.insertMany(req.students);
        return res.status(200).send();
    }
  }
);

module.exports = router;
