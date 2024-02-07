document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.conatiner');

     form.addEventListener('submit', function(event) {
        event.preventDefault();  
        
         var eventName = document.getElementById('eventName').value;

         var confirmationMessage = 'Thank you for submitting the form! Your event "' + eventName + '" has been registered.';
        alert(confirmationMessage);

         form.reset();
    });
});
