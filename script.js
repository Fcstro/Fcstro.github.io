document.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY === 0) {
        header.style.display = "block"; // Show header when at the top
    } else {
        header.style.display = "none"; // Hide header when scrolling down
    }
});

// Add smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute("href").substring(1); // Get the target ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth", // Smooth scrolling
                block: "start" // Align to the top of the target
            });
        }
    });
});
 // Initialize EmailJS with your User ID
 (function() {
    emailjs.init("1RFR0DddZI3A5oN3Z"); // public key
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const status = document.getElementById('form-status');
    status.textContent = 'Sending...';
    status.style.color = 'blue';
    
    // Get current time
    const now = new Date();
    const timeString = now.toLocaleString();
    
    // Get form values - matching your template parameters
    const formData = {
        title: document.getElementById('title').value,
        name: document.getElementById('name').value,
        time: timeString,
        message: document.getElementById('message').value,
        email: document.getElementById('email').value
    };
    
    // Send email
    emailjs.send('service_g1ucldl', 'template_b8xluse', formData)
        .then(function(response) {
            status.textContent = 'Message sent successfully!';
            status.style.color = 'green';
            document.getElementById('contact-form').reset();
            alert('Your message has been sent successfully!');
        }, function(error) {
            status.textContent = 'Failed to send message. Please try again.';
            status.style.color = 'red';
            alert('Failed to send your message. Please try again later.');
            console.error('EmailJS Error:', error);
        });
});