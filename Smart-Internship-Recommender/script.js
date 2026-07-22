function recommendInternship() {

    const name = document.getElementById("name").value;
    const skill = document.getElementById("skill").value;
    const interest = document.getElementById("interest").value;
    const result = document.getElementById("result");

    if (name === "" || skill === "" || interest === "") {
        alert("Please fill all fields.");
        return;
    }

    let recommendation = "";

    if (skill === "Python" && interest === "AI") {
        recommendation = "🤖 AI & Machine Learning Internship";
    } else if (skill === "Machine Learning") {
        recommendation = "🧠 Machine Learning Internship";
    } else if (skill === "Data Science") {
        recommendation = "📊 Data Science Internship";
    } else if (skill === "Web Development") {
        recommendation = "💻 Frontend Web Development Internship";
    } else if (skill === "Java") {
        recommendation = "☕ Java Developer Internship";
    } else {
        recommendation = "🚀 Software Development Internship";
    }

    result.style.display = "block";

    result.innerHTML = `
        <div style="text-align:left;">
            <h2>🎉 Welcome, ${name}</h2>
            <hr><br>

            <p><b>💡 Skill:</b> ${skill}</p>
            <p><b>🎯 Interest:</b> ${interest}</p>

            <br>

            <h3 style="color:#4f46e5;">Recommended Internship</h3>

            <div style="
                margin-top:10px;
                padding:15px;
                background:#ffffff;
                border-left:5px solid #4f46e5;
                border-radius:8px;
            ">
                ${recommendation}
            </div>

            <br>

            <p>✅ Best Match based on your profile.</p>
        </div>
    `;
}