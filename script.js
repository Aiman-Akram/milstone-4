var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent form from submitting normally
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var resumeContent = "\n  <h2><b>Editable Resume</b></h2>\n  <h3>Personal Information</h3>\n  <p><b><Name:</b> <span contenteditable =\"true\">".concat(nameElement, "</span></p>\n  <p><b><Email:</b> <span contenteditable =\"true\">").concat(emailElement, "</span></p>\n  <p><b><Phone:</b> <span contenteditable =\"true\">").concat(phoneElement, "</span></p>\n<h3>education</h3>\n  <p<span contenteditable =\"true\">").concat(educationElement, "</p>\n  <h3>Experience</h3>\n  <p<span contenteditable =\"true\">").concat(experienceElement, "</p>\n  <h3>Skills</h3>\n  <p<span contenteditable =\"true\">").concat(skillsElement, "</p>");
        var resumeOutputElement = document.getElementById('resumeOutputElement');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeContent;
        }
        else {
            console.error('the resume output elements are missing');
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
