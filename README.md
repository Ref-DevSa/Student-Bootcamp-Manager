# Student Bootcamp Manager — Shared JavaScript

## Files
- `student-manager.js`: shared student data functions and calculations.
- `dashboard.js`: browser dashboard behavior.
- `index.html`: the web page.
- `challenge-tests.js`: Node.js tests for the challenges.

## Run the challenge tests
Open a terminal in this folder and run:

```bash
node challenge-tests.js
```

## Open the browser dashboard
Open `index.html` in your browser. It loads `student-manager.js` before `dashboard.js`.

## Why the files are separate
The manager file contains the reusable functions. The dashboard file works with the browser page. The challenge test file uses the same functions in Node.js and does not use browser-only features like `document`.

The pass mark is 50%.

I added notes just to demonstrate how preparation for each day went.
