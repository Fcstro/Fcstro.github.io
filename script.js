
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
    
    console.log("Sending email with data:", formData);
    // Send email
    emailjs.send('service_g1ucldl', 'template_b8xluse', formData)
        .then(function(response) {
            console.log("Email sent successfully:", response);
            status.textContent = 'Message sent successfully!';
            status.style.color = 'green';
            document.getElementById('contact-form').reset();
            alert('Your message has been sent successfully!');
        }, function(error) {
            console.error("Failed to send email:", error);
            status.textContent = 'Failed to send message. Please try again.';
            status.style.color = 'red';
            alert('Failed to send your message. Please try again later.');
            console.error('EmailJS Error:', error);
        });
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileSideNav = document.querySelector('.mobile-side-nav');
    const closeBtn = document.querySelector('.close-btn');
    
    mobileMenuToggle.addEventListener('click', function() {
      mobileSideNav.classList.add('open');
    });
    
    closeBtn.addEventListener('click', function() {
      mobileSideNav.classList.remove('open');
    });
    
    // Close menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-side-nav a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileSideNav.classList.remove('open');
      });
    });
    
    // Smooth scrolling for all snap links
    document.querySelectorAll('.snap-link').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });