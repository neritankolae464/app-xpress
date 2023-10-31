/* Sophisticated Code Example - Complex Data Processing */

// Filename: complexDataProcessing.js

// Define an array of student objects
const students = [
  {
    id: 1,
    name: 'John Doe',
    age: 21,
    marks: [80, 85, 90],
    courses: ['Math', 'Physics', 'Chemistry'],
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 19,
    marks: [92, 95, 88],
    courses: ['Math', 'Biology', 'English'],
  },
  // Add more student objects...
];

// Function to calculate average marks for a student
function calculateAverageMarks(student) {
  const totalMarks = student.marks.reduce((a, b) => a + b, 0);
  return totalMarks / student.marks.length;
}

// Function to find the student with the highest average marks
function findTopScorer(students) {
  let topScorer = null;
  let highestAverageMarks = 0;

  for (const student of students) {
    const averageMarks = calculateAverageMarks(student);
    if (averageMarks > highestAverageMarks) {
      highestAverageMarks = averageMarks;
      topScorer = student;
    }
  }

  return topScorer;
}

// Function to print student details
function printStudentDetails(student) {
  console.log(`ID: ${student.id}`);
  console.log(`Name: ${student.name}`);
  console.log(`Age: ${student.age}`);
  console.log(`Average Marks: ${calculateAverageMarks(student)}`);
  console.log('Courses:');
  for (const course of student.courses) {
    console.log(`- ${course}`);
  }
}

// Find and print the top scorer details
const topScorer = findTopScorer(students);
console.log('Top Scorer:');
printStudentDetails(topScorer);

// More complex data processing functionalities and operations...
// ... (add as per your requirement)

/*
  This code represents a complex data processing scenario.
  It demonstrates the use of objects, arrays, functions, loops, and more.
  The code calculates average marks for each student,
  finds the student with the highest average marks, and prints their details.
  You can add additional functionalities based on your requirements.
*/