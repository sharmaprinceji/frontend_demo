
document.addEventListener('DOMContentLoaded', function() {
    
    var form = document.querySelector('.event-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        var eventName = document.getElementById('eventName').value;

        
        var confirmationMessage = 'Thank you for submitting the form! Your event "' + eventName + '" has been registered.';
        alert(confirmationMessage);

        
        form.reset();
    });
});
