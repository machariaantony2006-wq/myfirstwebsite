 document.getElementById("messageButton").addEventListener("click", function() {
    const name = document.getElementById("nameInput").value;

    const greeting = name.trim() === "" 
        ? "Hello, someone!"
        : "Hello, " + name + "!";

    document.getElementById("greeting").textContent = greeting;
});
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

for (let number = 1; number <= 10; number++) {
    console.log(number);
}
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
let number = 1;

while (number <= 10) {
    console.log(number);
    number++;
}
let count = 1;

do {
    console.log(count);
    count++;
} while (count <= 10);
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
