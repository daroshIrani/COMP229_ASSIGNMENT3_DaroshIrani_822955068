// Author : Darosh Irani
// Student ID : 822955068
// Filename : app.js
// Dated : October 2nd, 2022

contactFormbutton.addEventListener('submit', (event) =>{
    event.preventDefault();
    formArray = Array.from(document.querySelectorAll('#contactForm input')).reduce((acc, input)=>({...acc,[input.id]: input.value}), {});
});



