// Run in the terminal: node challenge-tests.js
// These tests use the same shared functions as the browser dashboard.
const { createStudentManager } = require("./student-manager.js");
const manager = createStudentManager();

console.log("===== SET UP TEST STUDENTS =====");
console.log(manager.registerStudent("Siya Ndlovu", "JavaScript Essentials 2", 78, 84, 91).message);
console.log(manager.registerStudent("Ashley Meyers", "Web Development", 45, 52).message);
console.log(manager.registerStudent("Steven Jobs", undefined, 88).message);

console.log("\n===== CHALLENGE 1: SEARCH BY NAME =====");
const found = manager.findStudentByName("  Siya Ndlovu  ");
console.log(found ? `Found: ${found.name} (${found.id})` : "Student not found.");

console.log("\n===== CHALLENGE 2: ADD MARKS =====");
const update = manager.addMarks("STU-0001", 95);
console.log(update.message);
console.log(`Siya's updated average: ${manager.calculateAverage(update.student.marks)}%`);

console.log("\n===== CHALLENGE 3: STUDENTS WHO PASSED =====");
manager.getPassedStudents().forEach(student => {
  console.log(`${student.name}: ${manager.calculateAverage(student.marks)}% - PASS`);
});

console.log("\n===== CHALLENGE 4: RANK STUDENTS =====");
manager.getStudentsSortedByAverage().forEach((student, index) => {
  console.log(`${index + 1}. ${student.name} - ${manager.calculateAverage(student.marks)}%`);
});

console.log("\n===== TOP STUDENT =====");
const top = manager.findTopStudent();
console.log(`${top.name} - ${manager.calculateAverage(top.marks)}%`);

console.log("\n===== CLASS REPORT =====");
const report = manager.getClassReport();
console.log(`Total students: ${report.totalStudents}`);
console.log(`Students passed: ${report.passed}`);
console.log(`Students failed: ${report.failed}`);
console.log(`Class average: ${report.classAverage}%`);

console.log("\n===== INVALID MARK TEST =====");
const invalid = manager.addMarks("STU-0001", 120);
console.log(invalid.message);
console.log(`Siya's average remains: ${manager.calculateAverage(manager.findStudent("STU-0001").marks)}%`);
