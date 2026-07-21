document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let marks = parseFloat(document.getElementById("marks").value);
    let course = document.getElementById("course").value;

    let result = document.getElementById("result");

    if (marks >= 60) {
        result.style.color = "green";
        result.innerHTML =
            "✅ Congratulations " + name +
            "! You are eligible for " + course + ".";
    } else {
        result.style.color = "red";
        result.innerHTML =
            "❌ Sorry " + name +
            ", you are not eligible. Minimum 60% marks required.";
    }

    console.log({
        Name: name,
        Email: email,
        Marks: marks,
        Course: course
    });
});