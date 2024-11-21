// Course details for dynamic loading
const courseDetails = {
    'FirstAid': {
      fee: 1500,
      content: 'CPR, Emergency Management, Wounds, etc.'
    },
    'Sewing': {
      fee: 1500,
      content: 'Alterations, Button Stitching, Machine Usage, etc.'
    },
    'Landscaping': {
      fee: 1500,
      content: 'Garden Maintenance, Planting, Pruning, etc.'
    },
    'LifeSkills': {
      fee: 1500,
      content: 'Communication, Decision Making, Problem Solving, etc.'
    },
    'ChildMinding': {
      fee: 750,
      content: 'Child Care, Basic First Aid for Children, Nutrition, etc.'
    },
    'Cooking': {
      fee: 750,
      content: 'Food Preparation, Nutrition, Hygiene, etc.'
    },
    'GardenMaintenance': {
      fee: 750,
      content: 'Plant Care, Lawn Maintenance, Watering, etc.'
    }
  };
  
  // Dynamically load course details based on the URL parameter
  function loadCourseDetails() {
    const params = new URLSearchParams(window.location.search);
    const courseName = params.get('course');
    const course = courseDetails[courseName];
  
    if (course) {
      const courseDetailsSection = document.getElementById('course-details');
      courseDetailsSection.innerHTML = `
        <h2>${courseName.replace(/([A-Z])/g, ' $1').trim()}</h2>
        <p>Fee: R${course.fee}</p>
        <p>Content: ${course.content}</p>
      `;
    }
  }
  
  // Fee Calculation Logic
  function calculateFees() {
    let totalFee = 0;
    const form = document.getElementById('fee-form');
    const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
  
    checkboxes.forEach((checkbox) => {
      totalFee += parseFloat(checkbox.value);
    });
  
    // Apply discount logic
    let discount = 0;
    if (checkboxes.length === 2) discount = 0.05;
    else if (checkboxes.length === 3) discount = 0.1;
    else if (checkboxes.length > 3) discount = 0.15;
  
    totalFee = totalFee * (1 - discount);
  
    // Add VAT (15%)
    const totalWithVAT = totalFee * 1.15;
  
    // Display the result
    document.getElementById('total-fee').innerText = `Total Fee: R${totalWithVAT.toFixed(2)}`;
  }
  
  // Initialize the page when the course details page is loaded
  if (window.location.pathname.includes('course_details.html')) {
    loadCourseDetails();
  }
  