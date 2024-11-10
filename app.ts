declare const html2pdf: any;

function addField(containerId: string, className: string): void {
    const container = document.getElementById(containerId);
    if (container) {
        const newField = document.createElement("input");
        newField.type = "text";
        newField.className = className;
        newField.placeholder = `Enter additional ${className}`;
        newField.style.marginTop = "5px";
        newField.style.width = "100%";
        newField.style.padding = "8px";
        newField.style.border = "1px solid #ccc";
        newField.style.borderRadius = "4px";
        container.appendChild(newField);
        container.appendChild(document.createElement("br"));
    }
}

function generateResume(): void {
    // Get form values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;

    document.getElementById("resumePreview")!.style.display = "block";
    document.getElementById("previewName")!.innerText = name;
    document.getElementById("previewEmail")!.innerText = "Email: " + email;
    document.getElementById("previewPhone")!.innerText = "Phone: " + phone;
    document.getElementById("previewAddress")!.innerText = "Address: " + address;

    const educationEntries = Array.from(document.getElementsByClassName("education") as HTMLCollectionOf<HTMLInputElement>);
    const skillsEntries = Array.from(document.getElementsByClassName("skill") as HTMLCollectionOf<HTMLInputElement>);
    const experienceEntries = Array.from(document.getElementsByClassName("experience") as HTMLCollectionOf<HTMLInputElement>);

    const previewEducation = document.getElementById("previewEducation");
    previewEducation!.innerHTML = "";
    educationEntries.forEach(entry => {
        const p = document.createElement("p");
        p.innerText = entry.value;
        previewEducation!.appendChild(p);
    });

    const previewSkills = document.getElementById("previewSkills");
    previewSkills!.innerHTML = "";
    skillsEntries.forEach(entry => {
        const p = document.createElement("p");
        p.innerText = entry.value;
        previewSkills!.appendChild(p);
    });

    const previewExperience = document.getElementById("previewExperience");
    previewExperience!.innerHTML = "";
    experienceEntries.forEach(entry => {
        const p = document.createElement("p");
        p.innerText = entry.value;
        previewExperience!.appendChild(p);
    });
}

function downloadPDF(): void {
    const element = document.getElementById("resumePreview");
    const options = {
        margin:       0.5,
        filename:     'resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
}
