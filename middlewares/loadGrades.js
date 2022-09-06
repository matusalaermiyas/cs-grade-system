const excelReader = require("node-xlsx").default;
const fs = require("fs");
const path = require("path");

module.exports = (req, res, next) => {
  let result = excelReader.parse(
    path.join(process.cwd(), "data", "grades.xlsx")
  );
  const courseInfo = {};

  result = result[0].data;

  // result[0] contains instructor related information

  if (result[0].length == 3) {
    courseInfo["name"] = result[0][0];
    courseInfo["courseName"] = result[0][1];
    courseInfo["creditHour"] = result[0][2];
  } else res.status(400).send("Invalid grade format");

  result.splice(0, 1);
  const grades = [];

  result.forEach((r) => {
    grades.push({
      coursename: courseInfo.courseName,
      studentId: r[0],
      grade: r[1],
      creditHour: courseInfo.creditHour,
    });
  });

  req.grades = grades;

  next();
};
