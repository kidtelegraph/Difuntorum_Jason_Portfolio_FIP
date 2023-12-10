import { sayHello } from './modules/module1.js';
import { displaySkills } from './modules/module2.js';

sayHello("JM Visuals here!");

//GSAP import
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

//Register the plugins
gsap.registerPlugin(ScrollTrigger);


//Function to animate elements when they enter the viewport
function animateOnScroll() {
    gsap.utils.toArray('.animate-on-scroll').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: true,
            },
        });
    });
}

const mySkills = ['HTML', 'CSS', 'JavaScript', 'SCSS', 'Adobe Illustrator', 'Cinema4D', 'Adobe Photoshop', 'Adobe Premiere Pro', 'Adobe After Effects'];
displaySkills(mySkills);

//Call the ScrollTrigger function
animateOnScroll();


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
    document.querySelector('#contactForm').addEventListener('submit', function (event) {
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