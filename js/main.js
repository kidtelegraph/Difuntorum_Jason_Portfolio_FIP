//Contact Form

'use strict';

function saveDataToLocalStorage(data) {
    const existingData = JSON.parse(localStorage.getItem('contactData')) || [];
    existingData.push(data);
    localStorage.setItem('contactData', JSON.stringify(existingData));
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {};
  
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    saveDataToLocalStorage(data);
  
    alert('Data sent successfully!');
  
    form.reset();
  }
  
  const form = document.querySelector('#contactForm');
  form.addEventListener('submit', handleSubmit);

  (function validationIIFE() {
    document.getElementById('#contactForm').addEventListener('submit', function (event) {
        // Your validation logic goes here
        var nameInput = document.getElementsByName('name')[0];
        var phoneInput = document.getElementsByName('phone')[0];
        var emailInput = document.getElementsByName('email')[0];
        var messageInput = document.getElementsByName('message')[0];

        if (!nameInput.value || !phoneInput.value || !emailInput.value || !messageInput.value) {
            alert('Please fill in all fields');
            event.preventDefault(); // Prevent form submission if validation fails
        }

        // Additional validation logic can be added here
    });
})();