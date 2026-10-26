// DAY 2: STUDENT BOOTCAMP MANAGER : TESTING EACH CHALLENGE

// Store all registered students in an array.
const students = [];
let nextStudentNumber = 1;

// Register a student and save their marks.
function registerStudent(name, course = "JavaScript Essentials 2", ...marks) {
  if (typeof name !== "string" || name.trim() === "") {
    console.log("Please enter a valid student name.");
    return;
  }

  if (marks.length === 0) {
    console.log(`Please provide marks for ${name}.`);
    return;
  }

  const validMarks = marks.every(function (mark) {
    return typeof mark === "number" && Number.isFinite(mark) && mark >= 0 && mark <= 100;
  });

  if (!validMarks) {
    console.log(`Invalid marks for ${name}. Marks must be from 0 to 100.`);
    return;
  }

  const student = {
    id: `STU-${String(nextStudentNumber).padStart(4, "0")}`,
    name: name.trim(),
    course: course,
    marks: [...marks]
  };

  students.push(student);
  nextStudentNumber++;

  console.log(`Student ${student.name} registered successfully.`);
}

// Calculate the average of a student's marks.
function calculateAverage(marks) {
  if (!Array.isArray(marks) || marks.length === 0) {
    return 0;
  }

  const total = marks.reduce(function (sum, mark) {
    return sum + mark;
  }, 0);

  const average = total / marks.length;

  return Number(average.toFixed(2));
}

// Find a student using their student ID.
function findStudent(studentId) {
  const student = students.find(function (student) {
    return student.id === studentId;
  });

  if (!student) {
    console.log(`Student ${studentId} was not found.`);
    return;
  }

  console.log("\n===== STUDENT FOUND =====");
  console.log(`Student ID: ${student.id}`);
  console.log(`Name: ${student.name}`);
  console.log(`Course: ${student.course}`);
  console.log(`Average: ${calculateAverage(student.marks)}%`);
}

// Decide whether a student passed or failed.
// Pass mark is 50%.
function getStudentResult(student) {
  const average = calculateAverage(student.marks);

  if (average >= 50) {
    return "PASS";
  } else {
    return "FAIL";
  }
}

// Display each student's average and result.
function displayStudentResults() {
  console.log("\n===== STUDENT RESULTS =====");

  students.forEach(function (student) {
    const average = calculateAverage(student.marks);
    const result = getStudentResult(student);

    console.log(`\nStudent: ${student.name}`);
    console.log(`Student ID: ${student.id}`);
    console.log(`Average: ${average}%`);
    console.log(`Result: ${result}`);
  });
}

// Find the student with the highest average.
function findTopStudent() {
  if (students.length === 0) {
    console.log("There are no students to compare.");
    return;
  }

  let topStudent = students[0];

  students.forEach(function (student) {
    if (
      calculateAverage(student.marks) >
      calculateAverage(topStudent.marks)
    ) {
      topStudent = student;
    }
  });

  console.log("\n===== TOP STUDENT =====");
  console.log(`Name: ${topStudent.name}`);
  console.log(`Student ID: ${topStudent.id}`);
  console.log(`Average: ${calculateAverage(topStudent.marks)}%`);
}

// Create a summary of the class results.
function displayClassReport() {
  if (students.length === 0) {
    console.log("There are no students to include in the report.");
    return;
  }

  const passedStudents = students.filter(function (student) {
    return getStudentResult(student) === "PASS";
  });

  const failedStudents = students.filter(function (student) {
    return getStudentResult(student) === "FAIL";
  });

  const totalAverages = students.reduce(function (total, student) {
    return total + calculateAverage(student.marks);
  }, 0);

  const classAverage = Number(
    (totalAverages / students.length).toFixed(2)
  );

  console.log("\n===== CLASS REPORT =====");
  console.log(`Total students: ${students.length}`);
  console.log(`Students passed: ${passedStudents.length}`);
  console.log(`Students failed: ${failedStudents.length}`);
  console.log(`Class average: ${classAverage}%`);
}

// DAY 1: REGISTER OUR STUDENTS.
registerStudent("Siya Ndlovu", "JavaScript Essentials 2", 78, 84, 91);
registerStudent("Sipho Dlamini", "Web Development", 45, 52);
registerStudent("Steven Jobs", undefined, 88);

// Add one more mark to Siya, as we did on Day 1.
const siya = students.find(function (student) {
  return student.id === "STU-0001";
});

if (siya) {
  siya.marks = [...siya.marks, 95];
  console.log(`A new mark was added for ${siya.name}.`);
}

// DAY 2: TEST EACH CHALLENGE.

// Challenge 1: Find Siya using her student ID.
findStudent("STU-0001");

// Challenge 2: Display everyone's pass or fail result.
displayStudentResults();

// Challenge 3: Find the student with the highest average.
findTopStudent();

// Challenge 4: Display the class report.
displayClassReport();
