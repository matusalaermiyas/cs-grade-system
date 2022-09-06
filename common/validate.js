const Joi = require("joi");

module.exports.validateRegistration = (student) => {
  const schema = Joi.object({
    name: Joi.string().min(4).max(255).required().label("Name"),
    studentId: Joi.string().min(5).required().label("StudentId"),
    year: Joi.number().required().min(1).max(4).label("Academic Year"),
    level: Joi.string().required().min(5).label("Level"),
  });

  return schema.validate({
    name: student.name,
    studentId: student.studentId,
    year: student.acdemicYear,
    level: student.level,
  });
};

module.exports.validateGrade = (grade) => {
  const schema = Joi.object({
    coursename: Joi.string().min(3).required().label("Coursenae"),
    studentId: Joi.string().min(4).required().label("StudentId"),
    grade: Joi.number().min(0).max(120).required().label("Grade"),
    creditHour: Joi.number().min(1).required().label("CreditHour"),
    instructor: Joi.string().min(5).required().label("Instructor"),
  });

  return schema.validate({
    coursename: grade.coursename,
    studentId: grade.studentId,
    grade: grade.grade,
    creditHour: grade.creditHour,
    instructor: grade.instructor,
  });
};

module.exports.validateLogin = (account) => {
  const schema = Joi.object({
    id: Joi.string().required().label("Student Id"),
    name: Joi.string().required().label("Student Name"),
  });

  return schema.validate({
    id: account.id,
    name: account.name,
  });
};
