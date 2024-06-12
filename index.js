document.addEventListener("DOMContentLoaded", function() {
    // Function to handle the "Order Now" button click
    document.querySelector(".bttn").addEventListener("click", function(event) {
        event.preventDefault();
        alert("Thank you for your order!");
    });

    // Function to handle contact form submission
    document.querySelector(".contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const name = event.target.querySelector('input[placeholder="Your Name"]').value;
        const email = event.target.querySelector('input[placeholder="Your Email"]').value;
        const message = event.target.querySelector('textarea[placeholder="Your Message"]').value;
        if (name && email && message) {
            alert(`Thank you for contacting us, ${name}. We will get back to you shortly.`);
            event.target.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Function to handle login form submission
    document.querySelector(".login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const username = event.target.querySelector('input[placeholder="Username"]').value;
        const password = event.target.querySelector('input[placeholder="Password"]').value;
        if (username && password) {
            alert(`Welcome back, ${username}!`);
            event.target.reset();
        } else {
            alert("Please enter both username and password.");
        }
    });
});
