document.getElementById('resumeForm')?.addEventListener('submit', function(event){
  event.preventDefault(); // prevent form from submitting normally

  const nameElement=document.getElementById('name') as HTMLInputElement;
  const emailElement=document.getElementById('email') as HTMLInputElement;
  const phoneElement=document.getElementById('phone') as HTMLInputElement;
  const educationElement=document.getElementById('education') as HTMLInputElement;
  const experienceElement=document.getElementById('experience') as HTMLInputElement;
  const skillsElement=document.getElementById('skills') as HTMLInputElement;

if(nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
    var name =nameElement.value;
    const email =emailElement.value;
    const phone =phoneElement.value;
    const education =educationElement.value;
    const experience =experienceElement.value;
    const skills =skillsElement.value;



  const resumeContent = `
  <h2><b>Editable Resume</b></h2>
  <h3>Personal Information</h3>
  <p><b><Name:</b> <span contenteditable ="true">${nameElement}</span></p>
  <p><b><Email:</b> <span contenteditable ="true">${emailElement}</span></p>
  <p><b><Phone:</b> <span contenteditable ="true">${phoneElement}</span></p>
<h3>education</h3>
  <p<span contenteditable ="true">${educationElement}</p>
  <h3>Experience</h3>
  <p<span contenteditable ="true">${experienceElement}</p>
  <h3>Skills</h3>
  <p<span contenteditable ="true">${skillsElement}</p>`;

  const resumeOutputElement = document.getElementById('resumeOutputElement')
  if (resumeOutputElement) {
    resumeOutputElement.innerHTML = resumeContent;
  }else{
    console.error('the resume output elements are missing')
    }
    
    }else{
      console.error('one or more output elements are missing')
    }
  

})
