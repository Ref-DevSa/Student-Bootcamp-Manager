# Student Bootcamp Manager — Day 1

## Project Description

The Student Bootcamp Manager is a beginner-friendly JavaScript project designed to manage student information and academic marks.

Day 1 focuses on registering students, storing their marks, calculating their averages, and checking that the information entered is valid.

## Learning Objectives

The purpose of Day 1 is to practise:

- Creating and storing student records using arrays and objects.
- Writing functions to perform specific tasks.
- Using default parameters and rest parameters.
- Using spread syntax to copy arrays.
- Validating student names and marks.
- Calculating averages using `reduce()`.
- Finding students using `find()`.
- Checking information using `every()`.
- Displaying records using `forEach()`.
- Using template literals to display information.
- Generating student IDs using `String()`, `padStart()`, and `++`.

## Project Features

### Challenge 1: Register Students

The `registerStudent()` function creates a new student record containing:

- Student ID.
- Student name.
- Course name.
- Student marks.

Each successfully registered student receives a unique ID, such as `STU-0001`.

The function also checks that the student name is valid and that marks are between 0 and 100.

### Challenge 2: Calculate Student Averages

The `calculateAverage()` function calculates the average of a student's marks.

It uses `reduce()` to add all the marks together and divides the total by the number of marks.

### Challenge 3: Add New Marks

The `addMarks()` function finds an existing student using their student ID and adds new marks to their record.

It checks that the new marks are valid before updating the student's information.

### Challenge 4: Display Student Records

The `displayStudents()` function displays each registered student's:

- Student ID.
- Name.
- Course.
- Marks.
- Average.

It also displays the total number of registered students.

## Technologies Used

- JavaScript
- Node.js
- Visual Studio Code or another code editor
- Terminal or command prompt

## Project Structure

```text id="h3k5jf"
Student Bootcamp Manager/
└── Day1/
    ├── script.js
    └── README.md
```

## How to Run the Project

1. Open the `Day1` folder in your code editor.
2. Open the terminal in that folder.
3. Run the following command:

   ```bash
   node script.js
   ```

4. Press Enter.
5. Check the terminal output to see the registered students, their averages, and the results of the validation checks.

## Sample Student Data

The program registers these example students:

| Student | Course | Initial Marks |
|---|---|---|
| Naledi Mokoena | JavaScript Essentials 2 | 78, 84, 91 |
| Sipho Dlamini | Web Development | 45, 52 |
| Ayesha Khan | Default course | 88 |

The program then adds a mark of 95 to Naledi's record and displays the updated average.

It also attempts to register another student with an invalid mark of 120 to demonstrate validation.

## Expected Results

After running the program:

- Naledi, Sipho, and Ayesha are registered.
- Student IDs are generated automatically.
- Naledi's initial average is 84.33%.
- Naledi's updated average after adding 95 is 87%.
- Ayesha receives the default course name because `undefined` is passed for the course parameter.
- The invalid mark of 120 is rejected.

## Important JavaScript Concepts

**Arrays** store multiple student records.

**Objects** store related information about one student.

**Functions** organise code into reusable tasks.

**Default parameters** provide a value when an argument is not supplied.

**Rest parameters (`...marks`)** allow a function to accept multiple marks.

**Spread syntax (`...`)** copies or combines array items.

**`reduce()`** adds the marks together to calculate a total.

**`every()`** checks whether all marks meet the validation rules.

**`find()`** searches for a student who matches a condition.

**`forEach()`** processes each student in the array.

**Template literals** use backticks and `${}` to insert values into text.

## Conclusion

Day 1 helped me understand how to create student records, store marks, calculate averages, and validate information using JavaScript.

I learned how functions and array methods can make a program easier to organise and reuse. These concepts are useful when building real-world applications such as student management systems and academic result portals.