const login = require("express").Router();
const addInstructor = require("express").Router();
const removeInstructor = require("express").Router();
const instructorsList = require("express").Router();
const studentsList = require("express").Router();

const csInstructor = require("../../models/staff/csInstructor");
const departmentHead = require("../../models/departmentHeads/cs");
const auth = require("../../middlewares/authenticate");

const firstYear = require("../../models/cs/auth/csFirstYear");
const secondYear = require("../../models/cs/auth/csSecondYear");
const thirdYear = require("../../models/cs/auth/csThirdYear");
const fourthYear = require("../../models/cs/auth/csFourthYear");

studentsList.get("/:year", auth, async (req, res) => {
  let result;
  switch (parseInt(req.params.year)) {
    case 1:
      result = await firstYear.find();

      res.send(result);
      break;
    case 2:
      result = await secondYear.find();
      res.send(result);

      break;
    case 3:
      result = await thirdYear.find();
      res.send(result);
      break;
    case 4:
      result = await fourthYear.find();

      console.log(result);

      res.send(result);
      break;
  }
});

login.post("/", async (req, res) => {
  const result = await departmentHead.findOne({ name: req.body.name });

  if (!result) return res.status(404).send("Invalid name");

  if (result.password != req.body.password)
    return res.status(404).send("Invalid password");

  const token = result.generateAuthToken();

  res.send(token);
});

instructorsList.get("/", async (req, res) => {
  const instructors = await csInstructor.find();

  res.send(instructors);
});

addInstructor.post("/", auth, async (req, res) => {
  let instructor = new csInstructor({
    name: req.body.name,
    password: req.body.password,
    department: req.body.department,
    teachingDepartment: req.body.teachingDepartment,
    teachingYear: req.body.teachingYear,
  });

  instructor = await instructor.save();

  res.send();
});

removeInstructor.delete("/:id", auth, async (req, res) => {
  const result = await csInstructor.findByIdAndRemove(req.params.id);

  res.send();
});

module.exports = {
  addInstructor,
  instructorsList,
  login,
  removeInstructor,
  studentsList,
};
