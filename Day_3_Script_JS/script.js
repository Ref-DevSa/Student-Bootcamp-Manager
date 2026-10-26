// DAY 3: STUDENT BOOTCAMP MANAGER

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
    return typeof mark === "number" &&
      Number.isFinite(mark) &&
      mark >= 0 &&
      mark <= 100;
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

  return Number((total / marks.length).toFixed(2));
}

// Challenge 1: Search for a student by name.
function findStudentByName(searchName) {
  const cleanedSearchName = searchName.trim().toLowerCase();

  const student = students.find(function (student) {
    return student.name.toLowerCase() === cleanedSearchName;
  });

  if (!student) {
    console.log(`No student found with the name "${searchName}".`);
    return;
  }

  console.log("\n===== STUDENT SEARCH RESULT =====");
  console.log(`Name: ${student.name}`);
  console.log(`Student ID: ${student.id}`);
  console.log(`Course: ${student.course}`);
  console.log(`Average: ${calculateAverage(student.marks)}%`);

  return student;
}

// Challenge 2: Add new marks to a student's record.
function addMarks(studentId, ...newMarks) {
  const student = students.find(function (student) {
    return student.id === studentId;
  });

  if (!student) {
    console.log(`Student ${studentId} was not found.`);
    return;
  }

  if (newMarks.length === 0) {
    console.log("Please provide at least one new mark.");
    return;
  }

  const validMarks = newMarks.every(function (mark) {
    return typeof mark === "number" &&
      Number.isFinite(mark) &&
      mark >= 0 &&
      mark <= 100;
  });

  if (!validMarks) {
    console.log("Marks must be numbers from 0 to 100. No marks were added.");
    return;
  }

  student.marks = [...student.marks, ...newMarks];

  console.log(`New marks added for ${student.name}.`);
  console.log(`Updated average: ${calculateAverage(student.marks)}%`);
}

// Challenge 3: Display only students who passed.
function displayPassedStudents() {
  const passedStudents = students.filter(function (student) {
    return calculateAverage(student.marks) >= 50;
  });

  console.log("\n===== STUDENTS WHO PASSED =====");

  if (passedStudents.length === 0) {
    console.log("No students have passed yet.");
    return;
  }

  passedStudents.forEach(function (student) {
    console.log(
      `${student.name}: ${calculateAverage(student.marks)}% - PASS`
    );
  });
}

// Challenge 4: Sort students from highest to lowest average.
function displayStudentsByAverage() {
  const sortedStudents = [...students].sort(function (studentA, studentB) {
    return calculateAverage(studentB.marks) -
      calculateAverage(studentA.marks);
  });

  console.log("\n===== STUDENTS RANKED BY AVERAGE =====");

  sortedStudents.forEach(function (student, index) {
    console.log(
      `${index + 1}. ${student.name} - ${calculateAverage(student.marks)}%`
    );
  });
}

// Register the same example students used on Days 1 and 2.
registerStudent("Siya Ndlovu", "JavaScript Essentials 2", 78, 84, 91);
registerStudent("Ashley Meyers", "Web Development", 45, 52);
registerStudent("Steven Jobs", undefined, 88);

// DAY 3: TEST EACH CHALLENGE.

// Challenge 1: Search using lowercase letters.
findStudentByName("siya ndlovu");

// Challenge 2: Add another mark to Siya.
addMarks("STU-0001", 95);

// Challenge 3: Display students who passed.
displayPassedStudents();

// Challenge 4: Rank all students from highest to lowest average.
displayStudentsByAverage();