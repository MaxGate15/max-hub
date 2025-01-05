// Function to add admissions
function addAdmission(event) {
    event.preventDefault();
    const studentName = document.getElementById('student-name').value;
    const parentName = document.getElementById('parent-name').value;
    const parentOccupation = document.getElementById('parent-occupation').value;
    const contact = document.getElementById('contact').value;
    const homeTown = document.getElementById('home-town').value;
    const religion = document.getElementById('religion').value;
    const studentClass = document.getElementById('student-class').value;
  
    const list = document.getElementById('students-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${studentName}, Parent: ${parentName}, Contact: ${contact}, Class: ${studentClass}`;
    list.appendChild(listItem);
  
    document.getElementById('admission-form').reset();
  }
  
  // Function to add fees
  function addFees(event) {
    event.preventDefault();
    const feeStudentName = document.getElementById('fee-student-name').value;
    const feeAmount = document.getElementById('fee-amount').value;
  
    const list = document.getElementById('fees-record-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${feeStudentName} paid ${feeAmount} amount`;
    list.appendChild(listItem);
  
    document.getElementById('fees-form').reset();
  }
  
  // Function to add teachers
  function addTeacher(event) {
    event.preventDefault();
    const teacherName = document.getElementById('teacher-name').value;
    const teacherClass = document.getElementById('teacher-class').value;
  
    const list = document.getElementById('teacher-record-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${teacherName}, Assigned to: ${teacherClass}`;
    list.appendChild(listItem);
  
    document.getElementById('teacher-form').reset();
  }
  
  // Function to add grades
  function addGrade(event) {
    event.preventDefault();
    const gradeStudentName = document.getElementById('grade-student-name').value;
    const subject = document.getElementById('subject').value;
    const score = document.getElementById('score').value;
  
    const list = document.getElementById('grades-record-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${gradeStudentName}, Subject: ${subject}, Score: ${score}`;
    list.appendChild(listItem);
  
    document.getElementById('grades-form').reset();
  }
  
  // Function to add results
  function addResult(event) {
    event.preventDefault();
    const resultStudentName = document.getElementById('result-student-name').value;
    const subject = document.getElementById('result-subject').value;
    const score = document.getElementById('result-score').value;
  
    const list = document.getElementById('results-record-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${resultStudentName}, Subject: ${subject}, Score: ${score}`;
    list.appendChild(listItem);
  
    document.getElementById('results-form').reset();
  }
  
  // Function to show sections
  function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      section.style.display = 'none';
    });
  
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
  }
  
  // Function to print sections
  function printSection(sectionId) {
    const section = document.getElementById(sectionId);
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write(section.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  }
  