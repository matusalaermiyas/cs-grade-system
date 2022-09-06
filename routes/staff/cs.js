const csInstructor = require("../../models/staff/csInstructor");
const csStaffLogin = require("express").Router();
const csStaffGrade = require("express").Router();

const firstYearFirstSemesterGrades = require("../../models/cs/grades/firstYear/firstSemester");
const firstYearSecondSemesterGrades = require("../../models/cs/grades/firstYear/secondSemester");
const firstYearThirdSemesterGrades = require("../../models/cs/grades/firstYear/thirdSemester");

const secondYearFirstSemesterGrades = require("../../models/cs/grades/secondYear/firstSemester");
const secondYearSecondSemesterGrades = require("../../models/cs/grades/secondYear/secondSemester");
const secondYearThirdSemesterGrades = require("../../models/cs/grades/secondYear/thirdSemester");

const thirdYearFirstSemesterGrades = require("../../models/cs/grades/thirdYear/firstSemester");
const thirdYearSecondSemesterGrades = require("../../models/cs/grades/thirdYear/secondSemester");
const thirdYearThirdSemesterGrades = require("../../models/cs/grades/thirdYear/thirdSemester");

const fourthYearFirstSemesterGrades = require("../../models/cs/grades/fourthYear/firstSemester");
const fourthYearSecondSemesterGrades = require("../../models/cs/grades/fourthYear/secondSemester");
const fourthYearThirdSemesterGrades = require("../../models/cs/grades/fourthYear/thirdSemester");

const loadGrades = require("../../middlewares/loadGrades");

csStaffLogin.post("/", async (req, res) => {
  const result = await csInstructor.findOne({ name: req.body.name });

  if (!result) return res.status(404).send("name not found..");

  if (result.password !== req.body.password)
    return res.status(404).send("password not found..");

  const token = result.generateAuthToken();

  res.status(200).send(token);
});

csStaffGrade.post("/:year/:semester", loadGrades, async (req, res) => {
  const year = parseInt(req.params.year);
  const semester = parseInt(req.params.semester);

  switch (year) {
    case 1:
      if (semester == 1) {
        const result = await firstYearFirstSemesterGrades.insertMany(
          req.grades
        );

        res.status(200).send();
      } else if (semester == 2) {
        const result = await firstYearSecondSemesterGrades.insertMany(
          req.grades
        );
        res.status(200).send();
      } else if (semester == 3) {
        const result = await firstYearThirdSemesterGrades.insertMany(
          req.grades
        );
        res.status(200).send();
      }
      break;

    case 2:
      if (semester == 1) {
        const result = await secondYearFirstSemesterGrades.insertMany(
          req.grades
        );
        res.status(200).send();
      } else if (semester == 2) {
        const result = await secondYearSecondSemesterGrades.insertMany(
          req.grades
        );
        res.status(200).send();
      } else if (semester == 3) {
        const result = await secondYearThirdSemesterGrades.insertMany(
          req.grades
        );
        res.status(200).send();
      }
      break;

    case 3:
      if (semester == 1) {
        const result = await thirdYearFirstSemesterGrades.insertMany(
          req.grades
        );
        res.status(200).send();
      } else if (semester == 2) {
        const result = await thirdYearSecondSemesterGrades.insertMany(
          req.grades
        );
        res.status(200).send();
      } else if (semester == 3) {
        const result = await thirdYearThirdSemesterGrades.insertMany(
          req.grades
        );
        res.status(200).send();
      }
      break;

    case 4:
      if (semester == 1) {
        const result = await fourthYearFirstSemesterGrades.insertMany(
          req.grades
        );
        res.status(200).send();
      } else if (semester == 2) {
        const result = await fourthYearSecondSemesterGrades.insertMany(
          req.grades
        );
        res.status(200).send();
      } else if (semester == 3) {
        const result = await fourthYearThirdSemesterGrades.insertMany(
          req.grades
        );
        res.status(200).send();
      }
  }

  res.status(200).send();
});

module.exports = { csStaffLogin, csStaffGrade };
