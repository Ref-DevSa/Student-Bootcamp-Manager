# Student Bootcamp Manager — Day 2

## Project Description

The Student Bootcamp Manager is a beginner-friendly JavaScript project that helps manage student records and academic results.

Day 2 builds on Day 1 by adding student searching, pass or fail results, identifying the top-performing student, and creating a class report.

## Learning Objectives

The purpose of Day 2 is to practise:

- Finding a student using `find()`.
- Making decisions using `if...else`.
- Calculating averages using `reduce()`.
- Displaying records using `forEach()`.
- Filtering students using `filter()`.
- Finding the top-performing student by comparing averages.
- Using template literals to display information.
- Reusing functions to avoid repeating code.

## Project Features

### Challenge 1: Find a Student

The `findStudent()` function searches for a student using their student ID.

For example, `STU-0001` finds Naledi Mokoena's record and displays her details and average.

### Challenge 2: Display Pass or Fail Results

The `getStudentResult()` function checks the student's average.

- **PASS:** The average is 50% or higher.
- **FAIL:** The average is below 50%.

The pass mark for this practice project is 50%.

### Challenge 3: Find the Top Student

The `findTopStudent()` function compares students' averages and identifies the student with the highest average.

The program displays the student's name, ID, and average.

### Challenge 4: Create a Class Report

The `displayClassReport()` function displays:

- Total number of students.
- Number of students who passed.
- Number of students who failed.
- Overall class average.

It uses `filter()` to count students who passed or failed and `reduce()` to calculate the total of their averages.

## Technologies Used

- JavaScript
- Node.js
- Visual Studio Code or another code editor
- Terminal or command prompt

## Project Structure

```text
Student Bootcamp Manager/
└── Day2/
    ├── script.js
    └── README.md
```

## How to Run the Project

1. Open the `Day2` folder in your code editor.
2. Open the terminal in that folder.
3. Run the following command:

   ```bash
   node script.js
   ```

4. Press Enter.
5. Check the terminal output to see the results of all four challenges.

Day 2 runs independently. You do not need to run Day 1 first.

## Sample Student Data

The program uses these example students:

| Student | Initial Marks |
|---|---|
| Naledi Mokoena | 78, 84, 91 |
| Sipho Dlamini | 45, 52 |
| Ayesha Khan | 88 |

An additional mark of 95 is added to Naledi's record before the Day 2 challenges are tested.

## Expected Results

After running the program:

- Naledi's updated average is 87%.
- Sipho's average is 48.5%.
- Ayesha's average is 88%.
- Naledi and Ayesha pass.
- Sipho fails.
- Ayesha is identified as the top student.
- The class average is 74.5%.

## Important JavaScript Concepts

**`find()`** searches for the first item that matches a condition.

**`if...else`** allows the program to make decisions.

**`forEach()`** runs a function for each item in an array.

**`filter()`** creates a new array containing items that match a condition.

**`reduce()`** combines values into a single result, such as a total.

**`toFixed()`** formats a number to a specified number of decimal places.

**Template literals** use backticks and `${}` to insert values into text.

## Conclusion

Day 2 helped me practise searching for students, checking academic results, identifying the top-performing student, and creating a class report.

I learned how JavaScript array methods and conditional statements can be used to organise student information and make decisions based on academic performance.
