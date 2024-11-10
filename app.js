function addField(containerId, className) {
    var container = document.getElementById(containerId);
    if (container) {
        var newField = document.createElement("input");
        newField.type = "text";
        newField.className = className;
        newField.placeholder = "Enter additional ".concat(className);
        newField.style.marginTop = "5px";
        newField.style.width = "100%";
        newField.style.padding = "8px";
        newField.style.border = "1px solid #ccc";
        newField.style.borderRadius = "4px";
        container.appendChild(newField);
        container.appendChild(document.createElement("br"));
    }
}
function generateResume() {
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    document.getElementById("resumePreview").style.display = "block";
    document.getElementById("previewName").innerText = name;
    document.getElementById("previewEmail").innerText = "Email: " + email;
    document.getElementById("previewPhone").innerText = "Phone: " + phone;
    document.getElementById("previewAddress").innerText = "Address: " + address;
    var educationEntries = Array.from(document.getElementsByClassName("education"));
    var skillsEntries = Array.from(document.getElementsByClassName("skill"));
    var experienceEntries = Array.from(document.getElementsByClassName("experience"));
    var previewEducation = document.getElementById("previewEducation");
    previewEducation.innerHTML = "";
    educationEntries.forEach(function (entry) {
        var p = document.createElement("p");
        p.innerText = entry.value;
        previewEducation.appendChild(p);
    });
    var previewSkills = document.getElementById("previewSkills");
    previewSkills.innerHTML = "";
    skillsEntries.forEach(function (entry) {
        var p = document.createElement("p");
        p.innerText = entry.value;
        previewSkills.appendChild(p);
    });
    var previewExperience = document.getElementById("previewExperience");
    previewExperience.innerHTML = "";
    experienceEntries.forEach(function (entry) {
        var p = document.createElement("p");
        p.innerText = entry.value;
        previewExperience.appendChild(p);
    });
}
function downloadPDF() {
    var element = document.getElementById("resumePreview");
    var options = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(options).from(element).save();
}
