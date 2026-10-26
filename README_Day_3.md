# Student Bootcamp Manager — Day 3

## Project Description

The Student Bootcamp Manager is a beginner-friendly JavaScript project for managing student records and marks.

Day 3 builds on the concepts learned in Days 1 and 2. It allows us to search for students, add new marks, display students who passed, and rank students according to their averages.

## Learning Objectives

The purpose of Day 3 is to practise:

- Finding students by name using `find()`.
- Cleaning text using `trim()` and `toLowerCase()`.
- Adding marks using rest parameters and spread syntax.
- Filtering students using `filter()`.
- Sorting students using `sort()`.
- Calculating averages using `reduce()`.
- Reusing functions to avoid repeating code.
- Displaying results using `console.log()` and template literals.

## Project Features

### Challenge 1: Search for a Student

The `findStudentByName()` function searches for a student by name.

It ignores differences in uppercase and lowercase letters, so searching for `naledi mokoena` will find `Naledi Mokoena`.

### Challenge 2: Add New Marks

The `addMarks()` function adds new marks to an existing student's record using their student ID.

It checks that the marks are numbers between 0 and 100. If any mark is invalid, the new marks are not added.

The student's average is recalculated after valid marks are added.

### Challenge 3: Display Students Who Passed

The `displayPassedStudents()` function uses `filter()` to display only students whose average is at least 50%.

For this project, 50% is the pass mark.

### Challenge 4: Rank Students by Average

The `displayStudentsByAverage()` function sorts students from the highest average to the lowest average.

It uses a copy of the student array so that the original array order is not changed by sorting.

## Technologies Used

- JavaScript
- Node.js
- Visual Studio Code or another code editor
- Terminal or command prompt

## Project Structure

```text
Student Bootcamp Manager/
└── Day3/
    ├── script.js
    └── README.md
```

## How to Run the Project

1. Open the `Day3` folder in your code editor.
2. Open the terminal in that folder.
3. Run the following command:

   ```powershell
   node script.js
   ```

4. Press Enter.
5. Check the terminal output to see the results of all four challenges.

You do not need to run Days 1 or 2 first because Day 3 has its own student data and functions.

## Sample Student Data

The program uses these example students:

| Student | Initial Marks |
|---|---|
| Naledi Mokoena | 78, 84, 91 |
| Sipho Dlamini | 45, 52 |
| Ayesha Khan | 88 |

An additional mark of 95 is added to Naledi's record when the program runs.

## Expected Results

After running the program:

- Naledi's updated average is 87%.
- Sipho's average is 48.5%.
- Ayesha's average is 88%.
- Naledi and Ayesha pass because their averages are at least 50%.
- Ayesha is ranked first because she has the highest average.

## Important JavaScript Concepts

**`find()`** searches for the first item that matches a condition.

**`filter()`** creates a new array containing items that match a condition.

**`sort()`** arranges items in a particular order.

**`reduce()`** combines array values into a single result, such as a total.

**Spread syntax (`...`)** copies or combines array items.

**Template literals** use backticks and `${}` to insert values into text.

## Conclusion

Day 3 helped me practise searching, updating, filtering, and sorting student records using JavaScript. It also showed me how to reuse functions and validate information before updating a student's record.

These concepts are useful in real-world applications such as student management systems, school result portals, and other applications that store and organise records.