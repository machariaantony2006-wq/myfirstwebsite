
// ==========================================
// 1. GREETING APP
// ==========================================

document.getElementById("messageButton").addEventListener("click", function() {
    const name = document.getElementById("nameInput").value;

    const greeting = name.trim() === ""
        ? "Hello, someone!"
        : "Hello, " + name + "!";

    document.getElementById("greeting").textContent = greeting;
});


// ==========================================
// 2. STUDENT GRADE CHECKER
// ==========================================

document.getElementById("checkButton").addEventListener("click", function() {
    const marksInput = document.getElementById("marksInput");
    const marks = Number(marksInput.value);
    const result = document.getElementById("result");

    if (marksInput.value.trim() === "") {
        result.textContent = "Please enter your marks.";
    } else if (marks < 0 || marks > 100) {
        result.textContent = "Please enter a mark between 0 and 100.";
    } else if (marks >= 70) {
        result.textContent = "PASS — Grade A";
    } else if (marks >= 60) {
        result.textContent = "PASS — Grade B";
    } else if (marks >= 50) {
        result.textContent = "PASS — Grade C";
    } else {
        result.textContent = "FAIL";
    }
});


// ==========================================
// 3. FOR LOOP
// ==========================================

for (let number = 1; number <= 10; number++) {
    console.log(number);
}


// ==========================================
// 4. MULTIPLICATION TABLE GENERATOR
// ==========================================

document.getElementById("generateButton").addEventListener("click", function() {
    const numberInput = document.getElementById("tableNumber");
    const number = Number(numberInput.value);
    const tableOutput = document.getElementById("tableOutput");

    if (numberInput.value.trim() === "") {
        tableOutput.textContent = "Please enter a number.";
        return;
    }

    let table = "";

    for (let i = 1; i <= 20; i++) {
        table += number + " × " + i + " = " + (number * i) + "<br>";
    }

    tableOutput.innerHTML = table;
});


// ==========================================
// 5. WHILE LOOP
// ==========================================

let number = 1;

while (number <= 10) {
    console.log(number);
    number++;
}


// ==========================================
// 6. DO...WHILE LOOP
// ==========================================

let count = 1;

do {
    console.log(count);
    count++;
} while (count <= 10);


// ==========================================
// 7. ARRAYS
// ==========================================

const students = ["Tony", "Faith", "mark", "Mary", "James"];

console.log(students);
console.log("First student:", students[0]);
console.log("Third student:", students[2]);
console.log("Last student:", students[4]);

students.push("Kevin");
console.log("After adding Kevin:", students);

students.pop();
console.log("After removing the last student:", students);

students.unshift("Peter");
console.log("After adding Peter:", students);

students.shift();
console.log("After removing the first student:", students);

console.log("Total students:", students.length);

for (let i = 0; i < students.length; i++) {
    console.log("Student:", students[i]);
}

students.forEach(function(student) {
    console.log("Welcome, " + student);
});


// ==========================================
// 8. STUDENT MANAGEMENT APP
// ==========================================

const studentNames = [];

function displayStudents() {
    const studentList = document.getElementById("studentList");

    studentList.innerHTML = "";

    document.getElementById("studentCount").textContent =
        "Total students: " + studentNames.length;

    studentNames.forEach(function(student, index) {
        const listItem = document.createElement("li");

        const nameText = document.createElement("span");
        nameText.textContent = student + " ";

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";

        removeButton.addEventListener("click", function() {
            studentNames.splice(index, 1);
            displayStudents();
        });

        listItem.appendChild(nameText);
        listItem.appendChild(removeButton);

        studentList.appendChild(listItem);
    });
}

document.getElementById("addStudentButton").addEventListener("click", function() {
    const nameInput = document.getElementById("studentName");
    const name = nameInput.value.trim();

    if (name === "") {
        alert("Please enter a student name.");
        return;
    }

    const alreadyExists = studentNames.some(function(student) {
        return student.toLowerCase() === name.toLowerCase();
    });

    if (alreadyExists) {
        alert("This student is already registered.");
        return;
    }

    studentNames.push(name);

    displayStudents();

    nameInput.value = "";
});


// ==========================================
// 9. DARK MODE / LIGHT MODE
// ==========================================

const themeToggle = document.getElementById("themeToggle");

// Load the saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "Light Mode";
}

// Switch themes when the button is clicked
themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    }
});


// ==========================================
// 10. JAVASCRIPT OBJECTS - LESSON 11
// ==========================================

const student = {
    name: "Tony",
    age: 20,
    university: "Machakos University",
    course: "Special Needs Education",
    year: 3,

    // Object method
    introduce: function() {
        return "Hello, my name is " + this.name +
            ". I study " + this.course +
            " at " + this.university + ".";
    }
};


// Display the entire object
console.log("Student object:", student);


// Call the object method
console.log(student.introduce());


// Accessing properties using dot notation
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("University:", student.university);
console.log("Course:", student.course);
console.log("Year:", student.year);


// Accessing properties using bracket notation
console.log("Name:", student["name"]);
console.log("Course:", student["course"]);


// Modifying object properties
student.age = 21;
student.year = 4;

console.log("Updated student:", student);


// Adding a new property
student.status = "Active";

console.log("After adding status:", student);


// Removing a property
delete student.age;

console.log("After removing age:", student);
// Loop through student object properties
for (let property in student) {
    console.log(property + ": ", student[property]);
}