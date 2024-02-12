document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.container');

     form.addEventListener('submit', function(event) {
        event.preventDefault();  
        
         var eventName = document.getElementById('eventName').value;

         var confirmationMessage = 'Thank you for submitting the form! Your event "' + eventName + '" has been registered.';
        alert(confirmationMessage);

         form.reset();
    });
});


flatpickr("#startDate", {
    enableTime: true,
    dateFormat: "d-m-Y h:i K",
    defaultDate: null,
});

flatpickr("#endDate", {
    enableTime: true,
    dateFormat: "d-m-Y h:i K",
    defaultDate: null,
});


function openCalendar(inputId) {
    var input = document.getElementById(inputId);
    input.click();
}


document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.container');

     form.addEventListener('submit', function(event) {
        event.preventDefault();  
        
         var eventName = document.getElementById('eventName').value;

         var confirmationMessage = 'Thank you for submitting the form! Your event "' + eventName + '" has been registered.';
        alert(confirmationMessage);

         form.reset();
    });
});


flatpickr("#startDate", {
    enableTime: true,
    dateFormat: "d-m-Y h:i K",
    defaultDate: null,
});

flatpickr("#endDate", {
    enableTime: true,
    dateFormat: "d-m-Y h:i K",
    defaultDate: null,
});


function openCalendar(inputId) {
    var input = document.getElementById(inputId);
    input.click();
}


