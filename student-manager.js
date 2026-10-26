// Student data functions that can be viewed on the browser and Node.js for testing.
(function () {
  function createStudentManager() {
    const students = [];
    let nextStudentNumber = 1;

    function registerStudent(name, course = "JavaScript Essentials 2", ...marks) {
      if (typeof name !== "string" || name.trim() === "") {
        return { success: false, message: "Please enter a valid student name." };
      }
      if (marks.length === 0) {
        return { success: false, message: `Please provide marks for ${name}.` };
      }
      const valid = marks.every(mark =>
        typeof mark === "number" && Number.isFinite(mark) && mark >= 0 && mark <= 100
      );
      if (!valid) {
        return { success: false, message: `Invalid marks for ${name}. Marks must be from 0 to 100.` };
      }
      const student = {
        id: `STU-${String(nextStudentNumber).padStart(4, "0")}`,
        name: name.trim(),
        course,
        marks: [...marks]
      };
      students.push(student);
      nextStudentNumber++;
      return { success: true, message: `Student ${student.name} registered successfully.`, student };
    }

    function calculateAverage(marks) {
      if (!Array.isArray(marks) || marks.length === 0) return 0;
      const total = marks.reduce((sum, mark) => sum + mark, 0);
      return Number((total / marks.length).toFixed(2));
    }

    function findStudent(studentId) {
      return students.find(student => student.id === studentId);
    }

    function findStudentByName(searchName) {
      if (typeof searchName !== "string") return undefined;
      const cleanedName = searchName.trim().toLowerCase();
      return students.find(student => student.name.toLowerCase() === cleanedName);
    }

    function addMarks(studentId, ...newMarks) {
      const student = findStudent(studentId);
      if (!student) return { success: false, message: `Student ${studentId} was not found.` };
      if (newMarks.length === 0) return { success: false, message: "Please provide at least one new mark." };
      const valid = newMarks.every(mark =>
        typeof mark === "number" && Number.isFinite(mark) && mark >= 0 && mark <= 100
      );
      if (!valid) {
        return { success: false, message: "Marks must be numbers from 0 to 100. No marks were added." };
      }
      student.marks = [...student.marks, ...newMarks];
      return { success: true, message: `New marks added for ${student.name}.`, student };
    }

    function getStudentResult(student) {
      return calculateAverage(student.marks) >= 50 ? "PASS" : "FAIL";
    }

    function findTopStudent() {
      if (students.length === 0) return undefined;
      let topStudent = students[0];
      students.forEach(student => {
        if (calculateAverage(student.marks) > calculateAverage(topStudent.marks)) {
          topStudent = student;
        }
      });
      return topStudent;
    }

    function getPassedStudents() {
      return students.filter(student => getStudentResult(student) === "PASS");
    }

    function getFailedStudents() {
      return students.filter(student => getStudentResult(student) === "FAIL");
    }

    function getClassReport() {
      const totalAverages = students.reduce(
        (total, student) => total + calculateAverage(student.marks), 0
      );
      return {
        totalStudents: students.length,
        passed: getPassedStudents().length,
        failed: getFailedStudents().length,
        classAverage: students.length
          ? Number((totalAverages / students.length).toFixed(2))
          : 0
      };
    }

    function getStudentsSortedByAverage() {
      return [...students].sort((a, b) =>
        calculateAverage(b.marks) - calculateAverage(a.marks)
      );
    }

    function getStudents() {
      return [...students];
    }

    return {
      registerStudent, calculateAverage, findStudent, findStudentByName,
      addMarks, getStudentResult, findTopStudent, getPassedStudents,
      getFailedStudents, getClassReport, getStudentsSortedByAverage, getStudents
    };
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { createStudentManager };
  }
  if (typeof window !== "undefined") {
    window.StudentManager = { createStudentManager };
  }
})();
