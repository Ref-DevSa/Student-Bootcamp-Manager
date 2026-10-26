// DAY 1: STUDENT BOOTCAMP MANAGER : REGISTERING STUDENTS

// 1. We need to store all students in an array.
const students = [];

// This number helps us create a different ID for each student.
let nextStudentNumber = 1; // to keep track of the next student number when registering students.

// 2. Register a student.
// The default course is used if no course is provided. Therefore the default parameter is used also.
// Rest parameters allow the student to have any number of marks.
function registerStudent(name, course = "JavaScript Essentials 2", ...marks) {

  // Check that the student has a name.
  if (typeof name !== "string" || name.trim() === "") {
    console.log("Please enter a valid student name.");
    return;
  }

  // Check that at least one mark has been provided.
  if (marks.length === 0) {
    console.log(`Please provide marks for ${name}.`);
    return;
  }

  // Make sure all marks are numbers between 0 and 100.
  const validMarks = marks.every(function (mark) {
    return typeof mark === "number" && Number.isFinite(mark) && mark >= 0 && mark <= 100;
  });

  if (!validMarks) {
    console.log(`Invalid marks for ${name}. Marks must be from 0 to 100.`);
    return;
  }

  // Use spread syntax to copy the marks into a new array.
  const studentMarks = [...marks];

  // Create a new student record.
  const student = {
    id: `STU-${String(nextStudentNumber).padStart(4, "0")}`,
    name: name.trim(),
    course: course,
    marks: studentMarks
  };

  // Save the student in our students array.
  students.push(student);

  // Move to the next student number.
  nextStudentNumber++;

  console.log(`Student ${student.name} registered successfully.`);
}

// 3. Calculate the average of a student's marks.
function calculateAverage(marks) {

  // Prevent errors if there are no marks.
  if (!Array.isArray(marks) || marks.length === 0) {
    return 0;
  }

  // Add all the marks together.
  const total = marks.reduce(function (sum, mark) {
    return sum + mark;
  }, 0);

  // Divide the total by the number of marks.
  const average = total / marks.length;

  // Round the answer to two decimal places.
  return Number(average.toFixed(2));
}

// 4. Add more marks to an existing student.
function addMarks(studentId, ...newMarks) {

  // Find the student using their ID.
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
    console.log("New marks must be numbers from 0 to 100.");
    return;
  }

  // Spread syntax combines the old marks and new marks.
  student.marks = [...student.marks, ...newMarks];

  console.log(`New marks added for ${student.name}.`);
}

// 5. Display all students and their averages.
function displayStudents() {

  if (students.length === 0) {
    console.log("There are no students registered yet.");
    return;
  }

  console.log("\n===== STUDENT REGISTER =====");

  students.forEach(function (student) {
    const average = calculateAverage(student.marks);

    console.log(`\nStudent ID: ${student.id}`);
    console.log(`Name: ${student.name}`);
    console.log(`Course: ${student.course}`);
    console.log(`Marks: ${student.marks.join(", ")}`);
    console.log(`Average: ${average}`);
  });

  console.log(`\nTotal students: ${students.length}`);
}

// 6. Register some example students to test the application.
registerStudent("Siya Ndlovu", "JavaScript Essentials 2", 78, 84, 91);

registerStudent("Ashley Meyers", "Web Development", 45, 52);

registerStudent("Steven Jobs", undefined, 88);

// 7. Display the registered students.
displayStudents();

// 8. Add another mark to Siya's record.
addMarks("STU-0001", 95);

// 9. Display the students again to check the change.
console.log("\n===== UPDATED STUDENT REGISTER =====");
displayStudents();

// 10. Test what happens when a student has an invalid mark.
registerStudent("Jan Smith", "Web Development", 75, 120);