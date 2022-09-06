const excelReader = require('node-xlsx').default;
const path = require('path');

module.exports = (req, res, next) => {
    console.log('loadStudents..')

    let sheet = excelReader.parse(
        path.join(process.cwd(), 'data', 'grades.xlsx')
    );

    const students = [];
    const student = {};

    const data = sheet[0].data;

    console.log(data);

    data.forEach(d => students.push({
        name: d[0],
        studentId: d[1],
        duration: d[2],
        year: d[3],
        level: d[4],
        department: d[5],
    }));

    req.students = students;

    next();
}