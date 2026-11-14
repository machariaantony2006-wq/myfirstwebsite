 document.getElementById("messageButton").addEventListener("click", function() {
    const name = document.getElementById("nameInput").value;

    const greeting = name.trim() === "" 
        ? "Hello, someone!"
        : "Hello, " + name + "!";

    document.getElementById("greeting").textContent = greeting;
});