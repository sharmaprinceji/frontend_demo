document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.querySelector('.event-form');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Get the event name input value
        var eventName = document.getElementById('eventName').value;

        // Display a confirmation message
        var confirmationMessage = 'Thank you for submitting the form! Your event "' + eventName + '" has been registered.';
        alert(confirmationMessage);

        // Reset the form fields
        form.reset();
    });
});