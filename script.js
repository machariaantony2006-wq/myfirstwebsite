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