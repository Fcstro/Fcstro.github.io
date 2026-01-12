
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
    emailjs.init("UaWgwYuxDOA5dtpHE"); // public key
})();

// Create notification function
function showNotification(message, type) {
    // Remove existing notification if any
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Set background color based on type
    if (type === 'success') {
        notification.style.backgroundColor = '#4CAF50';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#f44336';
    } else {
        notification.style.backgroundColor = '#2196F3';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

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
    emailjs.send('service_banana', 'template_b8xluse', formData)
        .then(function(response) {
            console.log("Email sent successfully:", response);
            status.textContent = 'Message sent successfully!';
            status.style.color = 'green';
            document.getElementById('contact-form').reset();
            // Reset floating labels
            document.querySelectorAll('.input').forEach(input => {
                input.value = '';
            });
            // Show success notification
            showNotification('Message sent successfully!', 'success');
        }, function(error) {
            console.error("Failed to send email:", error);
            status.textContent = 'Failed to send message. Please try again.';
            status.style.color = 'red';
            // Show error notification
            showNotification('Failed to send message. Please try again.', 'error');
            console.error('EmailJS Error:', error);
        });
});

// Copy email function
function copyEmail() {
    const emailText = 'fcastro02004@gmail.com';
    const tooltip = document.getElementById('email-tooltip');
    
    navigator.clipboard.writeText(emailText).then(function() {
        // Show copied feedback
        tooltip.textContent = 'Copied!';
        tooltip.style.background = '#4CAF50';
        
        // Reset after 2 seconds
        setTimeout(function() {
            tooltip.textContent = 'Click to copy';
            tooltip.style.background = '#333';
        }, 2000);
    }).catch(function(err) {
        console.error('Failed to copy email: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = emailText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        // Show copied feedback
        tooltip.textContent = 'Copied!';
        tooltip.style.background = '#4CAF50';
        
        setTimeout(function() {
            tooltip.textContent = 'Click to copy';
            tooltip.style.background = '#333';
        }, 2000);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Email tooltip hover functionality
    const emailText = document.getElementById('email-text');
    const tooltip = document.getElementById('email-tooltip');
    
    emailText.addEventListener('mouseenter', function() {
        tooltip.style.opacity = '1';
    });
    
    emailText.addEventListener('mouseleave', function() {
        tooltip.style.opacity = '0';
    });
    
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