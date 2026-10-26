// Browser dashboard: uses the functions in student-manager.js.
const manager = StudentManager.createStudentManager();

manager.registerStudent("Siya Ndlovu", "JavaScript Essentials 2", 78, 84, 91);
manager.registerStudent("Ashley Meyers", "Web Development", 45, 52);
manager.registerStudent("Steven Jobs", undefined, 88);
manager.addMarks("STU-0001", 95);

function displayStudentsInBrowser(studentList) {
  const table = document.getElementById("students-table");
  if (studentList.length === 0) {
    table.innerHTML = '<tr><td colspan="6">No students found.</td></tr>';
    return;
  }

  table.innerHTML = studentList.map(student => {
    const average = manager.calculateAverage(student.marks);
    const result = manager.getStudentResult(student);
    const resultClass = result === "PASS" ? "pass" : "fail";
    return `
      <tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.course}</td>
        <td>${student.marks.join(", ")}</td>
        <td>${average}%</td>
        <td class="${resultClass}">${result}</td>
      </tr>
    `;
  }).join("");
}

document.getElementById("search-button").addEventListener("click", function () {
  const searchName = document.getElementById("student-search").value.trim();
  if (searchName === "") {
    displayStudentsInBrowser(manager.getStudents());
    document.getElementById("search-message").textContent = "Enter a student name to search.";
    return;
  }
  const student = manager.findStudentByName(searchName);
  displayStudentsInBrowser(student ? [student] : []);
  document.getElementById("search-message").textContent = student
    ? `Found ${student.name}.`
    : `No student found with the name "${searchName}".`;
});

document.getElementById("show-all-button").addEventListener("click", function () {
  displayStudentsInBrowser(manager.getStudents());
  document.getElementById("student-search").value = "";
  document.getElementById("search-message").textContent = "";
});

document.getElementById("report-button").addEventListener("click", function () {
  const report = manager.getClassReport();
  document.getElementById("report-output").textContent =
    `Total students: ${report.totalStudents}\n` +
    `Students passed: ${report.passed}\n` +
    `Students failed: ${report.failed}\n` +
    `Class average: ${report.classAverage}%`;
});

document.getElementById("top-student-button").addEventListener("click", function () {
  const topStudent = manager.findTopStudent();
  if (!topStudent) {
    document.getElementById("report-output").textContent = "There are no students registered yet.";
    return;
  }
  document.getElementById("report-output").textContent =
    `Top student: ${topStudent.name}\n` +
    `Student ID: ${topStudent.id}\n` +
    `Average: ${manager.calculateAverage(topStudent.marks)}%`;
});

displayStudentsInBrowser(manager.getStudents());
