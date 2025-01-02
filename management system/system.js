// JavaScript for Navigation Interactivity
document.getElementById('home-link').addEventListener('click', () => {
    document.getElementById('content').innerHTML = `
      <h2>Welcome to the Country Management System</h2>
      <p>Select a module from the navigation menu to get started.</p>
    `;
  });
  
  document.getElementById('governance-link').addEventListener('click', () => {
    document.getElementById('content').innerHTML = `
      <h2>Governance Module</h2>
      <p>Manage political systems, departments, and public policies here.</p>
    `;
  });
  
  document.getElementById('services-link').addEventListener('click', () => {
    document.getElementById('content').innerHTML = `
      <h2>Public Services Module</h2>
      <p>Access and manage public services like education, healthcare, and more.</p>
    `;
  });
  
  document.getElementById('economy-link').addEventListener('click', () => {
    document.getElementById('content').innerHTML = `
      <h2>Economy Module</h2>
      <p>Monitor and manage economic activities such as budgeting and trade.</p>
    `;
  });
  
  document.getElementById('social-link').addEventListener('click', () => {
    document.getElementById('content').innerHTML = `
      <h2>Social Programs Module</h2>
      <p>View and manage social welfare and equality programs.</p>
    `;
  });
  