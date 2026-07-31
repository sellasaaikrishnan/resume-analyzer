const analyzeBtn = document.getElementById("analyzeBtn");

analyzeBtn.addEventListener("click", () => {

    const file = document.getElementById("resume").files[0];

    if (!file) {
        alert("Please upload your resume.");
        return;
    }

    // Random ATS Score
    const score = Math.floor(Math.random() * 21) + 80;

    document.getElementById("score").textContent = score;

    // Skills Found
    document.getElementById("skillsFound").innerHTML = `
        <li>✅ Java</li>
        <li>✅ Python</li>
        <li>✅ SQL</li>
        <li>✅ HTML</li>
        <li>✅ CSS</li>
    `;

    // Missing Skills
    document.getElementById("missingSkills").innerHTML = `
        <li>❌ Docker</li>
        <li>❌ Git</li>
        <li>❌ REST APIs</li>
        <li>❌ AWS</li>
    `;

    // Suggestions
    document.getElementById("suggestions").innerHTML = `
        <li>💡 Add measurable achievements.</li>
        <li>💡 Include GitHub profile.</li>
        <li>💡 Mention internships or certifications.</li>
        <li>💡 Quantify your project impact.</li>
    `;

});