var Student = require("./student")

function Class (
    students,
    studentCount,
    professor,
    roomNumber,

){
    this.students = [];
    // this.studentCount = students.length;
    // this.professor = ;
    // this.roomNumber = ;

    this.addStudent = function(name, subject, gpa){
        this.students.push(new Student(name, subject, gpa))
    }

    console.log(students);
    // console.log(studentCount);
    
}

Class();